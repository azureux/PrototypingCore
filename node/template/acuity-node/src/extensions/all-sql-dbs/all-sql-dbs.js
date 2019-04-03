/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
//import { ExtensionHeader as Header } from "../../components/standard-controls/extension-header/extension-header.js";

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
			_icon : ExtBase.Icons().Color.SQLServers,
			_css_id : "all-sql-dbs-css",
			_css_path : "extensions/all-sql-dbs/all-sql-dbs.css"
		};
	};
};
