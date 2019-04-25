import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './all-virtual-machines.css';

export class AllVmsExtension extends ExtBase
{
	static defaultProps = {
		Title: "All virtual machines",
		Subtitle: "Virtual machines in your subscription",
		Path: Utils.FormatPathFromTitle( "all-vms" ),
		BreadcrumbTitle: "Virtual machines",
		Icon: SvgIcon.Extensions.VirtualMachine,
		IsSelected: false,
		HasHeader: true,
		HasBreadcrumb: true,
		Columns: [],
		Data: []
	};
	//constructor( props )
	//{
	//	super( props );
	//	return;
	//};
};
