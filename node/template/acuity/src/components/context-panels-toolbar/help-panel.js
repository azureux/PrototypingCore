import React from 'react';
//import { Utilities as Utils } from "../../js/utilities.js";
import SvgIcon from "../svg-icons/svg-icon.js";
import './portal-settings.css';

export class HelpPanel extends React.Component
{
	static PropertyBag =
	{
		Title: "Azure Help & documentation",
		Icon: SvgIcon.ShellIcons.PortalHelp,
	};
	constructor( props )
	{
		super( props );
		return;
	};
	render()
	{
		return (
			<div>
				<h1>{HelpPanel.PropertyBag.Title}</h1>
				<button type="button" onClick={this.props.closeClick}>close</button>
			</div>
		);
	};

};
