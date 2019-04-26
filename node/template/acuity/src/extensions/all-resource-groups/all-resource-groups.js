//	import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './all-resource-groups.css';

export class AllResourceGroupsExtension extends ExtBase
{
	static defaultProps = {
		Title: "All resource groups",
		Subtitle: "Resource groups in your subscriptions",
		Path: Utils.FormatPathFromTitle( "resource groups" ),
		BreadcrumbTitle: "Resource groups",
		Icon: SvgIcon.Icons.Default,
		//IsSelected: false,
		//HasHeader: true,
		//HasHeaderDocLink: false,
		//HasBreadcrumb: true,
		//Columns: [],
		//Data: []
	};
	constructor( props )
	{
		super( props );
		return;
	};
	//ExtRender()
	//{
	//	return (
	//		<div className="all-res-groups-ext">
	//			<div>{this.Title}</div>
	//		</div>
	//	);
	//};
};
