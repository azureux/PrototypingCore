/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";

const CreateNew_PropertyBag = {
	_title : "Create a resource",
	_icon : ExtBase.Icons().Color.NewPlusSign,
	_css_id : "create-new-css",
	_css_path: "extensions/create/create-new-ext.css",
};

export class CreateNewExtension extends ExtBase
{
	constructor( props )
	{	//	console.debug( "CreateNewExtension.props", props );
		super( props );

		this.Init( CreateNew_PropertyBag );

		return;
	};
	static Title()
	{
		return CreateNew_PropertyBag._title;
	};
	static Icon()
	{
		return CreateNew_PropertyBag._icon;
	};
	render()
	{
		const _title = React.createElement( "div", { className: "test-title" },`${this.Title}`);

		const _icon = React.createElement( "div", { className: "test-icon", dangerouslySetInnerHTML: this.Utils.CreateSvgMarkup( this.SvgIcon.SVG ) } );

		return React.createElement( "div", {
			id: this.ID,
			className: this.DefaultCssClass,
		}, _title, _icon);
	};
};