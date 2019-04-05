import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
//import { ExtensionHeader as Header } from "../../components/standard-controls/extension-header/extension-header.js";

export class VirtualMachineExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag()
	{
		return {
			_extension: this.name,
			_title :  "Virtual Machine",
			_breadcrumb_title: "Virtual machine",
			_icon : ExtBase.Icons().Color.VirtualMachines,
			_css_id : "vm-ext-css",
			_css_path : "extensions/virtual-machine/vm-ext.css"
		};
	};
};
