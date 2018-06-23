const Utilities = {
	NewId: function( strValue )
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
		_rv = _id_name + Math.random().toPrecision( 4 ).replace( ".", "" );
		//	console.debug( "Utilities.NewId()._rv", _rv );
		return _rv;
	},
	NewKey: function()
	{	// react.js specific for putting new react elements into arrays prior to referencing in react.render()
		const _rv = "key-" + Math.random().toPrecision( 4 ).replace( ".", "" );
		//	console.debug( "Utilities.NewKey()._rv", _rv );
		return _rv;
	},
	ReverseString: function ( strValue )
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
	},
	InjectControlCss: function ( id, filePath )
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
	},
	CreateSvgMarkup: function( svgIcon )
	{
		return { __html: svgIcon };
	}
};