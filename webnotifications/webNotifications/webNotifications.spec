{
	"name": "webnotifications-native",
	"displayName": "Native Web Notifications",
	"version": 1,
 	"definition": "webnotifications/webNotifications/webNotifications.js",
	"libraries": [],
	"api": 
	{
		"isSupported": 
		{
			"returns": "boolean"
		},

		"requestPermission": 
		{
			"parameters": 
			[
				{
					"name": "callbackMethod",
					"type": "function"
				}
			],

			"returns": "boolean"
		},

		"getPermission": 
		{
			"returns": "string"
		},

		"isPermitted": 
		{
			"returns": "boolean"
		},

		"show": 
		{
			"parameters": 
			[
				{
					"name": "title",
					"type": "string"
				},

				{
					"name": "body",
					"type": "string"
				},

				{
					"name": "icon",
					"type": "media",
					"optional": true
				},

				{
					"name": "image",
					"type": "string",
					"optional": true
				},

				{
					"name": "tag",
					"type": "string",
					"optional": true
				},

				{
					"name": "onClickCallbackMethod",
					"type": "function",
					"optional": true
				}
			],

			"returns": "string"
		}
	}
}