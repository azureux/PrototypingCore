import React from 'react';
//	import { Utilities as Utils } from "../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './cmd-btn.css';

export default class CommandButton extends React.Component
{	
	constructor( props )
	{	//	console.debug( "ShellTopBarButton", props );
		super( props );

		this.Text = ( this.props.text || this.constructor.name );
		this.Css = CommandButton.Styles.CmdText;
		this.IsDisabled = ( this.props.disabled || false );

		this.HandleClick = this.OnClick_TestClick.bind(this);
		return;
	};
	OnClick_TestClick( pe )
	{
		console.debug( "CommandButton.OnClick_TestClick" );
		return;
	};
	static Styles =
	{
		CmdText: "cmd-btn-text",
		//CmdIconText: "cmd-btn-icon-text",
		//CmdIcon: "cmd-btn-icon"
	};
	render()
	{
		let _btn;

		if ( this.IsDisabled === true )
		{
			_btn = (
				<div tabIndex="0" className="cmd-btn cmd-btn-disabled" title={this.Text}>
					<div className="cmd-btn-svg"><SvgIcon icon={this.props.icon} /></div>
					<div className="cmd-btn-text">{this.props.text}</div>
				</div> );
		}
		else if ( this.IsDisabled === false )
		{
			_btn = (
				<div tabIndex="0" className="cmd-btn" title={this.Text} onClick={this.HandleClick}>
					<div className="cmd-btn-svg"><SvgIcon icon={this.props.icon} /></div>
					<div className="cmd-btn-text">{this.props.text}</div>
				</div> );
		}

		return _btn;
	};
};
