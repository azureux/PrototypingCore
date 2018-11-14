/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
//// "VerticalNavigationBar" control
"use strict";

import { Utilities as Utils, DataEnums as Data } from "../../../js/utilities.js";

import { SVG as AzSvgs } from "../../../js/svg-assets.js";
import { ButtonControl as BtnCtrl } from "../../standard-controls/button/button.js";

export class VerticalNavigationBar extends React.Component
{
	constructor( props )
	{
		super( props );
		this.ID = "vert-nav-panel";
		this.Title = "Vertical Navigation Bar";
		this.Application = props.Application;
		//this.Theme = props.Application.state.CurrentTheme; //causes break JG
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
        this.Chevron = AzSvgs.DoubleChevronLeft.AzSvgs;
		this.ChevronClass = this.CssClasses.ChevronExpanded;
		this.ListPanelClass = this.CssClasses.ListPanelExpanded;

		// inject control specific CSS	
        Utils.InjectControlCss( this.CssFileID, this.CssFile );
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
            this.Chevron = AzSvgs.DoubleChevronRight.AzSvgs;
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
            this.Chevron = AzSvgs.DoubleChevronLeft.AzSvgs;
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
            this.Chevron = AzSvgs.DoubleChevronRight.AzSvgs;
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

		//this.Handle_ExtensionSelection( {extension:"foo"}); //this causes break JG
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
            //React.createElement('div', {}, '<Empty left nav div>')
            //React.createElement(BtnCtrl, { attributeTitle: 'New', buttonText: 'New', key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton } )

            React.createElement(BtnCtrl, { attributeTitle: 'New', buttonText: 'New', svgIcon: AzSvgs.Color.NewPlusSign, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton }),
			React.createElement(BtnCtrl, { attributeTitle: 'Dashboard', buttonText: 'Dashboard', svgIcon: AzSvgs.Color.Dashboard, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Resource groups', buttonText: 'Resource groups', svgIcon: AzSvgs.Color.ResourceGroup, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'App Services', buttonText: 'App Services', svgIcon: AzSvgs.Color.Websites, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Function Apps', buttonText: 'Function Apps', svgIcon: AzSvgs.Color.Functions, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Databases', buttonText: 'Databases', svgIcon: AzSvgs.Color.SQLDatabases, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Azure Cosmos DB', buttonText: 'Azure Cosmos DB', svgIcon: AzSvgs.Color.CosmosDB, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Virtual Machines', buttonText: 'Virtual Machines', svgIcon: AzSvgs.Color.VirtualMachines, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Load Balancer', buttonText: 'Load Balancer', svgIcon: AzSvgs.Color.LoadBalancer, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Storage Account', buttonText: 'Storage Account', svgIcon: AzSvgs.Color.Storage, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Virtual Network', buttonText: 'Virtual Network', svgIcon: AzSvgs.Color.VirtualNetworks, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Azure Active Directory', buttonText: 'Azure Active Directory', svgIcon: AzSvgs.Color.ActiveDirectory, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Advisor', buttonText: 'Advisor', svgIcon: AzSvgs.Color.Advisor, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed  , onClickHandler: this.Handle_NavButton } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Security Center', buttonText: 'Security Center', svgIcon: AzSvgs.Color.SecurityCenter, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'New', buttonText: 'New', svgIcon: AzSvgs.Color.NewPlusSign, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Dashboard', buttonText: 'Dashboard', svgIcon: AzSvgs.Color.Dashboard, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Resource groups', buttonText: 'Resource groups', svgIcon: AzSvgs.Color.ResourceGroup, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'App Services', buttonText: 'App Services', svgIcon: AzSvgs.Color.Websites, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Function Apps', buttonText: 'Function Apps', svgIcon: AzSvgs.Color.Functions, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Databases', buttonText: 'Databases', svgIcon: AzSvgs.Color.SQLDatabases, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Azure Cosmos DB', buttonText: 'Azure Cosmos DB', svgIcon: AzSvgs.Color.CosmosDB, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Virtual Machines', buttonText: 'Virtual Machines', svgIcon: AzSvgs.Color.VirtualMachines, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Load Balancer', buttonText: 'Load Balancer', svgIcon: AzSvgs.Color.LoadBalancer, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Storage Account', buttonText: 'Storage Account', svgIcon: AzSvgs.Color.Storage, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Virtual Network', buttonText: 'Virtual Network', svgIcon: AzSvgs.Color.VirtualNetworks, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Azure Active Directory', buttonText: 'Azure Active Directory', svgIcon: AzSvgs.Color.ActiveDirectory, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Advisor', buttonText: 'Advisor', svgIcon: AzSvgs.Color.Advisor, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed , onClickHandler: this.Handle_NavButton  } ),
            React.createElement(BtnCtrl, { attributeTitle: 'Security Center', buttonText: 'Security Center', svgIcon: AzSvgs.Color.SecurityCenter, key: Utils.NewId(), IsCollapsed: this.state.IsCollapsed, onClickHandler: this.Handle_NavButton   } )
		];

		//	console.debug( "render:state", this.state.IsCollapsed );
		//	expland/collapse button
		let _expand_collapse_button = React.createElement( 'div',
				{
					className: this.ChevronClass,
					title: 'Expand and collapse the left navigation',
                    key: Utils.NewId(),
					onClick: this.Handle_ExpandCollapse,
                    dangerouslySetInnerHTML: Utils.CreateSvgMarkup( this.Chevron ) 
				} );

		//	extensions list panel
		let _extensions_list_panel = React.createElement( 'div',
			{
				className: this.ListPanelClass,
					title: 'Azure extension applications',
                key: Utils.NewId(),
				}, _extensions );

        //	left nav container for all extensions 
		//	console.debug( "this.state.CurrentCssClass", this.state.CurrentCssClass );
        this.vertnavbar = React.createElement('div', { id: this.ID, className: this.MainClass }, [_expand_collapse_button, _extensions_list_panel] ); 
		return this.vertnavbar;
	};
};
