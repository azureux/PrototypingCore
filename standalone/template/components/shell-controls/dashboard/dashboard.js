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
		this.DebugMessage = "";
		this.ID = "dshbrd";
		this.Title = "Dashboard";
		this.Theme = undefined;	//	props.Application.state.CurrentTheme;
		this.CssFileID = "dshbrd-css";
		this.CssFile = "components/shell-controls/dashboard/dashboard.css";
		this.CssClassNames = {
			Normal: this.Theme + " dsh-brd-main",
			Expanded: this.Theme + " dsh-brd-main-expanded"
		};
		this.CurrentCssClassName = this.CssClassNames.Normal;

		this.CurrentExtension = this.props.CurrentExtension;


		this.state = {
			IsDirty: false,
			NavExpanded: (props.Application.state.VerticalNavigation_IsOpen || false),
		};

		// event handlers	//	this.props.Application.OnClick_Test_OpenContextPanel.bind(this),
		// TO BE REMOVED, ONLY FOR DEV & DEBUG
		this.Test_ContextPanel_OpenClose = this.props.Application.OnClick_Test_OpenContextPanel.bind( this.props.Application );


		// each time
		Utils.InjectControlCss( this.CssFileID, this.CssFile );
		return;
	};
	render()
	{	//	console.debug( "Dashboard.render()", this.props );
		//	console.debug( "Dashboard.Render", this.props.Application.state.VerticalNavigation_IsOpen);
		//	console.debug( "Dashboard.Render", this.CurrentCssClassName );

		if ( this.props.Application.state.VerticalNavigation_IsOpen == false )
		{
			this.CurrentCssClassName = this.CssClassNames.Normal;
		}
		else 	if ( this.props.Application.state.VerticalNavigation_IsOpen == true )
		{
			this.CurrentCssClassName = this.CssClassNames.Expanded;
		}
		//	console.debug( "Dashboard.Render", this.props.Application.state.VerticalNavigation_IsOpen);
		//	console.debug( "Dashboard.Render", this.CurrentCssClassName );


		//return React.createElement( 'div', {
		//	id: this.ID,
		//	onClick: this.Test_ContextPanel_OpenClose,
		//	className: this.CurrentCssClassName
		//},[`${this.Title}`,` this.DebugMessage :: ${this.DebugMessage}`] );
		return React.createElement( 'div', {
			id: this.ID,
			//	onClick: this.Test_ContextPanel_OpenClose,
			className: this.CurrentCssClassName
		}, 	this.CurrentExtension );
	};
};
