// TOP LEVEL EXTENSIONS LIST
import { CreateNewExtension } from './azure-marketplace/create-new-ext.js';
import { DashboardExtension } from './azure-dashboard/dashboard-ext.js';
import { HomePageExtension } from './azure-home/home-ext.js';
import { AllServicesExtension } from './all-services/all-services-ext.js';

const _links = [
	CreateNewExtension,
	HomePageExtension,
	DashboardExtension,
	AllServicesExtension
]

export
{
	_links as AzureStandardLinks
};
