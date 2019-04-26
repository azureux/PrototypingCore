// import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './vm-ext.css';

export class VirtualMachineExtension extends ExtBase
{
	static defaultProps = {
		Title: "Virtual Machine 0123",
		Subtitle: "https://contoso.microsoft.com - pre-production web server",
		Path: Utils.FormatPathFromTitle( "virtual-machine-0123" ),
		BreadcrumbTitle: "Virtual machine 0123",
		Icon: SvgIcon.Extensions.VirtualMachine,
		IsSelected: false,
		HasHeader: true,
		HasHeaderDocLink: false,
		HasBreadcrumb: false,
		Columns: [],
		Data: []
	};
	constructor( props )
	{
		super( props );
		return;
	};
};
