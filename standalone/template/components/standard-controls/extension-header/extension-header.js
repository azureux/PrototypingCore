/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
"use strict";
import { Utilities as Utils } from "../../../js/utilities.js";
import { SVG as AzureSvgs } from "../../../js/svg-assets.js";
import { ButtonControl as Btn } from "../../standard-controls/button/button.js";

export class ExtensionHeader extends React.Component
{
	constructor( props )
	{
		super( props );

		this.Utils = Utils;
		this.Application = props.Application;
		this.Extension = props.Application.CurrentExtension;
		this._internal_name = this.constructor.name;
		this.Title = props.Title || this._internal_name;
		this.SubTitle = ( props.SubTitle || "Microsoft Corporation" );
		this.SvgIcon = ( props.SvgIcon || AzureSvgs.Color.ResourceGroup);
        this.CssFileID = this._internal_name;
		this.CssFile = "components/custom-controls/extension-header/extension-header.css";
		this.DefaultCssClass = this._internal_name;

		this.state = {};

		this.OnClick_Close = this.Application.Reset_CurrentExtenssion.bind( this.Application );
		this.OnClick_Pin = this.Application.OnClick_PinCurrentExtension.bind( this.Application );

		return;
	};
	componentWillMount()
	{	//	console.debug( "componentWillMount" );
		return;
	};
	componentDidMount()
	{	//	console.debug( "componentDidMount" );
		this.Utils.InjectControlCss( this.CssFileID, this.CssFile );
		return;
	};
	componentWillUnmount()
	{	//	console.debug( "componentWillUnmount--REMOVE CSS" );
		this.Utils.RemoveInjectedCss( this.CssFileID, this.CssFile );
		return;
	};
	render()
	{	//	console.debug( "ExtensionHeader::render" );	//	, this.state, this.props );
		const _title = React.createElement( "div", { className: "header-title" }, `${this.Title}` );
		const _sub_title = React.createElement( "div", { className: "header-sub-title" }, `${this.SubTitle}` );
		const _icon = React.createElement( "div", { className: "header-icon", dangerouslySetInnerHTML: this.Utils.CreateSvgMarkup( this.SvgIcon.SVG ) } );

		const _pin = React.createElement( "a", {
			className: "header-pin",
			dangerouslySetInnerHTML: this.Utils.CreateSvgMarkup( AzureSvgs.Pin.SVG ),
			onClick: this.OnClick_Pin,
			dataextname: this.Extension.type.name
		} );

		const _close = React.createElement( "a", {
			className: "header-close",
			dangerouslySetInnerHTML: this.Utils.CreateSvgMarkup( AzureSvgs.Shell.Close.SVG ),
			onClick: this.OnClick_Close,
			dataextname: this.Extension.type.name
		} );

		const _title_panel = React.createElement( "div", { className: "header-title-panel" }, _title, _sub_title );
		const _action_panel = React.createElement( "div", { className: "header-action-panel" }, _pin, _close  );

		return React.createElement( "div",
			{
				className: this.DefaultCssClass
			}, _icon, _title_panel, _action_panel);
	};
};