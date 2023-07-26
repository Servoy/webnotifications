{
	"name": "webnotificationsToastr",
	"displayName": "Toastr notifications",
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
			"onclick": "string",
			"onShown": "string",
			"onHidden": "string",
			"closeButton": "boolean",
			"closeHtml": "string",
			"newestOnTop": "boolean",
			"showEasing": "string",
			"hideEasing": "string",
			"showMethod": { "type": "string", "deprecated": "old jquery option for ng1 implementation" },
			"hideMethod": { "type": "string", "deprecated": "old jquery option for ng1 implementation" },
			"progressBar": "boolean",
			"timeOut": "int"
		}
	}
}