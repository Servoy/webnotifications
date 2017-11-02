
/**
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"FE421CAF-01DE-41DE-B086-876F5E8A8A1A"}
 */
function getName() {
	return 'ToastR Notifications';
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"708612FE-AFDD-4792-AB18-0CA61025B972"}
*/
function getDescription() {
	return 'ToastR Notifications for Servoy'
}

/**
*
* @return {RuntimeForm<AbstractMicroSample>}
*
* @properties={typeid:24,uuid:"AB815A87-8C11-4773-9939-EB73A7F864BF"}
*/
function getParent() {
	return forms.ngServiceSamples;
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"ACBCF265-59BC-4DCB-BBDB-D24C3E1F233E"}
*/
function getIconStyleClass() {
	return 'fa fa-flash';
}


/**
*
* @return {String} Website URL
*
* @properties={typeid:24,uuid:"7C29D98D-B9EC-4CBD-9F27-9920BE630400"}
*/
function getWebSiteURL() {
	return 'https://github.com/Servoy/webnotifications';
}

/**
*
* @return {String} Additioanl info (wiki markdown supported)
*
* @properties={typeid:24,uuid:"01F03506-BCCF-4619-ADF5-B1E5C0F2B861"}
*/
function getMoreInfo() {
	var url = 'https://raw.githubusercontent.com/Servoy/webnotifications/master/README.md';
	return plugins.http.getPageData(url);
}

/**
*
* @return {String} Download URL
*
* @properties={typeid:24,uuid:"EA3BF118-5CAB-448B-845B-AD928BE0230C"}
*/
function getDownloadURL() {
	return 'https://github.com/Servoy/webnotifications/releases/download/v1.1.0/webNotificationsExample.servoy';
}

