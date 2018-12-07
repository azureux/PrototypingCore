/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />

"use strict";
import { Utilities as Utils } from "../../../js/utilities.js";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";


// extension base
export class CreateNewExtension extends ExtBase	//	React.Component
{	// methods in order, constructor first, render last, events & function in the middle
	constructor( props )
	{	console.debug( "CreateNewExtension.props", props );
		super( props );

		//properties
		//	this.Id = this.props.id;
		this.Title = "Create New";
		//	this.Application = props.Application;
		this.Theme = props.Application.props.Theme;
        this.CssFileID = "create-new-css";
		this.CssFile = "extensions/create/create-new-ext.css";
		this.CssClassNames = {
            Normal: "create-new-ext"
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
			id: Utils.NewId( "create-new-ext" ),
			className: this.CssClassNames.Normal,
		}, `${this.Title}` );
	};
};
