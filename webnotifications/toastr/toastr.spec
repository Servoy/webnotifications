{
	"name": "webnotificationsToastr",
	"displayName": "Toastr Notifications",
	"version": 1,
 	"definition": "webnotifications/toastr/toastr.js",
 	"doc": "webnotifications/toastr/toastr_doc.js",
 	"ng2Config": {
       "packageName": "@servoy/webnotifications",
       "serviceName": "ServoyToastrService",
       "moduleName": "WebNotificationsModule",
       "entryPoint": "dist/servoy/webnotifications",
       "dependencies": {
            "csslibrary": ["~@servoy/ngx-toastr/toastr.css"]
       }
    },
	"libraries": 
	[
		{ "name": "toastr.min.css", "version": "2.1.1", "url": "webnotifications/toastr/lib/toastr.min.css", "mimetype": "text/css" },
		{ "name": "toastr.min.js", "version": "2.1.1", "url": "webnotifications/toastr/lib/toastr.min.js", "mimetype": "text/javascript"}
	],
	"model": 
	{
		"globalOptions": { "type": "object", "tags": {"scope": "private"} }
	},
	"api": 
	{
		"info": 
		{
			"parameters": [
				{                                                                 
					"name":"message",
					"type":"string"
				},
				{                                                                 
					"name":"title",
					"type":"string",
					"optional":true
				},
				{                                                                 
					"name":"options",
					"type":"toastrOptions",
					"optional":true
				},
				{                                                                 
					"name":"toastrId",
					"type":"object",
					"optional":true
				},
				{                                                                 
					"name":"onClick",
					"type":"function",
					"optional":true
				}            
			]
		},
		"warning": 
		{
			"parameters": [
				{                                                                 
					"name":"message",
					"type":"string"
				},
				{                                                                 
					"name":"title",
					"type":"string",
					"optional":true
				},
				{                                                                 
					"name":"options",
					"type":"toastrOptions",
					"optional":true
				},
				{                                                                 
					"name":"toastrId",
					"type":"object",
					"optional":true
				},
				{                                                                 
					"name":"onClick",
					"type":"function",
					"optional":true
				}         
			]
		},
		"success": 
		{
			"parameters": [
				{                                                                 
					"name":"message",
					"type":"string"
				},
				{                                                                 
					"name":"title",
					"type":"string",
					"optional":true
				},
				{                                                                 
					"name":"options",
					"type":"toastrOptions",
					"optional":true
				},
				{                                                                 
					"name":"toastrId",
					"type":"object",
					"optional":true
				},
				{                                                                 
					"name":"onClick",
					"type":"function",
					"optional":true
				}                
			]
		},
		"error": 
		{
			"parameters": [
				{                                                                 
					"name":"message",
					"type":"string"
				},
				{                                                                 
					"name":"title",
					"type":"string",
					"optional":true
				},
				{                                                                 
					"name":"options",
					"type":"toastrOptions",
					"optional":true
				},
				{                                                                 
					"name":"toastrId",
					"type":"object",
					"optional":true
				},
				{                                                                 
					"name":"onClick",
					"type":"function",
					"optional":true
				}               
			]
		},
		"clear": 
		{
		},
		"clearToastr": 
		{
			"parameters": [
			{                                                                 
					"name":"toastrId",
					"type":"object"
				}
			]
		},
		"createToastrOptions": 
		{
			"returns": "toastrOptions"
		},
		"setGlobalOptions": {
			"parameters": [
			{                                                                 
					"name":"options",
					"type":"toastrOptions"
				}
			]
		}
	},
	"types": 
	{
		"toastrOptions": 
		{
			"showDuration": "int",
			"hideDuration": "int",
			"positionClass": "string",
			"closeButton": "boolean",
			"actionButton": { "type": "boolean", "default": "false", "tags": { "doc": "If true will show a custom toastr with an additional action" }},
			"actionButtonText": { "type": "string", "tags": { "doc": "When the actionButton is true, set the text to show for the action section; can be an html string" }},
			"closeHtml": "string",
			"newestOnTop": "boolean",
			"showEasing": "string",
			"hideEasing": "string",
			"showMethod": { "type": "string", "deprecated": "old jquery option for ng1 implementation" },
			"hideMethod": { "type": "string", "deprecated": "old jquery option for ng1 implementation" },
			"progressBar": "boolean",
			"timeOut": "int",
			"extendedTimeOut": "int",
			"disableTimeOut": "boolean",
			"enableHtml": "boolean",
			"progressAnimation": "string",
			"toastClass": "string",
			"titleClass": "string",
			"messageClass": "string",
			"tapToDismiss": "boolean",
			"onActivateTick": "boolean"
		}
	}
}