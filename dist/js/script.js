function sliderInitFirst(i,e){i.slick({slidesToShow:1,slidesToScroll:1,fade:!0,dots:!0,dotsClass:"first-screen_dots",arrows:!1,speed:500,autoplay:!1,autoplaySpeed:2e3,adaptiveHeight:!0})}function sliderInitFirstMob(i){i.slick({slidesToShow:1,slidesToScroll:1,fade:!0,dots:!1,dotsClass:"first-screen_dots",arrows:!1,speed:500,autoplay:!1,autoplaySpeed:2e3,terPadding:"0px",adaptiveHeight:!0})}function sliderInitCatalog(i){i.slick({slidesToShow:1,slidesToScroll:1,dots:!1,dotsClass:"first-screen_dots",arrows:!1,speed:500,autoplay:!1,autoplaySpeed:2e3,adaptiveHeight:!0}),$(".catalog_controll--prev").click(function(){i.slick("slickPrev")}),$(".catalog_controll--next").click(function(){i.slick("slickNext")})}function sliderInitPortfolio(i){i.slick({slidesToShow:3,slidesToScroll:1,dots:!1,arrows:!1,speed:500,autoplay:!1,autoplaySpeed:2e3,adaptiveHeight:!1,infinite:!0,centerMode:!0,centerPadding:"300px"}),$(".slider-portfolio_controll--prev").click(function(){i.slick("slickPrev")}),$(".slider-portfolio_controll--next").click(function(){i.slick("slickNext")})}function sliderInitPortfolioSmallDesctop(i){i.slick({slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,speed:500,autoplay:!1,autoplaySpeed:2e3,adaptiveHeight:!1,infinite:!0,centerMode:!0,centerPadding:"300px"}),$(".slider-portfolio_controll--prev").click(function(){i.slick("slickPrev")}),$(".slider-portfolio_controll--next").click(function(){i.slick("slickNext")})}function sliderInitPortfolioMobile(i){i.slick({slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,speed:500,autoplay:!1,autoplaySpeed:2e3,adaptiveHeight:!1,infinite:!0,centerMode:!1}),$(".slider-portfolio_controll--prev").click(function(){i.slick("slickPrev")}),$(".slider-portfolio_controll--next").click(function(){i.slick("slickNext")})}function sliderInitExperts(i){i.slick({slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,speed:500,autoplay:!1,autoplaySpeed:2e3,adaptiveHeight:!1,infinite:!0,centerMode:!1}),$(".slider-experts_controll--prev").click(function(){i.slick("slickPrev")}),$(".slider-experts_controll--next").click(function(){i.slick("slickNext")})}function sliderInitModalCatalog(i){i.slick({slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,speed:500,autoplay:!1,autoplaySpeed:2e3,adaptiveHeight:!1,infinite:!0}),$(".slider-modal-catalog_controll--prev").click(function(){i.slick("slickPrev")}),$(".slider-modal-catalog_controll--next").click(function(){i.slick("slickNext")})}function sliderReinstall(){window.matchMedia("(max-width: 769px)").matches?($(".slick-initialized").slick("unslick"),sliderInitFirstMob($(".slider-first")),sliderInitCatalog($(".slider-catalog")),sliderInitPortfolioMobile($(".slider-portfolio")),sliderInitExperts($(".slider-experts"))):window.matchMedia("(max-width: 1050px)").matches?($(".slick-initialized").slick("unslick"),sliderInitPortfolioMobile($(".slider-portfolio")),sliderInitExperts($(".slider-experts"))):window.matchMedia("(max-width: 1440px)").matches?($(".slick-initialized").slick("unslick"),sliderInitPortfolioSmallDesctop($(".slider-portfolio"))):($(".slick-initialized").slick("unslick"),sliderInitFirst($(".slider-first")),sliderInitPortfolio($(".slider-portfolio"))),sliderInitModalCatalog($(".slider-modal-catalog"))}sliderReinstall(),$(document).ready(function(){$('a[href="#"]').click(function(i){i.preventDefault()}),$(".menu_btn").click(function(){var i=$(this).closest("#header").next("#menu"),e=$(this);i.toggleClass("open"),e.toggleClass("is-active"),i.find("a").click(function(){i.removeClass("open"),e.removeClass("is-active")})}),$(".tabs_trigger").find("li").click(function(){var i=$(this),e=i.siblings(),o=i.parent().parent().siblings(".tabs_content").find(".tabs_block"),l=i.index();e.removeClass("active"),i.addClass("active"),o.addClass("hide"),o.eq(l).removeClass("hide"),$(".slider-catalog.slick-initialized").slick("unslick"),window.matchMedia("(max-width: 769px)").matches&&sliderInitCatalog($("#slider-catalog-"+l))}),$(".technologies_item-b").click(function(){var i=$(this),e=i.closest(".technologies_block"),o=e.find(".technologies_item-b"),l=e.find(".technologies_description-b"),t=e.find(".technologies_img"),s=i.index();o.removeClass("active"),t.addClass("hide"),l.addClass("hide"),o.eq(s).addClass("active"),t.eq(s).removeClass("hide"),l.eq(s).removeClass("hide")}),$(".modal-trigger").on("click",function(){var i=$(this).data("modal"),e=$(".modal_over"),o=$("#modal-"+i);o.toggleClass("open").next(".modal_over").toggleClass("open"),$(".modal_close").on("click",function(){o.removeClass("open"),e.removeClass("open")}),e.on("click",function(){o.removeClass("open"),e.removeClass("open")})}),$(".matchHeight").matchHeight(),ymaps.ready(function(){var i=new ymaps.Map("map",{center:[45.062315641174486,38.97716786473461],zoom:18,controls:["typeSelector"]}),e=ymaps.templateLayoutFactory.createClass('<div style="color: #000; font-size: 14px; background: #fff; width: 120px; border-radius: 5px">$[properties.iconContent]<span style="display: block; color: #FF7E7D; font-size: 12px;">Закрыто до 09:00</span></div>'),o=new ymaps.Placemark([45.0624895745882,38.97903199999998],{iconContent:"Связьстрой-2"},{iconLayout:"default#imageWithContent",iconImageHref:"img/point-map.jpg",iconImageSize:[45,60],iconImageOffset:[-25,-70],iconContentOffset:[50,10],iconContentLayout:e});i.geoObjects.add(o)});var e=!1;$(window).resize(function(){var i=$(window).width();e!=i&&(e=i,sliderReinstall())})});
//# sourceMappingURL=script.js.map