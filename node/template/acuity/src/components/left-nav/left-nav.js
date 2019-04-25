import React from 'react';
//import { Utilities as Utils } from './../../js/utilities.js';
//import { AzureLinks, FaveLinks } from './../../extensions/extensions-list.js';
import SvgIcon from "./../svg-icons/svg-icon";
import LeftNavButton from "./left-nav-button.js";

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

		this.NavLinks = this.props.standardLinks;
		this.FavLinks = this.props.favoriteLinks;

		//	console.debug( "this.props.selectedKey", this.props.selectedKey );
		this.SelectedExtension = this.props.selectedKey;
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

		//this.NavLinks.forEach( function ( v, i, a )
		//{
		//	console.debug( "LeftNav..NavLinks::", i, v.name, v.PropertyBag._selected );
		//	return;
		//} );

		return (
			<div className={this.CssLeftNav}>

				<div title="Expand and collapse the left navigation" className="toggle-open" tabIndex="0" onClick={this.OnClick_ToggleNav}>
					{this.state.NavOpened && <SvgIcon icon={this.ToggleChevron} />}
					{!this.state.NavOpened && <SvgIcon icon={this.ToggleChevron} />}
				</div>

				{
					this.NavLinks.map( ( item, index ) => (
						<LeftNavButton
							key={index}
							selected={item.defaultProps.IsSelected}
							path={item.defaultProps.Path}
							text={item.defaultProps.Title}
							css={LeftNavButton.Styles.LeftNav}
							extension={item}
							navClick={this.props.clickSelect}>
							<SvgIcon icon={item.defaultProps.Icon} />	
					</LeftNavButton>
					) )
				}

				<div className="left-nav-favorites">
					{this.state.NavOpened && <SvgIcon icon={this.FavoriteBarSvg} />}
					{!this.state.NavOpened && <SvgIcon icon={this.FavoriteBarSvg} />}
				</div>

				{
					this.state.NavOpened && 
					<div className="left-nav-ext-list-panel">
						{
							this.FavLinks.map( ( item, index ) => (
								<LeftNavButton
									key={index}
									selected={item.defaultProps.IsSelected}
									path={item.defaultProps.Path}
									text={item.defaultProps.Title}
									css={LeftNavButton.Styles.LeftNav}
									extension={item}
									navClick={this.props.clickSelect}>
									<SvgIcon icon={item.defaultProps.Icon} />	
								</LeftNavButton>
							) )
						}
					</div>
				}
				{
					!this.state.NavOpened &&
					<div className="left-nav-ext-list-panel left-nav-ext-list-panel-closed">
						{
							this.FavLinks.map( ( item, index ) => (
								<LeftNavButton
									key={index}
									selected={item.defaultProps.IsSelected}
									path={item.defaultProps.Path}
									text={item.defaultProps.Title}
									css={LeftNavButton.Styles.LeftNav}
									extension={item}
									navClick={this.props.clickSelect}>
									<SvgIcon icon={item.defaultProps.Icon} />	
								</LeftNavButton>
							) )
						}
					</div>
				}

			</div>
		);
	};
}