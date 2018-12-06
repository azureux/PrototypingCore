/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
/// "ContextPanel" control
"use strict";
import { Utilities as Utils } from "../../../js/utilities.js";
import { SVG as Svg } from "../../../js/svg-assets.js";
import { ButtonControl as BtnCtrl } from "../../standard-controls/button/button.js";

export class ContextPanel extends React.Component
{
	constructor( props )
	{
		super( props );
		this.ID = "cntxt-pnl";
		this.Title = "Context Panel";
		this.Theme = props.CurrentTheme;
		this.CssFileID = "cntxt-pnl-css";
		this.CssFile = "components/shell-controls/context-panel/context-panel.css";
		this.CssClassNames = {
			Normal: "context-panel-main",
			Open: "context-panel-main-open"
		};
		this.state = {
			IsOpen: this.props.IsVisible,
		};
		this.IsVisible = this.props.IsVisible || false;
		this.CurrentCssClasses = this.props.CssClasses || this.CssClassNames.Normal;

		//	this will need to be a child control that contains other controls
		//	or a variation like the KO template
		this.DefaultContext = "Default context blade content";

		// event handlers
		this.Handle_OnClick_CloseContextBlade = this.OnClick_Close.bind( this );

		Utils.InjectControlCss( this.CssFileID, this.CssFile );
		return;
	};
	OnClick_Close( ev )
	{
		console.debug( "OnClick_Close", this.IsVisible, this.state.IsOpen );
		if ( this.IsVisible == false )
		{
			this.IsVisible = true;
		}
		else if (  this.IsVisible == true )
		{
			this.IsVisible = false;
		}

		this.setState( { IsOpen: this.IsVisible } );
		console.debug( "OnClick_Close", this.IsVisible, this.state.IsOpen );
		return;
	};
	
	render()
	{	//	
		console.debug( "ContextPanel.render()", this.IsVisible, this.state.IsOpen );

		let _close_btn = React.createElement( BtnCtrl,
			{
				className: "context-close-button",
				attributeTitle: "Close this panel",
				buttonText: " ",
				Application: this.props,
				svgIcon: Svg.Shell.Close,
				onClickHandler: this.Handle_OnClick_CloseContextBlade,
				key: Utils.NewId()
			} );

		let _child_controls = [_close_btn, this.DefaultContext];

		if ( this.IsVisible == false )
		{
			this.CurrentCssClasses = this.CssClassNames.Normal;			
		}
		if (  this.IsVisible == true )
		{
			this.CurrentCssClasses = this.CssClassNames.Normal + " " + this.CssClassNames.Open;
		}

		return React.createElement( 'div',
			{
				id: this.ID,
				className: this.CurrentCssClasses
			}, _child_controls );
	};
};
