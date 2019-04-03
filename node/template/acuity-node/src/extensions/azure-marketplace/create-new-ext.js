/// <reference path="../../script/react/react-dom-16.4.0.js" />
/// <reference path="../../script/react/react-dom-latest.js" />
/// <reference path="../../js/utilities.js" />
/// <reference path="../../components/custom-controls/extension-header/extension-header.js" />
"use strict";
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { ExtensionHeader as Header } from "../../components/standard-controls/extension-header/extension-header.js";

export class CreateNewExtension extends ExtBase
{
	constructor( props )
	{	
		super( props );
		return;
	};
	static PropertyBag()
	{
		return  {
			_title: "Create a resource",
			_breadcrumb_title: "New",
			_icon : ExtBase.Icons().Color.NewPlusSign,
			_css_id : "create-new-css",
			_css_path: "extensions/std-create-new/create-new-ext.css",
		};
	};
	render()
	{
		const _header = React.createElement( Header, {
			key: this.Utils.NewKey(),
			Title: this.BreadCrumbTitle,
			SvgIcon: this.SvgIcon,
			SubTitle: "",
			Application: this.Application,
			extensionObject: this
		} );

		const _command_bar = React.createElement( "div", {
			key: this.Utils.NewKey(),
			className: "cmdBar"
		}, "command bar panel" );

		const _content = React.createElement( "div", {
			key: this.Utils.NewKey(),
			className: "contentPanel"
		}, "content area" );

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