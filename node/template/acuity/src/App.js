import React from 'react';
import { Utilities as Utils } from './js/utilities.js';
import { AzureLinks, FaveLinks, ToolBarContextPanels } from './extensions-list.js';
import SearchBox from './components/search-box/search-box.js';
import LeftNav from './components/left-nav/left-nav.js';
import ButtonControl3 from './components/button/button3.js';
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
		};

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
		this.CurrentContextPanel = App.defaultProps.CurrentContextPanel;
		this.HandleContextPanelToggle = this.OnClick_TestTopNavBar_ContextBlade.bind( this );
		this.HandleContextPanelClose = this.OnClick_CloseContextPanel.bind( this );

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
	{	//	console.debug( "App.ResetAllMenus-1", this.LeftNavOpen );
		this.setState( { AllFlyoutsClosed: !this.state.AllFlyoutsClosed } );
		return;
	};


	// depricated
	OnClick_LogoTestClick( pe )
	{
		console.debug( "OnClick_LogoTestClick. TESTING" );
		return;
	};

	// TOP TOOLBAR ICON METHODS
	OnClick_TestTopNavBar_ContextBlade( newObj, ev )
	{
		//console.debug( "OnClick_TestTopNavBar_ContextBlade" );
		//console.debug( "this.ContextPanelOpen", this.ContextPanelOpen );
		//console.debug( "this.CurrentContextPanel", this.CurrentContextPanel.name );

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
	render()
	{
		//console.debug( "App.render()",this.CurrentExtension.name,this.CurrentExtension.PropertyBag._selected);
		//	FAST-DNA <Button appearance={ButtonAppearance.primary} onClick={this.HandleClick}>Click me!</Button>
		return ( <div className="App">
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
							<ButtonControl3
								key={index}
								text="Console"
								css={ButtonControl3.Styles.TopNav}
								contextPanel={item}
								navClick={this.HandleContextPanelToggle}>
								<SvgIcon icon={item.PropertyBag.Icon} />
							</ButtonControl3>
						) )
					}
				</div>
				<div className="users-panel">Me Control</div>
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
					<div className="context-panel-default-open">
						<this.CurrentContextPanel closeClick={this.HandleContextPanelClose }/>
					</div>
				}
				{!this.ContextPanelOpen}

			</main>
		</div> );
	}
}