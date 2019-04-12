import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";

export class AllServicesExtension extends ExtBase
{
	constructor( props )
	{	//	console.debug( "AllServicesExtension.props", props );
		super( props );
		return;
	};
	static PropertyBag = {
		_title : "All Azure Services",
		_breadcrumb_title: "Services",
		_icon: SvgIcon.Extensions.AllServices,
		_path: Utils.FormatPathFromTitle( "All Azure Services" ),
	};
};
