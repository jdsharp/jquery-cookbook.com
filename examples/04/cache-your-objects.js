// cache-your-objects.js

var jq = location.hash == '#126' ?
	{ ver:'1.2.6', other:'1.3.2', hash:'#132' } :
	{ ver:'1.3.2', other:'1.2.6', hash:'#126' };

document.title += jq.ver;

document.write(
	'<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/', jq.ver, '/jquery.js">',
	'<\/script>'
);

function main() {
	
	jQuery(function() {
		
		function trail( event ) {
			var x = event.clientX, y = event.clientY;
			if( x == trail.last.x  &&  y == trail.last.y ) return;
			trail.last = { x: x, y: y };
			trail.queue.push({
				$mark: $('<div class="mark">&nbsp;</div>')
					.css({ left: x - 2, top: y - 2 })
					.appendTo('body'),
				time: +new Date
			});
		}
		trail.keeptime = 1000;
		trail.queue = [];
		trail.last = {};
		
		setInterval( function() {
			while(
				trail.queue[0]  &&
				trail.queue[0].time + trail.keeptime < +new Date
			) {
				trail.queue.shift().$mark.remove();
			}
		}, 25 );
		
		var count = 0;
		
		$('#switch').click( function() {
			setTimeout( function() { location.reload(); }, 1 );
		});
		
		function tf( value ) { return value ? 'true' : 'false'; }
		
		function tagInfo( event ) {
			var target = event.target;
			return S(
				target.tagName.toLowerCase(),
				target.id ? '#' + target.id : '',
				target.className ? '.' + target.className : ''
			);
		}
		
		var technique =
			$('#methods input:radio')
				.click( function() { technique = this.value; })
				.filter(':checked').val();
		
		var $count = $('#count');
		var $timeStamp = $('#timeStamp');
		var $target = $('#target');
		var $clientX = $('#clientX');
		var $clientY = $('#clientY');
		var $pageX = $('#pageX');
		var $pageY = $('#pageY');
		var $screenX = $('#screenX');
		var $screenY = $('#screenY');
		
		$('html').mousemove( function( event ) {
			
			++count;
			var start = +new Date;
			
			switch( technique ) {
				
				case 'class':
					$('.count').html( count );
					$('.timeStamp').html( event.timeStamp );
					$('.target').html( tagInfo(event) );
					$('.clientX').html( event.clientX );
					$('.clientY').html( event.clientY );
					$('.pageX').html( event.pageX );
					$('.pageY').html( event.pageY );
					$('.screenX').html( event.screenX );
					$('.screenY').html( event.screenY );
					break;
				
				case 'scoped':
					$('#log td.count').html( count );
					$('#log td.timeStamp').html( event.timeStamp );
					$('#log td.target').html( tagInfo(event) );
					$('#log td.clientX').html( event.clientX );
					$('#log td.clientY').html( event.clientY );
					$('#log td.pageX').html( event.pageX );
					$('#log td.pageY').html( event.pageY );
					$('#log td.screenX').html( event.screenX );
					$('#log td.screenY').html( event.screenY );
					break;
				
				case 'id':
					$('#count').html( count );
					$('#timeStamp').html( event.timeStamp );
					$('#target').html( tagInfo(event) );
					$('#clientX').html( event.clientX );
					$('#clientY').html( event.clientY );
					$('#pageX').html( event.pageX );
					$('#pageY').html( event.pageY );
					$('#screenX').html( event.screenX );
					$('#screenY').html( event.screenY );
					break;
				
				case 'cache':
					$count.html( count );
					$timeStamp.html( event.timeStamp );
					$target.html( tagInfo(event) );
					$clientX.html( event.clientX );
					$clientY.html( event.clientY );
					$pageX.html( event.pageX );
					$pageY.html( event.pageY );
					$screenX.html( event.screenX );
					$screenY.html( event.screenY );
					break;
			}
			
			var now = +new Date;
			
			$('#time').html( ( ( now - start ) / 1000 ).toFixed(3) );
			
			trail( event );
		});
		
	});

}

function writeSelect() {
	document.write(
		'<div style="margin-bottom:6px; font-weight:bold;">',
			'Using jQuery ', jq.ver,
		'</div>',
		'<div>',
			'<a id="switch" href="', jq.hash, '">Switch to jQuery ', jq.other, '</a>',
		'</div>'
	);
}
