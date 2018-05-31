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
		this.state = {
			CurrentUser: {},
			CurrentExtension: {}
		};
		this.Data = [];
		this.Notifications = [];

		// layout contruction
		//			let _search = React.createElement( RootLink, { key: Utilities.NewId(), InnerText: this.props["SearchLink.InnerText"], Application: this } );
		this.TopNav = React.createElement( TopNavigationBar, { Application: this } );
		this.LeftNav = React.createElement( VerticalNavigationBar, { Application: this } );

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

	//  React.createElement() params
	//	1. output html element type
	//	2. output html element attributes
	//	3. array of child controls
	render()
	{	//	console.debug( "Application::render", this.state, this.props );
		return React.createElement(
			"div",
			{
				id: this.ID,
				className: "cds-app",
			},

		);
	};
};