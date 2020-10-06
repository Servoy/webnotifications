{
	"name": "webnotificationsToastr",
	"displayName": "Toastr notifications",
	"version": 1,
 	"definition": "webnotifications/toastr/toastr.js",
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
			"async-now": true,
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
			"async-now": true,
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
			"async-now": true,
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
			"async-now": true,
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
			"showMethod": "string",
			"hideMethod": "string",
			"progressBar": "boolean",
			"timeOut": "int"
		}
	}
}