import React from 'react';
import './extension-header.css';
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
//	import { Utilities as Utils } from "./../../js/utilities.js";
//import { SVG as AzureSvgs } from "../../js/old-svg-assets.js";
//import { ButtonControl as Btn } from "../../standard-controls/button/button.js";

export default class ExtensionHeader extends React.Component
{
	constructor( props )
	{
		//	console.debug( "ExtensionHeader", props );
		super( props );
		this._internal_name = this.constructor.name;

		this.PinIcon = SvgIcon.ShellIcons.Pin1;
		this.CloseIcon = SvgIcon.ShellIcons.Close;

		this.Title = ( props.extBag._title || "undefined" );
		this.SubTitle = ( props.extBag._subtitle|| "Microsoft Corporation" );
		this.SvgIcon = ( props.extBag._icon || SvgIcon.Icons.Default);

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
		return (
			<div className="ext-header">
				<div className="ext-header-icon">
					<SvgIcon icon={this.SvgIcon} />
				</div>
				<div className="ext-header-text-panel">
					<div className="eht-title">{this.Title}</div>
					<div className="eht-subtitle">{this.SubTitle}</div>
				</div>
				<div className="ext-header-action-panel">
					<div className="ext-header-pin" onClick={this.props.pinEvent}>
						<SvgIcon className="header-pin" icon={this.PinIcon} />
					</div>
					<div className="ext-header-close" onClick={this.props.closeEvent} >
						<SvgIcon className="header-close" icon={this.CloseIcon} />
					</div>
				</div>
			</div>
		);
	};
};