import React from 'react';
import { ExtensionBase } from "../_ext-base/ext-base.js";
import { Utilities as Utils } from "./../../js/utilities.js";
import SvgIcon from "./../../components/svg-icons/svg-icon.js";
import { TestData as AllResourcesTestData } from './test-data.js';
import './all-resources.css';

import CommandButtonPanel from './../../components/cmd-panel/cmd-panel.js';
import CommandButton from './../../components/cmd-panel/cmd-btn.js';

export class AllResourcesExtension extends ExtensionBase
{
	static defaultProps = {
		Title: "All resources",
		Subtitle: "Currently allocated resources in your directory",
		Path: Utils.FormatPathFromTitle( "All your resources belong to us" ),
		BreadcrumbTitle: "All resources",
		Icon: SvgIcon.Icons.Default,
		//	IsSelected: false,
		//	HasHeader: true,
		//	HasHeaderDocLink: false,
		//	HasBreadcrumb: true,
		Columns: [
			{ name: "Resource", key: "_title", visible: true },
			{ name: "Icon", key: "_icon", visible: true },
			{ name: "BreadCrumb Title", key: "_breadcrumb_title", visible: true },
			{ name: "Extension Name", key: "_extension", visible: true },
			{ name: "CSS ID", key: "_css_id", visible: true },
			{ name: "CSS PATH", key: "_css_path", visible: true },
		],
		Data: AllResourcesTestData
	};
	constructor( props )
	{
		super( props );
		return;
	};
	ExtRender()
	{ 
		return (
			<div className="all-res-list-ext">
				<CommandButtonPanel>
					<CommandButton text={'Add'} icon={SvgIcon.ShellIcons.Search} />
					<CommandButton text={'Edit columns'} icon={SvgIcon.ShellIcons.Search} />
					<CommandButton text={'Refresh'} icon={SvgIcon.ShellIcons.Search} />
					<CommandButton text={'Export to CSV'} icon={SvgIcon.ShellIcons.Search} />
					<div className={CommandButtonPanel.Styles.Divider}>|</div>
					<CommandButton disabled={true} text={'Assign tags'} icon={SvgIcon.ShellIcons.Search} />
					<CommandButton disabled={true} text={'Delete'} icon={SvgIcon.ShellIcons.Search} />
					<CommandButton text={'Try preview'} icon={SvgIcon.ShellIcons.Search} />
				</CommandButtonPanel>
				<div className="all-res-content-panel">{this.Title}</div>
			</div>
		);
	};
};
