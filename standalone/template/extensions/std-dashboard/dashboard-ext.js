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
		const _extension_header = React.createElement( "div", {
			key: this.Utils.NewKey(),
		}, `${this.Title}` );

		const _grid_panel = React.createElement( "div", {
			key: this.Utils.NewKey(),
		}, "Tiles" );

		const _layout = [
			_extension_header,
			_grid_panel
		];

		return React.createElement( "div", {
			id: this.ID,
			className: this.DefaultCssClass,
		}, _layout );
	};
};
