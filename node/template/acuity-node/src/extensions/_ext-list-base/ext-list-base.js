import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { ExtensionHeader as Header } from "../../components/extension-header/extension-header.js";
import { DataGridControl as DataGrid } from "../../components/data-grid/data-grid.js";

export class ExtensionListBase extends ExtBase	//	React.Component
{	
	constructor( props )
	{	//	console.debug( "ExtensionBase.props", props );
		super( props, ExtBase );
		// these are assigned in "ExtBase"
		// base class 
		//this._ext_name = this.constructor.name;
		//this.ID = this.Utils.NewId( this._ext_name );
		//this.DefaultCssClass = "ExtensionBase " + this._ext_name;
		//this.Utils = ExtBase.Utils();
		//this.Application = props.Application;
		//this.Theme = props.Application.props.Theme;
		//this.state = { IsDirty: false };
		//this.ExtensionName = this.props.PropertyBag._extension;
		//this.Title = this.props.PropertyBag._title;
		//this.BreadCrumbTitle = this.props.PropertyBag._breadcrumb_title;
		//this.SvgIcon = this.props.PropertyBag._icon;
		//this.CssFileID = this.props.PropertyBag._css_id;
		//this.CssFile = this.props.PropertyBag._css_path;
		this.Columns =  ( this.props.PropertyBag._columns || ExtensionListBase.PropertyBag()._columns ); 
		this.Data = ( this.props.PropertyBag._data || ExtensionListBase.PropertyBag()._data );
		this.BaseCssId = "ext-list-base-css";
		this.BaseCssPath = "extensions/_ext-list-base/ext-list-base.css";
		return;
	};
	static PropertyBag()
	{
		return {
			_extension: "ExtensionListBase",
			_title: "Extension List Base component",
			_breadcrumb_title: "Extension List Base component",
			_icon :  ExtBase.Icons().Color.ResourceGroup,
			_css_id : "ExtensionListBase",
			_css_path: "extensions/_ext-list-base/ext-list-base.css",
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
				//	_css_id : "vm-ext-css",
				//	_css_path : "extensions/virtual-machine/vm-ext.css"
				//},
				//{
				//	_extension: "VirtualMachineExtension",
				//	_title :  "EXAMPLE Virtual Machine Two",
				//	_breadcrumb_title: "VM Two",
				//	_icon : ExtBase.Icons().Color.VirtualMachines,
				//	_css_id : "vm-ext-css",
				//	_css_path : "extensions/virtual-machine/vm-ext.css"
				//},
				//{
				//	_extension: "VirtualMachineExtension",
				//	_title :  "EXAMPLE Virtual Machine Three",
				//	_breadcrumb_title: "VM Three",
				//	_icon : ExtBase.Icons().Color.VirtualMachines,
				//	_css_id : "vm-ext-css",
				//	_css_path : "extensions/virtual-machine/vm-ext.css"
				//}
			]
		};
	};
	render()
	{
		// may need other controls
		const _header = React.createElement( Header, {
			key: ExtBase.Utils().NewKey(),
			Title: this.Title,
			SvgIcon: this.SvgIcon,
			Application: this.Application,
			extensionObject: this
		} );

		const _data_grid = React.createElement( DataGrid, {
			key: ExtBase.Utils().NewKey(),
			Application: this.Application,
			Data: this.Data,
			Columns: this.Columns,
			//SortDirection: ExtBase.Utils().SortType().DEFAULT
		} );

		return React.createElement( "div", {
			id: this.ID,
			className: this.DefaultCssClass,
		}, _header, _data_grid );
	};
};