/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";

const VirtualMachine_PropertyBag = {
	_title :  "Virtual Machines",
	_icon : ExtBase.Icons().Color.VirtualMachines,
	_css_id : "vm-ext-css",
	_css_path : "extensions/virtual-machine/vm-ext.css"
};

export class VirtualMachineExtension extends ExtBase
{
	constructor( props )
	{
		super( props );

		this.Init( VirtualMachine_PropertyBag );
		this.Utils.InjectControlCss(this.CssFileID, this.CssFile);
		return;
	};
	static Title()
	{
		return VirtualMachine_PropertyBag._title;
	};
	static Icon()
	{
		return VirtualMachine_PropertyBag._icon;
	};
};
