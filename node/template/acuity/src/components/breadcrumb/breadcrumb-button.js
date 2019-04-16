import React, { Component } from 'react';
import "./breadcrumb-button.css";

export default class BreadCrumbButton extends Component
{
	constructor( props )
	{
		super( props );
		this.HandleClick = this.props.selectionClick.bind( this, this.props.extension );
		return;
	}
	HasArrow = function ()
	{
		let _rv = false;
		//	console.debug( this.props.index, this.props.length);
		let _num = this.props.index - this.props.length;
		//	console.debug( "_num", _num );

		switch ( _num )
		{
			case -1: {
				_rv = false;
				break;
			}
			case 0: {
				_rv = false;
				break;
			}
			case 1: {
				_rv = false;
				break;
			}
			default: {
				_rv = true;
				break;
			}
		}

		return _rv;
	};
	render()
	{
		//	console.debug( this.props.index, " of ", this.props.length );
		//	<span className="bread-crumb-icon">{this.props.children}</span>
		//	console.debug( "BreadCrumbButton.render()", this.props.extension.Ext_BreadCrumbTitle() );
		return (
			<span className="bread-crumb-btn">
				{
					this.HasArrow() &&
					<span className="bread-crumb-panel" onClick={this.HandleClick}>
						<span className="bread-crumb-text">{this.props.extension.Ext_BreadCrumbTitle()}</span>
					</span>
				}
				{
					!this.HasArrow() &&
					<span className="bread-crumb-panel">
						<span className="bread-crumb-text-no-link">{this.props.extension.Ext_BreadCrumbTitle()}</span>
					</span>
				}
				{
					this.HasArrow() &&
					<span className="bc-divider">&gt;</span>
				}
			</span >
		);
	}
}