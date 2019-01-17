/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { ExtensionHeader as Header } from "../../components/standard-controls/extension-header/extension-header.js";

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
		//this.Data = ( this.props.PropertyBag._data || ExtensionListBase.Data() );
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
			_data: [
				{
					_extension: "VirtualMachineExtension",
					_title :  "EXAMPLE Virtual Machine One",
					_breadcrumb_title: "VM One",
					_icon : ExtBase.Icons().Color.VirtualMachines,
					_css_id : "vm-ext-css",
					_css_path : "extensions/virtual-machine/vm-ext.css"
				},
				{
					_extension: "VirtualMachineExtension",
					_title :  "EXAMPLE Virtual Machine Two",
					_breadcrumb_title: "VM Two",
					_icon : ExtBase.Icons().Color.VirtualMachines,
					_css_id : "vm-ext-css",
					_css_path : "extensions/virtual-machine/vm-ext.css"
				},
				{
					_extension: "VirtualMachineExtension",
					_title :  "EXAMPLE Virtual Machine Three",
					_breadcrumb_title: "VM Three",
					_icon : ExtBase.Icons().Color.VirtualMachines,
					_css_id : "vm-ext-css",
					_css_path : "extensions/virtual-machine/vm-ext.css"
				}
			]
		};
	};

	render()
	{
		const _header = React.createElement( Header, {
			key: ExtBase.Utils().NewKey(),
			Title: this.Title,
			SvgIcon: this.SvgIcon,
			Application: this.Application,
			extensionObject: this
		} );

		console.debug( "this.Data", this.Data );
		let _formatted_data = [];

		this.Data.forEach( function ( v, i, a )
		{
			const _row_icon = React.createElement( "td", { key:ExtBase.Utils().NewKey(), className: "grid-cell icon", dangerouslySetInnerHTML: ExtBase.Utils().CreateSvgMarkup( v._icon.SVG )} );
			const _row_ext_name = React.createElement( "td", { key:ExtBase.Utils().NewKey(), className: "grid-cell" }, v._extension );
			const _row_name = React.createElement( "td", { key:ExtBase.Utils().NewKey(), className: "grid-cell" }, v._title );
			const _row = React.createElement( "tr", { key:ExtBase.Utils().NewKey(), className: "grid-row" }, [_row_icon, _row_ext_name, _row_name] );

			_formatted_data.push( _row );
			return;
		} );
		const _grid_header_row = React.createElement( "tbody", { className: "grid-tbody"},_formatted_data); 
		const _grid_table = React.createElement( "table", { className: "grid-table"},_grid_header_row);


		return React.createElement( "div", {
			id: this.ID,
			className: this.DefaultCssClass,
		}, _header, _grid_table );
	};
};