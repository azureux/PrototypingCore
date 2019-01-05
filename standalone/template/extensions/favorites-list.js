//	a way to export extensions into a larger object, works best for collections of objects

import { AllServicesExtension } from "./all-services/all-services-ext.js";
import { CreateNewExtension } from "./create/create-new-ext.js";
import { DashboardExtension } from "./dashboard/dashboard-ext.js";
import { HomePageExtension } from "./home/home-ext.js";

export
{
	AllServicesExtension as AllServicesExt,
	CreateNewExtension as CreateNewExt,
	DashboardExtension as DashboardExt,
	HomePageExtension as HomeExt
};