import React from 'react';
import './extension-header.css';
import SvgIcon from "./../../components/svg-icons/svg-icon.js";

export default class ExtensionHeader extends React.Component
{
	constructor( props )
	{
		//	console.debug( "ExtensionHeader", props );
		super( props );
		this._internal_name = this.constructor.name;

		this.PinIcon = SvgIcon.ShellIcons.Pin1;
		this.CloseIcon = SvgIcon.ShellIcons.Close;

		this.Title = ( props.extBag.Title || "undefined" );
		this.SubTitle = ( props.extBag.Subtitle|| "Microsoft Corporation" );
		this.SvgIcon = ( props.extBag.Icon || SvgIcon.Icons.Default);

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