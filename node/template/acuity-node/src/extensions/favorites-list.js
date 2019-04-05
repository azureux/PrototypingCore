// FAVORITES NAVIGATION LIST
// BASIC INHERITED EXTENSIONS
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
 const _links = [
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
	_links as FavoritesLinks
};