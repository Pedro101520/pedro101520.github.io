let docTitle = document.title;
window.addEventListener("blur", () =>{
	document.title = "Volte Aqui😥";
})
window.addEventListener("focus", () =>{
	document.title = docTitle;
})

$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});