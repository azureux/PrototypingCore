import React from 'react';
import { ExtensionBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import { TestData as AllResourcesTestData } from './test-data.js';
import './all-resources.css';

export class AllResourcesExtension extends ExtensionBase
{
	static defaultProps = {
		Title: "All resources",
		Subtitle: "Currently allocated resources in your directory",
		Path: Utils.FormatPathFromTitle( "All your resources belong to us" ),
		BreadcrumbTitle: "Virtual machine 0123",
		Icon: SvgIcon.Icons.Default,
		IsSelected: false,
		HasHeader: false,
		HasBreadcrumb: true,
		Columns: [
			{ name: "Resource", key: "_title", visible: true },
			{ name: "Icon", key: "_icon", visible: true },
			{ name: "BreadCrumb Title", key: "_breadcrumb_title", visible: true },
			{ name: "Extension Name", key: "_extension", visible: true },
			{ name: "CSS ID", key: "_css_id", visible: true },
			{ name: "CSS PATH", key: "_css_path", visible: true },
		],
		Data: AllResourcesTestData
	};
	//constructor( props )
	//{
	//	super( props );
	//	return;
	//};
	ExtRender()
	{ 
		return (
			<div className="all-res-list-ext">
				<div>{this.Title}</div>
			</div>
		);
	};
};
