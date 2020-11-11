window.settings = {
	"i18n": {
		"defaultlocale": "en",
		"languages": ["en"],
		"showLangSwitch": false
	},
	"general": {
		"ga": {
			"enabled": true,
			"trackingid": "G-RJ6VT2L72P"
		},
		"auth_2fa": {
			"enabled": false,
			"sendMode": "email",
			"url": "",
			"emailSettings": {
				"correspondenceName": "pyDefaultOTPCorr",
				"emailAccount": "Default",
				"subject": "New OTP Request",
				"validateMaxAge": "false"
			},
			"smsSettings": {
				"from": "Pega",
				"account": "Default",
				"message": "Uplus OTP login code",
				"validateMaxAge": "false"
			}
		}
	},
	"quicklinks": [{
		"title": {
			"en": "Manage Level 1 Equipment"
		},
		"action": "createNewWork",
		"actionparam": "",
		"objclass": "",
		"url": "",
		"startcase": "pyStartCase",
		"application": "",
		"icon": "",
		"extraparam": "",
		"hide": false,
		"channelid": ""
	}, {
		"title": {
			"en": "Register Level 2/3 Equipment"
		},
		"action": "createNewWork",
		"actionparam": "",
		"objclass": "ESV-EESS-Work-Registration-Apply",
		"url": "https://eess.pegatsdemo.com/prweb/app/eess_8274/",
		"startcase": "pyStartCase",
		"application": "EESS",
		"icon": "",
		"extraparam": "pzSkinName=EESS",
		"hide": false,
		"channelid": "MASHUP7ddc749c1c224d108e55b0a9465ad317"
	}, {
		"title": {
			"en": "View Level 2/3 Equipment"
		},
		"action": "display",
		"actionparam": "ManageEquipment",
		"objclass": "Data-Portal",
		"url": "https://eess.pegatsdemo.com/prweb/app/eess_8274/",
		"startcase": "pyStartCase",
		"application": "EESS",
		"icon": "",
		"extraparam": "pzSkinName=EESS",
		"hide": false,
		"channelid": ""
	}, {
		"title": {
			"en": "Pay your Excise Taxe"
		},
		"action": "createNewWork",
		"actionparam": "",
		"objclass": "",
		"url": "",
		"startcase": "pyStartCase",
		"application": "",
		"icon": "",
		"extraparam": "",
		"hide": true,
		"channelid": ""
	}, {
		"title": {
			"en": "Update your profile"
		},
		"action": "createNewWork",
		"actionparam": "",
		"objclass": "",
		"url": "",
		"startcase": "pyStartCase",
		"application": "",
		"icon": "",
		"extraparam": "",
		"hide": true,
		"channelid": ""
	}],
	"billpay": {
		"action": "createNewWork",
		"actionparam": "",
		"objclass": "",
		"url": "",
		"startcase": "pyStartCase",
		"application": "",
		"extraparam": "",
		"hidebillpay": true,
		"channelid": ""
	},
	"banner": {
		"action": "createNewWork",
		"actionparam": "",
		"objclass": "",
		"url": "",
		"startcase": "pyStartCase",
		"application": "",
		"extraparam": "",
		"hidebanner": true,
		"hidebanner_button": false,
		"color": "#CE9840",
		"channelid": ""
	},
	"todo": {
		"action": "display",
		"actionparam": "pyTodoList",
		"objclass": "Data-Portal",
		"url": "https://eess.pegatsdemo.com/prweb/app/eess_8274/",
		"startcase": "pyStartCase",
		"application": "EESS",
		"extraparam": "pzSkinName=EESS",
		"hideactivity": false,
		"hideaccount": true,
		"hideKPI": true,
		"channelid": ""
	},
	"kmhelp": {
		"action": "display",
		"actionparam": "KMHelpSitePortal",
		"objclass": "Data-Portal",
		"url": "",
		"startcase": "pyStartCase",
		"application": "",
		"extraparam": "",
		"username": "",
		"password": "",
		"channelid": ""
	},
	"homeheroaction": {
		"action": "createNewWork",
		"actionparam": "",
		"objclass": "",
		"url": "",
		"startcase": "pyStartCase",
		"application": "",
		"pega_userid": "",
		"pega_pwd": "",
		"extraparam": "",
		"channelid": ""
	},
	"offeraction": {
		"action": "createNewWork",
		"actionparam": "",
		"objclass": "",
		"url": "",
		"startcase": "pyStartCase",
		"application": "",
		"pega_userid": "",
		"pega_pwd": "",
		"extraparam": "",
		"channelid": ""
	},
	"users": [{
		"username": "BigNameSupplier",
		"password": "rules",
		"img": "avatar-1.jpg",
		"company_name": "",
		"name": "",
		"accountID": "",
		"contactID": "",
		"customerID": "",
		"extraparam": "",
		"pega_userid": "alistair.cohen@pega.com",
		"pega_pwd": "rules",
		"bill_pay": 164.8,
		"load_by_default": true,
		"otp_send_to": "",
		"billpay": 164.8
	}, {
		"username": "mary@pegasystems.com",
		"password": "rules",
		"img": "avatar-2.jpg",
		"company_name": "",
		"name": "",
		"accountID": "",
		"contactID": "",
		"customerID": "",
		"extraparam": "",
		"pega_userid": "mtaylor",
		"pega_pwd": "rules",
		"bill_pay": 164.8,
		"load_by_default": false,
		"otp_send_to": "",
		"billpay": 164.8
	}],
	"pega_chat": {
		"WCBConfigName": "WebChatBot",
		"WebChatBotID": "botcc9a9416861743bfa1697a2ad3203f60",
		"ApplicationName": "EESS",
		"MashupURL": "https://eess.pegatsdemo.com/prweb/PRChat/app/eess_6109/",
		"ShowAsButton": true,
		"EnableProActiveNotification": false,
		"ResetLogout": true,
		"ProActiveNotificationDismissTime": "",
		"CoBrowseServerURL": "",
		"CoBrowseToken": ""
	},
	"pega_marketing": {
		"Host": "",
		"Port": "",
		"channel": "Web",
		"replaceHomePageHeader": false,
		"showAIOverlay": false,
		"enableRTS": false,
		"homePage": {
			"containerName": "TopOffers",
			"placement": "Hero,Tile,Tile,Tile",
			"clickaction": "Mashup"
		},
		"accountPage": {
			"containerName": "TopOffers",
			"placement": "Tile",
			"clickaction": "Mashup"
		},
		"phonePage": {
			"containerName": "TopOffers",
			"placement": "Tile",
			"clickaction": "Mashup"
		},
		"offerPage": {
			"containerName": "TopOffers",
			"placement": "Hero,Tile,Tile,Tile",
			"clickaction": "Mashup"
		}
	}
};
