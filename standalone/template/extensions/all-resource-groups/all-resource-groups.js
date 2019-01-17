/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { ExtensionHeader as Header } from "../../components/standard-controls/extension-header/extension-header.js";

export class AllResourceGroupsExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :  "Resource Groups",
			_breadcrumb_title: "Resources Groups",
			_icon : ExtBase.Icons().Color.ResourceGroup,
			_css_id : "all-res-css",
			_css_path : "extensions/all-resources-grousp/all-resources-grousp.css"
		};
	};
};
