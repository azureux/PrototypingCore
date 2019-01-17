/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { ExtensionHeader as Header } from "../../components/standard-controls/extension-header/extension-header.js";

export class AllServicesExtension extends ExtBase
{
	constructor( props )
	{	//	console.debug( "AllServicesExtension.props", props );
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title : "All Services",
			_breadcrumb_title: "Services",
			_icon : ExtBase.Icons().Color.Alerts_color,
			_css_id : "all-services-css",
			_css_path : "extensions/all-services/all-services-ext.css"
		};
	};
};
