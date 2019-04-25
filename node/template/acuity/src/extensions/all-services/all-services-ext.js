import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './all-services-ext.css';

export class AllServicesExtension extends ExtBase
{
	static defaultProps = {
		Title: "All Services",
		Subtitle: "Services available on Azure",
		Path: Utils.FormatPathFromTitle( "all services" ),
		BreadcrumbTitle: "All services",
		Icon: SvgIcon.Extensions.AllServices,
		IsSelected: false,
		HasHeader: true,
		HasBreadcrumb: true,
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
			<div className="all-services-list-ext">
				<div>{this.Title}</div>
				{
					this.props.debug === true &&
					<h1 className="debug-on">debug: prototype</h1>
				}
				{
					this.props.debug === false &&
					<h1 className="debug-off">debug: preview</h1>
				}

			</div>
		);
	};
};
