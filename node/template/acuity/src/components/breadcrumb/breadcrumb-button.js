import React, { Component } from 'react';
import "./breadcrumb-button.css";

export default class BreadCrumbButton extends Component
{
	constructor( props )
	{
		super( props );
		this.Title = ( this.props.extension.Ext_BreadCrumbTitle() || "Button" );
		this.HasArrow = ( this.props.index < this.props.length - 1 );
		this.HandleClick = this.props.selectionClick.bind( this, this.props.extension );
		return;
	 }
	render()
	{	//	console.debug( this.props.index, " of ", this.props.length );
		//	<span className="bread-crumb-icon">{this.props.children}</span>
		return (
			<span className="bread-crumb-btn">
				{
					this.HasArrow &&
					<span className="bread-crumb-panel" onClick={this.HandleClick}>
						<span className="bread-crumb-text">{this.Title}</span>
					</span>
				}
				{
					!this.HasArrow &&
					<span className="bread-crumb-panel">
						<span className="bread-crumb-text-no-link">{this.Title}</span>
					</span>
				}
				{
					this.HasArrow &&
					<span className="bc-divider">&gt;</span>
				}
			</span >
		);
	}
}