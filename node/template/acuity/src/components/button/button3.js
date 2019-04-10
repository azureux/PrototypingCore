import React from 'react';
import { Utilities as Utils } from "../../js/utilities.js";
import './button3.css';

export default class ButtonControl3 extends React.Component
{	
	constructor( props )
	{
		//	console.debug( "button3", props );
		super( props );

		this.Id = Utils.NewId( "btn3" );
		this.Text = (this.props.text || this.constructor.name);
		this.Css = "btn3 " + this.props.css;
		//	console.debug( "this.props.selected", this.props.selected, this.props.children, );
		this.IsSelected = ( this.props.selected || false );
		this.state = {
			isClicked: false,
		};
		this.Path = this.props.path;

		this.HandleClick = this.OnClick_GetLeftNavPath.bind( this );
		return;
	};
	static Styles =
	{
		TopNav: "top-bar-btn",
		LeftNavSelected: "left-nav-btn-selected"
		};
	OnClick_GetLeftNavPath()
	{
		console.debug( this.Path );
		window.location.href = this.Path;
		return;
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
			if ( this.props.selected === true )
			{
				this.Css = this.Css + " " + ButtonControl3.Styles.LeftNavSelected;
				//	console.debug( "this.Css", this.Css );
				_rv = ( <div tabIndex="0" className={this.Css} title={this.Text} onClick={this.HandleClick}>{this.props.children}</div> );
			}
			else
			{
				_rv = ( <div tabIndex="0" className={this.Css} title={this.Text} onClick={this.HandleClick}>{this.props.children}</div> );
			}
		}
		else if ( this.props.children === undefined )
		{
			_rv = ( <div tabIndex="0" className={this.Css} title={this.Text} onClick={this.HandleClick}>{this.Text}</div> );
		}

		return _rv;
	};
};
