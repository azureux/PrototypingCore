/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";

import { Utilities as Utils } from "../../../js/utilities.js";
import { SVG as Svgs } from "../../../js/svg-assets.js";
import { AllExtensionsList as Extensions} from "../../../extensions/extensions-list.js";


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
		//	console.debug( "BreadCrumbControl.render: this.constructor.name ", this.constructor.name );
		//	OVERFLOW LOGIC NEEDED, CURRENTLY PORTAL HAS FIRST COLLECTION OF ITEMS IN A "..." DROP DOWN
		//	LONG BREAD CRUMB EXAMPLE IN THE PORTAL
		//	https://ms.portal.azure.com/#blade/Microsoft_Azure_AD/RoleMemberAssignmentPropertiesBlade/roleAssignmentId/%2Fsubscriptions%2F690e5c20-1047-41fa-9b54-81bdb53ba7e8%2FresourceGroups%2Faz-design-templates%2Fproviders%2FMicrosoft.Web%2Fsites%2Faz-design-templates%2Fproviders%2FMicrosoft.Authorization%2FroleAssignments%2F0da80bcf-b6e7-4022-9ea9-6838546f5349/scope/%2Fsubscriptions%2F690e5c20-1047-41fa-9b54-81bdb53ba7e8%2FresourceGroups%2Faz-design-templates%2Fproviders%2FMicrosoft.Web%2Fsites%2Faz-design-templates

		//	console.debug( "BreadCrumbControl.render():: this.Links", this.Links[0].length);
		let _temp_links = [];
		for ( let i = 0; i < this.Links.length; i++ )
		{
			//	console.debug( "this.Links", this.Links[i].Title() );
			let _text = this.Links[i].BreadCrumbTitle();
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
