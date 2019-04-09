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

//this.Links = {
//	topNavigation: [
//		{ name: "Create a resource", icon: SvgIcon.Icons.CreateNew, key: Utilities.NewKey(), path: "/"},
//		{ name: "Home", icon: SvgIcon.Icons.AzureHome, key: Utilities.NewKey(), path: "/" },
//		{ name: "Dashboard", icon: SvgIcon.Icons.AzureDashboard, key: Utilities.NewKey(), path: "/" },
//		{ name: "All services", icon: SvgIcon.Icons.AllServices, key: Utilities.NewKey(), path: "/" },
//	],
//	resources: [
//		{ name: "App services", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "All resources", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "Function Apps", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "Resource groups", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "SQL databases", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "Virtual Machines", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "Load balancers", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "Storage accounts", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "Virtual networks", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "Azure Active Directory", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "Monitor", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "Advisor", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "Azure Cosmos DB", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "Security Center", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "Cost Management + Billing", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//		{ name: "Help + support", iconName: "svg", key: Utilities.NewKey(), path: "/" },
//	]
//};
