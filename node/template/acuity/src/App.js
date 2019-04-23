import React from 'react';
import { Utilities as Utils } from './js/utilities.js';
import { AllExtensions, AzureLinks, FaveLinks, ToolBarContextPanels } from './extensions-list.js';
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
			PrototypeText: "Prototype",
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
		this.DefaultExtension = App.defaultProps.DefaultExtension;
		this.CurrentLeftNavExtension = App.defaultProps.CurrentExtension;
		this.CurrentExtension = App.defaultProps.CurrentExtension;
		this.BreadCrumbs = [
			this.DefaultExtension
		];

		this.Handle_SelectExtension = this.OnClick_SelectExtension.bind( this );
		this.Handle_BreadCrumbSelection = this.OnClick_BreadCrumbSelection.bind( this );


		// EXTENSION HEADER METHODS
		this.HandleExtHeaderPin = this.OnClick_PinThisExtension.bind( this );
		this.HandleExtClose = this.OnClick_CloseThisExtension.bind( this );

		// CONTEXT PANEL OBJECTS
		this.CurrentContextPanelCloseButton = ( <SvgIcon icon={SvgIcon.ShellIcons.ContextPanelClose} /> );
		this.CurrentContextPanel = undefined;	//App.defaultProps.CurrentContextPanel;
		this.HandleContextPanelToggle = this.OnClick_ToggleTopLevelContextBlade.bind( this );
		this.HandleContextPanelClose = this.OnClick_CloseContextPanel.bind( this );

		// ME CONTROL OBJECT
		this.Handle_MeControlToggle = this.OnClick_ToggleMeControl.bind( this );

		// FUNTIME
		this.Handle_ProtoPreToggle = this.OnClick_PreProtoToggleMenus.bind( this ); 

		// GENERAL event handler bindings
		this.OnClick_ResetAllMenus = this.ResetAllMenus.bind( this );

		this.AppProcessRoutes();
		return;
	};

	AppProcessRoutes()
	{	//	1.	read incoming URI
		//	2. parse into paths
		//	3. attempt to resolve against extensions list before assigning to bread crumbs/navigation stack
		//	4. assign last item to this.CurrentExtension, even if other lookup fails.
		//	5. if all lookups fail, go back to default home page
		console.debug( "App.ProcessRoutes");
		let _paths = Utils.ProcessRoutes();
		//	console.debug( "_paths", _paths );
		let _found_ext = [];

		_paths.forEach( function ( v, i, a )
		{	//	console.debug( i, v );
			let _found = AllExtensions.filter( function ( item )
			{	//	console.debug( "filter", item.PropertyBag._path, v );
				let _rv = undefined;
				if ( v === item.PropertyBag._path )
				{	//	console.debug( "match" );
					_rv = item;
				}
				return _rv;
			} );

			if ( _found.length > 0 )
			{
				_found_ext.push( _found[0] );
			}
			//	console.debug( "_found", _found );
			return;
		} );
		//console.debug( "_found_ext", _found_ext );
		//console.debug( "---" );

		if ( _found_ext.length >= 1 )
		{
			if ( _found_ext.length > 1 )
			{
				this.BreadCrumbs = _found_ext;
				this.CurrentExtension = _found_ext[_found_ext.length - 1];
			}
			else if ( _found_ext.length === 1 )
			{
				this.BreadCrumbs = [this.DefaultExtension, _found_ext[_found_ext.length - 1]];
				this.CurrentExtension = _found_ext[_found_ext.length - 1];
			}
		}

		//	Utils.SetStorage( _paths );
		return;
	};
	ResolveConfig()
	{	console.debug( "resolve config overrides, including theme changes" );
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

	// global event cancel
	OnClick_HandleEventCancelling( pe )
	{	//	
		console.debug( "OnClick_HandleEventCancelling" );
		pe.stopPropagation();
		pe.nativeEvent.stopImmediatePropagation();
		return;
	};

	//	FUNTIME
	//	RESETS CONFIG DEBUG STATE
	//	WILL TRY TO USE THIS FOR FEATURE FLAG TYPE STUFF
	//	ALSO RESETS THE URL
	OnClick_PreProtoToggleMenus( pe )
	{	//	console.debug( "OnClick_PreProtoToggleMenus", this.props.config.Debug );
		this.props.config.Debug = !this.props.config.Debug;
		return;
	};

	// ME CONTROL EVENTS
	OnClick_ToggleMeControl( pe )
	{	//	console.debug( "App.OnClick_ToggleMeControl()" );
		this.OnClick_HandleEventCancelling( pe );

		let _new_state = this.state.MeControl;
		//	console.debug( "_new_state", _new_state );
		this.setState( { MeControl: !_new_state } );
		//	console.debug( this.state.MeControl, _new_state );
		return;
	};

	// TOP TOOLBAR ICON METHODS
	OnClick_ToggleTopLevelContextBlade( newObj, pe )
	{	//	console.debug( "OnClick_TestTopNavBar_ContextBlade" );
		this.OnClick_HandleEventCancelling( pe );

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

		//pe.stopPropagation();
		//pe.nativeEvent.stopImmediatePropagation();
		this.OnClick_HandleEventCancelling( pe );

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

		Utils.SetURI( this.BreadCrumbs );
		return;
	};

	/* top bar header event handlers */
	OnClick_BreadCrumbSelection( ext, pe)
	{	console.debug( "App.OnClick_BreadCrumbHandler()" );
		this.OnClick_HandleEventCancelling( pe );
		return;
	};
	OnClick_PinThisExtension( pe )
	{	console.debug( "OnClick_PinThisExtension", pe );
		this.OnClick_HandleEventCancelling( pe );
		return;
	};
	OnClick_CloseThisExtension( pe )
	{	console.debug( "OnClick_CloseThisExtension", pe );
		this.OnClick_HandleEventCancelling( pe );
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
				<div className="brand-panel" onClick={this.Handle_ProtoPreToggle}>
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
						<this.CurrentExtension {...this.CurrentExtension.PropertyBag} handlePin={this.HandleExtHeaderPin} handleClose={this.HandleExtClose} />
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