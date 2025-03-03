/**
 * Shows an info toastr with the given message, optional title and options
 * @param {String} message the message to show
 * @param {String} [title] the optional title shown above the message
 *  @param {CustomType<webnotificationsToastr.toastrOptions>} [options] toastrOptions object with additional options
 * @param {Object} [toastrId] optional id that can be used to clear this specific toastr via clearToastr
 * @param {Function} [onClick] optional callback function when the toastr is clicked
 * 
 * @example <pre>
 * plugins.webnotificationsToastr.info('Hey, Servoy World is coming up in May!', 'Servoy World', null, 'sampleID', onClickDialog);
 * 
 * function onClick(toastrId) {
 * 	application.output('toastrId');
 * }
 * </pre>
 */
function info(message, title, options, toastrId, onClick) {
}
/**
 * Shows a warning toastr with the given message, optional title and options
 * @param {String} message the message to show
 * @param {String} [title] The optional title shown above the message
 * @param {CustomType<webnotificationsToastr.toastrOptions>} [options] The toastrOptions object with additional options
 * @param {Object} [toastrId] The optional id that can be used to clear this specific toastr via clearToastr
 * @param {Function} [onClick] The optional callback function when the toastr is clicked
 * 
 * @example <pre>
 * plugins.webnotificationsToastr.warning('Hey, Servoy World is coming up in May!', 'Servoy World', null, 'sampleID', onClickDialog);
 * 
 * function onClick(toastrId) {
 * 	application.output('toastrId');
 * }
 * </pre>
 */
function warning(message, title, options, toastrId, onClick) {
}
/**
 * Shows an error toastr with the given message, optional title and options
 * @param {String} message the message to show
 * @param {String} [title] The optional title shown above the message
 * @param {CustomType<webnotificationsToastr.toastrOptions>} [options] The toastrOptions object with additional options
 * @param {Object} [toastrId] The optional id that can be used to clear this specific toastr via clearToastr
 * @param {Function} [onClick] The optional callback function when the toastr is clicked
 * 
 * @example <pre>
 * plugins.webnotificationsToastr.error('Oh no. Something went wrong. It will be OK', 'Error', null, 'sampleID', onClickDialog);
 * 
 * function onClick(toastrId) {
 * 	application.output('toastrId');
 * }
 * </pre>
 */
function error(message, title, options, toastrId, onClick) {
}
/**
 * Shows a success toastr with the given message, optional title and options
 * @param {String} message the message to show
 * @param {String} [title] The optional title shown above the message
 * @param {CustomType<webnotificationsToastr.toastrOptions>} [options] toastrOptions object with additional options
 * @param {Object} [toastrId] The optional id that can be used to clear this specific toastr via clearToastr
 * @param {Function} [onClick] The optional callback function when the toastr is clicked
 * 
 * @example <pre>
 * plugins.webnotificationsToastr.success('Hey, Servoy World is coming up in May!', 'Servoy World', null, 'sampleID', onClickDialog);
 * 
 * function onClick(toastrId) {
 * 	application.output('toastrId');
 * }
 * </pre>
 */
function success(message, title, options, toastrId, onClick) {
}
/**
 * Removes current toasts using animation
 */
function clear() {
}

/**
 * Removes the toast with the given ID
 * 
 * @param {Object} toastrId The unique identifier of the toast notification to be removed.
 */
function clearToastr(toastrId) {
}

/**
 * Returns new, empty toastrOptions
 * @return {CustomType<webnotificationsToastr.toastrOptions>} A new, empty toastrOptions object for configuring toast notifications.
 */
function createToastrOptions() {
}

/**
 * Sets the given options globally
* @param {CustomType<webnotificationsToastr.toastrOptions>} options ToastrOptions
*/
function setGlobalOptions(options) {
}
