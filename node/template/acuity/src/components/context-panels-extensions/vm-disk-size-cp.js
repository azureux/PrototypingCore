import React from 'react';
//import { Utilities as Utils } from "../../js/utilities.js";
import SvgIcon from "../svg-icons/svg-icon.js";
//import './portal-settings.css';

export class VirtualMachineDiskSizeSelectPanel extends React.Component
{
	static PropertyBag =
		{
			Title: "Virtual Machine Disk Size Selection",
			Icon: SvgIcon.Extensions.VirtualMachine,
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
				<h1>{VirtualMachineDiskSizeSelectPanel.PropertyBag.Title}</h1>
			</div>
		);
	};

};
