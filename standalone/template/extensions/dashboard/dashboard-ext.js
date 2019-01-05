/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />

"use strict";
import { Utilities as Utils } from "../../../js/utilities.js";
//	import { SVG as AzureSvgs } from "../../../js/svg-assets.js";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";


// extension base
export class DashboardExtension extends ExtBase // React.Component	//	React.Component
{	// methods in order, constructor first, render last, events & function in the middle
	constructor( props )
	{
		//	console.debug( "DashboardExtension.props", props );
		super( props );

		this._ext_name = "dashboard-extension";
		this.ID = Utils.NewId( this._ext_name );
		this.Title = "My Azure Dashboard";
        this.CssFileID = "dashboard-ext-css";
		this.CssFile = "extensions/dashboard/dashboard-ext.css";
		this.DefaultCssClass = this._ext_name;
		this.SvgIcon = this.Icons.Color.Dashboard;
		this.Theme = props.Application.props.Theme;

		// INJECT CSS
		Utils.InjectControlCss(this.CssFileID, this.CssFile);
		return;
	};
};
