/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"744654F7-5BF3-48F5-951C-04D1A4E4D719",variableType:4}
 */
var actionButton = 0;

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
 * @properties={typeid:35,uuid:"D0160474-853A-45E4-9752-EFA5A288C6DE"}
 */
var actionButtonText = '<span class="btn btn-default pull-right">Undo <i class="fa-solid fa-rotate-left"></i></span>';

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
	var options = plugins.webnotificationsToastr.createToastrOptions();
	options.closeButton = closeButton == 1 ? true : false;
	options.hideDuration = hideDuration;
	options.hideEasing = hideEasing;
	options.hideMethod = hideMethod;
	options.progressBar = progressBar == 1;
	options.showEasing = showEasing;
	options.showMethod = showMethod;
	options.showDuration = showDuration;
	options.actionButton = actionButton;
	options.actionButtonText = actionButtonText;
	
	plugins.webnotificationsToastr.success('This is a message with more options', 'Everybody Lovees Options', options, 1, onClick);
}

/**
 * @properties={typeid:24,uuid:"F3D823A2-8482-4551-9F36-13F18686FEEE"}
 */
function onClick(id, actionTarget){
	application.output('Foo ' + id + ' - ' + actionTarget);
	
	if (actionTarget) {
		plugins.webnotificationsToastr.warning('Clicked the UNDO button', 'Everybody Lovees Options');
	}
}

/**
 * @properties={typeid:24,uuid:"03B9593A-99CF-44AC-98C2-D6F48AF4F210"}
 */
function testFile() {
    var ext = '.txt';
    var parsedName = 'test'
    /** @type {plugins.file.JSFile}*/
    var remoteFile = plugins.file.convertToRemoteJSFile('/' + parsedName + ext);
    remoteFile.setBytes(utils.stringToBytes('Hello'), true)
    //remoteFile.renameTo('/' + parsedName + '_' + application.getUUID() + ext);
    //plugins.file.writeFile(remoteFile, utils.stringToBytes('Hello'))
   // application.sleep(500);
    var url = plugins.file.getUrlForRemoteFile(remoteFile);
    application.showURL(url,'_blank')
   // plugins.svyphonegapBrowser.openHrefTag(url);
   
	
    //var parsedName = currentRec.evidencename.replace(/\.[^\/.]+$/ ,"");
    /** @type {plugins.file.JSFile}*/
    //var remoteFile = plugins.file.convertToRemoteJSFile('/' + currentRec.evidencename + ext);
    //remoteFile.setBytes(currentRec.evidence, true);
//    remoteFile.renameTo('/' + parsedName + '_' + application.getUUID() + ext);
//    application.sleep(500);
//    var url = plugins.file.getUrlForRemoteFile(remoteFile);

    return;
    
    var ext = '.txt';
    var parsedName = 'C:\\Users\\aronn\\Downloads\\test'
    /** @type {plugins.file.JSFile}*/
    var remoteFile = plugins.file.convertToJSFile(parsedName + ext);
	plugins.file.writeFile(remoteFile,utils.stringToBytes('Hello'))
	plugins.file.openFile(remoteFile)
	return;
    //remoteFile.renameTo('/' + parsedName + '_' + application.getUUID() + ext);
    //plugins.file.writeFile(remoteFile, utils.stringToBytes('Hello'))
   // application.sleep(500);
   
	var jsFile = plugins.file.createTempFile('test', ext);
	plugins.file.writeFile(jsFile, utils.stringToBytes('Hello'))
    var url = plugins.file.getUrlForRemoteFile(jsFile);
    application.showURL(url,'_blank')
    
}