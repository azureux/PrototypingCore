import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";

export class AllServicesExtension extends ExtBase
{
	constructor( props )
	{	//	console.debug( "AllServicesExtension.props", props );
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title : "All Services",
			_breadcrumb_title: "Services",
			_icon: SvgIcon.Icons.AllServices
		};
	};
};
