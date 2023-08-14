import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
import { ActiveToast, IndividualConfig, ToastrService } from '@servoy/ngx-toastr'; 

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
		if (options) {
			if (options.closeButton) this.toastr.toastrConfig.closeButton = options.closeButton;
			if (options.showEasing) this.toastr.toastrConfig.easing = options.showEasing;
			if (options.timeOut >= 0) this.toastr.toastrConfig.timeOut = options.timeOut;
			if (options.newestOnTop) this.toastr.toastrConfig.newestOnTop = options.newestOnTop;
			if (options.progressBar) this.toastr.toastrConfig.progressBar = options.progressBar;
			if (options.positionClass) this.toastr.toastrConfig.positionClass = options.positionClass;
			if (options.showDuration) this.toastr.toastrConfig.easeTime = options.showDuration;
			
			this.toastr.toastrConfig.hideEaseTime = options.hideDuration;
			this.toastr.toastrConfig.closeHtml = options.closeHtml;
			this.toastr.toastrConfig.hideEasing = options.hideEasing;
			// this.toastr.toastrConfig = options.showMethod;
			// this.toastr.toastrConfig = options.hideMethod;
		}

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
		}
	}

	private convertOptions(options: ToastrOptions) {
		const config: Partial<IndividualConfig> = {
			enableHtml: true
		};
		if (options) {
			if (options.closeButton) config.closeButton = options.closeButton;
			if (options.showEasing) config.easing = options.showEasing;
			if (options.timeOut >= 0) config.timeOut = options.timeOut;
			if (options.newestOnTop) config.newestOnTop = options.newestOnTop;
			if (options.progressBar) config.progressBar = options.progressBar;
			if (options.positionClass) config.positionClass = options.positionClass;
			if (options.showDuration) config.easeTime = options.showDuration;
		}
		return config as IndividualConfig;
	}
}
