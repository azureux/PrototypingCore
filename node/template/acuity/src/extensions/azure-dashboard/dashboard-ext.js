import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './dashboard-ext.css';
import BackgroundImage from './azure-dash-page-01.png';

export class DashboardExtension extends ExtBase 
{
	static defaultProps = {
		Title: "Azure Dashboard",
		Subtitle: "https://contoso.microsoft.com - pre-production web server",
		Path: Utils.FormatPathFromTitle( "dashboard" ),
		BreadcrumbTitle: "Dashboard",
		Icon: SvgIcon.Extensions.AzureDashboard,
		IsSelected: false,
		HasHeader: false,
		HasBreadcrumb: false,
		Columns: [],
		Data: []
	};
	//constructor( props )
	//{
	//	super( props );
	//	return;
	//};
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
