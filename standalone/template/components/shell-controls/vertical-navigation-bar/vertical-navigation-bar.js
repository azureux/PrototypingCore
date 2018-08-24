/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
//// "VerticalNavigationBar" control
"use strict";
class VerticalNavigationBar extends React.Component
{
	constructor( props )
	{
		super( props );
		this.ID = "vert-nav-panel";
		this.Title = "Vertical Navigation Bar";
		this.Application = props.Application;
		this.Theme = props.Application.state.CurrentTheme;
		this.CssFileID = "vert-nav-panel-css";
		this.CssFile = "components/shell-controls/vertical-navigation-bar/vertical-navigation-bar.css";
		this.CssClasses = {
			Normal: "vertnav-main " + this.Theme,
			Collapsed: "vertnav-main-collapsed " + this.Theme,
			Dirty: "vertnav-main-dirty " + this.Theme,
			Saved: "vertnav-main-saved " + this.Theme,
			ChevronExpanded: "exp-coll-button-default" ,	//	+ this.Theme,
			ChevronCollapsed: "exp-coll-button-collapsed",	// + this.Theme,
			ListPanelExpanded: "ext-list-panel-default",	// + this.Theme,
			ListPanelCollapsed: "ext-list-panel-collapsed",	// + this.Theme,
		};
		this.state = {
			IsCollapsed: (this.props.NavExpanded || false),
		};
		this.MainClass = this.CssClasses.Normal;
		this.Chevron = SVG.DoubleChevronLeft.SVG;
		this.ChevronClass = this.CssClasses.ChevronExpanded;
		this.ListPanelClass = this.CssClasses.ListPanelExpanded;

		// inject control specific CSS	
		Utilities.InjectControlCss( this.CssFileID, this.CssFile );
		// set properties
		this.Custom_AssignState();
		// events
		// expand/collapse the vertical navigation bar
		this.Handle_ExpandCollapse = this.OnClick_CollapseVerticalNavBar.bind( this );
		// handle setting the state of a selected item in the vertical nav
		this.Handle_NavButton = this.OnClick_SelectNavigationItem.bind( this );
		// handle setting the extension at the application level
		this.Handle_ExtensionSelection = this.props.ExtensionHandler;
		return;
	};
	Custom_AssignState()
	{	//	console.debug( "Custom_AssignState()" );
		//console.debug( "this.state.IsCollapsed", this.state.IsCollapsed );
		//console.debug( "this.MainClass", this.MainClass );
		//console.debug( "this.Chevron", this.Chevron );
		//console.debug( "this.ChevronClass", this.ChevronClass );
		//console.debug( "this.ListPanelClass", this.ListPanelClass );

		if ( this.state.IsCollapsed == true )
		{
			//	this.setState( { IsCollapsed: false } );
			this.MainClass = this.CssClasses.Collapsed;
			this.Chevron = SVG.DoubleChevronRight.SVG;
			this.ChevronClass =  this.CssClasses.ChevronCollapsed;
			this.ListPanelClass = this.CssClasses.ListPanelCollapsed;
		}

		//console.debug( "this.state.IsCollapsed", this.state.IsCollapsed );
		//console.debug( "this.MainClass", this.MainClass );
		//console.debug( "this.Chevron", this.Chevron );
		//console.debug( "this.ChevronClass", this.ChevronClass );
		//console.debug( "this.ListPanelClass", this.ListPanelClass );

		return;
	};
	OnClick_CollapseVerticalNavBar( ev )
	{
		console.debug( "VerticalNavigationBar::OnClick_CollapseVerticalNavBar" );
		ev.preventDefault();
		ev.stopPropagation();

		//console.debug( "this.state.IsCollapsed", this.state.IsCollapsed );
		//console.debug( "this.MainClass", this.MainClass );
		////	console.debug( "this.Chevron", this.Chevron );
		//console.debug( "this.ChevronClass", this.ChevronClass );
		//console.debug( "this.ListPanelClass", this.ListPanelClass );

		if ( this.state.IsCollapsed == true )
		{
			this.setState( { IsCollapsed: false } );
			//this.MainClass = this.CssClasses.Collapsed;
			//this.Chevron = SVG.DoubleChevronRight.SVG;
			//this.ChevronClass =  this.CssClasses.ChevronCollapsed;
			//this.ListPanelClass = this.CssClasses.ListPanelCollapsed;
			this.MainClass = this.CssClasses.Normal;
			this.Chevron = SVG.DoubleChevronLeft.SVG;
			this.ChevronClass = this.CssClasses.ChevronExpanded;
			this.ListPanelClass = this.CssClasses.ListPanelExpanded;
		}
		else if ( this.state.IsCollapsed == false )
		{
			this.setState( { IsCollapsed: true } );		
			//this.MainClass = this.CssClasses.Normal;
			//this.Chevron = SVG.DoubleChevronLeft.SVG;
			//this.ChevronClass = this.CssClasses.ChevronExpanded;
			//this.ListPanelClass = this.CssClasses.ListPanelExpanded;
			this.MainClass = this.CssClasses.Collapsed;
			this.Chevron = SVG.DoubleChevronRight.SVG;
			this.ChevronClass =  this.CssClasses.ChevronCollapsed;
			this.ListPanelClass = this.CssClasses.ListPanelCollapsed;
		}

		//console.debug( "this.state.IsCollapsed", this.state.IsCollapsed );
		//console.debug( "this.MainClass", this.MainClass );
		////	console.debug( "this.Chevron", this.Chevron );
		//console.debug( "this.ChevronClass", this.ChevronClass );
		//console.debug( "this.ListPanelClass", this.ListPanelClass );
        return;
	};
	OnClick_SelectNavigationItem()
	{
		console.debug( "HACK: VerticalNavigationBar.OnClick_SelectNavigationItem: RESET TO ONLY THE CURRENTLY SELECTED NAV ITEM/EXTENSION. ALSO CALL THE CHAINED EVENT FROM THE APPPLICATION LEVEL" );

		this.Handle_ExtensionSelection( {extension:"foo"});
		return;
	};
	render()
	{	//	
		console.debug( "VERTICALNAVIGATIONBAR.RENDER()::this.state.IsCollapsed", this.state.IsCollapsed );
		////	console.debug( "this.Chevron", this.Chevron );
		//console.debug( "this.ChevronClass", this.ChevronClass );
		//console.debug( "this.ListPanelClass", this.ListPanelClass );
		//	individual extensions 
		//	testing batch for panel overflow, at 1440 height 		
		let _extensions = [
			React.createElement( ButtonCtrl, { attributeTitle: 'New', buttonText: 'New', svgIcon: SVG.Color.NewPlusSign, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton } ),


			React.createElement( ButtonCtrl, { attributeTitle: 'Dashboard', buttonText: 'Dashboard', svgIcon: SVG.Color.Dashboard, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Resource groups', buttonText: 'Resource groups', svgIcon: SVG.Color.ResourceGroup, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'App Services', buttonText: 'App Services', svgIcon: SVG.Color.Websites, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Function Apps', buttonText: 'Function Apps', svgIcon: SVG.Color.Functions, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Databases', buttonText: 'Databases', svgIcon: SVG.Color.SQLDatabases, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Azure Cosmos DB', buttonText: 'Azure Cosmos DB', svgIcon: SVG.Color.CosmosDB, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Virtual Machines', buttonText: 'Virtual Machines', svgIcon: SVG.Color.VirtualMachines, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Load Balancer', buttonText: 'Load Balancer', svgIcon: SVG.Color.LoadBalancer, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Storage Account', buttonText: 'Storage Account', svgIcon: SVG.Color.Storage, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Virtual Network', buttonText: 'Virtual Network', svgIcon: SVG.Color.VirtualNetworks, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Azure Active Directory', buttonText: 'Azure Active Directory', svgIcon: SVG.Color.ActiveDirectory, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Advisor', buttonText: 'Advisor', svgIcon: SVG.Color.Advisor, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed  , onClickHandler: this.Handle_NavButton } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Security Center', buttonText: 'Security Center', svgIcon: SVG.Color.SecurityCenter, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'New', buttonText: 'New', svgIcon: SVG.Color.NewPlusSign, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Dashboard', buttonText: 'Dashboard', svgIcon: SVG.Color.Dashboard, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Resource groups', buttonText: 'Resource groups', svgIcon: SVG.Color.ResourceGroup, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'App Services', buttonText: 'App Services', svgIcon: SVG.Color.Websites, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Function Apps', buttonText: 'Function Apps', svgIcon: SVG.Color.Functions, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Databases', buttonText: 'Databases', svgIcon: SVG.Color.SQLDatabases, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Azure Cosmos DB', buttonText: 'Azure Cosmos DB', svgIcon: SVG.Color.CosmosDB, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Virtual Machines', buttonText: 'Virtual Machines', svgIcon: SVG.Color.VirtualMachines, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Load Balancer', buttonText: 'Load Balancer', svgIcon: SVG.Color.LoadBalancer, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Storage Account', buttonText: 'Storage Account', svgIcon: SVG.Color.Storage, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Virtual Network', buttonText: 'Virtual Network', svgIcon: SVG.Color.VirtualNetworks, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Azure Active Directory', buttonText: 'Azure Active Directory', svgIcon: SVG.Color.ActiveDirectory, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Advisor', buttonText: 'Advisor', svgIcon: SVG.Color.Advisor, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
			React.createElement( ButtonCtrl, { attributeTitle: 'Security Center', buttonText: 'Security Center', svgIcon: SVG.Color.SecurityCenter, key: Utilities.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } )
		];

		//	console.debug( "render:state", this.state.IsCollapsed );
		//	expland/collapse button
		let _expand_collapse_button = React.createElement( 'div',
				{
					className: this.ChevronClass,
					title: 'Expand and collapse the left navigation',
					key: Utilities.NewId(),
					onClick: this.Handle_ExpandCollapse,
					dangerouslySetInnerHTML: Utilities.CreateSvgMarkup( this.Chevron ) 
				} );

		//	extensions list panel
		let _extensions_list_panel = React.createElement( 'div',
			{
				className: this.ListPanelClass,
					title: 'Azure extension applications',
					key: Utilities.NewId(),
				}, _extensions );

        //	left nav container for all extensions 
		//	console.debug( "this.state.CurrentCssClass", this.state.CurrentCssClass );
        this.vertnavbar = React.createElement('div', { id: this.ID, className: this.MainClass }, [_expand_collapse_button, _extensions_list_panel] ); 
		return this.vertnavbar;
	};
};
