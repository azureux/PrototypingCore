/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />

"use strict";
import { Utilities as Utils } from "../../../js/utilities.js";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";

// extension base
export class AllServicesExtension extends ExtBase //	React.Component
{	// methods in order, constructor first, render last, events & function in the middle
	constructor( props )
	{
		//	console.debug( "AllServicesExtension.props", props );
		super( props );

		//properties
		this._ext_name = "all-services-ext";
		this.ID = ( this.props.id || Utils.NewId( this._ext_name ) );
		this.Title = "All Services";
		//	this.Application = props.Application;
		this.Theme = props.Application.props.Theme;
        this.CssFileID = this._ext_name + "-css";
		this.CssFile = "extensions/all-services/all-services-ext.css";
		this.DefaultCssClass = this._ext_name;
		this.SvgIcon = this.Icons.Color.Alerts_color;

		// INJECT CSS
		Utils.InjectControlCss(this.CssFileID, this.CssFile);

		return;
	};
	//render()
	//{
	//	return React.createElement( 'div', {
	//		id: this.ID,
	//		className: this.DefaultCssClass,
	//	}, `${this.Title}` );
	//};
};
