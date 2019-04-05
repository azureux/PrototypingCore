import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './vm-ext.css';

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
			_icon: SvgIcon.Icons.Default,
		};
	};
};
