/// <reference path="../js/utilities.js" />
/// <reference path="../script/react/react-latest.js" />
/// <reference path="../script/react/react-dom-latest.js" />
/// "Content Container" control (formerly dashboard)
"use strict";

import { Utilities as Utils, DataEnums as Data } from "../../../js/utilities.js";
import { BreadCrumbControl as BreadCrumb } from "../../standard-controls/breadcrumb/breadcrumb.js";

export class ContentContainer extends React.Component
{
	constructor( props )
	{
		super( props );
		this.ID = "extension-panel";
		this.Title = "Dashboard";
		this.CssFileID = this.ID + "-css";
		this.CssFile = "components/shell-controls/content-container/content-container.css";
		this.CssClassNames = {
			Normal: this.Theme + " extension-panel-root",
			Expanded: this.Theme + " extension-panel-root-expanded"
		};
		this.CurrentCssClassName = this.CssClassNames.Normal;
		this.CurrentExtensions = this.props.Application.CurrentExtensions;

		// each time, unlike "extensions", this CSS stays loaded as it's part of the shell.
		Utils.InjectControlCss( this.CssFileID, this.CssFile );
		return;
	};
	render()
	{	//	console.debug( "ContentContainer.render()", this.props );
		if ( this.props.Application.state.VerticalNavigation_IsOpen === false )
		{
			this.CurrentCssClassName = this.CssClassNames.Normal;
		}
		else 	if ( this.props.Application.state.VerticalNavigation_IsOpen === true )
		{
			this.CurrentCssClassName = this.CssClassNames.Expanded;
		}

		// determine is extension should display a breadcrumb navigation control
		// this is for the first four controls in the left nav, and only 3 of those don't render a breadcrumb
		console.debug( "this.CurrentExtensions[this.CurrentExtensions.length - 1]", this.CurrentExtensions[this.CurrentExtensions.length - 1].name );

		let _bool_has_breadcrumb_control = true;
		let _extension_name = this.CurrentExtensions[this.CurrentExtensions.length - 1].name;

		switch (_extension_name)
		{
			case "AllServicesExtension":
				{
					_bool_has_breadcrumb_control = false;
					break;
				}
			case "HomePageExtension":  
				{
					_bool_has_breadcrumb_control = false;
					break;
				}
			case "DashboardExtension":  
				{
					_bool_has_breadcrumb_control = false;
					break;
				}
			default: {
				_bool_has_breadcrumb_control = true;
				break;
			}
		}
		console.debug( "_bool_has_breadcrumb_control", _bool_has_breadcrumb_control );

		// final collection
		let  _bc = undefined;
		if ( _bool_has_breadcrumb_control == true )
		{
			_bc = React.createElement( BreadCrumb, { key: Utils.NewKey(), Application: this.props.Application } );
		}

		let _ext = React.createElement( this.CurrentExtensions[this.CurrentExtensions.length - 1], {
			key: Utils.NewKey(),
			Application: this.props.Application,
			PropertyBag: this.CurrentExtensions[this.CurrentExtensions.length - 1].PropertyBag(),
			HasBreadCrumb: _bool_has_breadcrumb_control,
		} );

		return React.createElement( 'div', {
			id: this.ID,
			className: this.CurrentCssClassName
		}, 	_bc,_ext  );
	};
};
