angular.module('webnotificationsToastr', ['servoy']).factory("webnotificationsToastr", function($services) {
		var scope = $services.getServiceScope('webnotificationsToastr')

		function show(type, message, title, options) {
			if (title) {
				toastr[type](title, message, options);
			} else {
				toastr[type](message, options);
			}
		}

		return {
			info: function(message, title, options) {
				show("info", message, title, options)
			},
			warning: function(message, title, options) {
				show("warning", message, title, options)
			},
			error: function(message, title, options) {
				show("error", message, title, options)
			},
			success: function(message, title, options) {
				show("success", message, title, options)
			},
			clear: function() {
				toastr.clear();
			}

		}
	}).run(function($rootScope, $services, window) {
	var scope = $services.getServiceScope('webnotificationsToastr');
})