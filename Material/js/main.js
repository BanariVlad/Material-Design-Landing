//Burger Menu
$(document).ready(function(){
    $('.sidenav').sidenav();
});

//Slider
$(document).ready(function(){
    $('.slider').slider();
});

$(document).ready(function(){
    $('.carousel').carousel();
})

$(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Borderlands": null,
        "Halo": null,
        "Warframe": null,
        "Trove": null,
        "Rocket League": null,
        "Terra": null,
        "Lost Ark": null,
        "Counter-Strike Global-Offensive": null,
      },
    });
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
});