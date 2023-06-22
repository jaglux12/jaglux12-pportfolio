document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' ,{arrows: false, speed: 1000,pagination:true, paginationDirection:'ttb',
    easing: 'cubic-bezier(0.25, 1, 0, 1)'} );
    splide.mount();
    } );


var bMenu = document.getElementById("bMenu")
var pMenu = document.getElementById("pMenu")

bMenu.addEventListener("click", function(){
    pMenu.classList.toggle("hidden")
})

