import React from 'react';
//	import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import ExtensionHeader from "./../../components/extension-header/extension-header.js";
import './ext-base.css';

export class ExtensionBase extends React.Component
{	
	static defaultProps = {
		Title: "Extension Base Component",
		Subtitle: "The javascript base class for \"ExtensionBase\" ",
		Path: "/#",
		BreadcrumbTitle: "ExtensionBase breadcrumb short title",
		Icon: SvgIcon.Icons.Default,
		IsSelected: false,
		HasHeader: true,
		HasHeaderDocLink: true,
		HasBreadcrumb: true,
		Columns: [],
		Data: []
	};
	constructor( props )
	{
		//	console.debug( "ExtensionBase.props", props );
		super( props );

		this.ExtensionName = this.constructor.name;
		this.state = { IsDirty: false };

		this.Debug = ( this.props.debug || false );
		this.Path = ( this.props.Path || this.Path || ExtensionBase.defaultProps.Path );
		this.Title = ( this.props.Title || this.Title || this.ExtensionName );
		this.Subtitle = ( this.props.Subtitle || this.Subtitle || ExtensionBase.defaultProps.Subtitle );
		this.BreadCrumbTitle = ( this.props.BreadcrumbTitle || this.BreadCrumbTitle || ExtensionBase.defaultProps.BreadcrumbTitle );
		this.SvgIcon = ( this.props.Icon || this.Icon || ExtensionBase.defaultProps.Icon );
		this.IsSelected = ( this.props.IsSelected || this.IsSelected || ExtensionBase.defaultProps.IsSelected );
		this.HasHeader = ( this.props.HasHeader || ExtensionBase.defaultProps.HasHeader );
		this.HasHeaderDocLink = ( this.props.HasHeaderDocLink || ExtensionBase.defaultProps.HasHeaderDocLink );
		return;
	};
	ExtRender()
	{
		return (
			<div className="ext-debug-panel">
				<div className="debug-panel">
					{
						this.props.debug === true &&
						<div className="debug-on">debug: prototype</div>
					}
					{
						this.props.debug === false &&
						<div className="debug-off">debug: preview</div>
					}
				</div>
				<div className="debug-extension-info">
					<div>ExtensionBase.ExtRender(): {this.ExtensionName}</div>
					<div>this.SvgIcon: <span className="debug-svg-icon">{this.SvgIcon}</span></div>
					<div>this.Path: {this.Path}</div>
					<div>this.Title: {this.Title}</div>
					<div>this.Subtitle: {this.Subtitle}</div>
					<div>this.BreadCrumbTitle: {this.BreadCrumbTitle}</div>
					<div>this.IsSelected: {this.IsSelected.toString()}</div>
					<div>this.HasHeader: {this.HasHeader.toString()}</div>
					<div>this.HasHeaderDocLink: {this.HasHeaderDocLink.toString()}</div>
					</div>
			</div>
		);
	};
	render()
	{	//	
		console.debug( "ExtBase.render()", this.HasHeader, this.props.HasHeader);
		return (
			<div className="ext-base">
				{
					this.props.HasHeader !== false && 
					<ExtensionHeader
						extBag={this.props}
						pinEvent={this.props.handlePin}
						closeEvent={this.props.handleClose}></ExtensionHeader>	
				}
				<div className="ext-base-content-area">{this.ExtRender()}</div>	
			</div>
		);
	};
};