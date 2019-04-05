// TBD
const OverrideConfig =
{
	Debug: false,
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