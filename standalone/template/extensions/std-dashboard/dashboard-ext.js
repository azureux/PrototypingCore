/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";

export class DashboardExtension extends ExtBase 
{
	constructor( props )
	{
		super( props );

		this.DefaultImage = "/../../img/dashboard/sample-dashboard-01.png";
		this.Title = "Contoso Dashboard";
		return;
	};
	static PropertyBag()
	{
		return  {
			_title: "Dashboard",
			_breadcrumb_title: "Dashboard",
			_icon : ExtBase.Icons().Color.Dashboard,
			_css_id : "dashboard-ext-css",
			_css_path : "extensions/std-dashboard/dashboard-ext.css"
		};
	};
	render()
	{
		const _dash = React.createElement( "span", {
			key: this.Utils.NewKey(),
			className: "dash-title-panel"
		}, `${this.Title}` );

		// add buttons bars

		const _extension_header = React.createElement( "div", {
			key: this.Utils.NewKey(),
			className: "dashboard-header"
		}, _dash );

		let _splash = React.createElement( "img", {
			key: this.Utils.NewKey(),
			src: this.DefaultImage,
			className: "splash-dash"
		});

		const _layout = [
			_extension_header,
			_splash
		];

		return React.createElement( "div", {
			id: this.ID,
			className: this.DefaultCssClass,
		}, _layout );
	};
};
