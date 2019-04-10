import { ExtensionListBase as ExtensionList } from "../_ext-list-base/ext-list-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import { TestData as Data } from './test-data.js';
import './all-resources.css';

export class AllResourcesExtension extends ExtensionList
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag = {
			_title :   "All resources",
			_breadcrumb_title: "All resources",
			_icon: SvgIcon.Icons.Default,
			_path: Utils.FormatPathFromTitle( "All your resources belong to us" ),
			_columns: [
				{ name: "Resource", key: "_title", visible: true },
				{ name: "Icon", key: "_icon", visible: true },
				{ name: "BreadCrumb Title", key: "_breadcrumb_title", visible: true },
				{ name: "Extension Name", key: "_extension", visible: true },
				{ name: "CSS ID", key: "_css_id", visible: true },
				{ name: "CSS PATH", key: "_css_path", visible: true },
			],
			_data: Data
	};
};
