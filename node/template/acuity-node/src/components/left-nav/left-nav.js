import React from 'react';
import { Utilities } from './../../js/utilities';
import SvgIcon from "./../svg-icons/svg-icon";
import "./left-nav.css";

export default class LeftNav extends React.Component
{
	constructor( props )
	{	//	console.debug("LeftNav.props", props.opened);
		super( props );

		this.state = {
			NavOpened: this.props.opened
		};

		this.IsOpened = true;	// this.state.NavOpened;

		// MAIN CSS
		this._css_left_nav_open = "left-nav-open";
		this._css_left_nav_closed = "left-nav-closed";
		this.CssLeftNav = this._css_left_nav_closed;

		// TOGGLE BUTTONS
		this.ToggleChevron = undefined;
		this.OnClick_ToggleNav = this.ToggleNav.bind(this);

		// FAVORITES
		this.FavoriteBarSvg = undefined;

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
	{	//	
		if (this.state.NavOpened === true)
		{
			this.ToggleChevron = SvgIcon.ShellIcons.LeftNavChevronOpen;
			this.FavoriteBarSvg = SvgIcon.ShellIcons.FavoriteOpen;
			this.CssLeftNav = this._css_left_nav_open;
			this.IsOpened = false;
		}
		else if (this.state.NavOpened === false)
		{
			this.ToggleChevron = SvgIcon.ShellIcons.LeftNavChevronClosed;
			this.FavoriteBarSvg = SvgIcon.ShellIcons.FavoriteClosed;
			this.CssLeftNav = this._css_left_nav_closed;
			this.IsOpened = true;
		}
		return;
	};
	ToggleNav(pe)
	{	//	console.debug("LeftNav.ToggleNav", this.state.NavOpened);
		this.setState({ NavOpened: !this.state.NavOpened });
		return;
	};
	render()
	{
		//	changing state causes a render, in this case we have to check the state & a prop each render?
		this.CheckToggleStatus();

		return (
			<div className={this.CssLeftNav}>

				<div title="Expand and collapse the left navigation" className="toggle-open" tabIndex="0" onClick={this.OnClick_ToggleNav}>
					{this.state.NavOpened && <SvgIcon icon={this.ToggleChevron} />}
					{!this.state.NavOpened && <SvgIcon icon={this.ToggleChevron} />}
				</div>

				{this.Links.topNavigation.map(item => (
					<a href="{item.key}" className="left-nav-btn" key={item.key} title={item.name} tabIndex="0">
						<span className="left-nav-icon"><SvgIcon icon={item.icon} /></span>
						<span className="left-nav-res-name">{item.name}</span>
					</a>
				))}

				<div className="left-nav-favorites">
					{this.state.NavOpened && <SvgIcon icon={this.FavoriteBarSvg} />}
					{!this.state.NavOpened && <SvgIcon icon={this.FavoriteBarSvg} />}
				</div>

				{this.Links.resources.map(item => (
					<a href="{item.key}" className="left-nav-btn" key={item.key} title={item.name} tabIndex="0">
						<span className="left-nav-icon"><SvgIcon icon={item.icon} /></span>
						<span className="left-nav-res-name">{item.name}</span>
					</a>
				))}
			</div>
		);
	};
}