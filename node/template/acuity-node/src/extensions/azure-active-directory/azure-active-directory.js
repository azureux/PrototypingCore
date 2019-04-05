import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";

export class AzureActiveDirectoryExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :  "Microsoft Azure Active Directory",
			_breadcrumb_title: "Azure AD",
			_icon : ExtBase.Icons().Color.ActiveDirectory,
			_css_id : "azure-ad-css",
			_css_path : "extensions/azure-active-directory/azure-active-directory.css"
		};
	};
};
