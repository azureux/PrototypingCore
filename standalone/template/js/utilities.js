﻿//	basic static "Utilities" object
//	contains methods for:
//	injecting CSS
//	react method for injecting SVG

"use strict";
import { SVG as AzSvgs } from "../../../js/svg-assets.js";
import { CacheItem as cache_item } from "../components/app-state-cache/cache-item.js";

const _SampleDataResources = {
	ResourceNames:
	{
		title: "Name",
		filterColumnKey: "ResourceNames",
		infoText: "Select from a list of resource names",
		isRemovable: true,
		hasMore: false,
		hasSelectAll: true,
		hasSearch: true,
		data: [
			"Freezing Frog",
			"All Your Base",
			"Alpha Caterpillar",
			"Boring Crow",
			"Dancing Butterfly",
			"Crouching Panda",
			"Happy Kitten",
			"Dusty Dog",
			"Zuper Zebra",
			"Jazzy Jolopy",
			"Ghoti The Band",
			"Holiday Trout",
			"King Crocodile",
			"Beta Dogma",
			"Flying Frisbee",
			"Munching Manatee",
			"Screaming Demon",
		]
	},
	Subscriptions: {
		title: "Subscriptions",
		filterColumnKey: "Subscription",
		type: "subscriptions-type",
		infoText: "Select from a list of subscriptions",
        isRemovable: true,
		hasMore: true,
		hasSelectAll: true,
        hasSearch: true,
		data: [
			"Contoso",
			"Fabrikam",
			"Web Portal (dev)",
			"Web Portal (pre)",
			"Web Portal (prod)",
			"Mobile Portal (dev)",
			"Mobile Portal (prod)",
			"IoT Portal (dev)",
			"IoT Portal (prod)",
			"Finance (prod)",
			"Procurement",
			"Human Resources (dev)",
			"Human Resources (prod)",
			"Marketing & Sales (dev)",
			"Marketing & Sales (pre)",
			"Marketing & Sales (prod)",
			"IT public subscription (dev)",
			"IT public subscription (prod)",
			"IT internal subscription",
			"Design Studio (dev)",
			"Design Studio (pre)",
			"Design Studio (prod)",
		],
	},
	DataLocations: {
		title: "Locations",
		filterColumnKey: "ResourceLocation",
        isRemovable: true,
		hasMore: true,
		hasSelectAll: true,
		data: [
			"US West 1",
			"US West 2",
			"US West 3",
			"US West 4",
			"US West 5",
			"US East 1",
			"US East 2",
			"US East 3",
			"US East 4",
			"US East 5",
			"US Central 1",
			"US Central 2",
			"US Central 3",
			"US Central 4",
			"US Central 5",
			"Europe 1",
			"Europe 2",
			"Europe 3",
			"Europe 4",
			"Europe 5",
			"Africa 1",
			"Africa 2",
			"Africa 3",
			"Africa 4",
			"Africa 5",
			"China 1",
			"China 2",
			"China 3",
			"China 4",
			"China 5",
		],
	},
	ResourceGroups: {
		title: "Resource Groups",
		filterColumnKey: "ResourceGroup",
		infoText: "Select from a list of resource groups",
        isRemovable: true,
		hasMore: true,
		hasSelectAll: true,
		data: [
			"Web Team APIs",
			"Marketing DB",
			"IT Helpdesk",
			"Procurement Portal",
			"Engineering Portal",
			"Sales Leads - mobile",
			"Sales Leads - web",
			"Public Site",
			"Public mobile app",
			"iOS mobile app",
			"Windows mobile app",
			"XBOX cloud app",
			"XBOX client app",
			"XBOX mobile app",
			"XBOX web app",
			"PS4 server app",
			"PS4 client app",
		],
	},
	ResourceTypes: {
		title: "Resource type",
		filterColumnKey: "ResourceType",
		infoText: "Select from a list of resource types",
        isRemovable: true,
		hasMore: true,
		hasSelectAll: true,
		data: [
			"Access reviews",
			"Alerts",
			"API connections",
            "App Service",
			"App Services Certificates",
			"App Service plans",
            "Application Insights",
			"Application gateways",
			"Azure Cosmos DB",
			"Azure Information Protection",
			"App Service Domains",
			"Advisor",
			"App registrations",
			"App Service environments",
			"AppDynamics",
            "Automation account",
            "Azure Active Directory",
			"Azure Databricks",
			"Batch account",
			"Bot services",
			"Bing APIs",
			"CDN profiles",
			"Containers",
			"Container registrations",
			"Cognitive Services",
			"Cost management + billing",
			"DevOps projects",
			"Devices",
			"Devices configuration",
			"Devices enrollment",
			"DNS zones",
			"Disks",
			"Disks (classic)",
			"eBooks",
			"Entreprise applications",
			"Event Hubs",
			"Event Hubs Clusters",
			"Firewalls",
			"Free services",
			"Function Apps",
			"Groups",
			"Help + Support",
			"Images",
			"InTune",
			"InTune roles",
			"IoT Hub",
			"Key vaults",
			"Lab accounts",
			"Local network gateways",
			"Logic Apps",
			"Machine Learning Services",
			"Management groups",
			"Mesa applications",
			"Marketplace",
			"Metrics",
			"Mobile apps",
			"Media services",
			"Microsoft InTune",
			"Monitor",
			"Network Interfaces",
			"Network Watcher",
			"Network security groups",
			"Network security groups (classic)",
			"On-premise access",
			"OS Images",
			"Policy",
			"Power BI",	
			"Public IP addresses",
			"Relays",
			"Reservations",
			"Resource groups",
			"Route tables",
			"Route filters",
			"Reserved IP addresses",
			"Search services",
			"Security Center",
			"Service Fabric",
			"Service Health",
			"Software as a Service (SaaS)",
			"Software updates",
			"SQL Server",
            "SQL database",
			"Storage accounts",
			"Subscriptions",
			"Tags",
			"Team projects",
			"Troubleshoot",
			"User privacy",
			"Users",
			"Virtual Machines",
			"Virtual Machines scale sets",
			"Virtual Machines (classic)",
			"Virtual Networks",
			"Virtual Networks (classic)",
			"Virtual Networks gateways",
			"Virtual Networks images",
		],
	},
	TagsList: {
		title: "Tags Filter",
		filterColumnKey: "TagsListFilter",
		infoText: "Select from a list of tags",
        isRemovable: false,
		hasMore: true,
		hasSelectAll: true,
		hasDataHeaders: true,
        hasSearch: false,
		data: [
			{ name: "Environment", tagName: "env", list: [ "prod", "test", "preview","internal", "external","external-1234-erfvg-345-fgb-56-hgfghj-456-456-3-3453435"] },
			{ name: "Cost center", tagName: "cc", list: ["1","2","3","4","5","99","1000","1337"] },
			{ name: "Phase", tagName: "phase", list: ["One", "Two","Three","Four","GA","Private preview", "Public preview"] },
			{ name: "Department", tagName: "dept", list: ["r&d", "engineering","sales", "marketing", "support","hr","legal","facilities","brick&mortar"] },
			{ name: "Created", tagName: "created", list: ["1/1/2019","April 2018" ,"2015","2016","2017","2018","2019"] },
			{ name: "AppName", tagName: "ap-name", list: ["Contoso", "Fabrikam", "Pirate-Portal", "Windy City Wheels", "TopTree Travel", "MoMoney", "GuitarPlanet1"] },
			{ name: "Location", tagName: "loc", list: ["west1","west2","west3","east1","east2", "east3","europe1","europe2","Central US", "South Africa", "South America"] },
			{ name: "Created by", tagName: "createdBy", list: ["jsmith", "april@reagan.com", "allyourbase", "connief", "smithers", "Johnny Appleseed"] },
			{ name: "Version", tagName: "version", list: ["1.0.0","1.0.1","1.0.3","1.1.0","1.1.2","1.1.5","1.1.7","1.1.8","1.1.9","1.2.0","1.2.6","1.2.7","1.5.1","2.0.0","2.0.2",] },
		],
	},
	/* resourece specific filters */ 
	OSTypes: {
		title: "OS Type",
		filterColumnKey: "OperatingSystem",
		infoText: "Select from a list of operating systems",
		isRemovable: true,
		hasSelectAll: true,
		data: [
			"Windows",
			"Linux"
		],
	},
	Environments: {
		title: "Environments",
		filterColumnKey: "Environment",
		infoText: "Select from a list of environments",
		isRemovable: true,
		hasSelectAll: true,
		data: [
			"Azure",
			"Non-Azure"
		],
    },
	AvailSets: {
		title: "Availability set",
		filterColumnKey: "AvailabilitySet",
        isRemovable: true,
        hasMore: true,
		infoText: "Select from a list of Availability sets",
		data: [
			"Fxci3-argsz-avst-1",
			"Fxci7-argsz-avst-2",
			"Fxci9-argsz-avst-3",
			"Fxci1-argsz-avst-4",
			"Fxci0-argsz-avst-5",
			"Fxci0-argsz-avst-6",
			"Fxci9-argsz-avst-7",
			"Fxci1-argsz-avst-8",
			"Fxci0-argsz-avst-9",
			"Fxci0-argsz-avst-10",
		],
    },
	IPAddresses: {
		title: "IP Address",
		filterColumnKey: "IP_Address",
        isRemovable: true,
        hasMore: true,
        hasSearch: true,
		infoText: "Select from a list of IP addresses",
        data: [""],
    },
    VirtualNetworks:
    {
		title: "Virtual network",
		filterColumnKey: "VirtualNetwork",
        isRemovable: true,
        hasMore: true,
		infoText: "Select from a list of Virtual networks",
        data: [
            "FxCI3Jenkins-vnet",
			"Horseman1-vnet",
			"Horseman2-vnet",
            "Horseman3-vnet",
            "SalesMarCom1-vnet",
			"SalesMarCom2-vnet",
            "SalesMarCom3-vnet",
			"IT-Web-1-vnet",
            "IT-Web-2-vnet",
            "IT-Web-3-vnet",
        ],
    },
    Disks:
    {
		title: "Disks",
		filterColumnKey: "Disk",
        isRemovable: true,
        hasMore: true,
		infoText: "Select from a list of disks",
        data: [
            "1",
            "2",
            "3",
            "4",
        ],
    },
    Status:
    {
		title: "Status",
		filterColumnKey: "Status",
        isRemovable: true,
        hasMore: true,
		infoText: "Select statuses",
        data: [
            "Running",
            "Stopped"
        ],
    },
    AppType:
    {
		title: "App Type",
		filterColumnKey: "AppType",
        isRemovable: true,
        hasMore: true,
		infoText: "Select app types",
        data: [
            "Web app",
            "App service environment",
            "Funcation app",
            "Logic app",
        ],
    },
    AppServicePlan:
    {
		title: "App service plan",
		filterColumnKey: "AppServicePlan",
        isRemovable: true,
        hasMore: true,
		infoText: "Select plans",
        data: [
            "West_US_Free",
            "DefaultServerFarm",
            "Ibiza reflector plan",
            "PortalFX analytics",
        ],
    },
    PricingTiers:
    {
		title: "Pricing tiers",
		filterColumnKey: "PricingTier",
        isRemovable: true,
        hasMore: true,
		infoText: "Select pricing tiers",
        data: [
            "Free",
            "Standard",
            "Premium",
        ],
	},
    /* functionality related */
	SearchPill:
	{
		title: "Search",
		infoText: "Find by name",
		IsSearchPill: true,
		isAddPill: false,
		isRemovable: false,
		hasMore: false,
		hasSelectAll: false,
		hasSearch: false,
		data:[]
	},
	AddButton: {
		title: "Add a refinement",
		infoText: "Select from a list of other filters",
		IsSearchPill: false,
		isAddPill: true,
		isRemovable: false,
		hasMore: false,
		hasSelectAll: false,
		hasSearch: false,
		data: [],
	},
	Grouping:
	{
		title: "Grouping",
        isRemovable: false,
		hasMore: true,
		hasSelectAll: false,
        hasSearch: false,
		infoText: "Select a grouping criteria",
		data: [
			"No Grouping",
			"Group by subscription",
			"Group by location",
			"Group by resource group",
			"Group by resource type",
		],
	},
};

	// sort enum
const _SortTypes = {
	DEFAULT: { text: "default", arrow: "&varr;" },
	ASC: { text: "asc", arrow: "&uarr;" },
	DESC: { text: "desc", arrow: "&darr;" }
};


class _Utilities 
{
	constructor()
	{

	};

	static NewId( strValue )
	{
		let _rv = "";
		let _id_name = "";
		if ( strValue !== undefined )
		{
			_id_name = strValue + "-";
		}
		else
		{
			_id_name = "id-";
		}
		_rv = _id_name + Math.random().toPrecision( 7 ).replace( ".", "" );
		//	console.debug( "Utilities.NewId()._rv", _rv );
		return _rv;
	};
	static NewBlockID()
	{
		let _block = [];

		for ( let i = 0; i < 5; i++ )
		{
			_block[i] = Math.random().toFixed( 7 ).toString().split( "." )[1];
		}

		const _returnValue = Object.freeze( _block.join( "-" ).toString() );

		//	console.debug( "_returnValue", _returnValue );
		return _returnValue;
	};
	static NewKey()
	{	// react.js specific for putting new react elements into arrays prior to referencing in react.render()
		const _rv = "key-" + Math.random().toPrecision( 7 ).replace( ".", "" );
		//	console.debug( "Utilities.NewKey()._rv", _rv );
		return _rv;
	};
	static ReverseString ( strValue )
	{
		let _new;
		let _temp = [];

		if ( Array.isArray(strValue) == true )
		{
			strValue = strValue.join();
		}

		for ( let i = 0; i < strValue.length; i++ )
		{	//	console.debug( i, strValue.length, strValue.charAt( i ) );
			let _last = strValue.charAt( (strValue.length-1) - i );
			//	console.debug( i, _last );
			_temp.push( _last );
		}	//	console.debug( "_temp", _temp );
		_new = _temp.join('');
		return _new;
	};
	static InjectControlCss( id, filePath )
	{	//	console.debug( "Utilities.InjectControlCss", id, filePath );
		let _found = false;
		let _css = document.createElement( "link" );
		_css.id = id;
		_css.rel = "stylesheet";
		_css.href = filePath;

		document.head.childNodes.forEach( function ( v, i, a )
		{
			if ( v.tagName !== undefined )
			{
				if ( v.tagName.toLowerCase() == "link" )
				{
					if ( v.id == id || v.href == filePath )
					{	//	console.debug( i, v.tagName, v.id, v.href );
						_found = true;
					}
				}
			}
			return;
		} );

		//	console.debug( "_found", _found );
		// this insertation location is based on the order of the <head> element in the default.html file.
		if ( _found !== true ) document.head.insertBefore( _css, document.head.childNodes[4] );
		return;
	};
	static CreateSvgMarkup( svgIcon )
	{	//	console.debug( "CreateSvgMarkup", svgIcon );
		return { __html: svgIcon };
	};

	/* data generator methods */
	static SortArrays( dataArray, sortKey, sortDirection )
	{	console.debug( "UNDER CONSTRUCTION:: Utilities.SortArrays" );
		dataArray.sort( function ( a, b )
		{
			if ( a[sortKey] == b[sortKey])
			{
				return 0;
			}
			else if ( a[sortKey] > b[sortKey] )
			{
				return 1;
			}
			else if ( a[sortKey] < b[sortKey] )
			{
				return -1;
			}
		} );
		return;
	};
	static GetData(intSize)
	{
		console.debug( "Utility.GetData()", _SampleDataResources );
		let _return = [];

		return;
	};
	static GetData_SearchSamples(intSize)
	{	//	console.debug( "Utility.GetData_SearchSamples()", _SampleDataResources );
		let _return = [];

		//	console.debug( "intSize ", intSize );
		if ( intSize == undefined || intSize == 0 || intSize == null )
		{
			intSize = 100;
		}
		//	console.debug("intSize ", intSize );

		for ( let i = 0; i < intSize; i++ )
		{
			// get name
			let _name_index = Math.round( Math.random() * _SampleDataResources.ResourceNames.data.length );
			//	console.debug( "_name_index", _name_index, _SampleDataResources.ResourceNames.data.length);

			if ( _name_index >= _SampleDataResources.ResourceNames.data.length )
			{
				_name_index = 0;
			}

			let _name = _SampleDataResources.ResourceNames.data[_name_index] + " " + Math.random().toString().split( '.' )[1].substr(0,3);
			//	console.debug( "_name", _name );

			// fill in object
			let _new_data = {
				subscription: "PBA-Transportation-portal",
				resourceGroup: "PBA INTL",
				location: "Europe 1",
				icon: AzSvgs.Color.AppService_color,
				name: _name,
				type: "App Service",
				status: "running"
			};

			_return.push(_new_data);
		}

		//	console.debug("_return", _return.length, _return);
		_return.sort( function ( a, b )
		{
			if ( a.name == b.name )
			{
				return 0;
			}
			else if ( a.name > b.name )
			{
				return 1;
			}
			else if ( a.name < b.name )
			{
				return -1;
			}
		} );

		//	console.debug( "_return", JSON.stringify( _return ) );

		return _return; 
	};

	// app state cache testing
	static AppCacheDebug()
	{
		//	console.debug( "AppCacheDebug()" );
		let _return_array = [];
		for ( let i = 0; i < 10; i++ )
		{
			let _new_item = new cache_item();

			_new_item.Name = "Foo test chace item # " + i;
			_new_item.Sender = { name: "foo", data: []  };
			_new_item.Target = { name: "foo2"};
			_new_item.Callback = new Event( "click", ( function () { console.debug( "clicked", i ); return; } ) );

			_return_array.push( _new_item );
		}

		//	console.debug( "ApplicationStateCache::Debug()", _return_array );

		return _return_array;
	};
	static TestCache()
	{	//	console.debug( "TestCache()" );
		// temp cache fill
		window.AcuityCache.Items = this.AppCacheDebug();

		// singleton, typed
		let _new_item = new cache_item();
		_new_item.Name = "Foo test chace item # 1000";
		_new_item.Sender = { name: "foo", data: []  };
		_new_item.Target = { name: "foo2"};
		_new_item.Callback = new Event( "click", ( function () { console.debug( "clicked", this.Name ); return; } ) );

		window.AcuityCache.Add( _new_item );

		// array, typed
		let _temp = [];
		for ( let i = 0; i < 5; i++ )
		{
			let _new_item = new cache_item();

			_new_item.Name = "Foo test chace item # " + i;
			_new_item.Sender = { name: "foo", data: []  };
			_new_item.Target = { name: "foo2"};
			_new_item.Callback = new Event( "click", ( function () { console.debug( "clicked", i ); return; } ) );

			_temp.push( _new_item );
		}
		window.AcuityCache.Add( _temp );

		// uncomment to debug
		// singleton, non-typed
		//let _random_object = {};
		//_random_object.Name = "Foo test chace item # 1000";
		//_random_object.Sender = { name: "foo", data: []  };

		//window.AcuityCache.Add( _random_object );

		//// array, non-typed
		//let _temp_2 = [];
		//for ( let i = 0; i < 7; i++ )
		//{
		//	let _random_object = {};
		//	_random_object.Name = "Foo test chace item # 1000";
		//	_random_object.Sender = { name: "foo", data: []  };

		//	_temp_2.push( _random_object );
		//}
		//window.AcuityCache.Add( _temp_2 );

		//	window.AcuityCache.ClearAllItems();
		return;
	};
}

//	export _Utilities
export
{
	_SampleDataResources as DataEnums,
	_SortTypes as SortTypes,
	_Utilities as Utilities
};