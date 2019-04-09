import React from 'react';
import './search-box.css';
import { Utilities as Utils } from "../../js/utilities.js";
//import { SVG as AzureSvgs } from "../../../js/svg-assets.js";

export default class SearchBox extends React.Component
{	// methods in order, constructor first, render last, events & function in the middle
	constructor( props )
	{
		//	console.debug( "SearchBox.props", props );
		super( props );

		// default props
		SearchBox.defaultProps = {
			ID: Utils.NewId( "sb-id" )
		};

		// configurable properties
		this.Theme = this.props.Theme || "";
		this.AltTitle = "Search across the entire application";
		this.PlaceholderText = "Search resourcees, services and documentation";
		this.Icon = "";
		this.DataSet = props.DataSet || [];
        this.DataSet_Temp = props.DataSet || [];
        this.Quadrant_Title_Name = "Quadrant title";
        this.Search_Results_Num = "See more";

		// result panel properties
		this.Has_QuickResultPanel = props.HasResultsPanel || false;
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
			_zero_result.innerText = "No results found for \"" + this.TextValue + "\"";

			_rv.push( _zero_result );
		}
		return _rv;
    };
	OnFocus_ShowResultsPanel( ev )
    {	//	console.debug( "SearchBox::OnFocus_ShowResultsPanel", ev );
        let panel = document.getElementById(this.ResultsPanel_ID);
		//	panel.className = "results-panel-open";
		panel.classList.add( "results-panel-open" );
        
		ev.preventDefault();
		ev.stopPropagation();
		return;
    };
	OnBlur_CloseResultsPanel( ev )
	{	//	console.debug("OnBlur_CloseResultsPanel");
		ev.preventDefault();
		ev.stopPropagation();
		//	console.debug( "SearchBox::OnBlur_CloseResultsPanel", ev.relatedTarget );

		if ( ev.relatedTarget === null || ev.relatedTarget === undefined )
		{
			let _rp = document.getElementById( this.ResultsPanel_ID );
            _rp.className = "results-panel";
		}
		return;
    };
	OnChange_FilterDataSet( ev )
	{	//	console.debug( "SearchBox::OnChange_FilterDataSet", ev.target.value  );
		this.TextValue = ev.target.value;
		let _query = this.TextValue;

        //doesnt replace whats existing just appends MORE to the bottom of the list. 
        let _rp1 = document.getElementById("quadrant-results1");
        let _rp2 = document.getElementById("quadrant-results2");
        let _rp3 = document.getElementById("quadrant-results3");
        let _rp4 = document.getElementById("quadrant-results4");

        while (_rp1.firstChild) {
            _rp1.removeChild(_rp1.firstChild);
        }

        while (_rp2.firstChild) {
            _rp2.removeChild(_rp2.firstChild);
        }

        while (_rp3.firstChild) {
            _rp3.removeChild(_rp3.firstChild);
        }

        while (_rp4.firstChild) {
            _rp4.removeChild(_rp4.firstChild);
        }

		let _results1 = this.DataSet.filter( function ( item )
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
        let _results2 = this.DataSet.filter(function (item) {
            if (item.name.toLowerCase().includes(_query.toLowerCase())) {
                return item;
                //console.log("Return matches");
            }
            else {
                //returns nothing
                return;
            }
        }, _query);
        let _results3 = this.DataSet.filter(function (item) {
            if (item.name.toLowerCase().includes(_query.toLowerCase())) {
                return item;
                //console.log("Return matches");
            }
            else {
                //returns nothing
                return;
            }
        }, _query);
        let _results4 = this.DataSet.filter(function (item) {
            if (item.name.toLowerCase().includes(_query.toLowerCase())) {
                return item;
                //console.log("Return matches");
            }
            else {
                //returns nothing
                return;
            }
        }, _query);

        _results1.forEach(function (v, i, a) {	//	console.debug( i, v );
            //console.log("i", i);
           // console.log(i, "v", v);
            let _el = document.createElement("div");
            _el.innerText = v.name;
            _rp1.appendChild(_el);

            return;
        });

        _results2.forEach(function (v, i, a) {	//	console.debug( i, v );
            //console.log("i", i);
           // console.log("v", v);
            let _el = document.createElement("div");
            _el.innerText = v.name;
            _rp2.appendChild(_el);
            return;
        });

        _results3.forEach(function (v, i, a) {	//	console.debug( i, v );
            //console.log("i", i);
           // console.log("v", v);
            let _el = document.createElement("div");
            _el.innerText = v.name;
            _rp3.appendChild(_el);
            return;
        });

        _results4.forEach(function (v, i, a) {	//	console.debug( i, v );
            //console.log("i", i);
          //  console.log("v", v);
            let _el = document.createElement("div");
            _el.innerText = v.name;
            _rp4.appendChild(_el);
            return;
        });
	
		ev.preventDefault();
		ev.stopPropagation();
        return;
    };
	render()
    {     
		return (
			<div className="search-box-panel">
				<div className="search-area-panel">
					<input id="input-box" type="text" className="input-box-class" onChange={this.handle_UserInput} onBlur={this.handle_BoxBlur} onFocus={this.handle_BoxFocus} placeholder={this.PlaceholderText} />
					<div id={this.ResultsPanel_ID} className="results-panel">
					<div id="quadrant1" className="quadrant">
						<div id="quadrant-title1" className="quadrant-title">
							<div id="quadrant-title-text" className="quadrant-title-text">{this.Quadrant_Title_Name}</div>
							<div id="divider" className="divider"></div>
							<div id="see-more" className="see-more">{this.Search_Results_Num}</div>
						</div>
						<div id="quadrant-results1" className="quadrant-title"></div>
					</div>
					<div id="quadrant2" className="quadrant">
						<div id="quadrant-title2" className="quadrant-title">
							<div id="quadrant-title-text" className="quadrant-title-text">{this.Quadrant_Title_Name}</div>
							<div id="divider" className="divider"></div>
							<div id="see-more" className="see-more">{this.Search_Results_Num}</div>
						</div>
						<div id="quadrant-results2" className="quadrant-title"></div>
					</div>
					<div id="quadrant3" className="quadrant">
						<div id="quadrant-title3" className="quadrant-title">
							<div id="quadrant-title-text" className="quadrant-title-text">{this.Quadrant_Title_Name}</div>
							<div id="divider" className="divider"></div>
							<div id="see-more" className="see-more">{this.Search_Results_Num}</div>
						</div>
						<div id="quadrant-results3" className="quadrant-title"></div>
					</div>
					<div id="quadrant4" className="quadrant">
						<div id="quadrant-title4" className="quadrant-title">
							<div id="quadrant-title-text" className="quadrant-title-text">{this.Quadrant_Title_Name}</div>
							<div id="divider" className="divider"></div>
							<div id="see-more" className="see-more">{this.Search_Results_Num}</div>
						</div>
						<div id="quadrant-results4" className="quadrant-title"></div>
					</div>
					</div>
				</div>
			</div>
		);
	};
};
