import React from 'react';
//import { Utilities as Utils } from "../../js/utilities.js";
import SvgIcon from "../svg-icons/svg-icon.js";
import './portal-settings.css';

export class FeedbackPanel extends React.Component
{
	static PropertyBag =
		{
			Title: "Azure Feedback Center",
			Icon: SvgIcon.ShellIcons.PortalFeedback,
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
				<h1>{FeedbackPanel.PropertyBag.Title}</h1>
			</div>
		);
	};

};
