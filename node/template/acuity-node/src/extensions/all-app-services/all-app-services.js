import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './all-app-services.css';

export class AllAppServicesExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :  "App services",
			_breadcrumb_title: "App services",
			_icon: SvgIcon.Icons.Default,
		};
	};
};
