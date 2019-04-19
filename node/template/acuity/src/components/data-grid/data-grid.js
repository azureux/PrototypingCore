import React from 'react';
//import { ExtensionBase as ExtBase } from './../../extensions/_ext-base/ext-base.js';
import { Utilities as Utils } from "./../../js/utilities.js";
//	import { SVG as AzureSvgs } from "./../../js/svg-assets.js";
//	import { ButtonControl as Btn } from "./../button/button.js";
import './data-grid.css';

export class DataGridControl extends React.Component
{
	constructor( props )
	{
		super( props );

		this._internal_name = this.constructor.name;
		this.Application = props.Application;
		this.DefaultCssClass = this._internal_name;
        this.CssFileID = this._internal_name;
		this.CssFile = "components/custom-controls/data-grid/data-grid.css";

		this.Columns = props.Columns;
		this.Data = props.Data;
		this.Sorting = ( props.SortDirection || Utils.SortType().DEFAULT );

		//this.CurrentSortDirection = "";
		//this.CurrentSelectedColumn = "";
		//this.OnClick_SortAsc = this.SortAcending( this );
		//this.OnClick_SortDesc = this.SortAcending( this );
		return;
	};
	componentWillMount()
	{	//	console.debug( "componentWillMount" );
		return;
	};
	componentDidMount()
	{	//	console.debug( "componentDidMount" );
		//this.Application.Utils.InjectControlCss( this.CssFileID, this.CssFile );
		//this.Compute_ColumnsAndData();
		return;
	};
	componentWillUnmount()
	{	//	console.debug( "componentWillUnmount--REMOVE CSS" );
		//this.Application.Utils.RemoveInjectedCss( this.CssFileID, this.CssFile );
		return;
	};
	Compute_ColumnsAndData()
	{
		console.debug( "Compute_ColumnsAndData" );

		//if ( this.Columns.length != 0 )
		//{
		//	this.Columns.forEach( function ( v, i, a )
		//	{
		//		//	console.debug( i, v );
		//		if ( v.visible !== undefined )
		//		{
		//			if ( v.visible == true )
		//			{
		//				const _column_header = React.createElement( "td", { key: Utils.NewKey(), className: "grid-cell icon" }, v.name );
		//				_cols.push( _column_header );
		//			}
		//		}							
		//		return;
		//	} );
		//}

		return;
	};
	AddColumn()
	{
		console.debug( "AddColumn" );
		return;
	};
	RemoveColumn()
	{
		console.debug( "RemoveColumn" );
		return;
	};
	Filter()
	{
		console.debug( "Filter" );
		return;
	};
	render()
	{	//	console.debug( "DataGridControl::render", this.props );
		let _formatted_data = [];

		// check for both columns & data
		let _table_sections = [];

		// colum headers
		let _cols = [];
		if ( this.Columns.length !== 0 )
		{
			this.Columns.forEach( function ( v, i, a )
			{
				//	console.debug( i, v );
				if ( v.visible !== undefined )
				{
					if ( v.visible === true )
					{
						const _column_header = React.createElement( "td", { key: Utils.NewKey(), className: "grid-cell icon" }, v.name );
						_cols.push( _column_header );
					}
				}							
				return;
			} );
		}
		const _header_row = React.createElement( "tr", { key: Utils.NewKey(), className: "grid-cell icon" }, _cols );
		const _header = React.createElement( "thead", { key: Utils.NewKey(), className: "grid-cell icon" }, _header_row );

		_table_sections.push( _header );


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
			const _row_ext_name = React.createElement( "td", { key: Utils().NewKey(), className: "grid-cell" }, "No results found" );
			const _row = React.createElement( "tr", { key: Utils().NewKey(), className: "grid-row" }, _row_ext_name );

			_formatted_data.push( _row );
		}

		const _grid_body = React.createElement( "tbody", { key: Utils.NewKey(), className: "grid-tbody" }, _formatted_data );
		_table_sections.push( _grid_body );


		const _grid_table = React.createElement( "table", {
			key: Utils.NewKey(),
			className: "grid-table",
			cellPadding: 0,
			cellSpacing: 0,
		}, _table_sections );

		return React.createElement( "div",
			{
				className: this.DefaultCssClass
			},
			_grid_table );
	};
};