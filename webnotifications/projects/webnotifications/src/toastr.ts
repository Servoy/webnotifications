import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
import { ActiveToast, IndividualConfig, ToastrService } from '@servoy/ngx-toastr';
import { ServoyToast, ServoyIndividualConfig } from './servoytoastr';


interface ToastrOptions {
	showDuration: number;
	hideDuration: number;
	positionClass: string;
	closeButton: boolean;
	closeHtml: string;
	newestOnTop: boolean;
	showEasing: string;
	hideEasing: string;
	showMethod: string;
	hideMethod: string;
	progressBar: boolean;
	timeOut: number;
	toastComponent: any;
	actionButton: boolean;
	actionButtonText: string;
	extendedTimeOut: number;
	disableTimeOut: boolean;
	enableHtml: boolean;
	progressAnimation: string;
	toastClass: string;
	titleClass: string;
	messageClass: string;
	tapToDismiss: boolean;
	onActivateTick: boolean;
}

@Injectable()
export class ServoyToastrService {

    toastrsCreated = 1;
	toastrsIDs: Array<[number, any]> = [];

    constructor(private toastr: ToastrService, private servoyService: ServoyPublicService) {}

	/**
	 * Shows an info toastr with the given message, optional title and options
	 *
	 * @param message the message to show
	 * @param title the optional title shown above the message
	 * @param options toastrOptions object with additional options
	 * @param toastrId optional id that can be used to clear this specific toastr via clearToastr
	 * @param {Function} [onClick] onClick optional callback function when the toastr is clicked
	 * 
	 * @example <pre>
	 * plugins.webnotificationsToastr.info('Hey, Servoy World is coming up in May!', 'Servoy World', null, 'sampleID', onClickDialog);
	 * 
	 * function onClick(toastrId) {
	 * 	application.output('toastrId');
	 * }
	 * </pre>
	 */
	public info(message: string, title: string, options: ToastrOptions, toastrId: any, onClick: any) {
		const infoToast = this.toastr.info(message, title, this.convertOptions(options));
		this.commonActions(infoToast, toastrId, onClick);
	}

	/**
	 * Shows a warning toastr with the given message, optional title and options
	 *
	 * @param message the message to show
	 * @param title the optional title shown above the message
	 * @param options toastrOptions object with additional options
	 * @param toastrId optional id that can be used to clear this specific toastr via clearToastr
	 * @param {Function} [onClick] onClick optional callback function when the toastr is clicked
	 * 
	 * @example <pre>
	 * plugins.webnotificationsToastr.warning('Hey, Servoy World is coming up in May!', 'Servoy World', null, 'sampleID', onClickDialog);
	 * 
	 * function onClick(toastrId) {
	 * 	application.output('toastrId');
	 * }
	 * </pre>
	 */
	public warning(message: string, title: string, options: ToastrOptions, toastrId: any, onClick: any) {
		const infoToast = this.toastr.warning(message, title, this.convertOptions(options));
		this.commonActions(infoToast, toastrId, onClick);
	}

	/**
	 * Shows an error toastr with the given message, optional title and options
	 *
	 * @param message the message to show
	 * @param title the optional title shown above the message
	 * @param options toastrOptions object with additional options
	 * @param toastrId optional id that can be used to clear this specific toastr via clearToastr
	 * @param {Function} [onClick] onClick optional callback function when the toastr is clicked
	 * 
	 * @example <pre>
	 * plugins.webnotificationsToastr.error('Oh no. Something went wrong. It will be OK', 'Error', null, 'sampleID', onClickDialog);
	 * 
	 * function onClick(toastrId) {
	 * 	application.output('toastrId');
	 * }
	 * </pre>
	 */
	public error(message: string, title: string, options: ToastrOptions, toastrId: any, onClick: any) {
		const infoToast = this.toastr.error(message, title, this.convertOptions(options));
		this.commonActions(infoToast, toastrId, onClick);
	}

	/**
	 * Shows a success toastr with the given message, optional title and options
	 *
	 * @param message the message to show
	 * @param title the optional title shown above the message
	 * @param options toastrOptions object with additional options
	 * @param toastrId optional id that can be used to clear this specific toastr via clearToastr
	 * @param {Function} [onClick] onClick optional callback function when the toastr is clicked
	 * 
	 * @example <pre>
	 * plugins.webnotificationsToastr.success('Hey, Servoy World is coming up in May!', 'Servoy World', null, 'sampleID', onClickDialog);
	 * 
	 * function onClick(toastrId) {
	 * 	application.output('toastrId');
	 * }
	 * </pre>
	 */
	public success(message: string, title: string, options: ToastrOptions, toastrId: any, onClick: Function) {
		const infoToast = this.toastr.success(message, title, this.convertOptions(options));
		this.commonActions(infoToast, toastrId, onClick);
	}

	public clear() {
		this.toastrsIDs = [];
		this.toastr.clear();
	}

	public clearToastr(toastrId: any) {
		const toastrToClear = this.toastrsIDs.find(t => t[1] === toastrId);
		if (toastrToClear) {
			this.toastr.clear(toastrToClear[0]);
		}
	}

	public setGlobalOptions(options: ToastrOptions) {
		this.updateConfig(options, this.toastr.toastrConfig);
	}

	public createToastrOptions() {
		return {};
	}

	private commonActions(infoToast: ActiveToast<any>, toastrId: any,onClick: any) {
		toastrId = toastrId || ('toastr_' + (this.toastrsCreated++));
		this.toastrsIDs.push([infoToast.toastId, toastrId]);
		this.toastr.toasts.push(infoToast);

		infoToast.onHidden.subscribe(() => {
			this.toastr.toasts = this.toastr.toasts.filter(t => t.toastId !== infoToast.toastId);
			this.toastrsIDs = this.toastrsIDs.filter(tID => tID[0] !== infoToast.toastId);
		});

		if (onClick) {
			
			infoToast.onTap.subscribe(() => {
				this.servoyService.executeInlineScript(onClick.formname, onClick.script, [toastrId]);
			});

			infoToast.onAction.subscribe((action: any) => {
				this.servoyService.executeInlineScript(onClick.formname, onClick.script, [toastrId, action]);
				this.toastr.clear(infoToast.toastId);
			});
		}
	}

	private convertOptions(options: ToastrOptions) {
		const config: Partial<IndividualConfig> = {};
		
		this.updateConfig(options, config);

		return config as ServoyIndividualConfig;
	}
	
	private updateConfig(options: ToastrOptions, config: Partial<IndividualConfig>) {
		if (options) {
			for(const option in options) {
				if (option === 'showEasing') {
					config.easing = options.showEasing;
				}
				else if (option === 'showDuration') {
					config.easeTime = options.showDuration;
				}
				else if (option === 'hideDuration') {
					config.hideEaseTime = options.hideDuration;
				}
				else if (option === 'actionButton' && options.actionButton) {
					config.toastComponent = ServoyToast;
					config.toastClass = 'svy-action-toastr ngx-toastr';
				}
				else {
					config[option] = options[option];
				}
			}
			
			if (options.enableHtml === null || options.enableHtml === undefined) {
				config.enableHtml = true;
			}
		}
	}
}
