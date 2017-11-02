/**
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"B6C5871E-9C6A-4E18-86E3-EA87E46633FF"}
 */
function getName() {
	return 'Native Web Notifications';
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"9781872B-4547-4DD0-A7A3-7F37FC4D7FDA"}
*/
function getDescription() {
	return 'Native Web Notifications for Servoy'
}

/**
*
* @return {RuntimeForm<AbstractMicroSample>}
*
* @properties={typeid:24,uuid:"A4BDB1D1-1127-4DE0-AE63-75E6FABF3327"}
*/
function getParent() {
	return forms.ngServiceSamples;
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"0717927D-622B-4056-9F34-49E55F34814E"}
*/
function getIconStyleClass() {
	return 'fa fa-bell';
}


/**
* @public 
* @return {Array<String>} code lines
* @SuppressWarnings(private) TODO suppress not working ?
* @properties={typeid:24,uuid:"59C09A40-91B9-4E1C-8106-7A76B09F72EF"}
*/
function getSampleCode() {
	return printMethodCode(forms.webNotificationsExample.getUserPermission)
		.concat(printMethodCode(forms.webNotificationsExample.gerUserPermissionCallback))
		.concat(printMethodCode(forms.webNotificationsExample.showNotification))
}


/**
*
* @return {String} Website URL
*
* @properties={typeid:24,uuid:"9F9754BE-0C3D-4CF3-8822-D7B71899213C"}
*/
function getWebSiteURL() {
	return 'https://github.com/Servoy/webnotifications';
}

/**
*
* @return {String} Additioanl info (wiki markdown supported)
*
* @properties={typeid:24,uuid:"7F3C06AF-AB98-49FB-95E7-B757407FB333"}
*/
function getMoreInfo() {
	var url = 'https://raw.githubusercontent.com/Servoy/webnotifications/master/README.md';
	return plugins.http.getPageData(url);
}

/**
*
* @return {String} Download URL
*
* @properties={typeid:24,uuid:"07FB7A0B-F833-4E3E-B57B-FC140CF724DE"}
*/
function getDownloadURL() {
	return 'https://github.com/Servoy/webnotifications/releases/download/v1.1.0/webNotificationsExample.servoy';
}
