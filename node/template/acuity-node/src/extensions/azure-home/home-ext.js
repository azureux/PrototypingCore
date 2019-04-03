﻿/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />

"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { ButtonControl as Button } from "../../components/standard-controls/button/button.js"; 

export class HomePageExtension extends ExtBase
{
	constructor( props )
	{
		super( props);
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :  "Home",
			_breadcrumb_title: "Home",
			_icon : ExtBase.Icons().Color.Home,
			_css_id : "home-page-css",
			_css_path : "extensions/std-home/home-ext.css"
		};
	};
};
