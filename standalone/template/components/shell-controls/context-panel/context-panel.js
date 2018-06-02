/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
/// "ContextPanel" control
"use strict";
class ContextPanel extends React.Component
{
	constructor( props )
	{
		super( props );
		this.ID = Utilities.NewId( "cntxt-pnl" );
		this.Title = "Context Panel";
		this.Theme = props.Application.state.CurrentTheme;
		this.CssFileID = "cntxt-pnl-css";
		this.CssFile = "components/shell-controls/context-panel/context-panel.css";
		this.CssClassNames = {
			Normal: this.Theme + " cntxt-pnl-main",
			Dirty: this.Theme + " cntxt-pnl-main-dirty",
			Saved: this.Theme + " cntxt-pnl-main-saved"
		};
		this.state = {
			IsDirty: false,
			CurrentCssClass: this.CssClassNames.Normal
		};

		// set overrides
		if ( this.props.Application.props.ContextPanel.Title !== undefined )
		{
			this.Title = this.props.Application.props.ContextPanel.Title;
		}
		return;
	};
	render()
	{	//	console.debug( "ContextPanel.render()", this.props );
		Utilities.InjectControlCss( this.CssFileID, this.CssFile );

		return React.createElement( 'div', {
			id: this.ID,
			className: this.state.CurrentCssClass
		},`${this.Title}` );
	};
};
