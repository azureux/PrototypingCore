// All configuration is handled in standard OOP style at the component level.
// This file is meant as an "override" for application theming, specific controls (and features) and/or feature sets.
const OverrideConfig =
{
	Application:
	{
		Theme: "default-theme", // "dark-theme" || "default-theme" 
	},
	TopNavigationBar:
	{
		Title: "Microsoft Azure",
		Controls: [
			"Banner",
			"ICMWorkspaceDropDown"
		]
	},
	VerticalNavigationBar:
	{
		Title: "Microsoft Azure 3.0",
		IsCollapsed: true,
		StaticItems: [
			"Create",
			"home",
			"Dashboard",
			"All resource"
		],
		Items: [
			"resource Groups"
		]
	},
	Dashboard:
	{
		Title: "My Azure Dashboard"
	},
	ContextPanel:
	{
		Title: "My Azure ContextPanel"
	},
	ExtensionsList:
		[

		]
};
export default OverrideConfig;