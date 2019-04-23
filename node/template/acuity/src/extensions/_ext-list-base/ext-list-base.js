import React from 'react';
//	import { Utilities as Utils } from "./../../js/utilities.js";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import ExtensionHeader from "../../components/extension-header/extension-header.js";
import { DataGridControl as DataGrid } from "../../components/data-grid/data-grid.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './ext-list-base.css';

export class ExtensionListBase extends ExtBase	//	React.Component
{	
	constructor( props )
	{	//	console.debug( "ExtensionBase.props", props );
		super( props, ExtBase );
		this.Columns =  ( this.props._columns || ExtensionListBase.PropertyBag()._columns ); 
		this.Data = ( this.props._data || ExtensionListBase.PropertyBag()._data );
		return;
	};
	static PropertyBag()
	{
		return {
			_extension: "ExtensionListBase",
			_title: "Extension List Base component",
			_breadcrumb_title: "Extension List Base component",
			_icon: SvgIcon.Icons.Default,
			_hasHeader: true,
			_hasBreadcrumb: true,
			_columns: [
				{ name: "Icon", key: "_icon", visible: true },
				{ name: "Extension Name", key: "_extension", visible: true },
				{ name: "Resource", key: "_title", visible: true },
				{ name: "BreadCrumb Title", key: "_breadcrumb_title", visible: false },
				{ name: "CSS ID", key: "_css_id", visible: false },
				{ name: "CSS PATH", key: "_css_path" },
			],
			_data: [
				//{
				//	_extension: "VirtualMachineExtension",
				//	_title :  "EXAMPLE Virtual Machine One",
				//	_breadcrumb_title: "VM One",
				//	_icon : ExtBase.Icons().Color.VirtualMachines,
				//},
				//{
				//	_extension: "VirtualMachineExtension",
				//	_title :  "EXAMPLE Virtual Machine Two",
				//	_breadcrumb_title: "VM Two",
				//	_icon : ExtBase.Icons().Color.VirtualMachines,
				//},
				//{
				//	_extension: "VirtualMachineExtension",
				//	_title :  "EXAMPLE Virtual Machine Three",
				//	_breadcrumb_title: "VM Three",
				//	_icon : ExtBase.Icons().Color.VirtualMachines,
				//}
			]
		};
	};
	render()
	{
		return (
			<div className="ext-base">
				<ExtensionHeader extBag={this.PropertyBag}></ExtensionHeader>
				<div className="ext-base-content-area">
					<DataGrid Data={this.Data} Columns={this.Columns}></DataGrid>
				</div>
			</div>
		);
	};
};