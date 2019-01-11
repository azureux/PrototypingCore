/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";

import { Utilities as Utils } from "../../../js/utilities.js";
import { SVG as AzureSvgs } from "../../../js/svg-assets.js";

export class BreadCrumbControl extends React.Component
{	// methods in order, constructor first, render last, events & function in the middle
	constructor( props )
	{
		super( props );

		this.ID = Utils.NewId( "breadcrumb-id" );
        this.Application = this.props.Application;
        this.ButtonStyle = this.props.className;
        this.CssFileID = "breadcrumb-css";
        this.CssFile = "components/standard-controls/breadcrumb/breadcrumb.css";
		// theming TBD
		this.CssClassNames = {
            //Normal: this.Theme + " buttonControl " + this.ButtonStyle,
            //Alerted: this.Theme + " RootLinkCssExtra " + this.ButtonStyle,
		};
		this.DefaultClassName = this.constructor.name;
		this.state = {};

		this.Links = this.props.Application.CurrentExtensions;

		//event handlers
		//this.HandleClick = this.OnClick_ChangeBorderColor.bind( this );
		//this.NavigationClick = this.props.onClickHandler;

		// inject CSS
        Utils.InjectControlCss(this.CssFileID, this.CssFile);
		return;
	};
	render()
	{
		//	console.debug( "BreadCrumbControl.this.constructor.name ", this.constructor.name );
		//	console.debug( "this.Links", this.Links[0].Title() );

		let _temp_links = [];
		for ( let i = 0; i < this.Links.length; i++ )
		{
			console.debug( "this.Links", this.Links[i].Title() );
			let _text = this.Links[i].Title();
			let _link = React.createElement( "a", { href: "#?link" + i, key: Utils.NewKey(), className: "bc-link" }, _text);
			_temp_links.push( _link );

			if ( i < (this.Links.length - 1 ) )
			{
				let _divider = React.createElement( "span", { key: Utils.NewKey(), className: "bc-divider" }, ">" );
				_temp_links.push( _divider );
			}
		}

        const _rv = React.createElement('div', {
                 id: this.ID,
                 className: this.DefaultClassName,
			 }, _temp_links );

        return _rv;
	};
};
