// import React from 'react';
import { ExtensionBase as ExtBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import './azure-active-directory.css';

export class AzureActiveDirectoryExtension extends ExtBase
{
	static defaultProps = {
		Title: "Microsoft Azure Active Directory",
		Subtitle: "Active Directory services",
		Path: Utils.FormatPathFromTitle( "active directory" ),
		BreadcrumbTitle: "Azure AD",
		Icon: SvgIcon.Icons.Default,
		IsSelected: false,
		HasHeader: true,
		HasBreadcrumb: true,
		Columns: [],
		Data: []
	};
	constructor( props )
	{
		super( props );
		return;
	};
	static PropertyBag = {
			_title :  "Microsoft Azure Active Directory",
			_breadcrumb_title: "Azure AD",
			_icon: SvgIcon.Icons.Default,
			_path: "azure-active-directory"
	};
};
