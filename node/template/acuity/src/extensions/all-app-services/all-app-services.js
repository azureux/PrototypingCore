//	import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './all-app-services.css';

export class AllAppServicesExtension extends ExtBase
{
	static defaultProps = {
		Title: "All App services",
		Subtitle: "All App services in your directory",
		Path: Utils.FormatPathFromTitle( "all-app-services" ),
		BreadcrumbTitle: "App services",
		Icon: SvgIcon.Extensions.AppServices,
		IsSelected: false,
		HasHeader: true,
		HasBreadcrumb: true,
		//Columns: [],
		//Data: []
	};
	constructor( props )
	{
		super( props );
		return;
	};
	//static PropertyBag= {
	//	_title :  "All App services",
	//	_breadcrumb_title: "App services",
	//	_icon: SvgIcon.Extensions.AppServices,
	//	_path: Utils.FormatPathFromTitle( "App services" ),
	//	_hasHeader: true,
	//	_hasBreadcrumb: true
	//};
	//ExtRender()
	//{
	//	return (
	//		<div className="all-app-services-ext">
	//			<div>{AllAppServicesExtension.Ext_Title()}</div>
	//		</div>
	//	);
	//};
};
