﻿/// <reference path="../../script/react/react-dom-16.4.0.js" />
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
        this.Quadrant_Title_Name = "Quadnrant title";
        this.Search_Results_Num = "See more";

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

    //closes search results
	OnClick_SelectResult( ev )
	{	//	console.debug( "OnClick_SelectResult", this.DataObject );
		let _self = this.ParentObject;
		window.setTimeout( function ()
		{
			let _rp = document.getElementById( _self.ResultsPanel_ID );
			_rp.className = "results-panel";
		},1000);
		return;
    };

	RefreshData( thisCtrl, resultsArray )
	{	//	console.debug( "RefreshData", resultsArray.length );
		let _rv = [];

		if (resultsArray.length > 0 )
		{
			resultsArray.forEach( function ( v, i, a )
			{	//	console.debug( i, v );
				v.srid = Utils.NewId( "search-result-id" );

				let _result = document.createElement( "div" );
				_result.className = "search-result";
				_result.setAttribute( "tabindex", "0" );
				//	_result.setAttribute( "data-srid", v.srid );

				_result.innerText = v.name;
				_result.DataObject = v;
				_result.ParentObject = thisCtrl;
				_result.addEventListener( "click", thisCtrl.OnClick_SelectResult );

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
    {	//	console.debug( "SearchBox::OnFocus_ShowResultsPanel", ev );

        let panel = document.getElementById(this.ResultsPanel_ID);
        panel.className = "results-panel-open";
        
		ev.preventDefault();
		ev.stopPropagation();
		return;
    };

	OnBlur_CloseResultsPanel( ev )
	{	//	console.debug("OnBlur_CloseResultsPanel");
		ev.preventDefault();
		ev.stopPropagation();
		//	console.debug( "SearchBox::OnBlur_CloseResultsPanel", ev.relatedTarget );

		if ( ev.relatedTarget == null || ev.relatedTarget == undefined )
		{
			let _rp = document.getElementById( this.ResultsPanel_ID );
            //let _rp = document.getElementById( quadrant );

            _rp.className = "results-panel";
		}
		return;
    };

	OnChange_FilterDataSet( ev )
	{	//	console.debug( "SearchBox::OnChange_FilterDataSet", ev.target.value  );
		this.TextValue = ev.target.value;
		let _query = this.TextValue;

        //let _rp = document.getElementById(this.ResultsPanel_ID);
        let _rp1 = document.getElementById("quadrant-results1");
        let _rp2 = document.getElementById("quadrant-results2");
        let _rp3 = document.getElementById("quadrant-results3");
        let _rp4 = document.getElementById("quadrant-results4");

        //id 4 quadrants here & populate with _results
        //  let _results = this.RefreshData(this, this.DataSet_Temp);
		let _results = this.DataSet.filter( function ( item )
		{
			if ( item.name.toLowerCase().includes( _query.toLowerCase() )  )
			{ 
				return item;
                //console.log("Return matches");
			}
			else
            {
                //returns nothing
				return;
			}
        }, _query);
		console.debug( "_results", _results.length );

		let _elements = this.RefreshData( this, _results );

        _elements.forEach(function (v, i, a) {	//	console.debug( i, v );
            _rp1.appendChild(v);
            return;
        });

        _elements.forEach(function (v, i, a) {	//	console.debug( i, v );
            _rp2.appendChild(v);
            return;
        });

        _elements.forEach(function (v, i, a) {	//	console.debug( i, v );
            _rp3.appendChild(v);
            return;
        });

        _elements.forEach(function (v, i, a) {	//	console.debug( i, v );
            _rp4.appendChild(v);
            return;
        });

		//let _results = this.DataSet.filter( function ( item )
		//{
		//	if ( item.name.toLowerCase().includes( _query.toLowerCase() )  )
		//	{ 
		//		return item;
  //              //console.log("Return matches");
		//	}
		//	else
  //          {
  //              //returns nothing
		//		return;
		//	}
		//}, _query );
		////	console.debug( "_results", _results.length );

		//let _elements = this.RefreshData( this, _results );
        
  //      //let _rp = document.getElementById(this.ResultsPanel_ID);
  //      let _rp = document.getElementById("quadrant-results");
  //      let panel = document.getElementById(this.ResultsPanel_ID);
		////	console.debug( "_rp", _rp );
		//if ( _rp !== undefined || _rp !== null )
		//{
		//	_rp.innerHTML = "";
		//	//	_rp.style.display = "inline-block";
  //          panel.className = "results-panel-open";

		//	_elements.forEach( function ( v, i, a )
		//	{	//	console.debug( i, v );
		//		_rp.appendChild( v );
		//		return;
		//	} );
		//}
	
		ev.preventDefault();
		ev.stopPropagation();
        return;
    };
	render()
    {
        //sections of quantrant title container 
        let _quadrant_title_text = React.createElement("div",
            {
                id: "quadrant-title-text",
                className: "quadrant-title-text",
                key: Utils.NewKey(),
            }, this.Quadrant_Title_Name);

        //sections of quantrant title container 
        let _divider = React.createElement("div",
            {
                id: "divider",
                className: "divider",
                key: Utils.NewKey(),
            });

        //sections of quantrant title container 
        let _see_more = React.createElement("div",
            {
                id: "see-more",
                className: "see-more",
                key: Utils.NewKey(),
            }, this.Search_Results_Num);

        //quandrant title container


        //empty array generate 4 quadrants w different IDs
        let quad_cont = [];

        for (let i = 0; i < 4; i++) {

            let _quadrant_title_container = React.createElement("div",
                {
                    id: "quadrant-title" + (i + 1),
                    className: "quadrant-title",
                    key: Utils.NewKey(),
                }, _quadrant_title_text, _divider, _see_more);

            let _results_div = React.createElement("div",
                {
                    id: "quadrant-results" + (i + 1),
                    className: "quadrant-results",
                    key: Utils.NewKey(),
                });

            let _quad = React.createElement("div",
                {
                    id: "quadrant" + (i+1),
                    className: "quadrant",
                    key: Utils.NewKey(),
                }, _quadrant_title_container, _results_div);
            quad_cont.push(_quad);
        }
        
		// empty results panel
        //results
		let _results_panel = React.createElement( "div",
			{
				id: this.ResultsPanel_ID,
				className: "results-panel",
				key: Utils.NewKey(),
            }, quad_cont);

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
            _results_panel,
		];

		// final element
        return  React.createElement( "div",
			{
				id: this.ID,
				className: this.Theme + " search-panel",
			}, _children );
	};
};
