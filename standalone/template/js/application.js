/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
"use strict";

import { Utilities as Utils } from "../js/utilities.js";
import { ApplicationStateCache as Cache } from "../components/app-state-cache/app-state-cache.js";
import { CacheItem as cacheItem } from "../components/app-state-cache/cache-item.js";
import { SVG as AzureSvgs } from "../js/svg-assets.js";
import { TopNavigationBar as TopBar } from "../components/shell-controls/top-navigation-bar/top-navigation-bar.js"; 
import { VerticalNavigationBar as LeftNav } from "../components/shell-controls/vertical-navigation-bar/vertical-navigation-bar.js";
import { ContentContainer as ContentContainer } from "../components/shell-controls/content-container/content-container.js";
import { ContextPanel as ContextBlade } from "../components/shell-controls/context-panel/context-panel.js";

// fixing extensions
//	import * as ExtensionsList from "../extensions/all-extensions-list.js";
import { StandardExtensionsList as StandardExtensions } from "../extensions/standards-list.js";
//	import * as FavoritesExtensions from "../extensions/favorites-list.js";

export class Application extends React.Component
{
	constructor( props )
	{
		super( props );

		// default properties
		Application.defaultProps = {
			ID: Utils.NewId( "cds-azure-proto-app" ),
			AppName: "Microsoft Azure",
			Theme: "default-theme",
		};

		//	this.Configuration = props;
		this.CssID = "app-shell-css",
		this.CssFile = "css/default.css";
		this.ThemeName = props.Application.Theme; // "dark-theme" || "default-theme" 
		this.Theme = {};
		this.Users = [];
		this.Data = [];

		this.Notifications = [];

		this.DefaultExtension = StandardExtensions[1];
		this.CurrentExtension = undefined;	//StandardExtensions[1];
		this.Standards_ExtensionList = [];
		this.Favorites_ExtensionList = [];
		this.All_ExtensionsList = [];

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
			CurrentExtension: undefined,
			CurrentTheme: {},
			CurrentThemeName: this.ThemeName,
			VerticalNavigation_IsOpen: false,
			UserPanel_IsOpen: false,
			ContextPanel_IsOpen: false
		};

		// cache
		// global cache testing
		//if ( window.AcuityCache == undefined )
		//{
		//	window.AcuityCache = new Cache();
		//}
		//	console.debug( "window.AcuityCache", window.AcuityCache );
		//	Utils.TestCache();

		// INJECT CSS
		Utils.InjectControlCss( this.CssID, this.CssFile );

		//	EVENT HANDLERS
		//	this.Handle_OnClick_ToggleThemes = this.OnClick_ToggleThemes.bind( this );
		return;
	};

	// application scope event handlers
	//OnClick_HandleBodyElementClick( proxyEvent )
	//{	//	changing the state object cause a re-render, and by default all flyouts are closed
	//	//	probably decide on what items should close and which should maintain thier own state
	//	//	"leftnav" should not default close
	//	//	"contextblade" may not default close ??
	//	// "feature flag" may not default close ??

	//	console.debug( "Application::OnClick_HandleBodyElementClick", proxyEvent );
	//	proxyEvent.preventDefault();
	//	proxyEvent.stopPropagation();

	//	// setting these at the end of the function to avoid bubbling
	//	this.setState( { UserPanel_IsOpen: false } );

	//	return;
	//};
	//OnClick_ToggleThemes( ev )
	//{
	//	ev.preventDefault();
	//	ev.stopPropagation();
	//	//	console.debug( "OnClick_ToggleThemes", this.state );
	//	if ( this.state.CurrentTheme == "dark-theme" )
	//	{
 //           this.setState({ CurrentTheme: "default-theme" } );
 //           this.setState({ CurrentThemeName: "default-theme" } );
	//	}
 //       else if (this.state.CurrentTheme == "default-theme" )
	//	{
 //           this.setState({ CurrentTheme: "dark-theme" } );
 //           this.setState({ CurrentThemeName: "dark-theme" } );
	//	}
	//	//	console.debug( "OnClick_ToggleThemes", this.state );
	//	return;
	//};

	// child control scope event handlers
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
	OnClick_Test_OpenContextPanel( proxyEvent )
	{
		//	console.debug( "FIGURE OUT WHERE TO HOLD STATE< AND MAKE CONTEXT CLOSE BUTTON & APPLICATION USE THE SAMECODE" );
		console.debug( "OnClick_Test_OpenContextPanel", this.state.ContextPanel_IsOpen );

		if ( this.state.ContextPanel_IsOpen == false )
		{
			this.setState( { ContextPanel_IsOpen: true } );
		}
		else if ( this.state.ContextPanel_IsOpen == true )
		{
			this.setState( { ContextPanel_IsOpen: false } );
		}

		//	console.debug( "OnClick_Test_OpenContextPanel", this.state.ContextPanel_IsOpen );
		return;
	};

	//	HANDLE CYCLING LEFT NAV ITEMS
	OnClick_SelectNavigationItem( extension )
	{	//	console.debug( "OnClick_SelectNavigationItem", extension.name, this.CurrentExtension.type.name );
		if ( extension.name === this.CurrentExtension.type.name )
		{
			this.Reset_CurrentExtenssion();
		}
		else
		{
			this.CurrentExtension = React.createElement( extension, { Application: this } );
			this.setState( { CurrentExtension: extension.name } );
		}
		//	console.debug( "OnClick_SelectNavigationItem", this.CurrentExtension.type.name, this.state.CurrentExtension );
		return;
	};
	Reset_CurrentExtenssion()
	{	//	console.debug( "Application::Reset_CurrentExtension" );
		this.CurrentExtension = React.createElement( this.DefaultExtension, { Application: this } );
		//	console.debug( "OnClick_SelectNavigationItem", this.CurrentExtension.type.name );
		this.setState( { CurrentExtension: this.CurrentExtension.type.name } );
		return;
	};
	OnClick_PinCurrentExtension( proxyEvent )
	{	//	
		console.debug( "Application::OnClick_PinCurrentExtension. Pin this dashboard/home extensions" );
		//	console.debug( "currentTarget", proxyEvent.currentTarget.attributes["dataextname"].value );
		let _pinned_extension = StandardExtensions.find( function ( val )
		{
			return val.name == proxyEvent.currentTarget.attributes["dataextname"].value;
		} );
		//	console.debug( "_pinned_extension", _pinned_extension );
		return;
	};


	//	TBD
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
		console.debug( "ADD PATH TO EXTENSION RESOLUTION" );
		return;
	};
	render()
	{	//  React.createElement() params
		//console.debug( "Application::render()" );
		//console.debug( "this.state", this.state );
		//console.debug( "this.props", this.props );
		this.InitRunTimeProperties();

		//	console.debug( "1.app:render:", this.CurrentExtension );
		if ( this.CurrentExtension == undefined )
		{
			this.CurrentExtension = React.createElement( this.DefaultExtension, { Application: this } );
			//	this.setState( { CurrentExtension: this.CurrentExtension.type.name } );
		}
		//console.debug( "App.render::this.CurrentExtension", this.CurrentExtension.type.name );
		//console.debug( "App.render.state", this.state.CurrentExtension );

        this.TopNav = React.createElement(TopBar,
			{
				key: Utils.NewKey(),
				Application: this,
				userPanelState: this.state.UserPanel_IsOpen,
				appTitle: this.props.TopNavigationBar.Title,
				stateTest: this.state
            });

		//	console.debug( "1. Application:Render::this.state.VerticalNavigation_IsOpen", this.state.VerticalNavigation_IsOpen );
		//	console.debug( "2. Application:Render::this.props.VerticalNavigationBar.IsCollapsed", this.props.VerticalNavigationBar.IsCollapsed );
        this.VertNav = React.createElement(LeftNav, 
            {
                key: Utils.NewKey(),
                Application: this,
				NavExpanded: this.state.VerticalNavigation_IsOpen,
				Standards: StandardExtensions,
				Favorites: this.Favorites_ExtensionList,
				SelectedItem: this.CurrentExtension
            });

        this.ContentContainer = React.createElement(ContentContainer, 
            {
                key: Utils.NewKey(),
                Application: this,
				NavExpanded: this.state.VerticalNavigation_IsOpen,
				CurrentExtension: this.CurrentExtension
				//	OpenContextPanel: this.OnClick_Test_OpenContextPanel
            });
 
		// PLACEHOLDERS, CONTROLS NEEDED FOR THESE AS WELL.
		//	console.debug( "RENDER BUG::OnClick_Test_OpenContextPanel", this.state.ContextPanel_IsOpen );
		this.ContextPanel = React.createElement( ContextBlade, {
			key: Utils.NewKey(),
			//	currentTheme: this.ThemeName,
			IsVisible: this.state.ContextPanel_IsOpen
		} );

        //	this.NotificationsPanel = React.createElement("div", { key: Utils.NewKey(), className: "top-level" }, "NotificationsPanel" );
        //	this.FeatureFlightsPanel = React.createElement("div", { key: Utils.NewKey(), className: "top-level" }, "FeaturePanel " );

		this.Layout = [
			this.TopNav,
            this.VertNav,
            this.ContentContainer,
			this.ContextPanel
			//	this.NotificationsPanel,
			//	this.FeatureFlightsPanel
        ];

		// adding the global body onclick handler to reset certain states just doesn't work as expected.
		let _app = React.createElement( "div",
			{
				id: this.ID,
				className: this.state.CurrentThemeName + " cds-react-app",
				//	onClick: this.OnClick_HandleBodyElementClick.bind( this ),
				//	onClick: this.Handle_BodyClick,
				key: Utils.NewId()
			}, this.Layout );

		return _app;
	};
};