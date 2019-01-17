/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { ExtensionHeader as Header } from "../../components/standard-controls/extension-header/extension-header.js";

export class VirtualMachineExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :  "Virtual Machines",
			_breadcrumb_title: "VMs",
			_icon : ExtBase.Icons().Color.VirtualMachines,
			_css_id : "vm-ext-css",
			_css_path : "extensions/virtual-machine/vm-ext.css"
		};
	};
};
