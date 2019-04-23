import React from 'react';
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import ExtensionHeader from "./../../components/extension-header/extension-header.js";
import './ext-base.css';

export class ExtensionBase extends React.Component
{	
	constructor( props )
	{
		//	console.debug( "ExtensionBase.props", props );
		super( props );

		this.state = { IsDirty: false };
		this.ExtensionName = this.constructor.name;
		this.PropertyBag = this.props;
		this.Path = ( this.props._path || "/" );
		this.Title = ( this.props._title || this.ExtensionName);
		this.SubTitle = ( this.props._subtitle || "ExtensionBase Subtitle");
		this.BreadCrumbTitle = ( this.props._breadcrumb_title || "ExtensionBase breadcrumb" );
		this.SvgIcon = ( this.props._icon || SvgIcon.Icons.Default );
		this.IsSelected = ( this.props._selected || false );
		return;
	};
	static PropertyBag =
	{
		_title: "Extension Base Component",
		_subtitle: "The javascript base class for \"ExtensionBase\" ",
		_path: Utils.FormatPathFromTitle( "Extension Base Component" ),
		_breadcrumb_title: "breadcrumb short title",
		_icon: SvgIcon.Icons.Default,
		_selected: "false",
		_hasHeader: false,
		_hasBreadcrumb: false,
		_data : []
	};
	static Ext_Key() { return Utils.NewKey(); };
	static Ext_Name() { return this.ExtensionName; };
	static Ext_Title() { return this.PropertyBag._title; };
	static Ext_SubTitle() { return this.PropertyBag._subtitle; };
	static Ext_Path() { return this.PropertyBag._path; };	
	static Ext_BreadCrumbTitle() { return this.PropertyBag._breadcrumb_title; };
	static Ext_Icon() { return this.PropertyBag._icon; };
	static Ext_Data() { return this.PropertyBag._data; };
	static Ext_IsSelected() { return this.PropertyBag._selected; };
	//componentWillMount()
	//{
	//	//	console.debug( "componentWillMount" );
	//	return;
	//};
	//componentDidMount()
	//{
	//	//	console.debug( "componentDidMount" );
	//	//	this.Init( ExtensionBase_PropertyBag );
	//	//	this.Init();
	//	//this.Utils.InjectControlCss( this.BaseCssId, this.BaseCssPath );
	//	//this.Utils.InjectControlCss( this.CssFileID, this.CssFile );
	//	return;
	//};
	//componentWillUnmount()
	//{
	//	//	console.debug( "componentWillUnmount--REMOVE CSS" );
	//	//this.Utils.RemoveInjectedCss( this.CssFileID, this.CssFile );
	//	return;
	//};
	ExtRender()
	{
		return (
			<div>
				<div>ExtensionBase.ExtRender(): {this.ExtensionName}</div>
				<div>
					{
						this.props.debug === true &&
						<h1 className="debug-on">debug: prototype</h1>
					}
					{
						this.props.debug === false &&
						<h1 className="debug-off">debug: preview</h1>
					}
				</div>
			</div>
		);
	};
	render()
	{	//	console.debug( "ExtBase.render.this.Selected", this.Selected );
		//<SvgIcon icon={this.SvgIcon} />
		//<div>ID: {this.ID}</div>
		//<div>ExtensionName: {this.ExtensionName}</div>
		//<div>Title: {this.Title}</div>
		//<div>SubTitle: {this.SubTitle}</div>
		//<div>BreadCrumbTitle: {this.BreadCrumbTitle}</div>
		//<div>Selected: {this.IsSelected}</div>
		return (
			<div className="ext-base">
				{
					this.PropertyBag._hasHeader !== false && 
					<ExtensionHeader extBag={this.PropertyBag} pinEvent={this.props.handlePin} closeEvent={this.props.handleClose}></ExtensionHeader>	
				}
				<div className="ext-base-content-area">{this.ExtRender()}</div>	
			</div>
		);
	};
};