/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
/// "Dashboard" control
"use strict";


import { Utilities as Utils, DataEnums as Data } from "../../../js/utilities.js";

import { SVG as AzSvgs } from "../../../js/svg-assets.js";
import { UserAccountSwitcher as UAS } from "../user-account-switcher/user-account-switcher.js";
import { ButtonControl as BtnCtrl } from "../../standard-controls/button/button.js";

export class Dashboard extends React.Component
{
	constructor( props )
	{
		super( props );
		this.ID = "dshbrd";
		this.Title = "Dashboard";
		this.Theme = props.Application.state.CurrentTheme;
		this.CssFileID = "dshbrd-css";
		this.CssFile = "components/shell-controls/dashboard/dashboard.css";
		this.CssClassNames = {
			Normal: this.Theme + " dsh-brd-main",
			Dirty: this.Theme + " dsh-brd-main-dirty",
			Saved: this.Theme + " dsh-brd-main-saved"
		};
		this.state = {
			IsDirty: false,
			NavExpanded: (props.LeftNavState || false),
			CurrentCssClass: this.CssClassNames.Normal 
		};
		this.DebugMessage = this.props.Application.state.VerticalNavigationIsOpen;	//	DebugMessage || "default dashboard debug message";

		if ( this.props.Application.props.Dashboard.Title !== undefined )
		{
			this.Title = this.props.Application.props.Dashboard.Title;
		}

        Utils.InjectControlCss( this.CssFileID, this.CssFile );
		return;
	};
	render()
	{	//	console.debug( "Dashboard.render()", this.props );
		return React.createElement( 'div', {
			id: this.ID,
			className: this.state.CurrentCssClass
		},[`${this.Title}`,` this.DebugMessage :: ${this.DebugMessage}`] );
	};
};
