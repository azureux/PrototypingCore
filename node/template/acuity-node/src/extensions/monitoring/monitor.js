import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './monitor.css';

export class MonitoringExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :  "Monitor",
			_breadcrumb_title: "Monitor",
			_icon: SvgIcon.Icons.Default,
		};
	};
};
