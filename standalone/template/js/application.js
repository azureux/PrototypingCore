/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
"use strict";

import { Utilities as Utils } from "../js/utilities.js";
import { SVG as AzureSvgs } from "../js/svg-assets.js";
import { TopNavigationBar as TopBar } from "../components/shell-controls/top-navigation-bar/top-navigation-bar.js"; 
import { VerticalNavigationBar as LeftNav } from "../components/shell-controls/vertical-navigation-bar/vertical-navigation-bar.js";
import { Dashboard as HomeDashboard } from "../components/shell-controls/dashboard/dashboard.js";

export class Application extends React.Component
{
	constructor( props )
	{
		super( props );

		// default properties
		Application.defaultProps = {
			ID: Utils.NewId( "cds-app" ),
			AppName: "Microsoft Azure",
			Theme: "default-theme"
		};

		//	this.Configuration = props;
		this.CssID = "app-shell-css",
		this.CssFile = "css/default.css";
		this.ThemeName = props.Application.Theme; // "dark-theme" || "default-theme" 
		this.Theme = {};
		this.Users = [];
		this.Data = [];
		this.Notifications = [];

		// for computing layout dimensions to be passed down to child components
		this.BoundingClientRect = {};
		this.ClientRect = {};
		this.ClientTop = 0;
		this.ClientLeft = 0;
		this.ClientHeight = 0;
		this.ClientWidth = 0;

		// state
		this.state = {
			CurrentUser: {},
			CurrentExtension: {},
			CurrentTheme: {},
			CurrentThemeName: this.ThemeName,
			VerticalNavigation_IsOpen: false,
			UserPanel_IsOpen: false
		};

		//	EVENT HANDLERS
		//	this.Handle_BodyClick = this.OnClick_HandleBodyElementClick.bind( this );

		this.Handle_OnClick_ToggleThemes = this.OnClick_ToggleThemes.bind( this );
		this.Handle_CurrentExtension = this.OnClick_VerticalNavigation_SelectNavigationItem.bind( this );

		// inject CSS
		Utils.InjectControlCss(this.CssID, this.CssFile);
		return;
	};

	// application scope event handlers
	OnClick_HandleBodyElementClick( proxyEvent )
	{	//	changing the state object cause a re-render, and by default all flyouts are closed
		//	probably decide on what items should close and which should maintain thier own state
		//	"leftnav" should not default close
		//	"contextblade" may not default close ??
		// "feature flag" may not default close ??

		console.debug( "Application::OnClick_HandleBodyElementClick", proxyEvent );
		proxyEvent.preventDefault();
		proxyEvent.stopPropagation();

		// setting these at the end of the function to avoid bubbling
		this.setState( { UserPanel_IsOpen: false } );

		return;
	};
	OnClick_ToggleThemes( ev )
	{
		ev.preventDefault();
		ev.stopPropagation();
		//	console.debug( "OnClick_ToggleThemes", this.state );
		if ( this.state.CurrentTheme == "dark-theme" )
		{
            this.setState({ CurrentTheme: "default-theme" } );
            this.setState({ CurrentThemeName: "default-theme" } );
		}
        else if (this.state.CurrentTheme == "default-theme" )
		{
            this.setState({ CurrentTheme: "dark-theme" } );
            this.setState({ CurrentThemeName: "dark-theme" } );
		}
		//	console.debug( "OnClick_ToggleThemes", this.state );
		return;
	};

	// child control scope event handlers
	OnClick_VerticalNavigation_SelectNavigationItem(extension)
	{
		console.debug( "HACK: Application.OnClick_VerticalNavigation_SelectNavigationItem: RESET TO ONLY THE CURRENTLY SELECTED NAV ITEM/EXTENSION. ALSO CALL THE CHAINED EVENT FROM THE APPPLICATION LEVEL", extension);
		return;
	};
	OnClick_VertNav_OpenClose( proxyEvent )
	{	// this param is the application.state object passed back from the child control
		//	console.debug( "1. Application:VerticalNavigation_IsOpen", this.state.VerticalNavigation_IsOpen );
		proxyEvent.preventDefault();
		proxyEvent.stopPropagation();

		if ( this.state.VerticalNavigation_IsOpen == true )
		{
			this.setState( { VerticalNavigation_IsOpen: false } );
		}
		else if ( this.state.VerticalNavigation_IsOpen == false )
		{
			this.setState( { VerticalNavigation_IsOpen: true } );
		}
		//	console.debug( "2. Application:VerticalNavigation_IsOpen", this.state.VerticalNavigation_IsOpen );
		return;
	};


	AssignConfiguration( oConfig )
	{
		console.debug("Application::AssignConfiguration()", document.body.cl);
		return;
	};
	AssignDefaultState( oState )
	{
		console.debug("Application::AssignDefaultState()");
		return;
	};
	InitRunTimeProperties()
	{	//	console.debug( "Application::InitRunTimeProperties()" );
		this.ClientTop = document.body.clientTop;
		this.ClientLeft = document.body.clientLeft
		this.ClientHeight = document.body.clientHeight;
		this.ClientWidth = document.body.clientWidth;
		this.ClientRect = document.body.getClientRects()[0];
		this.BoundingClientRect = document.body.getBoundingClientRect();
		//console.debug( "this.ClientTop", this.ClientTop, document.body.clientTop );
		//console.debug( "this.ClientLeft", this.ClientLeft, document.body.clientLeft );
		//console.debug( "this.ClientHeight ", this.ClientHeight, document.body.clientHeight);
		//console.debug( "this.ClientWidth ", this.ClientWidth, document.body.clientWidth );
		//console.debug( "this.ClientRect ", this.ClientRect, document.body.getClientRects() );
		//console.debug( "this.BoundingClientRect", this.BoundingClientRect, document.body.getBoundingClientRect() );
		return;
	};
	render()
	{	//  React.createElement() params
		//	1. output html element type
		//	2. output html element attributes
		//	3. array of child controls
		//	console.debug( "Application::render()" );
		//console.debug( "this.state", this.state );
		//console.debug( "this.props", this.props );

		this.InitRunTimeProperties();
		//this.AssignConfiguration( this.Configuration );
		//this.AssignDefaultState( this.state );

        this.TopNav = React.createElement(TopBar,
			{
				key: Utils.NewKey(),
				Application: this,
				userPanelState: this.state.UserPanel_IsOpen,
				appTitle: this.props.TopNavigationBar.Title,
				stateTest: this.state
            });

		//	console.debug( "1. Application:Render", this.state.VerticalNavigation_IsOpen );
		//console.debug( "2. Application:Render", this.props.VerticalNavigationBar.IsCollapsed );
        this.VertNav = React.createElement(LeftNav, 
            {
                key: Utils.NewKey(),
                Application: this,
                NavExpanded: this.state.VerticalNavigation_IsOpen,
            });

        this.DashboardHome = React.createElement(HomeDashboard, 
            {
                key: Utils.NewKey(),
                Application: this,
                NavExpanded: this.state.VerticalNavigation_IsOpen
            });
 
		// PLACEHOLDERS, CONTROLS NEEDED FOR THESE AS WELL.
		this.ContextPanel = React.createElement( "div", { key: Utils.NewKey(), className: "top-level" }, "ContextPanel" );
        this.NotificationsPanel = React.createElement("div", { key: Utils.NewKey(), className: "top-level" }, "NotificationsPanel" );
        this.FeatureFlightsPanel = React.createElement("div", { key: Utils.NewKey(), className: "top-level" }, "FeaturePanel " );

		this.Layout = [
			this.TopNav,
			this.VertNav,
            this.DashboardHome,
			//this.ContextPanel,
			//this.NotificationsPanel,
			//this.FeatureFlightsPanel
        ];

		// adding the global body onclick handler to reset certain states just doesn't work as expected.
		let _app = React.createElement( "div",
			{
				id: this.ID,
				className: this.state.CurrentThemeName + " cds-react-app",
				//	onClick: this.OnClick_HandleBodyElementClick.bind( this ),
				//	onClick: this.Handle_BodyClick,
				key: Utils.NewId()
			},
			this.Layout
		);
		return _app;
	};
};