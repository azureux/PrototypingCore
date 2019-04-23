import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './home-ext.css';
import BackgroundImage from './azure-home-page-01.png';

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
		_hasHeader: false,
		_hasBreadcrumb: false
	};
	ExtRender()
	{
		return (
			<div className="home-ext">
				<div>{HomePageExtension.Ext_Title()}</div>
				<img src={BackgroundImage} alt="Azure Home Page" />
			</div>
		);
	};
};
