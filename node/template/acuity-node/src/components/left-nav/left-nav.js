import React, { Component } from 'react';
import { Utilities } from './../../js/utilities';
import "./left-nav.css";
import SvgIcon from "./../svg-icons/svg-icon";

export default class LeftNav extends Component
{
	constructor( props )
	{
		super( props );

		this.state = {
			NavOpened: this.props.opened
		};
		//	console.debug( "LeftNav", this.state.NavOpened, this.props.opened );
		//	console.debug( "LeftNav", Svg );

		this._fav_bar_closed = "favorite-closed";
		this._fav_bar_open = "favorite-open";
		this.FavoriteBar = this._fav_bar_open; 

		// this will move out to ES6 array files
		this.Links = {
			topNavigation: [

				{ name: "Create a resource", icon: "create-new", key: Utilities.NewKey() },
				{ name: "Home", icon: "home", key: Utilities.NewKey() },
				{ name: "Dashboard", icon: "dashboard", key: Utilities.NewKey() },
				{ name: "All services", icon: "all-resources", key: Utilities.NewKey() },
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
	render()
	{
		return (
			<div>
				{this.Links.topNavigation.map( item => (
					<a href="{item.key}" className="left-nav-btn" key={item.key}>
						<span className="left-nav-icon"><SvgIcon icon={item.icon} /></span>
						<span className="left-nav-res-name">{item.name}</span>
					</a>
				) )}

				<div className="left-nav-favorites">
					<SvgIcon icon={this.FavoriteBar} />
				</div>
         
				{this.Links.resources.map( item => (
					<a href="{item.key}" className="left-nav-btn" key={item.key}>
						<span className="left-nav-icon"><SvgIcon icon={item.icon} /></span>
						<span className="left-nav-res-name">{item.name}</span>
					</a>
				) )}
			</div>
		);
	}
}