// String concatenater

function S() {
	return Array.prototype.join.call( arguments, '' );
}

// Logging functions

if( 0 ) {

(function() {
	
	var log = [], first, last;
	
	time = function( msg, since ) {
		var now = +new Date;
		var ms = now - ( since || last );
		log.push( ( ms / 1000 ).toFixed(3) + ': ' + msg + '<br />' );
		return last = +new Date;
	}
	
	time.done = function( sel ) {
		time( 'total', first );
		$(sel).html( log.join('') );
	};
	
	first = last = +new Date;
})();

}
else {

(function() {
	
	var log, index, first, last;
	
	function add( msg, value ) {
		var i = index[msg];
		if( i == null ) {
			i = log.length;
			index[msg] = i;
			log[i] = { msg:msg, value:0 };
		}
		log[i].value += value;
	}
	
	time = function( msg, since ) {
		var now = +new Date;
		add( msg, now - ( since || last ) );
		return last = +new Date;
	}
	
	time.clear = function() {
		log = [];
		index = {};
		first = last = +new Date;
	};
	
	time.done = function( sel ) {
		time( 'total', first );
		$(sel).html(
			$.map( log, function( item ) {
				return(
					( item.value / 1000 ).toFixed(3) + ': ' +
					item.msg + '<br />'
				);
			}).join('')
		);
	};
	
	time.clear();
})();

}

// Write numerous elements to the document, to simulate
// DOM performance in larger documents.

function bigdoc() {
	document.write( '<div class="do-not-open-in-firebug!" style="display:none;">' );
	for( var i = 0;  i < 1000;  ++i ) {
		document.write(
			'<div>Test DIV</div>',
			'<span>Test SPAN</span>'
		);
	}
	document.write( '</div>' );
}

