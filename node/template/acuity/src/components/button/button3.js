import React from 'react';
import { Utilities as Utils } from "../../js/utilities.js";
import './button3.css';

export default class ButtonControl3 extends React.Component
{	
	constructor( props )
	{
		super( props );

		this.Id = Utils.NewId( "btn3" );
		this.Text = (this.props.text || this.constructor.name);
		this.Css = "btn3 " + this.props.css;

		this.state = {
			isClicked: false,
		};

		this.HandleClick = this.OnClick_ChangeBorderColor.bind( this );
		return;
	};
	static Styles =
	{
		TopNav: "top-bar-btn"	
	};
	OnClick_ChangeBorderColor( ev )
	{	
		console.debug( "ButtonControl3::OnClick_ChangeBorderColor" );
		if ( this.state.isClicked === true )
		{
			this.setState( { isClicked: false } );
		}
		else if ( this.state.isClicked === false )
		{
			this.setState( { isClicked: true } );
		}
		ev.preventDefault();
		ev.stopPropagation();
		return;
    };
	render()
	{
		let _rv;

		if ( this.props.children !== undefined )
		{
			_rv = ( <div tabIndex="0" className={this.Css} title={this.Text} onClick={this.props.onClick}>{this.props.children}</div> );
		}
		else if ( this.props.children === undefined )
		{
			_rv = ( <div tabIndex="0" className={this.Css} title={this.Text} onClick={this.props.onClick}>{this.Text}</div> );
		}

		return _rv;
	};
};
