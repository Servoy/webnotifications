/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9F8B38D7-1303-484F-849C-31FD6408A4A4",variableType:4}
 */
var closeButton = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2EC38C81-3CB4-4B32-A99A-481138E0769A",variableType:4}
 */
var hideDuration = 300;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"328EBA77-7D78-4DC8-96FC-B8AF9B516DA0"}
 */
var hideEasing = 'swing';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FE54CFD4-F785-41F5-BC8A-0460CA0752D1"}
 */
var hideMethod = 'slideUp';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"51D9792B-A2F8-4EEA-8E40-27C2B072A840",variableType:4}
 */
var progressBar = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B33B259E-D0A1-4D43-8427-6D18AAD86824"}
 */
var showEasing = 'linear';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4236A8C0-7288-4470-B569-BA5CDF53C20C"}
 */
var showMethod = 'slideDown';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C6F3043E-E2B8-4345-A5A8-2FD561BCEF16",variableType:4}
 */
var showDuration = 300;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"424604BD-E1D9-4530-BC39-09D669880588"}
 */
function info(event) {
	plugins.webnotificationsToastr.info('Hey, Servoy World is coming up in May!','Servoy World');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"BDBB9097-9E97-43C1-8C35-3808DA6820C7"}
 */
function success(event) {
	plugins.webnotificationsToastr.success('You got tickets to Servoy World!','Servy World');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F10B869D-7496-4E7F-9699-25C2BE52577D"}
 */
function warning(event) {
	plugins.webnotificationsToastr.warning('You are about to do something you might regret.','Danger!')
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A2AD8BCA-9988-4473-824E-563A6586E3CA"}
 */
function error(event) {
	plugins.webnotificationsToastr.error('Oh no. You messed up. It will be OK','Error');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9FF4E5DF-A03D-42B1-876A-6851F9125908"}
 */
function infoWithOptions(event) {
	
	// create options
	/** @type {webnotificationsToastr.toastrOptions} */
	var options = {};
	options.closeButton = closeButton == 1;
	options.hideDuration = hideDuration;
	options.hideEasing = hideEasing;
	options.hideMethod = hideMethod;
	options.progressBar = progressBar == 1;
	options.showEasing = showEasing;
	options.showMethod = showMethod;
	options.showDuration = showDuration;
	
	plugins.webnotificationsToastr.info('This is a message with more options','Everybody Lovees Options',options);
}

/**
 * @properties={typeid:24,uuid:"F3D823A2-8482-4551-9F36-13F18686FEEE"}
 */
function onClick(){
	application.output('Foo');
}
