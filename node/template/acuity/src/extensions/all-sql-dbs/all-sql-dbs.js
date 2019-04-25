//import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './all-sql-dbs.css';

export class AllSqlDbsExtension extends ExtBase
{
	static defaultProps = {
		Title: "All Microsoft SQL Server databases",
		Subtitle: "Databases in your directory",
		Path: Utils.FormatPathFromTitle( "all-ms-sql-dbs" ),
		BreadcrumbTitle: "SQL Servers",
		Icon: SvgIcon.Extensions.SqlServer,
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
};
