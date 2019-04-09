import { ExtensionListBase as ExtensionList } from "../_ext-list-base/ext-list-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";

export class AllResourcesExtension extends ExtensionList
{
	constructor( props )
	{
		super( props );
		//this.Data = [
		//	{
		//		_extension: "VirtualMachineExtension",
		//		_title: "Virtual Machine One",
		//		_breadcrumb_title: "VM One",
		//		_icon: ExtensionList.Icons().Color.VirtualMachines,
		//		_css_id: "vm-ext-css",
		//		_css_path: "extensions/virtual-machine/vm-ext.css"
		//	},
		//	{
		//		_extension: "VirtualMachineExtension",
		//		_title: "Virtual Machine Two",
		//		_breadcrumb_title: "VM Two",
		//		_icon: ExtensionList.Icons().Color.VirtualMachines,
		//		_css_id: "vm-ext-css",
		//		_css_path: "extensions/virtual-machine/vm-ext.css"
		//	},
		//	{
		//		_extension: "VirtualMachineExtension",
		//		_title: "Virtual Machine Three",
		//		_breadcrumb_title: "VM Three",
		//		_icon: ExtensionList.Icons().Color.VirtualMachines,
		//		_css_id: "vm-ext-css",
		//		_css_path: "extensions/virtual-machine/vm-ext.css"
		//	}
		//];
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :   "All resources",
			_breadcrumb_title: "All resources",
			_icon: SvgIcon.Icons.Default,
			_path: Utils.FormatPathFromTitle( "All your resources belong to us" ),
			//_css_id : "all-resources-css",
			//_css_path: "extensions/all-resources/all-resources.css",
			//_columns: [
			//	{ name: "Resource", key: "_title", visible: true },
			//	{ name: "Icon", key: "_icon", visible: true },
			//	{ name: "BreadCrumb Title", key: "_breadcrumb_title", visible: true },
			//	{ name: "Extension Name", key: "_extension", visible: true },
			//	{ name: "CSS ID", key: "_css_id", visible: true },
			//	{ name: "CSS PATH", key: "_css_path", visible: true },
			//],
			_data: [
				{
					_extension: "VirtualMachineExtension",
					_title :  "Virtual Machine One",
					_breadcrumb_title: "VM One",
					_icon: SvgIcon.Icons.Default,
					//_css_id : "vm-ext-css",
					//_css_path : "extensions/virtual-machine/vm-ext.css"
				},
				{
					_extension: "VirtualMachineExtension",
					_title :  "Virtual Machine Two",
					_breadcrumb_title: "VM Two",
					_icon: SvgIcon.Icons.Default,
					//_css_id : "vm-ext-css",
					//_css_path : "extensions/virtual-machine/vm-ext.css"
				},
				{
					_extension: "VirtualMachineExtension",
					_title :  "Virtual Machine Three",
					_breadcrumb_title: "VM Three",
					_icon: SvgIcon.Icons.Default,
					//_css_id : "vm-ext-css",
					//_css_path : "extensions/virtual-machine/vm-ext.css"
				}
			]
		};
	};
};
