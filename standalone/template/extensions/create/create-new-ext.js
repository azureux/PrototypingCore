/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
/// <reference path="../../components/custom-controls/extension-header/extension-header.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { ExtensionHeader as Header } from "../../components/custom-controls/extension-header/extension-header.js";

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
		const _header = React.createElement( Header, {
			key: this.Utils.NewKey(),
			Title: this.Title,
			Icon: this.SvgIcon,
			Application: this.Application,
			extensionObject: this
		} );

		const _command_bar = React.createElement( "div", {
			key: this.Utils.NewKey(),
		}, "command bar" );

		const _content = React.createElement( "div", {
			key: this.Utils.NewKey(),
		}, "content" );

		const _layout = [
			_header,
			_command_bar,
			_content
		];

		return React.createElement( "div", {
			id: this.ID,
			className: this.DefaultCssClass,
		}, _layout );
	};
};