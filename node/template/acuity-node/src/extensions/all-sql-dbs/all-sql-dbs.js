import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './all-sql-dbs.css';

export class AllSqlDbsExtension extends ExtBase
{
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title :  "SQL databases",
			_breadcrumb_title: "SQL Databases",
			_icon: SvgIcon.Icons.Default,
		};
	};
};
