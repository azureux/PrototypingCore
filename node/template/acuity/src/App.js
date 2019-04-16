import React from 'react';
import { Utilities as Utils } from './js/utilities.js';
import { AzureLinks, FaveLinks, ToolBarContextPanels } from './extensions-list.js';
import SearchBox from './components/search-box/search-box.js';
import { MeControl } from './components/user-logon/user-logon.js';
import LeftNav from './components/left-nav/left-nav.js';
import BreadCrumbControl from "./components/breadcrumb/breadcrumb.js";
import ShellTopBarButton from './components/buttons/shell-top-bar-button.js';
import SvgIcon from './components/svg-icons/svg-icon.js';

import './css/fonts.css';
import './css/debug-testing.css';
import './css/index.css';
import './css/App.css';

//	import { Button, ButtonAppearance } from "@microsoft/fast-components-react-msft";

export default class App extends React.Component
{
	constructor( props )
	{
		super( props );
		// DEFAULT PROPERTIES, NEEDS MORE RESEARCH
		App.defaultProps = {
			Application: this,
			ID: Utils.NewId( "cds-azure-proto-app" ),
			PreviewText: "Preview",
			PrototypeText: "Protoype",
			AppName: "Microsoft Azure Acuity",
			Theme: "default-theme",
			CurrentExtension: AzureLinks[1],
			DefaultExtension: AzureLinks[1],
			CurrentContextPanel: ToolBarContextPanels[0]
		};

		// STATES & PROPS
		this.state = {
			AllFlyoutsClosed: true,
			DefaultFlyoutsClosed: true,
			MeControl: false,
			ContextPanel: false
		};

		this.UserData = [
			{
				avatar: SvgIcon.Avatars.SelinaKyle,
				name: "Selina Kyle",
				email: "selina.kyle@contoso.com",
				companyName: "CONTOSO",
				domain: "contoso.worldwide.com",
			}
		];

		this.LeftNavOpen = true;
	
		// LEFT NAV OBJECTS
		this.Extensions = [];
		this.CurrentLeftNavExtension = App.defaultProps.CurrentExtension;
		this.CurrentExtension = App.defaultProps.CurrentExtension;
		this.BreadCrumbs = [
			App.defaultProps.CurrentExtension
		];

		this.Handle_SelectExtension = this.OnClick_SelectExtension.bind( this );
		this.Handle_BreadCrumbSelection = this.OnClick_BreadCrumbSelection.bind( this );

		// CONTENT PANEL OBJECTS
		this.CurrentContextPanelCloseButton = ( <SvgIcon icon={SvgIcon.ShellIcons.ContextPanelClose} /> );
		this.CurrentContextPanel = undefined;	//App.defaultProps.CurrentContextPanel;
		this.HandleContextPanelToggle = this.OnClick_ToggleTopLevelContextBlade.bind( this );
		this.HandleContextPanelClose = this.OnClick_CloseContextPanel.bind( this );

		// ME CONTROL OBJECT
		this.Handle_MeControlToggle = this.OnClick_ToggleMeControl.bind( this );

		// GENERAL event handler bindings
		this.OnClick_ResetAllMenus = this.ResetAllMenus.bind(this);

		this.AppProcessRoutes();
		return;
	};

	//	GENERAL APP SCOPE METHODS
	//	1. Determine if the first path matches anything in the left nav.
	//	Last one in wins.
	//	Because the path array could be formed to include mutliple items in the left nav,
	//	and we want this to mimic standard path behavior, we are only looking at "_paths[0]"
	//	2. Anything that comes after "_path[0]" is will just define the breadcrumbs & flow
	AppProcessRoutes()
	{
		//	console.debug( "ProcessRoutes", Utils.ProcessRoutes() );
		let _paths = Utils.ProcessRoutes();

		if ( _paths[0] !== undefined )
		{
			let _found = undefined;
			AzureLinks.forEach( function ( v, i, a )
			{	//	console.debug( i, _paths[0], v.PropertyBag._path );
				if ( _paths[0] === v.PropertyBag._path )
				{
					_found = v;
				}
				return;
			} );

			FaveLinks.forEach( function ( v, i, a )
			{	//	console.debug( i, v.Title(), v.Path(), v.Selected );
				if ( _paths[0] === v.PropertyBag._path )
				{
					_found = v;
				}
				return;
			} );

			//	console.debug( "_found", _found.name, _found.PropertyBag );
			//	console.debug( "this.CurrentExtension", this.CurrentExtension.name );
			if ( _found !== undefined )
			{
				this.CurrentExtension = _found;
			}
		}

		this.CurrentExtension.PropertyBag._selected = true;
		//	console.debug( "this.CurrentExtension", this.CurrentExtension.name );
		//	console.debug( "this.CurrentExtension.PropertyBag", this.CurrentExtension.PropertyBag._selected);
		return;
	};
	ResolveConfig()
	{
		console.debug( "resolve config overrides, including theme changes" );
		return;
	};
	ResetAllMenus( pe )
	{	//	
		//	console.debug( "APP.RESETALLMENUS()" );
		pe.stopPropagation();
		pe.nativeEvent.stopImmediatePropagation();

		this.setState( { MeControl: false } );

		this.CurrentContextPanel = undefined;
		this.setState( { ContextPanel: false } );

		return;
	};
	OnClick_HandleEventCancelling( pe )
	{
		console.debug( "OnClick_HandleEventCancelling" );
		pe.stopPropagation();
		pe.nativeEvent.stopImmediatePropagation();
		return;
	};

	// ME CONTROL EVENTS
	OnClick_ToggleMeControl( pe )
	{	//	console.debug( "App.OnClick_ToggleMeControl()" );
		pe.stopPropagation();
		pe.nativeEvent.stopImmediatePropagation();

		let _new_state = this.state.MeControl;
		//	console.debug( "_new_state", _new_state );
		this.setState( { MeControl: !_new_state } );
		//	console.debug( this.state.MeControl, _new_state );
		return;
	};

	// TOP TOOLBAR ICON METHODS
	OnClick_ToggleTopLevelContextBlade( newObj, pe )
	{	//	console.debug( "OnClick_TestTopNavBar_ContextBlade" );
		pe.stopPropagation();
		pe.nativeEvent.stopImmediatePropagation();

		if ( newObj === this.CurrentContextPanel )
		{
			this.CurrentContextPanel = undefined;
			this.setState( ( state ) => ( { ContextPanel: false } ) );
		}
		else if ( newObj !== this.CurrentContextPanel )
		{
			this.CurrentContextPanel = newObj;
			this.setState( { ContextPanel: true } );
		}
		return;
	};
	OnClick_CloseContextPanel( pe )
	{	//	console.debug( "this.OnClick_CloseContextPanel", this.ContextPanelOpen );
		this.CurrentContextPanel = undefined;
		this.setState( { ContextPanel: false } );
		return;
	};

	// LEFT NAV METHODS
	ResetExtensionSelectionState()
	{
		AzureLinks.forEach( function ( v, i, a )
		{
			v.PropertyBag._selected = false;
			return;
		} );

		FaveLinks.forEach( function ( v, i, a )
		{
			v.PropertyBag._selected = false;
			return;
		} );

		return;
	};
	OnClick_SelectExtension(extension, pe)
	{	//	console.debug( "App.OnClick_SelectExtension", extension, pe);
		//	console.debug( "this.CurrentExtension", this.CurrentExtension );
		//	console.debug( "App.OnClick_SelectExtension::adding bread crumb navigation" );

		pe.stopPropagation();
		pe.nativeEvent.stopImmediatePropagation();

		this.ResetExtensionSelectionState();

		if ( extension === AzureLinks[1] )
		{
			this.CurrentExtension = AzureLinks[1];
			this.CurrentExtension.PropertyBag._selected = true;
			this.BreadCrumbs = [this.CurrentExtension];
			this.setState( { AllFlyoutsClosed: this.CurrentExtension.name } );
		}
		if ( extension === AzureLinks[2] )
		{
			this.CurrentExtension = AzureLinks[2];
			this.CurrentExtension.PropertyBag._selected = true;
			this.BreadCrumbs = [this.CurrentExtension];
			this.setState( { AllFlyoutsClosed: this.CurrentExtension.name } );
		}
		else if ( extension === this.CurrentExtension )
		{
			this.CurrentExtension = App.defaultProps.DefaultExtension;
			this.CurrentExtension.PropertyBag._selected = true;
			this.BreadCrumbs = [this.CurrentExtension];
			this.setState( { AllFlyoutsClosed: this.CurrentExtension.name } );
		}
		else
		{
			this.CurrentExtension = extension;
			this.CurrentExtension.PropertyBag._selected = true;
			this.BreadCrumbs = [App.defaultProps.CurrentExtension, this.CurrentExtension];
			this.setState( { AllFlyoutsClosed: this.CurrentExtension.name } );
		}
		return;
	};
	OnClick_BreadCrumbSelection()
	{
		console.debug( "App.OnClick_BreadCrumbHandler()" );
		return;
	};

	// HACKY ADDED to handle events the way we need to handle them
	componentDidMount()
	{
		//	console.debug( "App.componentDidMount()" );
		//	window.addEventListener( "resize", this.handleResizedScreen.bind( this ) );
		return;
	}
	componentWillUnmount()
	{
		//	console.debug( "App.componentWillUnmount()" );
		//	window.removeEventListener( "resize", this.handleResizedScreen.bind( this ) );
		return;
	}
	render()
	{
		//	console.debug( "App.render()", this.BreadCrumbs.length );
		//	<div style={{ color: 'red', fontWeight: 'bold' }}>this.state.ContextPanel: {this.state.ContextPanel.toString()}</div>
		//	WORKS <this.CurrentExtension {...this.CurrentExtension.PropertyBag} />
		return (
			<div className="App" onClick={this.OnClick_ResetAllMenus}>
			<header>
				<div className="brand-panel" onClick={this.OnClick_ToggleMenus}>
					{this.props.config.Debug === true && <div className="prototype-panel">{App.defaultProps.PrototypeText}</div>}
					{this.props.config.Debug === false && <div className="preview-panel">{App.defaultProps.PreviewText}</div>}
					<div className="ms-az-brand">Microsoft Azure</div>
				</div>
				<div className="search-panel">
					<SearchBox />
				</div>
				<div className="tools-panel">
					{
						ToolBarContextPanels.map( ( item, index ) => (
							<ShellTopBarButton
								key={index}
								text={item.PropertyBag.Title}
								contextPanel={item}
								isCurrent={this.CurrentContextPanel}
								navClick={this.HandleContextPanelToggle}>
								<SvgIcon icon={item.PropertyBag.Icon} />
							</ShellTopBarButton>
						) )
					}
				</div>
				<MeControl
					visiblePanel={this.state.MeControl}
					clickEvent={this.Handle_MeControlToggle}
					currentUser={this.UserData[0]} />
			</header>
			<main>
				<div className="nav-panel-default">
					<LeftNav
						opened={this.LeftNavOpen}
						standardLinks={AzureLinks}
						favoriteLinks={FaveLinks}
						clickSelect={this.Handle_SelectExtension}
					/>
				</div>
				<div className="extension-panel-default">
					<BreadCrumbControl
						links={this.BreadCrumbs}
						selectionClick={this.Handle_BreadCrumbSelection} />
					<this.CurrentExtension {...this.CurrentExtension.PropertyBag} />
				</div>
				{
					this.state.ContextPanel &&
					<div className="context-panel-default" onClick={this.OnClick_HandleEventCancelling}>
						<div className="context-panel-header">
							<div className="cp-current-title">{this.CurrentContextPanel.PropertyBag.Title}</div>
							<div className="cp-close-btn" onClick={this.HandleContextPanelClose} >{this.CurrentContextPanelCloseButton}</div>
						</div>
						<div className="context-panel-content">
							<this.CurrentContextPanel closeClick={this.HandleContextPanelClose} />
						</div>
					</div>
				}
			</main>
		</div> );
	}
}