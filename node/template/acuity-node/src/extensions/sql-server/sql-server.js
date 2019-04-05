import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
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
		let _title_and_path = "SQL Server 0123";

		return  {
			_title: _title_and_path,
			_breadcrumb_title: _title_and_path,
			_icon: SvgIcon.Extensions.SqlServer,
			_path: Utils.FormatPathFromTitle( _title_and_path ),
		};
	};
};
