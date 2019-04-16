import React from 'react';
import './breadcrumb.css';
import BreadCrumbButton from "./breadcrumb-button.js";
//	import SvgIcon from "./../svg-icons/svg-icon.js";
//	import { Utilities as Utils } from "./../../js/utilities.js";
//	import { AllExtensionsList as Extensions } from "./../../extensions-list.js";

export default class BreadCrumbControl extends React.Component
{
	constructor( props )
	{
		super( props );
		return;
	};
	render()
	{	
		//	console.debug( "BreadCrumbControl.render()", this.props.links.length );	
		return (
			<div className="breadcrumb-css">
				{
					this.props.links.map( ( item, index ) => (
						<BreadCrumbButton
							key={index}
							index={index}
							length={this.props.links.length}
							extension={item}
							selectionClick={this.props.selectionClick}>
						</BreadCrumbButton>
					) )
				}
			</div>
		);
	};
};
