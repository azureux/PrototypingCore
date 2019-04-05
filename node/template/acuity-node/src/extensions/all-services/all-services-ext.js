import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
//	import { ExtensionHeader as Header } from "./../../components/extension-header/extension-header.js";

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
			_icon : ExtBase.Icons().Color.All_Services,
			_css_id : "all-services-css",
			_css_path : "extensions/std-all-services/all-services-ext.css"
		};
	};
};
