import React from 'react';
import { Utilities as Utils } from "../../js/utilities.js";

export default class LeftNavButton extends React.Component
{
	constructor( props )
	{	//	
		super( props );

		this.Id = Utils.NewId( "btn3" );
		this.Text = ( this.props.text || this.constructor.name );
		this.Css = ( this.props.css || "left-nav-btn");
		//	console.debug( "this.props.selected", this.props.selected, this.props.children, );
		//this.IsSelected = ( this.props.selected || false );
		//this.state = {
		//	isClicked: this.IsSelected
		//};
		this.Path = "/" +  this.props.path + "/";

		//	this.HandleClick = this.OnClick_GetLeftNavPath.bind( this );
		this.Extension = this.props.extension;
		this.HandleClick = this.props.navClick.bind( this, this.props.extension );
		return;
	};
	static Styles =
		{
			LeftNav: "left-nav-btn",
			LeftNavSelected: "left-nav-btn-selected"
		};
	render()
	{
		//<a href={item.Ext_Path()} className="left-nav-btn" key={index} title={item.Ext_Title()} tabIndex="0">
		//	<span className="left-nav-icon"><SvgIcon icon={item.Ext_Icon()} /></span>
		//	<span className="left-nav-res-name">{item.Ext_Title()}</span>
		//</a>
		//console.debug( "leftnavbuttun.render", this.props.selected );
		//console.debug( "lnb", this.Extension.name, this.Extension.PropertyBag._selected );
		let _rv;

		if ( this.props.children !== undefined )
		{
			if ( this.props.selected === true )
			{
				let _css = LeftNavButton.Styles.LeftNavSelected + " " + this.Css;
				//_rv = ( <div tabIndex="0" className={this.Css} title={this.Text} onClick={this.HandleClick}>{this.props.children}</div> );
				_rv = (
					<a href="javascript:void(0)" className={_css} title={this.Text} tabIndex="0" onClick={this.HandleClick}>
						<span className="left-nav-icon">{this.props.children}</span>
						<span className="left-nav-res-name">{this.Text}</span>
					</a>
				);
			}
			else
			{
				//_rv = ( <div tabIndex="0" className={this.Css} title={this.Text} onClick={this.HandleClick}>{this.props.children}</div> );
				_rv = (
					<a href="javascript:void(0)" className={this.Css} title={this.Text} tabIndex="0" onClick={this.HandleClick}>
						<span className="left-nav-icon">{this.props.children}</span>
						<span className="left-nav-res-name">{this.Text}</span>
					</a>
				);
			}
		}
		else if ( this.props.children === undefined )
		{
			//_rv = ( <div tabIndex="0" className={this.Css} title={this.Text} onClick={this.HandleClick}>{this.Text}</div> );
			_rv = (
				<a href={this.Path} className={this.Css} title={this.Text} tabIndex="0" onClick={this.HandleClick}>
					<span className="left-nav-res-name">{this.Text}</span>
				</a>
			);
		}

		return _rv;
	};
};
