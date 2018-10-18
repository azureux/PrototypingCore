/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";

import { Utilities as Utils } from "../../../js/utilities.js";
import { SVG as AzureSvgs } from "../../../js/svg-assets.js";

export class SearchBox extends React.Component
{	// methods in order, constructor first, render last, events & function in the middle
	constructor( props )
	{
		//	console.debug( "SearchBox.props", props );
		super( props );

		// default props
		// change pattern in other controls to this for any non-configurable values
		SearchBox.defaultProps = {
			ID: Utils.NewId( "sb-id" ),
			CssFileID : "search-box-css",
			CssFile : "components/standard-controls/search-box/search-box.css"
		};

		// configurable properties
		this.Theme = this.props.Theme || "";
		this.AltTitle = "Search across the entire application";
		this.PlaceholderText = "Search all resources";
		this.Icon = "";
		this.DataSet = props.DataSet || [];
		this.DataSet_Temp = props.DataSet || [];

		// result panel properties
		this.Has_QuickResultPanel = props.HasResultsPanel || false;
		//	this.ResultsPanel_ID = Utils.NewId( SearchBox.defaultProps.ID + "-results" );
		this.TextValue = "";
		this.ResultsPanel_ID = SearchBox.defaultProps.ID + Utils.NewId("-rp")

		// state
		this.state = {
			userText: "",
			IsResultsPanelDisplayed: false
		};

		//	event handlers
		this.handle_BoxFocus = this.OnFocus_ShowResultsPanel.bind( this );
		this.handle_BoxBlur = this.OnBlur_CloseResultsPanel.bind( this );
		this.handle_UserInput = this.OnChange_FilterDataSet.bind( this );

		// inject CSS
        Utils.InjectControlCss(SearchBox.defaultProps.CssFileID, SearchBox.defaultProps.CssFile);
		return;
	};
	RefreshData( resultsArray )
	{	//	console.debug( "RefreshData", resultsArray.length );
		let _rv = [];

		if (resultsArray.length > 0 )
		{
			resultsArray.forEach( function ( v, i, a )
			{	//	console.debug( i, v );
				let _result = document.createElement( "div" );
				_result.className = "search-result";
				_result.onclick = function () { console.debug( "search result" ); return; };
				_result.innerText = v.name;

				_rv.push(_result);
				return;
			} );
		}
		else
		{
			let _zero_result = document.createElement( "div" );
			_zero_result.className = "zero-result";
			_zero_result.innerText = "No results found for \'" + this.TextValue + "\'";

			_rv.push( _zero_result );
		}
	
		//	console.debug( "RefreshData::_rv", _rv.length );
		return _rv;
	};
	OnFocus_ShowResultsPanel( ev )
	{
		//	console.debug( "SearchBox::OnFocus_ShowResultsPanel", ev );
		let _rp = document.getElementById( this.ResultsPanel_ID );
		_rp.style.display = "inline-block";

		let _results = this.RefreshData( this.DataSet_Temp );

		_results.forEach( function ( v, i, a )
		{	//	console.debug( i, v );
			_rp.appendChild( v );
			return;
		} );

		ev.preventDefault();
		ev.stopPropagation();
		return;
	};
	OnBlur_CloseResultsPanel( ev )
	{	//	console.debug( "SearchBox::OnBlur_CloseResultsPanel", ev );
		let _rp = document.getElementById( this.ResultsPanel_ID );
		//	console.debug( "_rp", _rp );
		_rp.style.display = "none";

		ev.preventDefault();
		ev.stopPropagation();
		return;
	};
	OnChange_FilterDataSet( ev )
	{	//	console.debug( "SearchBox::OnChange_FilterDataSet", ev.target.value  );
		this.TextValue = ev.target.value;
		let _query = this.TextValue;

		let _results = this.DataSet.filter( function ( item )
		{
			if ( item.name.toLowerCase().includes( _query.toLowerCase() )  )
			{ 
				return item;
			}
			else
			{
				return;
			}
		}, _query );
		//	console.debug( "_results", _results.length );

		let _elements = this.RefreshData( _results );

		let _rp = document.getElementById( this.ResultsPanel_ID );
		//	console.debug( "_rp", _rp );
		if ( _rp !== undefined || _rp !== null )
		{
			_rp.innerHTML = "";
			_rp.style.display = "inline-block";

			_elements.forEach( function ( v, i, a )
			{	//	console.debug( i, v );
				_rp.appendChild( v );
				return;
			} );
		}
	
		ev.preventDefault();
		ev.stopPropagation();
        return;
    };
	render()
	{
		// empty results panel
		let _results_panel = React.createElement( "div",
			{
				id: this.ResultsPanel_ID,
				className: "results-panel",
				key: Utils.NewKey(),
            });

		// input text box
		let _box =	 React.createElement( "input",
			{
				id: "input-box",
				type: "text",
				className: "input-box-class",
				onChange: this.handle_UserInput,
				onBlur: this.handle_BoxBlur,
				onFocus: this.handle_BoxFocus,
				placeholder: this.PlaceholderText,
				key: Utils.NewKey(),
			});
		
		let _children = [
			_box,
			_results_panel
		];

		// final element
        return  React.createElement( "div",
			{
				id: this.ID,
				className: this.Theme + " search-panel",
			}, _children );

	};
};
