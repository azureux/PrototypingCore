/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";

export class AzureActiveDirectoryExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :  "Azure Active Directory",
			_breadcrumb_title: "AZure AD",
			_icon : ExtBase.Icons().Color.ActiveDirectory,
			_css_id : "azure-ad-css",
			_css_path : "extensions/azure-active-directory/azure-active-directory.css"
		};
	};
};
