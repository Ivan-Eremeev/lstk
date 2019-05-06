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
    speed: 500, // Скорость перехода слайдов
    autoplay: false, // Автопрокрутка
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
    sliderInitPortfolioMobile($('.slider-portfolio'));
    sliderInitExperts($('.slider-experts'));
    sliderInitModalCatalog($('.slider-modal-catalog'));
    sliderInitModalPortfolio($('.slider-modal-portfolio'));
  }
  else if (window.matchMedia("(max-width: 1440px)").matches) {
    $('.slick-initialized').slick('unslick');
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