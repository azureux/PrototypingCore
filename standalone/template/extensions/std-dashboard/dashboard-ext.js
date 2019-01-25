/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { ButtonControl as Button } from "../../components/standard-controls/button/button.js";

export class DashboardExtension extends ExtBase 
{
	constructor( props )
	{
		super( props );
		this.Props = props;
		this.DefaultImage = "/../../img/dashboard/sample-dashboard-01.png";
		this.CurrentTitle = "Contoso Dashboard";
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
	OnClick_DebugButtonHandler(thisButton)
	{
		console.debug( "DashboardExtension::OnClick_DebugButtonHandler" );
		return;
	};
	RenderDashboardHeader()
	{
		const _return_array = [];

		// refactor with dropdown menu control
		const _db_title = React.createElement( "span", {
			key: this.Utils.NewKey(),
			className: "db-title",
		}, `${this.CurrentTitle}` );

		const _dropdown_arrow = React.createElement( "span", {
			key: this.Utils.NewKey(),
			className: "db-chevron",
			dangerouslySetInnerHTML: this.Utils.CreateSvgMarkup( ExtBase.Icons().ChevronDown.SVG ) 
		});

		const _dash = React.createElement( "div", {
			key: this.Utils.NewKey(),
			className: "db-btn"
		}, _db_title, _dropdown_arrow );

		_return_array.push( _dash );


		//	add buttons
		//	add more styles to the buttons control
		//	Button.ClassNames().ButtonControl,
		const _new_dash = React.createElement( Button,
			{
				className: "db-btn",
				attributeTitle: "Create a new dashboard",
				buttonText: "New dashboard",
				Application: this.Props.Application,
				svgIcon: ExtBase.Icons().Add,
				onClickHandler: this.OnClick_DebugButtonHandler,
				key: ExtBase.Utils().NewId()
			} );
		_return_array.push( _new_dash );

		const _upload = React.createElement( Button,
			{
				className: "db-btn",
				attributeTitle: "Create a new dashboard",
				buttonText: "Upload",
				Application: this.Props.Application,
				svgIcon: ExtBase.Icons().Upload,
				onClickHandler: this.OnClick_DebugButtonHandler,
				key: ExtBase.Utils().NewId()
			} );
		_return_array.push( _upload );

		const _download = React.createElement( Button,
			{
				className: "db-btn",
				attributeTitle: "Create a new dashboard",
				buttonText: "Download",
				Application: this.Props.Application,
				svgIcon: ExtBase.Icons().Download,
				onClickHandler: this.OnClick_DebugButtonHandler,
				key: ExtBase.Utils().NewId()
			} );
		_return_array.push( _download );

		const _edit = React.createElement( Button,
			{
				className: "db-btn",	
				attributeTitle: "Create a new dashboard",
				buttonText: "Edit",
				Application: this.Props.Application,
				svgIcon: ExtBase.Icons().Edit,
				onClickHandler: this.OnClick_DebugButtonHandler,
				key: ExtBase.Utils().NewId()
			} );
		_return_array.push( _edit );

		const _share = React.createElement( Button,
			{
				className: "db-btn",
				attributeTitle: "Create a new dashboard",
				buttonText: "Share",
				Application: this.Props.Application,
				svgIcon: ExtBase.Icons().Glyphs.Share ,
				onClickHandler: this.OnClick_DebugButtonHandler,
				key: ExtBase.Utils().NewId()
			} );
		_return_array.push( _share );

		const _fullscreen = React.createElement( Button,
			{
				className: "db-btn",
				attributeTitle: "Create a new dashboard",
				buttonText: "Fullscreen",
				Application: this.Props.Application,
				svgIcon: ExtBase.Icons().Glyphs.ExpandView,
				onClickHandler: this.OnClick_DebugButtonHandler,
				key: ExtBase.Utils().NewId()
			} );
		_return_array.push( _fullscreen );

		const _clone = React.createElement( Button,
			{
				className: "db-btn",
				attributeTitle: "Create a new dashboard",
				buttonText: "Clone",
				Application: this.Props.Application,
				svgIcon: ExtBase.Icons().Clone,
				onClickHandler: this.OnClick_DebugButtonHandler,
				key: ExtBase.Utils().NewId()
			} );
		_return_array.push( _clone );

		const _delete = React.createElement( Button,
			{
				className: "db-btn",
				attributeTitle: "Create a new dashboard",
				buttonText: "Delete",
				Application: this.Props.Application,
				svgIcon: ExtBase.Icons().Delete,
				onClickHandler: this.OnClick_DebugButtonHandler,
				key: ExtBase.Utils().NewId()
			} );
		_return_array.push( _delete );

		const _header = React.createElement( "div", {
			key: this.Utils.NewKey(),
			className: "dashboard-header"
		}, _return_array );

		return _header;
	};
	render()
	{
		const _header = this.RenderDashboardHeader();

		const _splash = React.createElement( "img", {
			key: this.Utils.NewKey(),
			src: this.DefaultImage,
			className: "splash-dash"
		});

		return React.createElement( "div", {
			id: this.ID,
			className: this.DefaultCssClass,
		}, _header,
			_splash );
	};
};
