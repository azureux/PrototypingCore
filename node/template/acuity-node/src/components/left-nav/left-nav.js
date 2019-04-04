import React, { Component } from 'react';
import { Utilities } from './../../js/utilities';
import SvgIcon from "./../svg-icons/svg-icon";
import "./left-nav.css";

export default class LeftNav extends Component
{
	constructor( props )
	{	//	console.debug("LeftNav.props", props.opened);
		super( props );

		this.state = {
			NavOpened: this.props.opened
		};

		this.IsOpened = this.state.NavOpened;

		// MAIN CSS
		this._css_left_nav_open = "left-nav-open";
		this._css_left_nav_closed = "left-nav-closed";
		this.CssLeftNav = this._css_left_nav_closed;

		// TOGGLE BUTTONS
		this._panel_chevron_open = SvgIcon.Icons.DoubleChevronOpen;
		this._panel_chevron_closed = SvgIcon.Icons.DoubleChevronClosed;
		this.ToggleChevron = this._close_panel_chevron;
		this._css_toggle_panel_open = "toggle-open";
		this._css_toggle_panel_closed = "toggle-closed";
		this.ToggleCss = this._css_toggle_open_panel;
		this.OnClick_ToggleNav = this.ToggleNav.bind(this);

		// FAVORITES
		this._fav_bar_closed = SvgIcon.Icons.FavoriteClosed;
		this._fav_bar_open = SvgIcon.Icons.FavoriteOpen;
		this.FavoriteBarSvg = this._fav_bar_open; 

		// this will move out to ES6 array files
		this.Links = {
			topNavigation: [
				{ name: "Create a resource", icon: SvgIcon.Icons.CreateNew, key: Utilities.NewKey() },
				{ name: "Home", icon: SvgIcon.Icons.AzureHome, key: Utilities.NewKey() },
				{ name: "Dashboard", icon: SvgIcon.Icons.AzureDashboard, key: Utilities.NewKey() },
				{ name: "All services", icon: SvgIcon.Icons.AllServices, key: Utilities.NewKey() },
			],
			resources: [
				{ name: "App services", iconName: "svg", key: Utilities.NewKey() },
				{ name: "All resources", iconName: "svg", key: Utilities.NewKey() },
				{ name: "Function Apps", iconName: "svg", key: Utilities.NewKey() },
				{ name: "Resource groups", iconName: "svg", key: Utilities.NewKey() },
				{ name: "SQL databases", iconName: "svg", key: Utilities.NewKey() },
				{ name: "Virtual Machines", iconName: "svg", key: Utilities.NewKey() },
				{ name: "Load balancers", iconName: "svg", key: Utilities.NewKey() },
				{ name: "Storage accounts", iconName: "svg", key: Utilities.NewKey() },
				{ name: "Virtual networks", iconName: "svg", key: Utilities.NewKey() },
				{ name: "Azure Active Directory", iconName: "svg", key: Utilities.NewKey() },
				{ name: "Monitor", iconName: "svg", key: Utilities.NewKey() },
				{ name: "Advisor", iconName: "svg", key: Utilities.NewKey() },
				{ name: "Azure Cosmos DB", iconName: "svg", key: Utilities.NewKey() },
				{ name: "Security Center", iconName: "svg", key: Utilities.NewKey() },
				{ name: "Cost Management + Billing", iconName: "svg", key: Utilities.NewKey() },
				{ name: "Help + support", iconName: "svg", key: Utilities.NewKey() },
			]
		};

		return;
	}
	CheckToggleStatus()
	{	//	console.debug("LeftNav.SetState", this.props.opened, this.state.NavOpened, this.IsOpened);
		if (this.IsOpened === true)
		{
			this.ToggleChevron = this._panel_chevron_open;
			this.ToggleCss = this._css_toggle_panel_open;
			this.FavoriteBarSvg = this._fav_bar_open;
			this.CssLeftNav = this._css_left_nav_open;
			this.IsOpened = false;
		}
		else if (this.IsOpened === false)
		{
			this.ToggleChevron = this._panel_chevron_closed;
			this.ToggleCss = this._css_toggle_panel_closed;
			this.FavoriteBarSvg = this._fav_bar_closed;
			this.CssLeftNav = this._css_left_nav_closed;
			this.IsOpened = true;
		}
		return;
	};
	ToggleNav(pe)
	{	
		//	console.debug("LeftNav.ToggleNav", this.state.NavOpened);
		let _new_state = !this.state.NavOpened;
		//	console.debug("_new_state", _new_state);
		this.setState({ NavOpened: _new_state });
		return;
	};
	render()
	{
		//	console.debug("LeftNav.render", this.state.NavOpened, this.IsOpened);
		//	changing state causes a render, in this case we have to check the state & a prop each render?
		this.CheckToggleStatus();

		return (
			<div className={this.CssLeftNav}>
				<div title="Expand and collapse the left navigation" className={this.ToggleCss} onClick={this.OnClick_ToggleNav} >
					<SvgIcon icon={this.ToggleChevron} />
				</div>

				{this.Links.topNavigation.map(item => (
					<a href="{item.key}" className="left-nav-btn" key={item.key} title={item.name} tabIndex="0">
						<span className="left-nav-icon"><SvgIcon icon={item.icon} /></span>
						<span className="left-nav-res-name">{item.name}</span>
					</a>
				) )}

				<div className="left-nav-favorites">
					<SvgIcon icon={this.FavoriteBarSvg} />
				</div>
         
				{this.Links.resources.map( item => (
					<a href="{item.key}" className="left-nav-btn" key={item.key} title={item.name} tabIndex="0">
						<span className="left-nav-icon"><SvgIcon icon={item.icon} /></span>
						<span className="left-nav-res-name">{item.name}</span>
					</a>
				) )}
			</div>
		);
	}
}