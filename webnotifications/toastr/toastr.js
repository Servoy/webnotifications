angular.module('webnotificationsToastr', ['servoy']).factory("webnotificationsToastr", function($services) {
		var scope = $services.getServiceScope('webnotificationsToastr')

		function show(type, message, title, options) {
			toastr[type](message, title, options);
		}

		return {
			/**
			 * Shows an info toastr with the given message, optional title and options
			 * @param {String} message the message to show
			 * @param {String} title the optional title shown above the message
			 * @param {Object} options toastrOptions object with additional options
			 */
			info: function(message, title, options) {
				show("info", message, title, options)
			},
			/**
			 * Shows a warning toastr with the given message, optional title and options
			 * @param {String} message the message to show
			 * @param {String} title the optional title shown above the message
			 * @param {Object} options toastrOptions object with additional options
			 */
			warning: function(message, title, options) {
				show("warning", message, title, options)
			},
			/**
			 * Shows an error toastr with the given message, optional title and options
			 * @param {String} message the message to show
			 * @param {String} title the optional title shown above the message
			 * @param {Object} options toastrOptions object with additional options
			 */
			error: function(message, title, options) {
				show("error", message, title, options)
			},
			/**
			 * Shows a success toastr with the given message, optional title and options
			 * @param {String} message the message to show
			 * @param {String} title the optional title shown above the message
			 * @param {Object} options toastrOptions object with additional options
			 */
			success: function(message, title, options) {
				show("success", message, title, options)
			},
			/**
			 * Removes current toasts using animation
			 */
			clear: function() {
				toastr.clear();
			}

		}
	}).run(function($rootScope, $services, window) {
		var scope = $services.getServiceScope('webnotificationsToastr');
})