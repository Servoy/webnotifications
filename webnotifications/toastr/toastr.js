angular.module('webnotificationsToastr', ['servoy']).factory("webnotificationsToastr", function($services) {
		var scope = $services.getServiceScope('webnotificationsToastr')

		var toastrs = {};
		var toastrsCreated = 1;
		
		function show(type, message, title, options, toastrId) {
			options = options || {};
			options.onHidden = function() {
				delete toastrs[this.toastrId];
			}
			toastrId = toastrId || ('toastr_' + (toastrsCreated ++));
			options.toastrId = toastrId;
			var toastrElement = toastr[type](message, title, options);
			toastrs[toastrId] = toastrElement
		}

		return {
			/**
			 * Shows an info toastr with the given message, optional title and options
			 * @param {String} message the message to show
			 * @param {String} title the optional title shown above the message
			 * @param {Object} options toastrOptions object with additional options
			 * @param {Object} toastrId optional id that can be used to clear this specific toastr via clearToastr
			 */
			info: function(message, title, options, toastrId) {
				show("info", message, title, options, toastrId)
			},
			/**
			 * Shows a warning toastr with the given message, optional title and options
			 * @param {String} message the message to show
			 * @param {String} title the optional title shown above the message
			 * @param {Object} options toastrOptions object with additional options
			 * @param {Object} toastrId optional id that can be used to clear this specific toastr via clearToastr
			 */
			warning: function(message, title, options, toastrId) {
				show("warning", message, title, options, toastrId)
			},
			/**
			 * Shows an error toastr with the given message, optional title and options
			 * @param {String} message the message to show
			 * @param {String} title the optional title shown above the message
			 * @param {Object} options toastrOptions object with additional options
			 * @param {Object} toastrId optional id that can be used to clear this specific toastr via clearToastr
			 */
			error: function(message, title, options, toastrId) {
				show("error", message, title, options, toastrId)
			},
			/**
			 * Shows a success toastr with the given message, optional title and options
			 * @param {String} message the message to show
			 * @param {String} title the optional title shown above the message
			 * @param {Object} options toastrOptions object with additional options
			 * @param {Object} toastrId optional id that can be used to clear this specific toastr via clearToastr
			 */
			success: function(message, title, options, toastrId) {
				show("success", message, title, options, toastrId)
			},
			/**
			 * Removes current toasts using animation
			 */
			clear: function() {
				toastr.clear();
			},
			/**
			 * Removes the toast with the given ID
			 */
			clearToastr: function(toastrId) {
				if (toastrs[toastrId]) {
					toastr.clear(toastrs[toastrId]);
					delete toastrs[toastrId];
				}
			},
			/**
			 * Returns new, empty toastrOptions
			 * @return {CustomType<webnotificationsToastr.toastrOptions>}
			 */
			createToastrOptions: function() {
				return {};
			},
			/**
			 * Sets the given options globally
			 * @param {Object} options toastrOptions
			 */
			setGlobalOptions: function(options) {
				scope.model.options = options;
				for ( var i in options ) {
					toastr.options[i] = options[i];
				}
			}

		}
	}).run(function($rootScope, $services, window) {
		var scope = $services.getServiceScope('webnotificationsToastr');
})