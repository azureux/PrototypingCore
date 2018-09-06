11:48 AM 9/6/2018
C+AI Cloud Design Studio - Prototyping team tools notes

"Project Acuity"

/standalone/ - basic playground for "Project Acuity"
/standalone/es6-template/ - investigation into using standard ES6 javascript, without ReactJS
/standalone/jsx-template/ - investigation into using ReactJs, with Babel JSX syntax
/standalone/template/ - investigation into using ReactJs, without Babel JSX syntax


/tools/ - folder containing node.js executable scripts. Descriptitions detailed below

/tools/svg-builder/
	>> Prior to running svg-assets-build.js script in node: navigate to /tools/svg-folder/ in the console and npm install fs, console, and chalk.
	>> https://github.com/azureux/PrototypingCore/tree/master/tools/svg-builder

	A. svg-assets-build.js 
		i. Line 5 declares filepath where SVG files are being initially consumed (img_folder) 
		ii. Line 6 declares filepath where resulting JSON file is being created (final_svg_file)
		iii. Navigate to \PrototypingCore\tools\svg-builder in console and enter "node svg-assets-build.js"
		iv. SVGs should successfuly parse into JSON file at the specified at line 6. 
	B. /tools/svg-folder/node-modules/ --  your npm install created node dependencies for svg-assets-build.js : npm fs, npm console, npm chalk.
		i. run "npm update" to get the latest versions of these libraries

	>>To run svg-assets-build.js (PC)
	A. "cd.." + enter to navigate backwards 
	B. "..PrototypingCore\tools\svg-builder" + enter
	C. "node svg-assets-build.js" + enter or "run-svg-assets-build.bat"
	D. File should run and complete assets-build.js in ../../standalone/template/js/svg-assets.js

	Run this script everytime you add an svg to the original img_folder



