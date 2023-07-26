/**
 * Returns whether or not the Web Notification functionality is supported
 *
 * @return {Boolean}
 */
function isSupported() {
}

/**
 * Requests permission to the user and executes the callback method when done
 *
 * @param {Function} callbackMethod
 */
function requestPermission(callbackMethod) {
}

/**
 * Returns the current permission value as defined by the Web Notifications API. It can contain the following values:
 * - default: implicitly denied
 * - denied: explicitly denied
 * - granted: explicitly granted
 */
function getPermission() {
}

/**
 * Returns whether or not the permission has been granted
 */
function isPermitted() {
}

/**
 * Shows a notification
 *
 * @param {String} title
 * @param {String} body
 * @param {String} [icon] URL to an icon image
 * @param {String} [image] URL to a body image
 * @param {String} [tag] unique identifier for the notification, will be generated if not supplied
 * @param {Function} [onClickCallbackMethod] this method will be called if the user clicks on the notification and will pass the tag as an argument
 * 
 * @return {String} value of the tag (as supplied or generated)
 */
function show(title, body, icon, image, tag, onClickCallbackMethod) {
}
