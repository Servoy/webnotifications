import { Injectable } from '@angular/core';
import { ActiveToast, IndividualConfig, ToastrService } from '@servoy/ngx-toastr'; 

interface ToastrOptions {
	showDuration: number;
	hideDuration: number;
	positionClass: string;
	onclick: string;
	onShown: string;
	onHidden: string;
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

    constructor(private toastr: ToastrService) {}

	/**
	 * Shows an info toastr with the given message, optional title and options
	 *
	 * @param message the message to show
	 * @param title the optional title shown above the message
	 * @param options toastrOptions object with additional options
	 * @param toastrId optional id that can be used to clear this specific toastr via clearToastr
	 */
	public info(message: string, title: string, options: ToastrOptions, toastrId: any) {
		const infoToast = this.toastr.info(message, title, this.convertOptions(options));
		this.commonActions(infoToast, toastrId);
	}

	/**
	 * Shows a warning toastr with the given message, optional title and options
	 *
	 * @param message the message to show
	 * @param title the optional title shown above the message
	 * @param options toastrOptions object with additional options
	 * @param toastrId optional id that can be used to clear this specific toastr via clearToastr
	 */
	public warning(message: string, title: string, options: ToastrOptions, toastrId: any) {
		const infoToast = this.toastr.warning(message, title, this.convertOptions(options));
		this.commonActions(infoToast, toastrId);
	}

	/**
	 * Shows an error toastr with the given message, optional title and options
	 *
	 * @param message the message to show
	 * @param title the optional title shown above the message
	 * @param options toastrOptions object with additional options
	 * @param toastrId optional id that can be used to clear this specific toastr via clearToastr
	 */
	public error(message: string, title: string, options: ToastrOptions, toastrId: any) {
		const infoToast = this.toastr.error(message, title, this.convertOptions(options));
		this.commonActions(infoToast, toastrId);
	}

	/**
	 * Shows a success toastr with the given message, optional title and options
	 *
	 * @param message the message to show
	 * @param title the optional title shown above the message
	 * @param options toastrOptions object with additional options
	 * @param toastrId optional id that can be used to clear this specific toastr via clearToastr
	 */
	public success(message: string, title: string, options: ToastrOptions, toastrId: any) {
		const infoToast = this.toastr.success(message, title, this.convertOptions(options));
		this.commonActions(infoToast, toastrId);
	}

	public clear() {
		this.toastrsIDs = [];
		this.toastr.clear();
	}

	public clearToastr(toastrId: any) {
		const toastrToClear = this.toastrsIDs.find(t => t[1] === toastrId)[0];
		this.toastr.clear(toastrToClear);
	}

	public setGlobalOptions(options: ToastrOptions) {
		if (options) {
			if (options.closeButton) this.toastr.toastrConfig.closeButton = options.closeButton;
			if (options.showEasing) this.toastr.toastrConfig.easing = options.showEasing;
			if (options.timeOut) this.toastr.toastrConfig.timeOut = options.timeOut;
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

	private commonActions(infoToast: ActiveToast<any>, toastrId: any) {
		toastrId = toastrId || ('toastr_' + (this.toastrsCreated++));
		this.toastrsIDs.push([infoToast.toastId, toastrId]);
		this.toastr.toasts.push(infoToast);

		infoToast.onHidden.subscribe(() => {
			this.toastr.toasts = this.toastr.toasts.filter(t => t.toastId !== infoToast.toastId);
			this.toastrsIDs = this.toastrsIDs.filter(tID => tID[0] !== infoToast.toastId);
		});
	}

	private convertOptions(options: ToastrOptions) {
		const config: Partial<IndividualConfig> = {};
		if (options) {
			if (options.closeButton) config.closeButton = options.closeButton;
			if (options.showEasing) config.easing = options.showEasing;
			if (options.timeOut) config.timeOut = options.timeOut;
			if (options.newestOnTop) config.newestOnTop = options.newestOnTop;
			if (options.progressBar) config.progressBar = options.progressBar;
			if (options.positionClass) config.positionClass = options.positionClass;
			if (options.showDuration) config.easeTime = options.showDuration;
		}
		return config as IndividualConfig;
	}
}
