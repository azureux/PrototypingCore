import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './all-resource-groups.css';

export class AllResourceGroupsExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title: "Resource Groups",
			_path: "/resource-groups",
			_breadcrumb_title: "Resources Groups",
			_icon: SvgIcon.Icons.Default,
		};
	};
};
