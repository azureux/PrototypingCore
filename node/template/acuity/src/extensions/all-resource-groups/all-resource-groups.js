import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './all-resource-groups.css';

export class AllResourceGroupsExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag = {
			_title: "All Resource Groups",
			_breadcrumb_title: "Resources Groups",
			_icon: SvgIcon.Icons.Default,
			_path: Utils.FormatPathFromTitle( "All Resource Groups" )
	};
};
