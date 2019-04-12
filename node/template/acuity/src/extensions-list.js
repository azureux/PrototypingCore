// TBD - ADD EXTENSIONS FOR FAST-DNA, FABRIC/FLUENT, OTHERS

// TOP LEVEL EXTENSIONS LIST
import { CreateNewExtension } from './extensions/azure-marketplace/create-new-ext.js';
import { DashboardExtension } from './extensions/azure-dashboard/dashboard-ext.js';
import { HomePageExtension } from './extensions/azure-home/home-ext.js';
import { AllServicesExtension } from './extensions/all-services/all-services-ext.js';

// FAVORITES NAVIGATION LIST
// NON-CUSTOMIZED EXTENSIONS
import { AllAppServicesExtension } from "./extensions/all-app-services/all-app-services.js";
import { AllResourceGroupsExtension } from "./extensions/all-resource-groups/all-resource-groups.js";
import { AllResourcesExtension } from "./extensions/all-resources/all-resources.js";
import { AllSqlDbsExtension } from "./extensions/all-sql-dbs/all-sql-dbs.js";
import { AllVmsExtension } from "./extensions/all-virtual-machines/all-virtual-machines.js";

// CUSTOM ONE-OFF EXTENSIONS
import { VirtualMachineExtension } from "./extensions/virtual-machine/vm-ext.js";
import { SqlServerExtension } from "./extensions/sql-server/sql-server.js";
import { MonitoringExtension } from "./extensions/monitoring/monitor.js";
import { AzureActiveDirectoryExtension } from './extensions/azure-active-directory/azure-active-directory.js';

// TOP LEVEL TOOL BAR CONTEXT PANELS
import { DevConsolePanel } from './components/context-panels-toolbar/dev-console-panel.js';
import { DirectorySwitcherPanel } from './components/context-panels-toolbar/dir-switch-panel.js';
import { NotificationsPanel } from './components/context-panels-toolbar/notifications-panel.js';
import { PortalSettingsPanel } from './components/context-panels-toolbar/portal-settings-panel.js';
import { HelpPanel } from './components/context-panels-toolbar/help-panel.js';
import { FeedbackPanel } from './components/context-panels-toolbar/feedback-panel.js';


// IN RENDERING ORDER
const _azure_links = [
	CreateNewExtension,
	HomePageExtension,
	DashboardExtension,
	AllServicesExtension
];
const _fave_links = [
	AllResourcesExtension,
	AllResourceGroupsExtension,
	AllVmsExtension,
	AllAppServicesExtension,
	AllSqlDbsExtension,
	AzureActiveDirectoryExtension,
	MonitoringExtension,
	SqlServerExtension,
	VirtualMachineExtension,
	AllResourcesExtension,
	AllResourceGroupsExtension,
	AllVmsExtension,
	AllAppServicesExtension,
	AllSqlDbsExtension,
	AzureActiveDirectoryExtension,
	MonitoringExtension,
	SqlServerExtension,
	VirtualMachineExtension,
	AllResourcesExtension,
	AllResourceGroupsExtension,
	AllVmsExtension,
	AllAppServicesExtension,
	AllSqlDbsExtension,
	AzureActiveDirectoryExtension,
	MonitoringExtension,
	SqlServerExtension,
	VirtualMachineExtension,
	AllResourcesExtension,
	AllResourceGroupsExtension,
	AllVmsExtension,
	AllAppServicesExtension,
	AllSqlDbsExtension,
	AzureActiveDirectoryExtension,
	MonitoringExtension,
	SqlServerExtension,
	VirtualMachineExtension,
	AllAppServicesExtension,
	AllSqlDbsExtension,
	AzureActiveDirectoryExtension,
	MonitoringExtension,
	SqlServerExtension,
	VirtualMachineExtension,
	AllResourcesExtension,
	AllResourceGroupsExtension,
	AllVmsExtension,
	AllAppServicesExtension,
	AllSqlDbsExtension,
	AzureActiveDirectoryExtension,
	MonitoringExtension,
	SqlServerExtension,
	VirtualMachineExtension,

];
const _context_panels = [
	DevConsolePanel,
	DirectorySwitcherPanel,
	NotificationsPanel,
	PortalSettingsPanel,
	HelpPanel,
	FeedbackPanel
];

export
{
	_azure_links as AzureLinks,
	_fave_links as FaveLinks,
	_context_panels as ToolBarContextPanels
}