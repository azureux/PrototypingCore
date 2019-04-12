//import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
//import { Utilities as Utils } from "./../../js/utilities.js";
//import { ButtonControl as Button } from "../../components/button/button.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './dashboard-ext.css';

export class DashboardExtension extends ExtBase 
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag = {
		_title: "Azure Dashboard",
		_breadcrumb_title: "Dashboard",
		_path: "dashboard",
		_icon: SvgIcon.Extensions.AzureDashboard
	};
	OnClick_DebugButtonHandler(thisButton)
	{
		console.debug( "DashboardExtension::OnClick_DebugButtonHandler" );
		return;
	};
};
