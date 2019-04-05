import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './azure-active-directory.css';

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
			_icon: SvgIcon.Icons.Default,
		};
	};
};
