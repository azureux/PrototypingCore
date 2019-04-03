/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
"use strict";

import { Utilities as Utils, DataEnums as Data } from "../../../js/utilities.js";
import { SVG as AzSvgs } from "../../../js/svg-assets.js";
import { ButtonControl as BtnCtrl } from "../../standard-controls/button/button.js";

import { StandardExtensionsList as StandardExtensions } from "../../../extensions/standards-list.js";
import { FavoritesExtensionsList as FavoritesExtensions }  from "../../../extensions/favorites-list.js";

export class VerticalNavigationBar extends React.Component
{
	constructor( props )
	{
		super( props );
		this.ID = "vert-nav-panel";
		this.Title = "Vertical Navigation Bar";
		this.Application = props.Application;
		this.Theme = props.Application.state.CurrentTheme; //causes break JG
		this.CssFileID = "vert-nav-panel-css";
		this.CssFile = "components/shell-controls/vertical-navigation-bar/vertical-navigation-bar.css";
		this.CssClasses = {
			Normal: "vertnav-main",	//	 + this.Theme,
			Collapsed: "vertnav-main-collapsed",	//	 + this.Theme,
			Dirty: "vertnav-main-dirty",	//	 + this.Theme,
			Saved: "vertnav-main-saved",	//	 + this.Theme,
			ChevronExpanded: "exp-coll-button-default",	//	+ this.Theme,
			ChevronCollapsed: "exp-coll-button-collapsed",	// + this.Theme,
			ListPanelExpanded: "ext-list-panel-default",	// + this.Theme,
			ListPanelCollapsed: "ext-list-panel-collapsed",	// + this.Theme,
		};
		this.state = {
			IsCollapsed: ( this.props.NavExpanded || false ),
		};
		this.MainClass = this.CssClasses.Normal;
		this.Chevron = AzSvgs.DoubleChevronLeft.SVG;
		this.ChevronClass = this.CssClasses.ChevronExpanded;
		this.ListPanelClass = this.CssClasses.ListPanelExpanded;

		this.StandardCollection = [];	//	this.props.Standards;
		this.FavoritesCollection = [];	//	this.props.Favorites;
		this.SelectedItem = this.props.SelectedItem;

		this._fav_bar = "";
		this._fav_bar_closed = '<svg><g id="azure-nav-favorites-closed" transform="scale(1,1)"><line x1="0" y1="15" x2="15" y2="15" stroke="black" stroke-width="0.2"></line><polygon transform="translate(7,7) scale(0.3,0.3)" points="53.46 0 59.06 17.72 77.64 17.57 62.52 28.37 68.41 46 53.46 34.95 38.51 46 44.4 28.37 29.27 17.57 47.86 17.72 53.46 0" style="fill:gold" stroke="black"></polygon><line x1="31" y1="15" x2="50" y2="15" stroke="black" stroke-width="0.2"></line></g></svg>';
		this._fav_bar_open = '<svg><g id="azure-nav-favorites-open"  transform="scale(1,1)"><line x1="0" y1="15" x2="12" y2="15" stroke="black" stroke-width="0.2"></line><polygon transform="translate(7,7) scale(0.3,0.3)" points="53.46 0 59.06 17.72 77.64 17.57 62.52 28.37 68.41 46 53.46 34.95 38.51 46 44.4 28.37 29.27 17.57 47.86 17.72 53.46 0" style="fill:gold" stroke="black"></polygon><text x="39" y="19" font-size="13px" fill="rgba(0,0,0,1)">FAVORITES</text><line x1="104" y1="15" x2="240" y2="15" stroke="black" stroke-width="0.2"></line></g></svg>';

		// inject control specific CSS	
		Utils.InjectControlCss( this.CssFileID, this.CssFile );
		// set properties
		this.Custom_AssignState();

		// EVENTS
		// expand/collapse the vertical navigation bar
		this.Handle_ExpandCollapse = this.props.Application.OnClick_VertNav_OpenClose.bind( this.props.Application );

		//	HANDLE SETTING THE STATE OF A SELECTED ITEM IN THE VERTICAL NAV
		//	this.SelectedExtension = this.props.SelectedExtension;
		//	this.props.Application.OnClick_SelectNavigationItem.bind( this.props.Application );
		//	WORKING SOMEWHAT - NEED TO PASS SOME SORT OF ID
		//	this.Handle_NavButton = this.props.Application.OnClick_SelectNavigationItem.bind( this.props.Application, this );
		this.Handle_NavButton = this.SelectExtension.bind(this);

		return;
	}
	Custom_AssignState()
	{	//	
		//	console.debug( "Custom_AssignState()" );
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
	SelectExtension( poxyEvent, extensionObject)
	{	//	console.debug( "vert-nav: SelectExtension");
		//	this.props.Application.OnClick_SelectNavigationItem.bind( this.props.Application, this );
		this.Application.OnClick_SelectNavigationItem( extensionObject );
		return;
	};
	render()
	{	//	console.debug( "VERTICALNAVIGATIONBAR.RENDER()::this.state.IsCollapsed", this.state.IsCollapsed );
		//	console.debug( "this.Chevron", this.Chevron );
		//	console.debug( "this.ChevronClass", this.ChevronClass );
		//	console.debug( "this.ListPanelClass", this.ListPanelClass );

		// PRE-RENDER LOGIC
		if ( this.state.IsCollapsed == true )
		{
			this.MainClass = this.CssClasses.Collapsed;
            this.Chevron = AzSvgs.DoubleChevronRight.SVG;
			this.ChevronClass =  this.CssClasses.ChevronCollapsed;
			this.ListPanelClass = this.CssClasses.ListPanelCollapsed;
			this._fav_bar = this._fav_bar_closed;
		}
		else if ( this.state.IsCollapsed == false )
		{
			this.MainClass = this.CssClasses.Normal;
            this.Chevron = AzSvgs.DoubleChevronLeft.SVG;
			this.ChevronClass = this.CssClasses.ChevronExpanded;
			this.ListPanelClass = this.CssClasses.ListPanelExpanded;
			this._fav_bar = this._fav_bar_open;
		}

		for ( let i = 0; i < StandardExtensions.length; i++)
		{
			//	console.debug( i, StandardExtensions[i].name );
			//	console.debug( "Title()", StandardExtensions[i].Title() );
			//	console.debug( "Icon()", StandardExtensions[i].Icon() );
			let _std_item = React.createElement( BtnCtrl,
			{
				attributeTitle: StandardExtensions[i].Title(),
				buttonText: StandardExtensions[i].Title(),
				svgIcon: StandardExtensions[i].Icon(),
				key: Utils.NewId(),
				IsCollapsed: this.state.IsCollapsed,
				onClickHandler: this.Handle_NavButton,
				extensionObject: StandardExtensions[i]
			});

			this.StandardCollection.push( _std_item );
		};

		for ( let i = 0; i < FavoritesExtensions.length; i++)
		{
			//	console.debug( i, FavoritesExtensions[i].name );
			//	console.debug( "Title()", FavoritesExtensions[i].Title() );
			//	console.debug( "Icon()", FavoritesExtensions[i].Icon() );

			let _fav_item = React.createElement( BtnCtrl,
			{
				attributeTitle: FavoritesExtensions[i].Title(),
				buttonText: FavoritesExtensions[i].Title(),
				svgIcon: FavoritesExtensions[i].Icon(),
				key: Utils.NewId(),
				IsCollapsed: this.state.IsCollapsed,
				onClickHandler: this.Handle_NavButton,
				extensionObject: FavoritesExtensions[i]
			});

			this.FavoritesCollection.push( _fav_item );
		};

		let _standard_link_panel = React.createElement( 'div', { id: Utils.NewId( "std-nav" ), key: Utils.NewId(), className: "" }, this.StandardCollection ); 

		let _favorites_break = React.createElement( 'div', {
			id: Utils.NewId( "fav-break" ),
			key: Utils.NewId(),
			className: "favorites-breaker",
            dangerouslySetInnerHTML: Utils.CreateSvgMarkup( this._fav_bar ) 
		} );

		let _favorites_link_panel = React.createElement( 'div', { id: Utils.NewId( "fav-nav" ), key: Utils.NewId(), className: "" }, this.FavoritesCollection ); 

		// vertical nav bar button - open/close
		let _expand_collapse_button = React.createElement( 'div',
				{
					className: this.ChevronClass,
					title: 'Expand and collapse the left navigation',
                    key: Utils.NewId(),
					onClick: this.Handle_ExpandCollapse,
                    dangerouslySetInnerHTML: Utils.CreateSvgMarkup( this.Chevron ) 
				} );

		//	extensions master list panel
		let _extensions_list_panel = React.createElement( 'div',
			{	className: this.ListPanelClass, key: Utils.NewId(),
			}, [_standard_link_panel, _favorites_break, _favorites_link_panel] );

        //	left nav container for all extensions 
		//	console.debug( "this.state.CurrentCssClass", this.state.CurrentCssClass );
		this.VertNavBar = React.createElement( 'div', { id: this.ID, className: this.MainClass }, [_expand_collapse_button, _extensions_list_panel] ); 

		return this.VertNavBar;
	};
};
