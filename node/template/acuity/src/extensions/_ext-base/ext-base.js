import React from 'react';
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './ext-base.css';

//	BASE CLASS 
//class _PropertyBag
//{
//	constructor()
//	{
//		this.Name = "Property Bag";
//		this._path = undefined;
//		this._title = undefined;
//		this._subtitle = undefined;
//		this._breadcrumb_title = undefined;
//		this._icon = undefined;
//		this._data = undefined;
//		this._is_selected = undefined;
//	};
//	return;
//};
export class ExtensionBase extends React.Component
{	
	constructor( props )
	{
		//	console.debug( "ExtensionBase.props", props );
		super( props );

		//this.Application = props.Application;
		//this.Theme = props.Application.ThemeName;
		this.state = { IsDirty: false };

		this.Utils = Utils;
		this.ID = Utils.NewId( this._ext_name );

		this.ExtensionName = this.constructor.name;
		this.Path = ( this.props._path || "/" );
		this.Title = ( this.props._title || this.ExtensionName);
		this.SubTitle = ( this.props._subtitle || "ExtensionBase Subtitle");
		this.BreadCrumbTitle = ( this.props._breadcrumb_title || "ExtensionBase breadcrumb" );
		this.SvgIcon = ( this.props._icon || SvgIcon.Icons.Default );

		// string boolean for render() hacks
		this.IsSelected = ( this.props._selected || false );

		this.DefaultCssClass = "ExtensionBase " + this.ExtensionName;
		this.DefaultCssClassNoBreadCrumb = "ExtensionBase-NoBreadCrumb  " + this.ExtensionName;
		this.HasBreadCrumb = (this.props.HasBreadCrumb || false);
		if ( this.HasBreadCrumb === false )
		{
			this.DefaultCssClass = this.DefaultCssClassNoBreadCrumb;
		}
		return;
	};
	static PropertyBag =
	{
		_title: "Extension Base Component",
		_subtitle: "The javascript base class for \"ExtensionBase\" ",
		_path: Utils.FormatPathFromTitle( "Extension Base Component" ),
		_breadcrumb_title: "breadcrumb short title",
			_icon: SvgIcon.Icons.Default,
		_selected: "false",
		_data : []
	};
	static Ext_Key() { return Utils.NewKey(); };
	static Ext_Name() { return this.ExtensionName; };
	static Ext_Title() { return this.PropertyBag._title; };
	static Ext_SubTitle() { return this.PropertyBag._subtitle; };
	static Ext_Path() { return this.PropertyBag._path; };	
	static Ext_BreadCrumbTitle() { return this.PropertyBag._breadcrumb_title; };
	static Ext_Icon() { return this.PropertyBag._icon; };
	static Ext_Data() { return this.PropertyBag._data; };
	static Ext_IsSelected() { return this.PropertyBag._selected; };
	componentWillMount()
	{
		//	console.debug( "componentWillMount" );
		return;
	};
	componentDidMount()
	{
		//	console.debug( "componentDidMount" );
		//	this.Init( ExtensionBase_PropertyBag );
		//	this.Init();
		//this.Utils.InjectControlCss( this.BaseCssId, this.BaseCssPath );
		//this.Utils.InjectControlCss( this.CssFileID, this.CssFile );
		return;
	};
	componentWillUnmount()
	{
		//	console.debug( "componentWillUnmount--REMOVE CSS" );
		//this.Utils.RemoveInjectedCss( this.CssFileID, this.CssFile );
		return;
	};
	render()
	{	//	console.debug( "ExtBase.render.this.Selected", this.Selected );
		//<div>HasBreadCrumb: {this.HasBreadCrumb}</div>
		//<div>DefaultCssClass: {this.DefaultCssClass}</div>
		return (
			<div className="debug">
				<SvgIcon icon={this.SvgIcon} />
				<div>ID: {this.ID}</div>
				<div>ExtensionName: {this.ExtensionName}</div>
				<div>Title: {this.Title}</div>
				<div>SubTitle: {this.SubTitle}</div>
				<div>BreadCrumbTitle: {this.BreadCrumbTitle}</div>
				<div>Selected: {this.IsSelected}</div>
			</div>
		);
	};
};