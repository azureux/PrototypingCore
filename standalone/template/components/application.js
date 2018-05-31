/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
///	"MAIN" application

"use strict";
class Application extends React.Component
{
	constructor( props )
	{
		super( props );
		// properties
		this.ID = Utilities.NewId( "cds-app" );

		// state & data
		this.state = {};
		this.refs
		this.data = [];

		// event handlers
		this.handleClick = this.OnClick_HandleBodyElementClick.bind( this );
		return;
	};
	OnClick_HandleBodyElementClick( ev )
	{	//	console.debug( "Application::handleClick", ev, this.props, this.state );
		ev.preventDefault();
		ev.stopPropagation();
		return;
	};
	OnClick_OpenCloseLeftNav( ev, boolFlag )
	{	//	
		console.debug( "OnClick_OpenCloseLeftNav:boolFlag", boolFlag );
		ev.preventDefault();
		ev.stopPropagation();
		return;
	};
	render()
	{	//	console.debug( "Application::render", this.state, this.props );
		//	arrays of config style properties
		let _root_links_array = [];
		for(var i = 0; i < this.props.RootLinks.length; i++)
		{	//	console.debug( "this.props.RootLinks", this.props.RootLinks[i] );
			_root_links_array.push(
				React.createElement( RootLink, { key: Utilities.NewId(), InnerText: this.props.RootLinks[i].RootLink.InnerText, Application: this } )
			);
		}

		let _search = React.createElement( RootLink, { key: Utilities.NewId(), InnerText: this.props["SearchLink.InnerText"], Application: this } );
		let _user_switch = React.createElement( RootLink, { key: Utilities.NewId(), InnerText: this.props["UserSwitchList"], Application: this } );
		let _vert_nav = React.createElement( RootLink, { key: Utilities.NewId(), InnerText: this.props["VerticalNavigation"], Application: this } );
		let _left_nav = React.createElement( RootLink, { key: Utilities.NewId(), InnerText: "Left Navigation", Application: this } );

		_root_links_array.push( _search );
		_root_links_array.push( _user_switch );
		_root_links_array.push( _vert_nav );
		_root_links_array.push( _left_nav );

		//	return React.createElement( 'div', [html-attributes], `Hello ${this.props.InnerText}` );
		//	return <div>Hello {this.props.InnerText}</div>;
		//  params
		//	1. output html element type
		//	2. output html element attributes
		//	3. array of child controls
		return React.createElement(
			"div",
			{
				id: this.ID,
				className: "cds-app",
				onClick: this.handleClick
			},
			_root_links_array,
			 //React.createElement( RootLink, { InnerText: this.props.RootLinks[1].RootLink.InnerText } ),
			 //React.createElement( RootLink, { InnerText: this.props["SearchLink.InnerText"] } ),
			 //React.createElement( RootLink, { InnerText: this.props["UserSwitchList"] } ),
			 //React.createElement( SearchLink, { InnerText: this.props["SearchLink.InnerText"] } ),
			 //React.createElement( UserSwitch, { InnerText: this.props["UserSwitchList"] } ),
			 //React.createElement( VerticalNavigation, { InnerText: this.props["VerticalNavigation"] } )
		);
	};
};