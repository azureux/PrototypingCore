/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
//import { ExtensionHeader as Header } from "../../components/standard-controls/extension-header/extension-header.js";

export class AllVmsExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :  "Virtual machines",
			_breadcrumb_title: "Virtual machines",
			_icon : ExtBase.Icons().Color.VirtualMachines,
			_css_id : "all-vms-css",
			_css_path : "extensions/all-virtual-machines/all-virtual-machines.css"
		};
	};
};
