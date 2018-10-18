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
		console.debug( "SearchBox.props", props );
		super( props );

		// default props
		SearchBox.defaultProps = {
			ID:  Utils.NewId( "search-box-id" ),
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

		this.TextValue = "";
		this.Has_QuickResultPanel = props.HasResultsPanel || false;
		this.QuickResultPanel_IsOpen = props.IsOpen || false;

		// state
		this.state = {
			currentString: ""
		};

		//	event handlers
		this.handleUserInput = this.OnChange_FilterDataSet.bind( this );
		//	this.NavigationClick = this.props.onClickHandler;

		// inject CSS
        Utils.InjectControlCss(this.CssFileID, this.CssFile);
		return;
	};
	OnChange_FilterDataSet( ev )
	{	
		console.debug("SearchBox::OnChange_FilterDataSet");
		ev.preventDefault();
		ev.stopPropagation();
        return;
    };
	render()
    {
		// render based on props
		let _results_panel = React.createElement( "div",
			{
				id: "search-results-panel",
				className: "results-panel",
                key: Utils.NewId()
            }, );

		//	`<input type="text" placeholder={this.PlaceholderText} onChange={this.handleUserInput} />;
		let _box =	 React.createElement( "input",
			{
				id: "input-box",
				className: "input-box-class",
				'onChange': this.handleUserInput,
				placeholder: this.PlaceholderText,
				title: this.AltTitle,
				'value': this.TextValue,
                key: Utils.NewId(),
			},null);
		

		let _children = [
			_box,
			_results_panel
		];

		// final element
		let _rv = React.createElement( "div",
			{
				id: this.ID,
				className: this.Theme + " search-panel",
                onClick: this.OnUserInput,
                title: this.AltTitle,
                key: Utils.NewId(),
			}, _children );

        return _rv;
	};
};
