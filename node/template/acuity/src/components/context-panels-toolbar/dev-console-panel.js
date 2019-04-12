import React from 'react';
//import { Utilities as Utils } from "../../js/utilities.js";
import SvgIcon from "../svg-icons/svg-icon.js";
import './dev-console-panel.css';


export class DevConsolePanel extends React.Component
{
	static PropertyBag =
	{
		Title: "Azure Developer Console",
		Icon: SvgIcon.ShellIcons.DevConsole,
	};
	constructor( props )
	{
		super( props );

		this.ConsoleWidget = ">:_";
		return;
	};
	render()
	{
		return (
			<div className="dev-console">
				<textarea className="psuedo-coding" placeholder={ this.ConsoleWidget }></textarea>
			</div>
		);
	};
};
