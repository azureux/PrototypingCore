12:55 PM 6/05/2018
Project "Acuity"/"Defpotec"
/tools/ - folder containing node.js executable scripts. Descriptitions detailed below


/tools/svg-folder/
	>> Prior to running svg-assets-build.js script in node: navigate to /tools/svg-folder/ in the console and npm install fs, console, and chalk.
	A. svg-assets-build.js 
		i. Line 5 declares filepath where SVG files are being initially consumed (img_folder) 
		ii. Line 6 declares filepath where resulting JSON file is being created (final_svg_file)
		iii. Navigate to \PrototypingCore\tools\svg-builder in console and enter "node svg-assets-build.js"
		iv. SVGs should successfuly parse into JSON file at the specified at line 6. 
	B. /tools/svg-folder/node-modules/ --  your npm install created node dependencies for svg-assets-build.js : npm fs, npm console, npm chalk.




