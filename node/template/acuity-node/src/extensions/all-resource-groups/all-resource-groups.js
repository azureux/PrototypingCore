//	import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
//	import { ExtensionHeader as Header } from "../../components/extension-header/extension-header.js";

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
			_title: "Resource Groups",
			_path: "/resource-groups",
			_breadcrumb_title: "Resources Groups",
			_icon : ExtBase.Icons().Color.ResourceGroup,
			_css_id : "all-res-css",
			_css_path : "extensions/all-resource-groups/all-resource-groups.css"
		};
	};
};
