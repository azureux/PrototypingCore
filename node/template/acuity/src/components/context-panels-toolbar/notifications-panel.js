import React from 'react';
//import { Utilities as Utils } from "../../js/utilities.js";
import SvgIcon from "../svg-icons/svg-icon.js";
import './portal-settings.css';

export class NotificationsPanel extends React.Component
{
	static PropertyBag =
	{
		Title: "Notification Center",
		Icon: SvgIcon.ShellIcons.Notifications,
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
				<h1>{NotificationsPanel.PropertyBag.Title}</h1>
			</div>
		);
	};

};
