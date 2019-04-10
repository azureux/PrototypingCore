import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './all-virtual-machines.css';

export class AllVmsExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag = {
			_title :  "Virtual machines",
			_breadcrumb_title: "Virtual machines",
			_path: "all-virtual-machines",
			_icon: SvgIcon.Extensions.VirtualMachine,
	};
};
