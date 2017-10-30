/**
 * @type {String}
 * @protected
 *
 * @properties={typeid:35,uuid:"33287592-D5F0-458A-A7DD-C3E590A6D09E"}
 */
var labelMsg = null;

/**
 * @type {Number}
 * @protected
 *
 * @properties={typeid:35,uuid:"346386A9-CA8E-4CB9-B24F-5D21C6BB97A6",variableType:4}
 */
var isPermissionGranted = 0;

/**
 * @type {Number}
 * @protected
 *
 * @properties={typeid:35,uuid:"471FF21E-C9AD-4E94-848F-5FB7DFE232A6",variableType:4}
 */
var isSupported = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"D73B8A42-971D-4AB9-B516-5C281402B95C"}
 */
function onShow(firstShow, event) {
	checkPermission();
}

/**
 * Perform the element default action.
 *
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A9E94708-B46D-4CB3-9704-2AC9E43524AF"}
 */
function checkPermission() {

	if (plugins.webnotificationsNative.isSupported()) {
		isSupported = 1;
		var permission = plugins.webnotificationsNative.getPermission();
		if (permission === "granted") {
			isPermissionGranted = 1;
		} else {
			isPermissionGranted = 0;
		}
	} else {
		isSupported = 0;
	}

	updateUI();
}

/**
 * @properties={typeid:24,uuid:"6666531A-9FB7-4A49-B29D-DA551B89E8A8"}
 */
function updateUI() {

	if (isSupported) {

		if (isPermissionGranted) {
			elements.btnGetUserPermission.enabled = false;
		} else {
			elements.btnGetUserPermission.enabled = true;
		}
	} else {
		labelMsg = "Web Notifications are not supported by this browser !";
		elements.labelMsg.removeStyleClass("btn-warning");
		elements.labelMsg.addStyleClass("btn-danger");
		elements.btnShowRequest.enabled = false;
		elements.btnGetUserPermission.enabled = false;
	}

	if (labelMsg) {
		elements.labelMsg.visible = true;
	} else {
		elements.labelMsg.visible = false;
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"30CBB9EB-3C97-407B-BB93-684F4B59C24B"}
 */
function showNotification(event) {
	if (plugins.webnotificationsNative.isPermitted()) {
		plugins.webnotificationsNative.show('Hey, Servoy World is coming up in May!', 'Servoy World');
		labelMsg = null;
	} else {
		labelMsg = "You should allow the Notifications on your Browser. Please ask user permission to allow Notifications !";
	}
	updateUI();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E147C9CA-22CF-4CA3-BC65-024B4C24366C"}
 */
function getUserPermission(event) {
	plugins.webnotificationsNative.requestPermission(gerUserPermissionCallback);
}

/**
 * @protected
 * @param result
 *
 * @properties={typeid:24,uuid:"217403B0-2034-4974-A4E1-96FC3F6DD82A"}
 */
function gerUserPermissionCallback(result) {
	if (result == true) {

	} else {
		labelMsg = "The User didn't allow Notifications. Please ask again the user permissions !";
		elements.labelMsg.removeStyleClass("btn-danger");
		elements.labelMsg.addStyleClass("btn-warning");
	}
	checkPermission();
}
