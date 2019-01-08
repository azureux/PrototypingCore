/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";

const AllServices_PropertyBag = {
	_title : "All Services",
	_icon : ExtBase.Icons().Color.Alerts_color,
	_css_id : "all-services-css",
	_css_path : "extensions/all-services/all-services-ext.css"
};

export class AllServicesExtension extends ExtBase
{
	constructor( props )
	{	//	console.debug( "AllServicesExtension.props", props );
		super( props );

		this.Init( AllServices_PropertyBag );

		this.Utils.InjectControlCss(this.CssFileID, this.CssFile);
		return;
	};
	static Title()
	{
		return AllServices_PropertyBag._title;
	};
	static Icon()
	{
		return AllServices_PropertyBag._icon;
	};
};
