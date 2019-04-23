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
	static PropertyBag = {
		_title: "SQL-SERVER-0123",
		_breadcrumb_title: "SQL-SERVER-0123",
		_icon: SvgIcon.Extensions.SqlServer,
		_path: Utils.FormatPathFromTitle( "SQL-SERVER-0123" ),
		_hasHeader: false,
		_hasBreadcrumb: true
	};
};
