$(document).ready(function(){

	$(".intro").each( function(index, item){
		$(item).removeClass("intro");
	});

	bodyclasses();

	$.fx.interval = 1000/60;

});

function bodyclasses(){
	if ($(window).scrollTop() + $(window).height() > $(".fold:nth-child(2)").offset().top){
		$("body").addClass("pastrut");
	}else{
		$("body").removeClass("pastrut");
	}
}

$(window).scroll(bodyclasses);
bodyclasses();

$("a").click(function(evt){
	if(this.pathname == window.location.pathname){
		evt.preventDefault();
		if( this.hash != ""){
			x = this.hash;
			$('html, body').animate({
				scrollTop: $(x).offset().top
			}, 500, "swing", function(){
				window.location.hash = (x =="#rut")? "" : x;
			});
		}
	}
})
