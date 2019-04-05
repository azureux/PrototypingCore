import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './sql-server.css';

export class SqlServerExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :  "SQL Server",
			_breadcrumb_title: "SQL Server",
			_icon: SvgIcon.Icons.Default,
		};
	};
};
