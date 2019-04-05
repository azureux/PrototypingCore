import React from 'react';
import { Utilities as Utils } from "./../../js/utilities.js";
import { SVG as Svgs } from "./../../js/svg-assets.js";
//	import { ButtonControl as Button } from "../../components/standard-controls/button/button.js";

export class ExtensionBase extends React.Component
{	
	constructor( props )
	{	//	console.debug( "ExtensionBase.props", props );
		super( props );

		this.Utils = Utils;
		this.Key = Utils.NewKey();

		this.Application = props.Application;
		this.Theme = props.Application.ThemeName;
		this.state = { IsDirty: false };

		// base class 
		this._ext_name = this.constructor.name;
		this.ID = Utils.NewId( this._ext_name );
		this.DefaultCssClass = "ExtensionBase " + this._ext_name;
		this.DefaultCssClassNoBreadCrumb = "ExtensionBase-NoBreadCrumb  " + this._ext_name;

		this.BaseCssId = "ext-base-css";
		this.BaseCssPath = "extensions/_ext-base/ext-base.css";

		this.ExtensionName = this.props.PropertyBag._extension;
		this.Path = this.props.PropertyBag._path;
		this.Title = this.props.PropertyBag._title;
		this.BreadCrumbTitle = this.props.PropertyBag._breadcrumb_title;
		this.SvgIcon = this.props.PropertyBag._icon;
        this.CssFileID = this.props.PropertyBag._css_id;
		this.CssFile = this.props.PropertyBag._css_path;

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
			_key: Utils.NewKey(),
			_title: "Extension Base component",
			_path: "/foo",
			_breadcrumb_title: "breadcrumb short title",
			_icon :  Svgs.Color.ResourceGroup,
			_css_id : "ExtensionBase",
			_css_path: "extensions/_ext-base/ext-base.css",
			_data : []
		};
	};
	static Utils()
	{
		return Utils;
	};
	static Icons()
	{
		return Svgs;
	};
	static Key()
	{
		return this.PropertyBag()._key;
	};
	static Title()
	{
		//return ExtensionBase_PropertyBag._title;
		return this.PropertyBag()._title;
	};
	static Path()
	{
		return this.PropertyBag()._path;
	};
	static BreadCrumbTitle()
	{
		//return ExtensionBase_PropertyBag._breadcrumb_title;
		return this.PropertyBag()._breadcrumb_title;
	};
	static Icon()
	{
		//	return ExtensionBase_PropertyBag._icon;
		return this.PropertyBag()._icon;
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
	//render()
	//{
	//	const _title = `${this.Title}`;
	//	const _icon = React.createElement( "div", {className: "test-icon", dangerouslySetInnerHTML: this.Utils.CreateSvgMarkup( this.SvgIcon.SVG )} );

	//	return React.createElement( "div", {
	//		id: this.ID,
	//		className: this.DefaultCssClass,
	//	}, _icon, _title );
	//};
};