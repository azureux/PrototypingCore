/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { Utilities as Utils } from "../../../js/utilities.js";
import { SVG as AzureSvgs } from "../../../js/svg-assets.js";

// extension base
// DEBATING ON USING THIS AS A BASE CLASS
// REACT RENDER CAN STILL OVERRIDE THIS DEFAILT BASE RENDER
export class ExtensionBase extends React.Component
{	// methods in order, constructor first, render last, events & function in the middle
	constructor( props )
	{
		//	console.debug( "ExtensionBase.props", props );
		super( props );

		//properties
		this.Icons = AzureSvgs;
		this._ext_name = "extension-base-class";
		this.ID = Utils.NewId( this._ext_name );
		this.Title = "Extension Base compoent";
		this.Application = props.Application;
		this.Theme = props.Application.props.Theme;
        this.CssFileID = "ext-base-css";
		this.CssFile = "extensions/_ext-base/ext-base.css";
		this.DefaultCssClass = "ext-base-css";
		this.SvgIcon = this.Icons.Color.ResourceGroup;
		this.state = { IsDirty: false };

		// INJECT CSS
		Utils.InjectControlCss( this.CssFileID, this.CssFile );
		return;
	};
	static GetTItle()
	{ return this.Title; };
	render()
	{
		const _title = `${this.Title}`;
		const _icon = React.createElement( "div", {className: "test-icon", dangerouslySetInnerHTML: Utils.CreateSvgMarkup( this.SvgIcon.SVG )} );

		return React.createElement( "div", {
			id: this.ID,
			className: this.DefaultCssClass,
		}, _icon, _title );
	};
};
