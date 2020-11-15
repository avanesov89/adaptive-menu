jQuery(document).ready(function($){
    
    // MENU OPEN
    
	//Открыть меню по клику на триггер
	$('.menu-trigger').on('click', function(event){
		event.preventDefault();
		toggleMenu(true);
	});
	//Закрыть меню
	$('.close-trigger, .body-overlay').on('click', function(event){
		event.preventDefault();
		toggleMenu(false);
	});
	//Добавить или убрать класс
	function toggleMenu(bool) {
        $('body, .body-overlay, .a-menu').toggleClass('menu-open', bool);
    };
    
    // SUBMENU
    
	$('.menu__item-drop').on('click', function(){
		if( $('.menu__item-drop').hasClass('open') ) {
                $('.menu__item-drop, .sub-menu').removeClass('open');
            } else {
                $('.menu__item-drop, .sub-menu').addClass('open');
            };
    });


    $('.show-right').on('click', function(event){
		$('.side-left').addClass('shifted');
        $('.side-right').removeClass('shifted');
	});
	
	$('.show-left').on('click', function(event){
		$('.side-right').addClass('shifted');
        $('.side-left').removeClass('shifted');
	});


});