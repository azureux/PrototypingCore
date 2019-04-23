import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './all-services-ext.css';

export class AllServicesExtension extends ExtBase
{
	constructor( props )
	{	//	console.debug( "AllServicesExtension.props", props );
		super( props );
		return;
	};
	static PropertyBag = {
		_title : "All Azure Services",
		_breadcrumb_title: "All Services",
		_icon: SvgIcon.Extensions.AllServices,
		_path: Utils.FormatPathFromTitle( "All Azure Services" ),
		_hasHeader: false,
		_hasBreadcrumb: true
	};
	ExtRender()
	{
		return (
			<div className="all-services-list-ext">
				<div>{AllServicesExtension.Ext_Title()}</div>
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
