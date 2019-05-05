/*!
 *
 * Ivan Eremeev - 2019
 * Skype: ivan.eremeev_1
 * Telegram: https://t.me/IvanMessage
 * Email: ivan.frontcoder@gmail.com
 *
 */

$(document).ready(function () {

	// libs-settings/fancybox_settings.js
	// libs-settings/mmenu_settings.js
	// @prepros-prepend libs-settings/slick_settings.js
	// libs-settings/wow_js_settings.js
	// libs-settings/fullpage_settings.js

	// Брэйкпоинты js
	var	mediaXl = 1400,
			mediaLg = 1200,
			mediaMd = 1024,
			mediaSm = 768,
			mediaXs = 576;
			

	// Отмена перехода по ссылкам
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Мобильное меню
	$('.menu_btn').click(function () {
		var header = $(this).closest('#header'),
				menu = header.next('#menu'),
				btn = $(this);
		menu.toggleClass('open');
		btn.toggleClass('is-active');
		menu.find('a').click(function() {
			menu.removeClass('open');
			btn.removeClass('is-active');
		});
	});
	
	// Блок с высотой окна браузера
	// function screenHeight() {
	//     $('.full__height').css({
	//         minHeight: $(window).height() + 'px'
	//     });
	// };
	// screenHeight();

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
	// $('#menu a[href^="#"]').click( function(){ 
	// 	var scroll_el = $(this).attr('href'); 
	// 	if ($(scroll_el).length != 0) {
	// 		$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	// 		$(this).addClass('active');
	// 	}
	// 	return false;
	// });

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
	// var HeaderTop = $('#header').offset().top;
	// $(window).scroll(function(){
	// 	if( $(window).scrollTop() > HeaderTop ) {
	// 		$('#header').addClass('stiky');
	// 	} else {
	// 		$('#header').removeClass('stiky');
	// 	}
	// });

	// Inputmask.js // Маска для поля ввода телефона
	// $('[name=tel]').inputmask("+9(999)999 99 99",{ showMaskOnHover: false });

	// Изменяет размер шрифта у тэга html взависимости от размера экрана (для резиновых страниц)(размеры должны быть в rem)
	// function fontResize() {
	// 	var windowWidth = $(window).width();
	// 		if (windowWidth >= mediaSm) {
	// 			var fontSize = windowWidth/19.05;
	// 		} else if (windowWidth < mediaSm) {
	// 			// Без резины на мобилке
	// 			var fontSize = 60;
	// 			// С резиной на мобилке
	// 			var fontSize = windowWidth/4.8;
	// 	}
	// 	$('html').css('fontSize', fontSize + '%');
	// }

	// Табы
	$('.tabs_trigger').find('li').click(function() {
		var trigger = $(this),
				allTrigger = trigger.siblings(),
				content = trigger.parent().parent().siblings('.tabs_content').find('.tabs_block'),
				index = trigger.index();
		allTrigger.removeClass('active');
		trigger.addClass('active');
		content.addClass('hide');
		content.eq(index).removeClass('hide');
		$('.slider-catalog.slick-initialized').slick('unslick');
		if (window.matchMedia("(max-width: 769px)").matches) {
			sliderInitCatalog($('#slider-catalog-' + index));
		}
	});

	// Табы в блоке "Технология"
	$('.technologies_item-b').click(function() {
		var $this = $(this),
				tabs = $this.closest('.technologies_block'),
				items = tabs.find('.technologies_item-b'),
				description = tabs.find('.technologies_description-b'),
				img = tabs.find('.technologies_img'),
				index = $this.index();
		items.removeClass('active');
		img.addClass('hide');
		description.addClass('hide');
		items.eq(index).addClass('active');
		img.eq(index).removeClass('hide');
		description.eq(index).removeClass('hide');
	});

	// Аккордеон
	// $('.accordeon_trigger').click(function() {
	// 	var trigger = $(this),
	// 			allTrigger = trigger.parent().parent().find('.accordeon_trigger'),
	// 			content = trigger.siblings('.accordeon_content'),
	// 			allContent = trigger.parent().parent().find('.accordeon_content'),
	// 			time = 300;
	// 	if (!content.hasClass('open')) {
	// 		allContent.stop().removeClass('open');
	// 		content.stop().addClass('open');
	// 		allTrigger.removeClass('active');
	// 		trigger.addClass('active');
	// 	}
	// 	else {
	// 		content.stop().removeClass('open');
	// 		trigger.removeClass('active');
	// 	}
	// });

	// Модальное окно
	$('.modal-trigger').on('click', function() {
		var data = $(this).data('modal'),
				modalOver = $('.modal_over'),
				modal = $('#modal-' + data);
		modal.toggleClass('open')
		.next('.modal_over').toggleClass('open');
		$('.modal_close').on('click', function() {
			modal.removeClass('open'),
			modalOver.removeClass('open');
		});
		modalOver.on('click', function() {
			modal.removeClass('open');
			modalOver.removeClass('open');
		});
	});

	// Стилизация полосы прокрутки
	// $('#scrollbar1').tinyscrollbar({
	// 	axis: "y", // Направление оси
	// 	// trackSize: 100, // Высота дорожки
	// 	thumbSize: 50, // Высота тамба
	// 	// thumbSizeMin: 100, // Минимальная высота тамба
	// 	wheel: true, // Отключить прокрутку
	// 	wheelSpeed: 10, // Прокручивать пикселей
	// });

	// $('#scrollbar2').tinyscrollbar({
	// 	axis: "y", // Направление оси
	// 	// trackSize: 100, // Высота дорожки
	// 	thumbSize: 50, // Высота тамба
	// 	// thumbSizeMin: 100, // Минимальная высота тамба
	// 	wheel: true, // Отключить прокрутку
	// 	wheelSpeed: 10, // Прокручивать пикселей
	// });

	// matchHeight // Задание елементам одинаковой высоты
	$('.matchHeight').matchHeight();

	// Autosize Изменение высоты текстового поля при добавлении контента
	// autosize($('textarea'));

	// Текст печатная машинка
	// function textPrint() {
	// 	var textPrint = $('#text-print'),
	// 		a = textPrint.text(),
	// 		j = 0,
	// 		c = a.length,
	// 		time = 50;
	// 	textPrint.text('');
	// 	setInterval(function () {
	// 		if (j<c) {
	// 			textPrint.text(textPrint.text() + a[j]);
	// 			j++;
	// 		}
	// 	},time);
	// };
	// textPrint();

	// Анимация увеличения числа
	// var blockStatus = true;
	// function countNumber () {
	// 	var target_block = $(".count-number");
	// 	var scrollEvent = ($(window).scrollTop() > (target_block.position().top - 400));
	// 	if(scrollEvent && blockStatus) {		
	// 		blockStatus = false;
	// 		$({numberValue: 0}).animate({numberValue: 2580}, {
	// 			duration: 5000,
	// 			easing: "swing",	
	// 			step: function(val) {
	// 				$(".count-number").html(Math.ceil(val));
	// 			}	
	// 		});
	// 	}
	// };
	// countNumber();

	// Tooltipster Всплывающая подсказка
	// var tooltip = $('.tooltip').tooltipster({
	// 	theme : 'tooltipster-noir', // Тема
	// 	delayTouch: 0, // Задержка при наведении
 //   	trigger: 'click', // Появление при наведении, клике
 //   	maxWidth: 200, // Максимальная ширина
 //   	contentAsHTML: true, // HTML контент
 //   	interactive: true,
 //   	side:  ['right', 'top', 'bottom', 'left'], // Появление по сторонам по порядку
 //   	zIndex: 97, // z-index
	// });

	// // Отключение подсказки на мобильных
	// function tooltipDisable() {
	// 	if (window.matchMedia('(max-width: 720px)').matches) {
	// 		tooltip.tooltipster('disable');
	// 	}
	// 	else if (window.matchMedia('(min-width: 721px)').matches) {
	// 		tooltip.tooltipster('enable');
	// 	}
	// };

	// tooltipDisable();

	// Делает активным пункт меню при скролле до блока
	// function menuItemActive() {
	// 	var lastId,
 //    topMenu = $("#menu_list"),
 //    topMenuHeight = topMenu.outerHeight(),
 //    menuItems = topMenu.find("a"),
 //    scrollItems = menuItems.map(function(){
 //      var item = $($(this).attr("href"));
 //      if (item.length) { return item; }
 //    });
	// 	menuItems.click(function(e){
	// 	  var href = $(this).attr("href"),
	// 	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	// 	  $('html, body').stop().animate({ 
	// 	      scrollTop: offsetTop
	// 	  }, 300);
	// 	  e.preventDefault();
	// 	});
	// 	$(window).scroll(function(){
	// 	  var fromTop = $(this).scrollTop()+topMenuHeight;
	// 	  var cur = scrollItems.map(function(){
	// 	    if ($(this).offset().top < fromTop)
	// 	      return this;
	// 	  });
	// 	  cur = cur[cur.length-1];
	// 	  var id = cur && cur.length ? cur[0].id : "";
	// 	  if (lastId !== id) {
	// 	      lastId = id;
	// 	      menuItems
	// 	        .parent().removeClass("active")
	// 	        .end().filter("[href='#"+id+"']").parent().addClass("active");
	// 	  }                   
	// 	});
	// };
	// menuItemActive();

	// Изменение textarea при получении фокуса
	// $('textarea')
	// .focus(function() { 
	// 	$(this).addClass('class_name');
	// })
	// .blur(function() { 
	// 	if ($(this)[0].value == '') { 
	// 		$(this).removeClass('class_name');
	// 	} 
	// });

	// Изменение поля ввода при клике
	// $('.block_input').click(function() {
	// 	var div = $(this);
	// 	div.addClass('active'),
	// 	input = div.find('input');
	// 	$(document).mouseup(function (e){
	// 		if (!div.is(e.target)
	// 		    && div.has(e.target).length === 0 && input.val() == '') {
	// 			div.removeClass('active');
	// 		}
	// 	});
	// });

	// Управление видео
	// var playing = false;
	// $('.video').click(function() {
	// 	var video = $(this).find('video'),
	// 			img = $(this).find('img');
	// 	img.css({
	// 		display: 'none'});
	// 	if (playing == false) {
	// 		video.trigger('play');
	// 		playing = true;
	// 	}
	// 	else {
	// 		video.trigger('pause');
	// 		playing = false;
	// 	}
	// });

	// Карта
	ymaps.ready(init);
	function init(){ 
		// Создание карты.    
		var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
			center: [45.062315641174486,38.97716786473461], // Краснодар
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 18,
		controls: ['typeSelector']
		}),
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #000; font-size: 14px; background: #fff; width: 120px; border-radius: 5px">$[properties.iconContent]<span style="display: block; color: #FF7E7D; font-size: 12px;">Закрыто до 09:00</span></div>'
    ),

    myPlacemark = new ymaps.Placemark([45.0624895745882,38.97903199999998], {
        iconContent: 'Связьстрой-2'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'img/point-map.jpg',
        // Размеры метки.
        iconImageSize: [45, 60],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -70],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [50, 10],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
    myMap.geoObjects
	    .add(myPlacemark);
	};

	// Слежение за изменением размера окна браузера
	var heightResized = false;
	$(window).resize(function() {
		var windowWidth = $(window).width();
		if (heightResized == windowWidth) {
			return;
		}
		heightResized = windowWidth;
		// fontResize(); // Резиновый сайт
		// screenHeight(); // Блок с высотой окна браузера
		// tooltipDisable(); // Отключение всплывающей подсказки
		// countNumber(); // Анимация увеличения числа
		sliderReinstall() //Реинициализация слайдеров
	});
	
});