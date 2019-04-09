// TBD - ADD EXTENSIONS FOR FAST-DNA, FABRIC/FLUENT, OTHERS

// TOP LEVEL EXTENSIONS LIST
import { CreateNewExtension } from './azure-marketplace/create-new-ext.js';
import { DashboardExtension } from './azure-dashboard/dashboard-ext.js';
import { HomePageExtension } from './azure-home/home-ext.js';
import { AllServicesExtension } from './all-services/all-services-ext.js';

// FAVORITES NAVIGATION LIST
// NON-CUSTOMIZED EXTENSIONS
import { AllAppServicesExtension } from "./all-app-services/all-app-services.js";
import { AllResourceGroupsExtension } from "./all-resource-groups/all-resource-groups.js";
import { AllResourcesExtension } from "./all-resources/all-resources.js";
import { AllSqlDbsExtension } from "./all-sql-dbs/all-sql-dbs.js";
import { AllVmsExtension } from "./all-virtual-machines/all-virtual-machines.js";

// CUSTOM ONE-OFF EXTENSIONS
import { VirtualMachineExtension } from "./virtual-machine/vm-ext.js";
import { SqlServerExtension } from "./sql-server/sql-server.js";
import { MonitoringExtension } from "./monitoring/monitor.js";
import { AzureActiveDirectoryExtension } from './azure-active-directory/azure-active-directory.js';

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
	VirtualMachineExtension
];
export
{
	_azure_links as AzureLinks,
	_fave_links as FaveLinks
}