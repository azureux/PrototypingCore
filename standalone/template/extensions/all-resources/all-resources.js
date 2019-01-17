/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { ExtensionHeader as Header } from "../../components/standard-controls/extension-header/extension-header.js";

export class AllResourcesExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :  "All resources",
			_breadcrumb_title: "All resources",
			_icon : ExtBase.Icons().Color.AllResources_color,
			_css_id : "all-resources-css",
			_css_path : "extensions/all-resources/all-resources.css"
		};
	};
};
