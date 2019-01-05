/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { Utilities as Utils } from "../../../js/utilities.js";
//import { SVG as AzureSvgs } from "../../../js/svg-assets.js";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";

export class CreateNewExtension extends ExtBase
{
	constructor( props )
	{
		//	console.debug( "CreateNewExtension.props", props );
		super( props );

		this._ext_name = "create-new-ext";
		this.ID = Utils.NewId( this._ext_name );
		this.Title = "Create New";
        this.CssFileID = "create-new-css";
		this.CssFile = "extensions/create/create-new-ext.css";
		this.DefaultCssClass = this._ext_name;
		this.SvgIcon = this.Icons.Color.Marketplace_color;
		this.Theme = props.Application.props.Theme;

		// INJECT CSS
		Utils.InjectControlCss(this.CssFileID, this.CssFile);
		return;
	};
	render()
	{
		const _title = React.createElement( "div", { className: "test-title" },`${this.Title}`);

		const _icon = React.createElement( "div", { className: "test-icon", dangerouslySetInnerHTML: Utils.CreateSvgMarkup( this.SvgIcon.SVG ) } );

		return React.createElement( "div", {
			id: this.ID,
			className: this.DefaultCssClass,
		}, _title, _icon);
	};
};
