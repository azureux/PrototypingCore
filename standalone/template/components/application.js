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
		this.TopNav = React.createElement( TopNavigationBar, { key: Utilities.NewKey(), Application: this } );
		this.LeftNav = React.createElement( VerticalNavigationBar, { key: Utilities.NewKey(), Application: this } );
		this.Dashboard = React.createElement( Dashboard, { key: Utilities.NewKey(), Application: this } );
		this.Layout = [
			this.TopNav,
			this.LeftNav,
			this.Dashboard
		];

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
			this.Layout
		);
	};
};