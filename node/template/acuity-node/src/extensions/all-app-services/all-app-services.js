import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
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
			_title :  "All App Services",
			_breadcrumb_title: "App Services",
			_icon: SvgIcon.Extensions.AppServices,
			_path: Utils.FormatPathFromTitle( "App Services" )
		};
	};
};
