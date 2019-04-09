import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './home-ext.css';

export class HomePageExtension extends ExtBase
{
	constructor( props )
	{
		super( props);
		return;
	};
	static PropertyBag()
	{
		const _title_and_path = "Azure Home";
		return  {
			_title: _title_and_path,
			_breadcrumb_title: "Home",
			_path: Utils.FormatPathFromTitle( _title_and_path ),
			_icon: SvgIcon.Icons.AzureHome,
		};
	};
};
