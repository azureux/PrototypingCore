//	a way to export extensions into a larger object, works best for collections of objects

import { AllServicesExtension } from "./all-services/all-services-ext.js";
import { CreateNewExtension } from "./create/create-new-ext.js";
import { DashboardExtension } from "./dashboard/dashboard-ext.js";
import { HomePageExtension } from "./home/home-ext.js";
import { VirtualMachineExtension } from "./virtual-machine/vm-ext.js";


export const AllExtensionsList = [
	AllServicesExtension,
	CreateNewExtension,
	DashboardExtension,
	HomePageExtension,
	VirtualMachineExtension
];