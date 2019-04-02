import React, { Component } from 'react';
import { Utilities } from './../../js/utilities';
import "./left-nav.css";
import SVGIcon from "./../icons/svg";

export default class LeftNav extends Component
{
	constructor( props )
	{
		super( props );

		this.state = {
			NavOpened: this.props.opened
		};
		//	console.debug( "LeftNav", this.state.NavOpened, this.props.opened );

		this.Links = {
			topNavigation: [
				{ name: "Create a resource", iconName: "create-new", key: Utilities.NewKey() },
				{ name: "Home", iconName: "home", key: Utilities.NewKey() },
				{ name: "Dashboard", iconName: "dashboard", key: Utilities.NewKey() },
				{ name: "All services", iconName: "all-resources", key: Utilities.NewKey() },
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

		/*<div className="left-nav-favorites" dangerouslySetInnerHTML={Utilities.CreateSvgMarkup( this.FavoriteBar)}></div>*/
		//this._fav_bar_closed = '<svg><g id="azure-nav-favorites-closed" transform="scale(1,1)"><line x1="0" y1="15" x2="15" y2="15" stroke="black" stroke-width="0.2"></line><polygon transform="translate(7,7) scale(0.3,0.3)" points="53.46 0 59.06 17.72 77.64 17.57 62.52 28.37 68.41 46 53.46 34.95 38.51 46 44.4 28.37 29.27 17.57 47.86 17.72 53.46 0" style="fill:gold" stroke="black"></polygon><line x1="31" y1="15" x2="50" y2="15" stroke="black" stroke-width="0.2"></line></g></svg>';
		//this._fav_bar_open = '<svg><g id="azure-nav-favorites-open"  transform="scale(1,1)"><line x1="0" y1="15" x2="12" y2="15" stroke="black" stroke-width="0.2"></line><polygon transform="translate(1,7) scale(0.3,0.3)" points="53.46 0 59.06 17.72 77.64 17.57 62.52 28.37 68.41 46 53.46 34.95 38.51 46 44.4 28.37 29.27 17.57 47.86 17.72 53.46 0" style="fill:gold" stroke="black"></polygon><line x1="22" y1="15" x2="36" y2="15" stroke="black" stroke-width="0.2"></line><text x="36" y="19" font-size="13px" fill="rgba(0,0,0,1)">FAVORITES</text><line x1="100" y1="15" x2="400" y2="15" stroke="black" stroke-width="0.2"></line></g></svg>';

		this._fav_bar_closed = "favorite-closed";
		this._fav_bar_open = "favorite-open";
		this.FavoriteBar = this._fav_bar_open; 
	 }
	render()
	{
		return (
			<div>
				{this.Links.topNavigation.map( item => (
					<a href="{item.key}" className="left-nav-btn" key={item.key}>
						<span className="left-nav-icon"><SVGIcon name={item.iconName} /></span>
						<span className="left-nav-res-name">{item.name}</span>
					</a>
				) )}

				<div className="left-nav-favorites">
					<SVGIcon name={this.FavoriteBar} />
				</div>
         
				{this.Links.resources.map( item => (
					<a href="{item.key}" className="left-nav-btn" key={item.key}>
						<span className="left-nav-icon"><SVGIcon name={item.iconName} /></span>
						<span className="left-nav-res-name">{item.name}</span>
					</a>
				) )}
			</div>
		);
	}
}