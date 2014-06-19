$(function() {
	    $('#footerBox')
	        .each(function(i){
	            $(this).css('background', 'url(maru2.svg) no-repeat');
	        })
	        .find('img').hover(
	            function(){ 
	                $(this).stop().animate({'opacity' : '0'}, 500); 
	            },
	            function(){
	                $(this).stop().animate({'opacity' : '1'}, 1000);
	            }
	        );
	    }
	);