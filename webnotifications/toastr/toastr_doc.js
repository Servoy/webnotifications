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


var svy_types = {

    /**
     * Options to configure the appearance and behavior of toastr notifications.
     */
    toastrOptions: {
        /**
         * The duration in milliseconds for the show animation.
         */
        showDuration: null,
        /**
         * The duration in milliseconds for the hide animation.
         */
        hideDuration: null,
        /**
         * CSS class that determines the position of the toast notification.
         */
        positionClass: null,
        /**
         * If true, a close button is displayed on the toast.
         */
        closeButton: null,

        /**
         * If true will show a custom toastr with an additional action
         */
        actionButton : null,

        /**
         * When the actionButton is true, set the text to show for the action section; can be an html string
         */
        actionButtonText : null,

        /**
         * The HTML for the close button.
         */
        closeHtml: null,
        /**
         * If true, newer toasts appear on top of older ones.
         */
        newestOnTop: null,
        /**
         * The easing function to use when showing the toast.
         */
        showEasing: null,
        /**
         * The easing function to use when hiding the toast.
         */
        hideEasing: null,
        /**
         * The method used to show the toast (deprecated for old jQuery implementations).
         */
        showMethod: null,
        /**
         * The method used to hide the toast (deprecated for old jQuery implementations).
         */
        hideMethod: null,
        /**
         * If true, displays a progress bar within the toast.
         */
        progressBar: null,
        /**
         * The time in milliseconds before the toast auto-hides.
         */
        timeOut: null,
        /**
         * The time in milliseconds for extended timeout on hover.
         */
        extendedTimeOut: null,
        /**
         * If true, disables the auto-hide timeout.
         */
        disableTimeOut: null,
        /**
         * If true, allows HTML content in the toast message.
         */
        enableHtml: null,
        /**
         * The type of animation used for the progress bar.
         */
        progressAnimation: null,
        /**
         * CSS class applied to the toast container.
         */
        toastClass: null,
        /**
         * CSS class applied to the toast title.
         */
        titleClass: null,
        /**
         * CSS class applied to the toast message.
         */
        messageClass: null,
        /**
         * If true, clicking on the toast will dismiss it.
         */
        tapToDismiss: null,
        /**
         * If true, activates a tick animation when the toast is activated.
         */
        onActivateTick: null
    }
}
