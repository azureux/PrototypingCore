/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";

export class HomePageExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :  "My Azure Home Page",
			_breadcrumb_title: "Home",
			_icon : ExtBase.Icons().AvatarDefault,
			_css_id : "home-page-css",
			_css_path : "extensions/std-home/home-ext.css"
		};
	};
};
