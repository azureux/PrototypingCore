// just favorites navigation list
// baseline, this array can be changed within the "Application" scope

"use strict";
// all browse style extensions
import { AllAppServicesExtension } from "./all-app-services/all-app-services.js";
import { AllResourceGroupsExtension } from "./all-resource-groups/all-resource-groups.js";
import { AllResourcesExtension } from "./all-resources/all-resources.js";
import { AllSqlDbsExtension } from "./all-sql-dbs/all-sql-dbs.js";
import { AllVmsExtension } from "./all-virtual-machines/all-virtual-machines.js";

// all one-off extensions
import { VirtualMachineExtension } from "./virtual-machine/vm-ext.js";
import { SqlServerExtension } from "./sql-server/sql-server.js";
import { MonitoringExtension } from "./monitor/monitor.js";
import { AzureActiveDirectoryExtension } from './azure-active-directory/azure-active-directory.js';

export const FavoritesExtensionsList = [
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
