import React from 'react';
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './ext-base.css';

//	BASE CLASS 
export class ExtensionBase extends React.Component
{	
	constructor( props )
	{	//	console.debug( "ExtensionBase.props", props );
		super( props );

		this.Utils = Utils;
		this.ID = Utils.NewId( this._ext_name );

		//	this._ext_name = this.constructor.name;
		this.ExtensionName = this.constructor.name;	//	this.props.PropertyBag._extension;
		this.Path = this.props.PropertyBag._path;
		this.Title = this.props.PropertyBag._title;
		this.SubTitle = this.props.PropertyBag._subtitle;
		this.BreadCrumbTitle = this.props.PropertyBag._breadcrumb_title;
		this.SvgIcon = this.props.PropertyBag._icon;

		//this.Application = props.Application;
		//this.Theme = props.Application.ThemeName;
		this.state = { IsDirty: false };

		this.DefaultCssClass = "ExtensionBase " + this._ext_name;
		this.DefaultCssClassNoBreadCrumb = "ExtensionBase-NoBreadCrumb  " + this._ext_name;
		this.HasBreadCrumb = props.HasBreadCrumb;
		if ( this.HasBreadCrumb === false )
		{
			this.DefaultCssClass = this.DefaultCssClassNoBreadCrumb;
		}
		return;
	};
	static PropertyBag()
	{
		return {
			_title: "Extension Base Component",
			_subtitle: "The javascript base class for \"ExtensionBase\" ",
			_path: Utils.FormatPathFromTitle( "Extension Base Component" ),
			_breadcrumb_title: "breadcrumb short title",
			_icon: SvgIcon.Icons.Default,
			_data : []
		};
	};
	static Key()
	{
		return Utils.NewKey();	//	this.PropertyBag()._key;
	};
	static Title()
	{
		return this.PropertyBag()._title;
	};
	static SubTitle()
	{
		return this.PropertyBag()._subtitle;
	};
	static Path()
	{
		return this.PropertyBag()._path;
	};
	static BreadCrumbTitle()
	{
		return this.PropertyBag()._breadcrumb_title;
	};
	static Icon()
	{
		return this.PropertyBag()._icon;
	};
	static Data()
	{
		return this.PropertyBag()._data;
	};
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
	{
		//const _title = `${this.Title}`;
		//const _icon = React.createElement( "div", {className: "test-icon", dangerouslySetInnerHTML: this.Utils.CreateSvgMarkup( this.SvgIcon.SVG )} );

		//return React.createElement( "div", {
		//	id: this.ID,
		//	className: this.DefaultCssClass,
		//}, _icon, _title );
		return (
			<div id={this.ID} className={this.DefaultCssClass}>
				<SvgIcon icon={this.SvgIcon} />
				<div>{this.Title}</div>
				<div>{this.SubTitle}</div>
			</div>
		);
	};
};