//	import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
//import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './home-ext.css';

export class HomePageExtension extends ExtBase
{
	constructor( props )
	{
		super( props);
		return;
	};
	static PropertyBag = 
	{
		_title: "Azure Home",
		_breadcrumb_title: "Home",
		_path: "home",
		_icon: SvgIcon.Extensions.AzureHome,
	};
};
