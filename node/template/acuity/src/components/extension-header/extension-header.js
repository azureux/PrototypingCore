import React from 'react';
import { Utilities as Utils } from "./../../js/utilities.js";
//import { SVG as AzureSvgs } from "../../js/old-svg-assets.js";
import './extension-header.css';
//import { ButtonControl as Btn } from "../../standard-controls/button/button.js";

export class ExtensionHeader extends React.Component
{
	constructor( props )
	{
		super( props );

		//this.Application = props.Application;
		//this.Extension = props.Application.CurrentExtensions[0];

		this._internal_name = this.constructor.name;
		this.Title = props.Title || this._internal_name;
		this.SubTitle = ( props.SubTitle || "Microsoft Corporation" );
		//this.SvgIcon = ( props.SvgIcon || AzureSvgs.Color.ResourceGroup);
  //      this.CssFileID = this._internal_name;
		//this.CssFile = "components/standard-controls/extension-header/extension-header.css";
		//this.DefaultCssClass = this._internal_name;

		//this.OnClick_Pin = this.Application.OnClick_PinCurrentExtension.bind( this.Application );
		//this.OnClick_Close = props.Application.Reset_CurrentExtension.bind( this.Application );
		return;
	};
	componentWillMount()
	{	//	console.debug( "componentWillMount" );
		return;
	};
	componentDidMount()
	{	//	console.debug( "componentDidMount" );
		//	Utils.InjectControlCss( this.CssFileID, this.CssFile );
		return;
	};
	componentWillUnmount()
	{	//	console.debug( "componentWillUnmount--REMOVE CSS" );
		//	Utils.RemoveInjectedCss( this.CssFileID, this.CssFile );
		return;
	};
	render()
	{	//	console.debug( "ExtensionHeader::render" );	//	, this.state, this.props );
		//	console.debug( "ExtensionHeader.render()", this.props.SvgIcon );
		let _icon;

		if ( this.props.SvgIcon !== undefined ) {
			_icon = React.createElement( "div", {
				key: Utils.NewKey(),
				className: "header-icon-panel",
				//	dangerouslySetInnerHTML: Utils.CreateSvgMarkup( this.SvgIcon.SVG )
			} );
		}

		let _title = React.createElement( "div", {
			className: "header-title",
			key: Utils.NewKey()
		}, `${this.Title}` );

		let _sub_title = React.createElement( "div", {
			key: Utils.NewKey(),
			className: "header-sub-title"
		}, `${this.SubTitle}` );

		let _titles = React.createElement( "div", {
			key: Utils.NewKey(),
			className: "header-titles"
		}, _title, _sub_title  );

		const _titles_panel = React.createElement( "div", {
			key: Utils.NewKey(),
			className: "header-titles-panel"
			}, _titles);

		//// check action panel items
		const _pin = React.createElement( "a", {
			key: Utils.NewKey(),
			className: "header-pin",
			//	dangerouslySetInnerHTML: Utils.CreateSvgMarkup( AzureSvgs.Pin.SVG ),
			onClick: this.OnClick_Pin,
			//	dataextname: this.Extension.Title()
		} );

		const _close = React.createElement( "a", {
			key: Utils.NewKey(),
			className: "header-close",
			//	dangerouslySetInnerHTML: Utils.CreateSvgMarkup( AzureSvgs.Shell.close.SVG ),
			onClick: this.OnClick_Close,
			//	dataextname: this.Extension.Title()
		} );

		const _action_panel = React.createElement( "div", {
			key: Utils.NewKey(),
			className: "header-action-panel"
		}, _pin, _close );


		// final layout
		return React.createElement( "div",
			{
				className: this.DefaultCssClass
			},  _icon, _titles_panel, _action_panel);
	};
};