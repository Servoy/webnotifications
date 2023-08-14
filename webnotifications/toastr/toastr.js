angular.module('webnotificationsToastr', ['servoy']).factory("webnotificationsToastr", function($services, $window) {
		var scope = $services.getServiceScope('webnotificationsToastr')

		var toastrs = {};
		var toastrsCreated = 1;
		
		function show(type, message, title, options, toastrId, onClick) {
			options = options || {};
			options.onHidden = function() {
				delete toastrs[this.toastrId];
			}
			if (onClick) {
				options.onclick = function() {
					$window.executeInlineScript(onClick.formname, onClick.script, [toastrId]);
				}
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
			 * @param {Object} [options] toastrOptions object with additional options
			 * @param {Object} [toastrId] optional id that can be used to clear this specific toastr via clearToastr
			 * @param {Function} [onClick] onClick optional callback function when the toastr is clicked
			 * 
			 * @example <pre>
			 * plugins.webnotificationsToastr.info('Hey, Servoy World is coming up in May!', 'Servoy World', null, 'sampleID', onClickDialog);
			 * 
			 * function onClick(toastrId) {
			 * 	application.output('toastrId');
			 * }
			 * </pre>
			 */
			info: function(message, title, options, toastrId, onClick) {
				show("info", message, title, options, toastrId, onClick)
			},
			/**
			 * Shows a warning toastr with the given message, optional title and options
			 * @param {String} message the message to show
			 * @param {String} [title] the optional title shown above the message
			 * @param {Object} [options] toastrOptions object with additional options
			 * @param {Object} [toastrId] optional id that can be used to clear this specific toastr via clearToastr
			 * @param {Function} [onClick] onClick optional callback function when the toastr is clicked
			 * 
			 * @example <pre>
			 * plugins.webnotificationsToastr.warning('Hey, Servoy World is coming up in May!', 'Servoy World', null, 'sampleID', onClickDialog);
			 * 
			 * function onClick(toastrId) {
			 * 	application.output('toastrId');
			 * }
			 * </pre>
			 */
			warning: function(message, title, options, toastrId, onClick) {
				show("warning", message, title, options, toastrId, onClick)
			},
			/**
			 * Shows an error toastr with the given message, optional title and options
			 * @param {String} message the message to show
			 * @param {String} [title] the optional title shown above the message
			 * @param {Object} [options] toastrOptions object with additional options
			 * @param {Object} [toastrId] optional id that can be used to clear this specific toastr via clearToastr
			 * @param {Function} [onClick] onClick optional callback function when the toastr is clicked
			 * 
			 * @example <pre>
			 * plugins.webnotificationsToastr.error('Oh no. Something went wrong. It will be OK', 'Error', null, 'sampleID', onClickDialog);
			 * 
			 * function onClick(toastrId) {
			 * 	application.output('toastrId');
			 * }
			 * </pre>
			 */
			error: function(message, title, options, toastrId, onClick) {
				show("error", message, title, options, toastrId, onClick)
			},
			/**
			 * Shows a success toastr with the given message, optional title and options
			 * @param {String} message the message to show
			 * @param {String} [title] the optional title shown above the message
			 * @param {Object} [options] toastrOptions object with additional options
			 * @param {Object} [toastrId] optional id that can be used to clear this specific toastr via clearToastr
			 * @param {Function} [onClick] onClick optional callback function when the toastr is clicked
			 * 
			 * @example <pre>
			 * plugins.webnotificationsToastr.success('Hey, Servoy World is coming up in May!', 'Servoy World', null, 'sampleID', onClickDialog);
			 * 
			 * function onClick(toastrId) {
			 * 	application.output('toastrId');
			 * }
			 * </pre>
			 */
			success: function(message, title, options, toastrId, onClick) {
				show("success", message, title, options, toastrId, onClick)
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