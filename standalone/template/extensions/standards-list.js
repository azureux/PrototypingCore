// main nav list
"use strict";

import { AllServicesExtension } from "./std-all-services/all-services-ext.js";
import { CreateNewExtension } from "./std-create-new/create-new-ext.js";
import { DashboardExtension } from "./std-dashboard/dashboard-ext.js";
import { HomePageExtension } from "./std-home/home-ext.js";

export const StandardExtensionsList = [
	CreateNewExtension,
	DashboardExtension,
	HomePageExtension,
	AllServicesExtension
];
