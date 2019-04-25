import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
//	import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './monitor.css';

export class MonitoringExtension extends ExtBase
{
	static defaultProps = {
		Title: "Azure Monitoring",
		Subtitle: "Monitor your Azure resources",
		Path: "monitoring",
		BreadcrumbTitle: "Monitoring",
		Icon: SvgIcon.Icons.Default,
		IsSelected: false,
		HasHeader: true,
		HasBreadcrumb: true,
		Columns: [],
		Data: []
	};
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag = {
			_title :  "Azure Monitoring",
			_breadcrumb_title: "Monitoring",
			_icon: SvgIcon.Icons.Default,
			_path: "monitoring"
	};
	//ExtRender()
	//{
	//	return (
	//		<div className="all-res-groups-ext">
	//			<div>{this.Title}</div>
	//		</div>
	//	);
	//};
};
