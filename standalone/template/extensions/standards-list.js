"use strict";

import { AllServicesExtension } from "./all-services/all-services-ext.js";
import { CreateNewExtension } from "./create/create-new-ext.js";
import { DashboardExtension } from "./dashboard/dashboard-ext.js";
import { HomePageExtension } from "./home/home-ext.js";

export const StandardExtensionsList = [
	CreateNewExtension,
	DashboardExtension,
	HomePageExtension,
	AllServicesExtension
];
