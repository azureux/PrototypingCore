import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
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
		return  {
			_title :  "Home",
			_breadcrumb_title: "Home",
			_icon: SvgIcon.Icons.Default,
			_css_id : "home-page-css",
			_css_path : "extensions/std-home/home-ext.css"
		};
	};
};
