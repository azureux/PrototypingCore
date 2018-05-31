/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
"use strict";

// control template - flesh out all functions, methods, events
class Navigation extends React.Component
{	// methods in order, constructor first, render last, events & function in the middle
	constructor( props )
	{
		super( props );
		this.handleClick = this.handleClick.bind( this );
		this.Id = this.props.id;

		this.CssClassNames = {
			Normal: "RootLinkCss",
			Alerted: "RootLinkCssExtra"
		};

		this.state = {
			items: [],
			inner_text: this.props.InnerText,
			prev_text: this.props.InnerText,
			isClicked: false,
			currentCssClass: this.CssClassNames.Normal
		};
		return;
	};
	componentDidMount()
	{	//	not used yet
		return;
	};
	componentDidUnMount()
	{	//	not used yet
		return;
	};
	handleClick( ev )
	{	//	testing changing the border color
		//	console.debug( "RootLink::handleClick" );
		ev.preventDefault();
		var _changed = "Handling this event...";

		if ( this.state.isClicked == true )
		{
			this.setState( { isClicked: false } );
			this.setState( { inner_text: this.state.prev_text } );
			this.setState( { currentCssClass: this.CssClassNames.Normal } );
		}
		else if ( this.state.isClicked == false )
		{
			this.setState( { isClicked: true } );
			this.setState( { inner_text: _changed } );
			this.setState( { currentCssClass: this.CssClassNames.Normal + " " + this.CssClassNames.Alerted } );
		}
		return;
	};
	render()
	{
		//	console.debug( "RootLink", this.props, typeof RootLink );
		//	alternation syntax for data-binding
		//	return React.createElement( 'div', { className: 'SearchPanel' }, `Clicked: ${this.props.InnerText}` );
		return React.createElement( 'div', {
			id: Utilities.NewId( "rl" ),
			className: this.state.currentCssClass,
			onClick: this.handleClick
		},`this.state.inner_text: ${this.state.inner_text} | this.state.isClicked: ${this.state.isClicked}` );
	};
};
