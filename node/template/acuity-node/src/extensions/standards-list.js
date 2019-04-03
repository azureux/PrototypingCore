// main nav list
"use strict";

import { CreateNewExtension } from "./azure-marketplace/create-new-ext.js.js";
import { DashboardExtension } from "./azure-dashboard/dashboard-ext.js";
import { HomePageExtension } from "./azure-home/home-ext.js.js";
import { AllServicesExtension } from "./all-services/";

export const StandardExtensionsList = [
	CreateNewExtension,
	HomePageExtension,
	DashboardExtension,
	AllServicesExtension
];
