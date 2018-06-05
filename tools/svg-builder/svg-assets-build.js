const filesystem = require( 'fs' );
const Console = require( 'console' );
const chalk = require('chalk');

const svg_folder = "../../assets/svg";
const final_svg_file = "../../standalone/template/js/svg-assets.js";

//const img_folder = "../src/css/img";
//const final_img_file = "../src/azux-images.js";

const _getAllFilesFromFolder = function ( dir )
{
	var results = [];

	filesystem.readdirSync( dir ).forEach( function ( file )
	{
		file = dir + '/' + file;
		var stat = filesystem.statSync( file );

		if ( stat && stat.isDirectory() )
		{
			results = results.concat( _getAllFilesFromFolder( file ) )
		}
		else
		{
			// Console.debug( "file", file );
			if ( file.indexOf( ".svg" ) !== -1 )
			{
				results.push( file );
			}
		} 
	} );
	return results;
};

const  _process_namespaces = function( ns, folder, data )
{	//	Console.log( "BEGIN:_process_namespaces::",ns, data.length );
	const namespaces = [];
	namespaces.push( ns );

	data.forEach((val,idx,arr) =>
	{
		//	Console.log( idx, val );
		var _path = val.replace( folder, "" );
		//	Console.log( idx, val, "_path::", _path );

		var _paths = _path.split( "/" );
		//	Console.log(idx, "_paths::", _paths);
		
		var _temp_scope = [];
		_paths.forEach( function ( val2, idx2, arr2 )
		{
			//	Console.log( idx2, arr2.length, val2 );
			if ( idx2 > 0 && idx2 < arr2.length -1 )
			{
				_temp_scope.push(val2);	
			}
			return;
		} );
		//	Console.log( idx, "_temp_scope::", _temp_scope, "_temp_scope.length", _temp_scope.length );

		var _scope = "";

		if ( _temp_scope.length > 0 )
		{
			_scope = ns + "." + _temp_scope.join( "." );
		}
		else
		{
			_scope = ns;
		}
		//	Console.log( idx, "_scope::", _scope );

		//	Console.log( idx, "namespaces:before", namespaces );
		if ( namespaces.indexOf( _scope ) == -1 )
		{
			namespaces.push( _scope);
		}
		namespaces.sort();
		//	Console.log( idx, "namespaces:after", namespaces );
		return;
	} );
	//	Console.log( "END:_process_namespaces::namespaces::", namespaces );
	return namespaces;
};

const _writeToFile = function ( inputFolder, outputFile, ns, data )
{
	Console.log( "begin:_writeToFile::", inputFolder, outputFile, ns );

	var _new_data = [];

	// FIGURE OUT THE NAMESPACE ISSUE
	const _nspaces = _process_namespaces( ns, inputFolder, data );
	//	Console.log( "CHECK:_writeToFile::_process_namespaces::_nspaces::", _nspaces );

	_nspaces.forEach( function ( value, index, array )
	{
		var _entry = "";	//"var " + value + " = {};\n";

		if ( index == 0 )
		{
			_entry = "const " + value + " = {};\n";
		}
		else
		{
			_entry = value + " = {};\n";
		}

		//	Console.log( "final entry", index, value, _entry );
		_new_data.push(_entry);
		return;
	} );

	// process all the files
	data.forEach( function ( v, i, a )
	{	//
		//	console.log( chalk.cyan("______"));
		//	console.log( i, "v::", v );
		var new_uri = encodeURI( v ); 

		var svg_file = filesystem.readFileSync( new_uri, 'utf8' );
		//	console.log( "svg_file", svg_file );

		var _re = new RegExp( /[\n]{1,}|[\r]{1,}|[\t]{1,}|[\s]{2,}|<!--[\s\S]{1,}-->|<\?xml[\s\S]{31}\?>|<!DOCTYPE[\s\S]{88}>/, "igm" );
		var _temp = svg_file.replace( _re, '' );
		//	console.log( "_new_svg", v , _temp );

		var _path = v.replace( inputFolder, "" );
		//	Console.log(i,  "_path::", _path );

		var _paths = _path.split( "/" );
		//	Console.log(i, "_paths::", _paths);

		var _end_ext = _paths[_paths.length-1].lastIndexOf( "." );	//	Console.log(i, "_end_ext", _end_ext );
		var _name = _paths[_paths.length-1].substr( 0, _end_ext );
		//	Console.log(i, "_name", _name );

		var _temp_scope = [ns];
		_paths.forEach( function ( val, idx, arr )
		{
			//	Console.log( idx, arr.length, val );
			if ( idx > 0 && idx < arr.length -1 )
			{
				_temp_scope.push(val);	
			}
			return;
		} );
		//	Console.log( i, "_temp_scope::", _temp_scope );
		var _scope = _temp_scope.join( "." );
		//	Console.log( i, "_scope::", _scope );

		var _new_scope = _scope + "." + _name.replace(/[\W+.]/gi,"_");
		var _new_entry = _new_scope + " = { \'Name\':\'" +  _name + "\', \'SVG\':\'" +  _temp +"\'};\n";
		//	Console.log( i, "_new_entry::", _new_entry );

		_new_data.push( _new_entry );
		return;
	} );
	//	Console.log( "_new_data", _new_data.length, _new_data );

	var stream = filesystem.createWriteStream( outputFile,
		{
			flags: 'w',
			defaultEncoding: 'utf8',
			fd: null,
			mode: 0o666,
			autoClose: true
		} );

	stream.once( 'open', function ( fd )
	{
		_new_data.forEach( function ( v, i, a )
		{
			stream.write( v );
		} );
		stream.write( "export default " + ns + ";" );
		//	stream.close();
		stream.end();
	} );

	Console.log( "end:_writeToFile::", outputFile );
	return;
};

// format & write the json file for SVG icons
function Write_Json_File(inputFolder, outputFile, namespace)
{
	Console.log( "begin:Write_Json_File", inputFolder, outputFile, namespace );
	var _list = _getAllFilesFromFolder( inputFolder );
	_writeToFile( inputFolder, outputFile,  namespace, _list );
	Console.log( "end:Write_Json_File" );
	return;
};

Console.log( "BEGIN:assets-build.js" );
Write_Json_File( svg_folder, final_svg_file, "SVG" );
//Write_Json_File( img_folder, final_img_file, "Images" );
Console.log( "END:assets-build.js" );