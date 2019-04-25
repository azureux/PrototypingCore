import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './home-ext.css';
import BackgroundImage from './azure-home-page-01.png';

export class HomePageExtension extends ExtBase
{
	static defaultProps = {
		Title: "Azure Portal Home",
		Subtitle: "https://contoso.microsoft.com - pre-production web server",
		Path: Utils.FormatPathFromTitle( "home" ),
		BreadcrumbTitle: "Home",
		Icon: SvgIcon.Extensions.AzureHome,
		IsSelected: false,
		HasHeader: false,
		HasBreadcrumb: false,
		Columns: [],
		Data: []
	};
	//constructor( props )
	//{
	//	super( props);
	//	return;
	//};
	ExtRender()
	{
		return (
			<div className="home-ext">
				<div>{this.Title}</div>
				<img src={BackgroundImage} alt="Azure Home Page" />
			</div>
		);
	};
};
