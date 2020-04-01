// Jade
// .slider-nav
// 	div
// 	div
// 	div
// .slider-for
// 	div
// 	div
// 	div

function sliderInitFirst(slider,sliderFor) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    // asNavFor: '.slider-for', // Связь со слайдерами
    fade: true, // Анимация затухания
    dots: true, // Пагинация
    dotsClass: 'first-screen_dots', // Контейнер пагинации
    arrows: false, // Стрелки
    speed: 1000, // Скорость перехода слайдов
    autoplay: true, // Автопрокрутка
    pauseOnHover: false,
    autoplaySpeed: 2000, // Скорость автопрокрутки
    // centerMode: false, // Задает класс .slick-center слайду в центре
    // focusOnSelect: true, // Выбрать слайд кликом
    // infinite: true, // Зацикленное пролистывание
    // vertical: false, // Вертикальный слайдер
    // rtl: false, // Слайды листаются справа налево
    // centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
    // variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
    // responsive: [ // Адаптация
    //   {
    //   breakpoint: 769,
    //     settings: {
    //       dots: false
    //     }
    //   }
    // ]
    // lazyLoad: 'ondemand', // Отложенная загрузка изображений. В тэг надо добавлять атрибут <img data-lazy="img/image.png"/>
  });
  
  // sliderFor.slick({
  //   slidesToShow: 1, // Сколько слайдов показывать на экране
  //   slidesToScroll: 1, // Сколько слайдов пролистывать за раз
  //   dots: false, // Пагинация
  //   arrows: false, // Стрелки
  //   fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
  //   asNavFor: '.slider-nav' // Связь со слайдерами
  // });

  // Кастомные кнопки "вперед" "назад"
  // $('.sliderButton_prev').click(function() {
  //   slider.slick('slickPrev');
  // });
  // $('.sliderButton_next').click(function() {
  //   slider.slick('slickNext');
  // });

  slider.find('.first-screen_dots button').each(function() {
    var text = $(this).text();
    $(this).text('0' + text);
  });
};

function sliderInitFirstMob(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    // asNavFor: '.slider-for', // Связь со слайдерами
    fade: true, // Анимация затухания
    dots: false, // Пагинация
    dotsClass: 'first-screen_dots', // Контейнер пагинации
    arrows: false, // Стрелки
    speed: 500, // Скорость перехода слайдов
    autoplay: false, // Автопрокрутка
    autoplaySpeed: 2000, // Скорость автопрокрутки
    terPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
  });
};

function sliderInitCatalog(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    dotsClass: 'first-screen_dots', // Контейнер пагинации
    arrows: false, // Стрелки
    speed: 500, // Скорость перехода слайдов
    autoplay: false, // Автопрокрутка
    autoplaySpeed: 2000, // Скорость автопрокрутки
    adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
  });

  // Кастомные кнопки "вперед" "назад"
  $('.catalog_controll--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.catalog_controll--next').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitPortfolio(slider) {
  slider.slick({
    slidesToShow: 3, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    speed: 500, // Скорость перехода слайдов
    autoplay: false, // Автопрокрутка
    autoplaySpeed: 2000, // Скорость автопрокрутки
    adaptiveHeight: false, // Подгоняет высоту слайдера под элемент слайда
    infinite: true, // Зацикленное пролистывание
    centerMode: true, // Задает класс .slick-center слайду в центре
    centerPadding: '300px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
  });

  // Кастомные кнопки "вперед" "назад"
  $('.slider-portfolio_controll--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-portfolio_controll--next').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitPortfolioSmallDesctop(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    speed: 500, // Скорость перехода слайдов
    autoplay: false, // Автопрокрутка
    autoplaySpeed: 2000, // Скорость автопрокрутки
    adaptiveHeight: false, // Подгоняет высоту слайдера под элемент слайда
    infinite: true, // Зацикленное пролистывание
    centerMode: true, // Задает класс .slick-center слайду в центре
    centerPadding: '300px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
  });

  // Кастомные кнопки "вперед" "назад"
  $('.slider-portfolio_controll--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-portfolio_controll--next').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitPortfolioTablet(slider) {
  slider.slick({
    slidesToShow: 2, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    speed: 500, // Скорость перехода слайдов
    autoplay: false, // Автопрокрутка
    autoplaySpeed: 2000, // Скорость автопрокрутки
    adaptiveHeight: false, // Подгоняет высоту слайдера под элемент слайда
    infinite: true, // Зацикленное пролистывание
    // centerMode: true, // Задает класс .slick-center слайду в центре
    // centerPadding: '300px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
  });

  // Кастомные кнопки "вперед" "назад"
  $('.slider-portfolio_controll--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-portfolio_controll--next').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitPortfolioMobile(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    speed: 500, // Скорость перехода слайдов
    autoplay: false, // Автопрокрутка
    autoplaySpeed: 2000, // Скорость автопрокрутки
    adaptiveHeight: false, // Подгоняет высоту слайдера под элемент слайда
    infinite: true, // Зацикленное пролистывание
    centerMode: false, // Задает класс .slick-center слайду в центре
    // centerPadding: '300px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
  });

  // Кастомные кнопки "вперед" "назад"
  $('.slider-portfolio_controll--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-portfolio_controll--next').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitExperts(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    speed: 500, // Скорость перехода слайдов
    autoplay: false, // Автопрокрутка
    autoplaySpeed: 2000, // Скорость автопрокрутки
    adaptiveHeight: false, // Подгоняет высоту слайдера под элемент слайда
    infinite: true, // Зацикленное пролистывание
    centerMode: false, // Задает класс .slick-center слайду в центре
    // centerPadding: '300px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
  });

  // Кастомные кнопки "вперед" "назад"
  $('.slider-experts_controll--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-experts_controll--next').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitModalCatalog(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    speed: 500, // Скорость перехода слайдов
    autoplay: false, // Автопрокрутка
    autoplaySpeed: 2000, // Скорость автопрокрутки
    adaptiveHeight: false, // Подгоняет высоту слайдера под элемент слайда
    infinite: true, // Зацикленное пролистывание
  });

  // Кастомные кнопки "вперед" "назад"
  $('.slider-modal-catalog_controll--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-modal-catalog_controll--next').click(function() {
    slider.slick('slickNext');
  });
};

function sliderInitModalPortfolio(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    speed: 500, // Скорость перехода слайдов
    autoplay: false, // Автопрокрутка
    autoplaySpeed: 2000, // Скорость автопрокрутки
    adaptiveHeight: false, // Подгоняет высоту слайдера под элемент слайда
    infinite: true, // Зацикленное пролистывание
  });

  // Кастомные кнопки "вперед" "назад"
  $('.slider-modal-portfolio_controll--prev').click(function() {
    slider.slick('slickPrev');
  });
  $('.slider-modal-portfolio_controll--next').click(function() {
    slider.slick('slickNext');
  });
};

// Инициализация слайдеров на десктопе и мобилке
function sliderReinstall() {
  if (window.matchMedia("(max-width: 769px)").matches) {
    $('.slick-initialized').slick('unslick');
    sliderInitFirstMob($('.slider-first'));
    sliderInitCatalog($('.slider-catalog'));
    sliderInitPortfolioMobile($('.slider-portfolio'));
    sliderInitExperts($('.slider-experts'));
    sliderInitModalCatalog($('.slider-modal-catalog'));
    sliderInitModalPortfolio($('.slider-modal-portfolio'));
  }
  else if (window.matchMedia("(max-width: 1050px)").matches) {
    $('.slick-initialized').slick('unslick');
    sliderInitFirst($('.slider-first'));
    sliderInitPortfolioTablet($('.slider-portfolio'));
    sliderInitExperts($('.slider-experts'));
    sliderInitModalCatalog($('.slider-modal-catalog'));
    sliderInitModalPortfolio($('.slider-modal-portfolio'));
  }
  else if (window.matchMedia("(max-width: 1440px)").matches) {
    $('.slick-initialized').slick('unslick');
    sliderInitFirst($('.slider-first'));
    sliderInitPortfolioSmallDesctop($('.slider-portfolio'));
    sliderInitModalCatalog($('.slider-modal-catalog'));
    sliderInitModalPortfolio($('.slider-modal-portfolio'));
  }
  else {
    $('.slick-initialized').slick('unslick');
    sliderInitFirst($('.slider-first'));
    sliderInitPortfolio($('.slider-portfolio'));
    sliderInitModalCatalog($('.slider-modal-catalog'));
    sliderInitModalPortfolio($('.slider-modal-portfolio'));
  }
}
sliderReinstall();

// $('.your-slider').slick('unslick'); // Уничтожить слайдер
/*!
 *
 * Ivan Eremeev - 2019
 * Skype: ivan.eremeev_1
 * Telegram: https://t.me/IvanMessage
 * Email: ivan.frontcoder@gmail.com
 *
 */

// Брэйкпоинты js
var	mediaXl = 1400,
		mediaLg = 1200,
		mediaMd = 1024,
		mediaSm = 768,
		mediaXs = 576;

$(document).ready(function () {

	// Подключение файлов
	// При использовании gulp поменять "@prepros-prepend" на "//="
	// libs-settings/fancybox_settings.js
	// libs-settings/mmenu_settings.js
	// @prepros-prepend libs-settings/slick_settings.js
	// libs-settings/wow_js_settings.js
	// libs-settings/fullpage_settings.js
			

	// Отмена перехода по ссылкам
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Мобильное меню
	$('.menu_btn').click(function () {
		var header = $(this).closest('#header'),
				menu = header.next('#menu'),
				btn = $(this),
				html = $('html'),
				documentWidth = parseInt(document.documentElement.clientWidth),
				windowsWidth = parseInt(window.innerWidth),
				scrollbarWidth = windowsWidth - documentWidth;
		html.toggleClass('lock').css('padding-right',scrollbarWidth);
		menu.toggleClass('open');
		btn.toggleClass('is-active');
		menu.find('a').click(function() {
			html.removeClass('lock').css('padding-right',0);
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
	$('#menu a[href^="#"]').click( function(){ 
		var scroll_el = $(this).attr('href'); 
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
			$(this).addClass('active');
		}
		return false;
	});

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

	// Модальное окно
	$('.modal-trigger').on('click', function() {
		var data = $(this).data('modal'),
				modal = $('#' + data),
				modalOver = modal.next($('.modal_over')),
				modalClose = modal.find($('.modal_close')),
				html = $('html'),
				documentWidth = parseInt(document.documentElement.clientWidth),
				windowsWidth = parseInt(window.innerWidth),
				scrollbarWidth = windowsWidth - documentWidth;
		html.addClass('lock').css('padding-right',scrollbarWidth);
		modal.addClass('open');
		modalOver.addClass('open');
		modalClose.on('click', function() {
			html.removeClass('lock').css('padding-right',0);
			modal.removeClass('open');
			modalOver.removeClass('open');
		});
		modalOver.on('click', function() {
			html.removeClass('lock').css('padding-right',0);
			modal.removeClass('open');
			modalOver.removeClass('open');
		});
	});

	// matchHeight // Задание елементам одинаковой высоты
	$('.matchHeight').matchHeight();

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
