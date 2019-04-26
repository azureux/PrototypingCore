import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './sql-server.css';

export class SqlServerExtension extends ExtBase
{
	static defaultProps = {
		Title: "AzureDesignEng-SQL-0179",
		Subtitle: "https://az-de-.com/ databse",
		Path: Utils.FormatPathFromTitle( "AzureDesignEng-SQL-0179" ),
		BreadcrumbTitle: "AzureDesignEng-SQL-0179",
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
