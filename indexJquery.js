$(document).ready(function(){
	$('.slideUl li').eq(0).show();
	$('.nextBtn').bind('click',function(){
		$('.slideUl li').hide();
		$('.slideUl li').eq(1).show();
	});
});