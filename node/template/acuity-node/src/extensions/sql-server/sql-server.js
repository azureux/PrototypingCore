/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";

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
			_icon : ExtBase.Icons().Extensions.DatabaseSQLServer,
			_css_id : "sql-server-css",
			_css_path : "extensions/sql-server/sql-server.css"
		};
	};
};
