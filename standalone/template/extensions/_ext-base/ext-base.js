/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { Utilities as Utils } from "../../../js/utilities.js";
import { SVG as AzureSvgs } from "../../../js/svg-assets.js";

const ExtensionBase_PropertyBag = {
	_title : "Extension Base component",
	_icon :  AzureSvgs.Color.ResourceGroup,
	_css_id : "ExtensionBase",
	_css_path: "extensions/_ext-base/ext-base.css",
};

export class ExtensionBase extends React.Component
{	
	constructor( props )
	{	//	console.debug( "ExtensionBase.props", props );
		super( props );

		this.Utils = Utils;
		//	this.Key = ( props.key || this.Utils.NewKey() );
		this.Application = props.Application;
		this.Theme = props.Application.props.Theme;
		this.state = { IsDirty: false };

		// base class 
		this._ext_name = this.constructor.name;
		this.ID = Utils.NewId( this._ext_name );
		this.DefaultCssClass = "ExtensionBase " + this._ext_name;

		this.BaseCssId = "ext-base-css";
		this.BaseCssPath = "extensions/_ext-base/ext-base.css";
		this.Init( ExtensionBase_PropertyBag );
		return;
	};
	Init(_property_bag)
	{
		this.Title = _property_bag._title;
		this.SvgIcon = _property_bag._icon;
        this.CssFileID = _property_bag._css_id;
		this.CssFile = _property_bag._css_path;
		return;
	};
	static Icons()
	{
		return AzureSvgs;
	};
	static Title()
	{
		return ExtensionBase_PropertyBag._title;
	};
	static Icon()
	{
		return ExtensionBase_PropertyBag._icon;
	};
	componentWillMount()
	{
		//	console.debug( "componentWillMount" );
		return;
	};
	componentDidMount()
	{
		//	console.debug( "componentDidMount" );
		this.Utils.InjectControlCss( this.BaseCssId, this.BaseCssPath );
		this.Utils.InjectControlCss( this.CssFileID, this.CssFile );
		return;
	};
	componentWillUnmount()
	{
		//	console.debug( "componentWillUnmount--REMOVE CSS" );
		this.Utils.RemoveInjectedCss( this.CssFileID, this.CssFile );
		return;
	};
	render()
	{
		const _title = `${this.Title}`;
		const _icon = React.createElement( "div", {className: "test-icon", dangerouslySetInnerHTML: this.Utils.CreateSvgMarkup( this.SvgIcon.SVG )} );

		return React.createElement( "div", {
			id: this.ID,
			className: this.DefaultCssClass,
		}, _icon, _title );
	};
};