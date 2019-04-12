import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
//import { Utilities as Utils } from "../../js/utilities.js";
//import { ExtensionHeader as Header } from "../../components/extension-header/extension-header.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './create-new-ext.css';

export class CreateNewExtension extends ExtBase
{
	constructor( props )
	{	
		super( props );
		return;
	};
	static PropertyBag = {
		_title: "Azure Marketplace",
		_path: "marketplace",
		_breadcrumb_title: "New",
		_icon: SvgIcon.Extensions.CreateNew,
	};
	//render()
	//{
	//	const _header = React.createElement( Header, {
	//		key: Utils.NewKey(),
	//		Title: this.BreadCrumbTitle,
	//		SvgIcon: this.SvgIcon,
	//		SubTitle: "",
	//		//Application: this.Application,
	//		extensionObject: this
	//	} );

	//	const _command_bar = React.createElement( "div", {
	//		key: this.Utils.NewKey(),
	//		className: "cmdBar"
	//	}, "command bar panel" );

	//	const _content = React.createElement( "div", {
	//		key: this.Utils.NewKey(),
	//		className: "contentPanel"
	//	}, "content area" );

	//	const _layout = [
	//		_header,
	//		_command_bar,
	//		_content
	//	];

	//	return React.createElement( "div", {
	//		id: this.ID,
	//		className: this.DefaultCssClass,
	//	}, _layout );
	//};
};