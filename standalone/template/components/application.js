/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
"use strict";

//	main application -  and managing state for walk-throughs & editing
class Application extends React.Component
{
	//	simple default
	//	JSX need to be compiled, may not use JSX for this
	//	return <div>Hello {this.props.InnerText}</div>;
	constructor( props )
	{
		super( props );
		this.handleClick = this.handleClick.bind( this );
		this.state = { };
		return;
	};
	handleClick( ev )
	{	console.debug( "Application::handleClick", ev, this.props, this.state );
		ev.preventDefault();
		return;
	};
	render()
	{	//	console.debug( "Application::render", this.state, this.props );
		//	arrays of config style properties
		let _root_links_array = [];
		for(var i = 0; i < this.props.RootLinks.length; i++)
		{	//	console.debug( "this.props.RootLinks", this.props.RootLinks[i] );
			_root_links_array.push(
				React.createElement( RootLink, { key: Utilities.NewId(), InnerText: this.props.RootLinks[i].RootLink.InnerText } )
			);
		}

		let _search = React.createElement( SearchLink, { key: Utilities.NewId(), InnerText: this.props["SearchLink.InnerText"] } );
		let _user_switch = React.createElement( UserSwitch, { key: Utilities.NewId(), InnerText: this.props["UserSwitchList"] } );
		let _vert_nav = React.createElement( VerticalNavigation, { key: Utilities.NewId(), InnerText: this.props["VerticalNavigation"] } );

		_root_links_array.push( _search );
		_root_links_array.push( _user_switch );
		_root_links_array.push( _vert_nav );

		//	return React.createElement( 'div', null, `Hello ${this.props.InnerText}` );
		//  params
		//	1. output html element type
		//	2. output html element attributes
		//	3. array of child controls
		return React.createElement(
			 "div",
			 { className: "MainAppContainer" },
			 //React.createElement( RootLink, { InnerText: this.props.RootLinks[1].RootLink.InnerText } ),
			 //React.createElement( RootLink, { InnerText: this.props["SearchLink.InnerText"] } ),
			 //React.createElement( RootLink, { InnerText: this.props["UserSwitchList"] } ),
			_root_links_array,
			 //React.createElement( SearchLink, { InnerText: this.props["SearchLink.InnerText"] } ),
			 //React.createElement( UserSwitch, { InnerText: this.props["UserSwitchList"] } ),
			 //React.createElement( VerticalNavigation, { InnerText: this.props["VerticalNavigation"] } )
			 );
	};
};