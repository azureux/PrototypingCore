import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
//import { ExtensionHeader as Header } from "../../components/standard-controls/extension-header/extension-header.js";

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
			_icon : ExtBase.Icons().Glyphs.AppServices,
			_css_id : "all-app-services-css",
			_css_path : "extensions/all-app-services/all-app-services.css"
		};
	};
};
