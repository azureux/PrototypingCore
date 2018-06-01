// All configuration is handled in standard OOP style at the component level.
// This file is meant as an "override" for a specific controls and/or feature sets.
const OverrideConfig =
	{
		Dashboard: {
			Title: "My Dashboard"
		},
		RootLinks: [
			{ RootLink: { InnerText: "Sean Gephardt" } },
			{ RootLink: { InnerText: "Robert Taft" } },
			{ RootLink: { InnerText: "Jaqueline Gaherity" } },
			{ RootLink: { InnerText: "Joe Hallock" } },
			{ RootLink: { InnerText: "Kavitha Perla" } },
		],
		"SearchLink.InnerText": "Guitars",
		"UserSwitchList": ["Sean", "Robert", "Jacqueline", "Kavitha", "Casey", "Joe", "Jonah"],
		"VerticalNavigation": ["Menu", "New", "All Resources", "Your Resources", "Virtual Machines", "Databases"],
	};