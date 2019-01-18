/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
"use strict";
import { Utilities as Utils } from "../../../js/utilities.js";
import { SVG as AzureSvgs } from "../../../js/svg-assets.js";
import { ButtonControl as Btn } from "../../standard-controls/button/button.js";

export class DataGridControl extends React.Component
{
	constructor( props )
	{
		super( props );

		this.state = {};
		this.Application = props.Application;
        this.CssFileID = this._internal_name;
		this.CssFile = "components/custom-controls/data-grid/data-grid.css";

		this.Columns = props.Columns;
		this.Data = props.Data;
		this.Sorting = ( props.SortDirection || Utils.SortType().DEFAULT );
		return;
	};
	componentWillMount()
	{	//	console.debug( "componentWillMount" );
		return;
	};
	componentDidMount()
	{	//	console.debug( "componentDidMount" );
		this.Application.Utils.InjectControlCss( this.CssFileID, this.CssFile );
		return;
	};
	componentWillUnmount()
	{	//	console.debug( "componentWillUnmount--REMOVE CSS" );
		this.Application.Utils.RemoveInjectedCss( this.CssFileID, this.CssFile );
		return;
	};
	render()
	{	//	
		console.debug( "DataGridControl::render", this.props );
		let _formatted_data = [];

		if ( this.Data.length > 0 )
		{
			this.Data.forEach( function ( v, i, a )
			{
				const _row_icon = React.createElement( "td", { key: Utils.NewKey(), className: "grid-cell icon", dangerouslySetInnerHTML: Utils.CreateSvgMarkup( v._icon.SVG ) } );
				const _row_ext_name = React.createElement( "td", { key: Utils.NewKey(), className: "grid-cell" }, v._extension );
				const _row_name = React.createElement( "td", { key: Utils.NewKey(), className: "grid-cell" }, v._title );
				const _row = React.createElement( "tr", { key: Utils.NewKey(), className: "grid-row" }, [_row_icon, _row_ext_name, _row_name] );

				_formatted_data.push( _row );
				return;
			} );
		}
		else
		{
			const _row_ext_name = React.createElement( "td", { key: ExtBase.Utils().NewKey(), className: "grid-cell" }, "No results found" );
			const _row = React.createElement( "tr", { key: ExtBase.Utils().NewKey(), className: "grid-row" }, _row_ext_name );

			_formatted_data.push( _row );
		}

		const _grid_header_row = React.createElement( "tbody", { className: "grid-tbody"},_formatted_data); 
		const _grid_table = React.createElement( "table", { className: "grid-table"},_grid_header_row);

		return React.createElement(
			 "div",
			 { className: "MainAppContainer" }
			 );
	};
};