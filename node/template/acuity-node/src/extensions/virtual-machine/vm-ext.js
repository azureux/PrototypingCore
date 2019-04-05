import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
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
			_title: "Virtual Machine 0123",
			_path: Utils.FormatPathFromTitle( "virtual-machine-0123" ),
			_breadcrumb_title: "Virtual machine 0123",
			_icon: SvgIcon.Extensions.VirtualMachine,
		};
	};
};
