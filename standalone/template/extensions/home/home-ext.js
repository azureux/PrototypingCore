/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";

const HomePage_PropertyBag = {
	_title :  "My Azure Home Page",
	_icon : ExtBase.Icons().AvatarDefault,
	_css_id : "home-page-css",
	_css_path : "extensions/home/home-ext.css"
};

export class HomePageExtension extends ExtBase
{
	constructor( props )
	{
		super( props );

		this.Init( HomePage_PropertyBag );
		this.Utils.InjectControlCss(this.CssFileID, this.CssFile);
		return;
	};
	static Title()
	{
		return HomePage_PropertyBag._title;
	};
	static Icon()
	{
		return HomePage_PropertyBag._icon;
	};
};
