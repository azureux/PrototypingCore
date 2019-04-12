import React from 'react';
import { Utilities as Utils } from './js/utilities.js';
import { AzureLinks, FaveLinks, ToolBarContextPanels } from './extensions-list.js';
import SearchBox from './components/search-box/search-box.js';
import { MeControl } from './components/user-logon/user-logon.js';
import LeftNav from './components/left-nav/left-nav.js';
import ShellTopBarButton from './components/button/shell-top-bar-button.js';
import SvgIcon from './components/svg-icons/svg-icon.js';

import './css/fonts.css';
import './css/debug-testing.css';
import './css/index.css';
import './css/App.css';

//	import Button from './components/button/button2';
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
			CurrentContextPanel: ToolBarContextPanels[0]
		};

		// STATES & PROPS
		this.state = {
			AllFlyoutsClosed: true,
			DefaultFlyoutsClosed: true
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
		this.MeControlOpen = false;
		this.SearchPanelOpen = false;
		this.ContextPanelOpen = false;
	
		// LEFT NAV OBJECTS
		this.BreadCrumbs = [];
		this.Extensions = [];
		this.CurrentLeftNavExtension = App.defaultProps.CurrentExtension;
		this.CurrentExtension = App.defaultProps.CurrentExtension;
		this.Handle_SelectExtension = this.OnClick_SelectExtension.bind( this );

		// CONTENT PANEL OBJECTS
		this.CurrentContextPanelCloseButton = ( <SvgIcon icon={SvgIcon.ShellIcons.ContextPanelClose} /> );
		this.CurrentContextPanel = undefined;	//App.defaultProps.CurrentContextPanel;
		this.HandleContextPanelToggle = this.OnClick_ToggleTopLevelContextBlade.bind( this );
		this.HandleContextPanelClose = this.OnClick_CloseContextPanel.bind( this );

		// ME CONTROL OBJECTS
		this.HandleMeControl_Toggle = this.OnClick_OpenMeControl.bind( this );

		// GENERAL event handler bindings
		this.OnClick_ToggleMenus = this.ResetAllMenus.bind( this );

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
		console.debug( "App.ResetAllMenus-1" );

		//	pe.nativeEvent.preventDefault();
		//pe.nativeEvent.stopPropagation();
		//pe.nativeEvent.stopImmediatePropagation();

		console.debug( pe.nativeEvent );

		//this.LeftNavOpen = true;
		//this.MeControlOpen = false;
		//this.SearchPanelOpen = false;
		//this.ContextPanelOpen = false;

		this.setState( { DefaultFlyoutsClosed: true } );
		return;
	};

	// TOP TOOLBAR ICON METHODS
	OnClick_ToggleTopLevelContextBlade( newObj, ev )
	{	//	console.debug( "OnClick_TestTopNavBar_ContextBlade" );
		if ( newObj === this.CurrentContextPanel )
		{
			this.ContextPanelOpen = !this.ContextPanelOpen;
		}
		else if ( newObj !== this.CurrentContextPanel )
		{
			this.CurrentContextPanel = newObj;
			this.ContextPanelOpen = true;
		}
		this.setState( { AllFlyoutsClosed: !this.ContextPanelOpen } );
		return;
	};
	OnClick_CloseContextPanel( pe )
	{	//	console.debug( "this.OnClick_CloseContextPanel", this.ContextPanelOpen );
		this.CurrentContextPanel = undefined;
		this.ContextPanelOpen = !this.ContextPanelOpen;
		this.setState( { AllFlyoutsClosed: this.ContextPanelOpen } );
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
	OnClick_SelectExtension(extension)
	{
		//console.debug( "extension", extension );
		//console.debug( "this.CurrentExtension", this.CurrentExtension );

		this.ResetExtensionSelectionState();
		if ( extension === this.CurrentExtension )
		{
			this.CurrentExtension = AzureLinks[1];
			this.CurrentExtension.PropertyBag._selected = true;
			this.setState( { AllFlyoutsClosed: this.CurrentExtension.name } );
		}
		else
		{
			this.CurrentExtension = extension;
			this.CurrentExtension.PropertyBag._selected = true;
			this.setState( { AllFlyoutsClosed: this.CurrentExtension.name } );
		}

		return;
	};

	// ME CONTROL METHODS
	OnClick_OpenMeControl( ev )
	{	//	
		console.debug( "OnClick_OpenMeControl", this.MeControlOpen );
		ev.nativeEvent.preventDefault();
		ev.nativeEvent.stopImmediatePropagation();
		ev.nativeEvent.stopPropagation();

		this.MeControlOpen = !this.MeControlOpen;
		this.setState( { AllFlyoutsClosed: this.MeControlOpen } );

		return false;
	};

	render()
	{
		//console.debug( "App.render()",this.CurrentExtension.name,this.CurrentExtension.PropertyBag._selected);
		//	FAST-DNA <Button appearance={ButtonAppearance.primary} onClick={this.HandleClick}>Click me!</Button>

		console.debug( "App.render():this.state.DefaultFlyoutsClosed", this.state.DefaultFlyoutsClosed );

		if ( this.state.DefaultFlyoutsClosed === true )
		{
			this.LeftNavOpen = true;
			this.MeControlOpen = false;
			this.SearchPanelOpen = false;
			this.ContextPanelOpen = false;
		}


		return (
			<div className="App" onClick={this.OnClick_ToggleMenus}>
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
					IsOpen={this.MeControlOpen}
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
					<this.CurrentExtension {...this.CurrentExtension.PropertyBag} />
				</div>
				{
					this.ContextPanelOpen &&
					<div className="context-panel-default">
						<div className="context-panel-header">
							<div className="cp-current-title">{this.CurrentContextPanel.PropertyBag.Title}</div>
							<div className="cp-close-btn" onClick={this.HandleContextPanelClose} >{this.CurrentContextPanelCloseButton}</div>
						</div>
						<div className="context-panel-content">
							<this.CurrentContextPanel closeClick={this.HandleContextPanelClose} />
						</div>
					</div>
				}
				{!this.ContextPanelOpen}

			</main>
		</div> );
	}
}