﻿import React from 'react';
//import { Utilities as Utils } from "../../js/utilities.js";
import SvgIcon from "../svg-icons/svg-icon.js";
import './portal-settings.css';

export class DirectorySwitcherPanel extends React.Component
{
	static PropertyBag =
	{
		Title: "Azure Directory Settings",
		Icon: SvgIcon.ShellIcons.DirectorySwitcher,
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
				<h1>{DirectorySwitcherPanel.PropertyBag.Title}</h1>
			</div>
		);
	};

};
