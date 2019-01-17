/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionListBase as ExtensionList } from "../_ext-list-base/ext-list-base.js";

export class AllResourcesExtension extends ExtensionList
{
	constructor( props )
	{
		super( props );
		this.Data = [
			{
				_extension: "VirtualMachineExtension",
				_title: "Virtual Machine One",
				_breadcrumb_title: "VM One",
				_icon: ExtensionList.Icons().Color.VirtualMachines,
				_css_id: "vm-ext-css",
				_css_path: "extensions/virtual-machine/vm-ext.css"
			},
			{
				_extension: "VirtualMachineExtension",
				_title: "Virtual Machine Two",
				_breadcrumb_title: "VM Two",
				_icon: ExtensionList.Icons().Color.VirtualMachines,
				_css_id: "vm-ext-css",
				_css_path: "extensions/virtual-machine/vm-ext.css"
			},
			{
				_extension: "VirtualMachineExtension",
				_title: "Virtual Machine Three",
				_breadcrumb_title: "VM Three",
				_icon: ExtensionList.Icons().Color.VirtualMachines,
				_css_id: "vm-ext-css",
				_css_path: "extensions/virtual-machine/vm-ext.css"
			}
		];
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :  "All resources",
			_breadcrumb_title: "All resources",
			_icon : ExtensionList.Icons().Color.AllResources_color,
			_css_id : "all-resources-css",
			_css_path: "extensions/all-resources/all-resources.css",
			_data: [
				//{
				//	_extension: "VirtualMachineExtension",
				//	_title :  "Virtual Machine One",
				//	_breadcrumb_title: "VM One",
				//	_icon : ExtensionList.Icons().Color.VirtualMachines,
				//	_css_id : "vm-ext-css",
				//	_css_path : "extensions/virtual-machine/vm-ext.css"
				//},
				//{
				//	_extension: "VirtualMachineExtension",
				//	_title :  "Virtual Machine Two",
				//	_breadcrumb_title: "VM Two",
				//	_icon : ExtensionList.Icons().Color.VirtualMachines,
				//	_css_id : "vm-ext-css",
				//	_css_path : "extensions/virtual-machine/vm-ext.css"
				//},
				//{
				//	_extension: "VirtualMachineExtension",
				//	_title :  "Virtual Machine Three",
				//	_breadcrumb_title: "VM Three",
				//	_icon : ExtensionList.Icons().Color.VirtualMachines,
				//	_css_id : "vm-ext-css",
				//	_css_path : "extensions/virtual-machine/vm-ext.css"
				//}
			]
		};
	};
};
