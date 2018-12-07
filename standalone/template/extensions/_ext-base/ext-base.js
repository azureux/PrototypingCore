/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { Utilities as Utils } from "../../../js/utilities.js";

// extension base
export class ExtensionBase extends React.Component
{	// methods in order, constructor first, render last, events & function in the middle
	constructor( props )
	{	console.debug( "ExtensionBase.props", props );
		super( props );

		//properties
		this.Id = Utils.NewId( "ext" );
		this.Title = "Extension Base compoent";
		this.Application = props.Application;
		this.Theme = props.Application.props.Theme;
        this.CssFileID = "ext-base-css";
		this.CssFile = "extensions/_ext-base/ext-base.css";
		this.CssClassNames = {
            Normal: "ext-base-css"
        };
		this.state = {
			items: [],
		};

		// INJECT CSS
		Utils.InjectControlCss(this.CssFileID, this.CssFile);

		//	event handlers
		//	this.handleClick = this.OnClick_ChangeBorderColor.bind( this );
		return;
	};
	componentDidMount()
	{	//	not used yet
		return;
	};
	componentDidUnMount()
	{	//	not used yet
		return;
	};	
	render()
	{
		return React.createElement( 'div', {
			id: Utilities.NewId( "ext-base" ),
			className: this.CssClassNames.Normal,
		}, `${this.Title}` );
	};
};
