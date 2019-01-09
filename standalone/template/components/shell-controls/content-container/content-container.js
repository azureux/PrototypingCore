/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
/// "Content Container" control (formerly dashboard)
"use strict";

import { Utilities as Utils, DataEnums as Data } from "../../../js/utilities.js";

export class ContentContainer extends React.Component
{
	constructor( props )
	{
		super( props );
		this.ID = "dshbrd";
		this.Title = "Dashboard";
		this.CssFileID = "dshbrd-css";
		this.CssFile = "components/shell-controls/content-container/content-container.css";
		this.CssClassNames = {
			Normal: this.Theme + " dsh-brd-main",
			Expanded: this.Theme + " dsh-brd-main-expanded"
		};
		this.CurrentCssClassName = this.CssClassNames.Normal;
		this.CurrentExtension = this.props.CurrentExtension;

		// each time, unlike "extensions", this CSS stays loaded as it's part of the shell.
		Utils.InjectControlCss( this.CssFileID, this.CssFile );
		return;
	};
	render()
	{	//	console.debug( "ContentContainer.render()", this.props );
		if ( this.props.Application.state.VerticalNavigation_IsOpen == false )
		{
			this.CurrentCssClassName = this.CssClassNames.Normal;
		}
		else 	if ( this.props.Application.state.VerticalNavigation_IsOpen == true )
		{
			this.CurrentCssClassName = this.CssClassNames.Expanded;
		}

		return React.createElement( 'div', {
			id: this.ID,
			className: this.CurrentCssClassName
		}, 	this.CurrentExtension );
	};
};
