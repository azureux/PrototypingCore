import React from 'react';
//	import { Utilities as Utils } from "../../js/utilities.js";
import './shell-top-bar-button.css';

export default class ShellTopBarButton extends React.Component
{	
	constructor( props )
	{	//	console.debug( "ShellTopBarButton", props );
		super( props );

		this.Text = ( this.props.text || this.constructor.name );
		this.Css = ShellTopBarButton.Styles.TopNav;

		this.HandleClick = undefined;
		if ( this.props.navClick !== undefined )
		{
			this.HandleClick = this.props.navClick.bind( this, this.props.contextPanel);
		} 
		return;
	};
	static Styles =
	{
		TopNav: "top-bar-btn",
		TopNavSelected: "top-bar-btn-selected"
	};
	render()
	{
		//	console.debug( "render", this.props.isCurrent.name, this.props.contextPanel.name );
		if ( this.props.isCurrent === this.props.contextPanel )
		{
			this.Css = ShellTopBarButton.Styles.TopNav + " " + ShellTopBarButton.Styles.TopNavSelected;
		}
		else
		{
			this.Css = ShellTopBarButton.Styles.TopNav;
		}

		return (
			<div tabIndex="0" className={this.Css} title={this.Text} onClick={this.HandleClick}>{this.props.children}</div>
		);
	};
};
