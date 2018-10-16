﻿/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
"use strict";

import { Utilities as Utils } from "../js/utilities.js";
import { SVG as AzureSvgs } from "../js/svg-assets.js";
import { TopNavigationBar as TopBar } from "../components/shell-controls/top-navigation-bar/top-navigation-bar.js"; 

export class Application extends React.Component
{
	constructor( props )
	{
		super( props );

		// default properties
		this.ID = Utils.NewId( "cds-app" );
		this.Configuration = props;
		this.CssID = "app-shell-css",
		this.CssFile = "css/default.css";
		this.ThemeName = "default-theme";
		this.Theme = {};
		this.Users = [];
		this.Data = [];
		this.Notifications = [];
		this.ClientHeight = 0;
		this.ClientWidth = 0;

		// state
		this.state = {
			CurrentUser: {},
			CurrentExtension: {},
			CurrentTheme: {},
			CurrentThemeName: this.ThemeName,
			VerticalNavigation_IsOpen: false,
			ContextBlade_IsOpen: false,
			UserPanel_IsOpen: false,
		};

		// event handlers
		this.handleClick = this.OnClick_HandleBodyElementClick.bind( this );
		this.handle_OnClick_ToggleThemes = this.OnClick_ToggleThemes.bind( this );
		this.Handle_CurrentExtension = this.OnClick_VerticalNavigation_SelectNavigationItem.bind( this );

		// inject CSS
		Utils.InjectControlCss(this.CssID, this.CssFile);
		return;
	};
	OnClick_HandleBodyElementClick( ev )
	{	//	
        console.debug("Application::OnClick_HandleBodyElementClick", this.TopNav);
		ev.preventDefault();
		ev.stopPropagation();
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
	OnClick_VerticalNavigation_SelectNavigationItem(extension)
	{
		console.debug( "HACK: Application.OnClick_VerticalNavigation_SelectNavigationItem: RESET TO ONLY THE CURRENTLY SELECTED NAV ITEM/EXTENSION. ALSO CALL THE CHAINED EVENT FROM THE APPPLICATION LEVEL", extension);
		return;
	};
	OnClick_UserPanel_HideShow(extension)
	{
		console.debug( "OnClick_UserPanel_HideShow" );
		return;
	};
	OnClick_UserPanel_SampleNavigation(objSomething)
	{
		console.debug( "OnClick_UserPanel_SampleNavigation" );
		return;
	};


	AssignConfiguration( oConfig )
	{
		console.debug("Application::AssignConfiguration()");
		return;
	};
	AssignDefaultState( oState )
	{
		console.debug("Application::AssignDefaultState()");
		return;
	};
	render()
	{	//  React.createElement() params
		//	1. output html element type
		//	2. output html element attributes
		//	3. array of child controls
		console.debug( "Application::render()" );
		console.debug( "this.state", this.state );
		console.debug( "this.props", this.props );

		this.AssignConfiguration( this.Configuration );
		this.AssignDefaultState( this.state );

		//	this.TopNav = React.createElement( "div" , { key: Utils.NewKey() }, "TopNav" );
		this.TopNav = React.createElement( TopBar, { key: Utils.NewKey(), Application: this } );
		this.LeftNav = React.createElement( "div", { key: Utils.NewKey() }, "LeftNav" );
		this.Dashboard = React.createElement( "div" , { key: Utils.NewKey() }, "Dashboard" );
		this.ContextPanel = React.createElement( "div", { key: Utils.NewKey() }, "ContextPanel" );
		this.NotificationsPanel = React.createElement( "div", { key: Utils.NewKey() }, "NotificationsPanel" );
		this.FeatureFlightsPanel = React.createElement( "div" , { key: Utils.NewKey() }, "FeaturePanel " );

		this.Layout = [
			this.TopNav,
			this.LeftNav,
			this.Dashboard,
			this.ContextPanel,
			this.NotificationsPanel,
			this.FeatureFlightsPanel
		];

		let _app = React.createElement( "div",
			{
				id: this.ID,
				className: this.state.CurrentThemeName + " cds-react-app",
				onClick: this.handleClick,
				key: Utils.NewId()
			},
			this.Layout
		);
		return _app;
	};
};