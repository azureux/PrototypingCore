import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './dashboard-ext.css';
import BackgroundImage from './azure-dash-page-01.png';

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
		_icon: SvgIcon.Extensions.AzureDashboard,
		_hasHeader: false,
		_hasBreadcrumb: false
	};
	ExtRender()
	{
		return (
			<div className="dash-ext">
				<div>Dashboard</div>
				<img src={BackgroundImage} alt="Azure Portal Dashboard" />
			</div>
		);
	};
	//OnClick_DebugButtonHandler(thisButton)
	//{
	//	console.debug( "DashboardExtension::OnClick_DebugButtonHandler" );
	//	return;
	//};
};
