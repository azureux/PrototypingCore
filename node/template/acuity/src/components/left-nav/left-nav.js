import React from 'react';
//import { Utilities as Utils } from './../../js/utilities';
import { AzureLinks, FaveLinks } from './../../extensions/extensions-list.js';
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

		this.IsOpened = true;

		// MAIN CSS
		this._css_left_nav_open = "left-nav-open";
		this._css_left_nav_closed = "left-nav-closed";
		this.CssLeftNav = this._css_left_nav_closed;

		// TOGGLE BUTTONS
		this.ToggleChevron = undefined;
		this.OnClick_ToggleNav = this.ToggleNav.bind(this);

		// FAVORITES
		this.FavoriteBarSvg = undefined;

		this.NavLinks = AzureLinks;
		this.FavLinks = FaveLinks;

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
		//	changing state causes a render, 
		//	we have to check the state & a prop each render ?
		this.CheckToggleStatus();

		return (
			<div className={this.CssLeftNav}>

				<div title="Expand and collapse the left navigation" className="toggle-open" tabIndex="0" onClick={this.OnClick_ToggleNav}>
					{this.state.NavOpened && <SvgIcon icon={this.ToggleChevron} />}
					{!this.state.NavOpened && <SvgIcon icon={this.ToggleChevron} />}
				</div>

				{this.NavLinks.map( (item, index) => (
					<a href={item.Path()} className="left-nav-btn" key={item.Key()} title={item.Title()} tabIndex="0">
						<span className="left-nav-icon"><SvgIcon icon={item.Icon()} /></span>
						<span className="left-nav-res-name">{item.Title()}</span>
					</a>
				) )}

				<div className="left-nav-favorites">
					{this.state.NavOpened && <SvgIcon icon={this.FavoriteBarSvg} />}
					{!this.state.NavOpened && <SvgIcon icon={this.FavoriteBarSvg} />}
				</div>

				{this.FavLinks.map((item, index) => (
					<a href={item.Path()} className="left-nav-btn" key={index} title={item.Title()} tabIndex="0">
						<span className="left-nav-icon"><SvgIcon icon={item.Icon()} /></span>
						<span className="left-nav-res-name">{item.Title()}</span>
					</a>
				))}
			</div>
		);
	};
}