angular.module('webnotificationsNative',['servoy'])
.factory("webnotificationsNative", [ '$services', '$window', function($services, $window) 
{
	var scope = $services.getServiceScope('webnotificationsNative');
	return {
		/**
		 * Returns whether or not the Web Notification functionality is supported
		 *
		 * @return {Boolean}
		 */
		isSupported: function() {
			return !!$window.Notification;
		},

		/**
		 * Requests permission to the user and executes the callback method when done
		 *
		 * @param {Function} callbackMethod
		 */
		requestPermission: function(callbackMethod) {
			if (!this.isSupported()) {
				throw "Web Notification functionality is not supported by the browser!";
			}

			var permission = $window.Notification.permission;
			if (permission == "granted" || permission == "denied") {
				$window.executeInlineScript(callbackMethod.formname, callbackMethod.script, [permission == "granted"]);

				return;
			}

			$window.Notification.requestPermission(function(status) {
				$window.executeInlineScript(callbackMethod.formname, callbackMethod.script, [status == "granted"]);
			});
		},

		/**
		 * Returns the current permission value as defined by the Web Notifications API. It can contain the following values:
		 * - default: implicitly denied
		 * - denied: explicitly denied
		 * - granted: explicitly granted
		 */
		getPermission: function() {
			if (!this.isSupported()) {
				throw "Web Notification functionality is not supported by the browser!";
			}

			return $window.Notification.permission;
		},

		/**
		 * Returns whether or not the permission has been granted
		 */
		isPermitted: function() {
			if (!this.isSupported()) {
				throw "Web Notification functionality is not supported by the browser!";
			}

			return $window.Notification.permission == "granted";
		},
		
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
		show: function(title, body, icon, image, tag, onClickCallbackMethod) {
			if (!this.isSupported()) {
				throw "Web Notification functionality is not supported by the browser!";
			}
			
			tag = tag || Date.now().toString();
			
			var options = {body: body, tag: tag};
			
			if (icon) {
				options.icon = icon;
			}
			
			if (image) {
				options.image = image;
			}
			
			var notification = new $window.Notification(title, options);
			
			if (onClickCallbackMethod) {
				notification.onclick = function(event) {
					$window.executeInlineScript(onClickCallbackMethod.formname, onClickCallbackMethod.script, [this.tag]);
				}
			}
			
			return tag;
		}
	}
}])
.run(function($rootScope, $services) {
	var scope = $services.getServiceScope('webnotificationsNative');
})