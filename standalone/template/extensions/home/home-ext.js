/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />

"use strict";
import { Utilities as Utils } from "../../../js/utilities.js";
//	import { SVG as AzureSvgs } from "../../../js/svg-assets.js";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";

// extension base
export class HomePageExtension extends ExtBase//	React.Component
{	// methods in order, constructor first, render last, events & function in the middle
	constructor( props )
	{
		//	console.debug( "HomePageExtension .props", props );
		super( props );

		this._ext_name = "home-page-ext";
		this.ID = Utils.NewId( this._ext_name );
		this.Title = "My Azure Home Page";
        this.CssFileID = "home-page-css";
		this.CssFile = "extensions/home/home-ext.css";
		this.DefaultCssClass = this._ext_name;
		this.SvgIcon = this.Icons.AvatarDefault;
		this.Theme = props.Application.props.Theme;

		// INJECT CSS
		Utils.InjectControlCss(this.CssFileID, this.CssFile);
		return;
	};
};
