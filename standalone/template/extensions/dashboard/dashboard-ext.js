/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";

const Dashboard_PropertyBag = {
	_title : "My Azure Dashboard",
	_icon : ExtBase.Icons().Color.Dashboard,
	_css_id : "dashboard-ext-css",
	_css_path : "extensions/dashboard/dashboard-ext.css"
};

export class DashboardExtension extends ExtBase 
{
	constructor( props )
	{
		super( props );

		this.Init( Dashboard_PropertyBag );
		this.Utils.InjectControlCss(this.CssFileID, this.CssFile);
		return;
	};
	static Title()
	{
		return Dashboard_PropertyBag._title;
	};
	static Icon()
	{
		return Dashboard_PropertyBag._icon;
	};

};
