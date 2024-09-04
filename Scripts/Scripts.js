$(".open_search_lg").click(function () {
  $(".box_search").toggleClass("active");
});

$(".menu_product a").click(function () {
  $(".menu_product a").removeClass("active");
  $(this).addClass("active");
});
$(window).resize(function () {
  if ($(window).width() <= 1400) {
    $(".btn_dat").text("Đặt lịch");
    $(".long_text").text("Văn hóa");
  } else {
    $(".btn_dat").text("Đặt lịch tư vấn");
    $(".long_text").text("Văn Hóa GreeneXperts");
  }
});
$("#item-banner").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dot: true,
  autoplay: true,
  autoplaySpeed: 3000,
});
$("#card_green_list").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dot: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
});
$("#menu_bo").slick({
  infinite: true,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
});
$(".list_sevice_card").slick({
  centerMode: true,
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerPadding: 0,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
});
$(".list_feedback").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
});
$(window).scroll(function () {
  var e = $(window).scrollTop();
  if (e > 300) {
    $(".back_to_top").show();
  } else {
    $(".back_to_top").hide();
  }
});
$(".updown").click(function () {
  $(this).closest(".quest_title").siblings(".quest").slideToggle("slow");
  $(this).find(".arrow").toggleClass("up");
});

var originalAnswer = $(".answer").html();
$(".quest li").click(function () {
  $(".quest li").removeClass("active");
  $(this).addClass("active");
  if ($(this).index() === 0) {
    $(".answer").html(originalAnswer);
  } else {
    $(".answer").html(
      "Cách diệt gián tại nhà<br>Cách diệt gián tại nhà<br>Cách diệt gián tại nhà<br>Cách diệt gián tại nhà<br>Cách diệt gián tại nhà<br>Cách diệt gián tại nhà<br>Cách diệt gián tại nhà<br>Cách diệt gián tại nhà<br>Cách diệt gián tại nhà<br>Cách diệt gián tại nhà<br>Cách diệt gián tại nhà<br>Cách diệt gián tại nhà<br>Cách diệt gián tại nhà<br>Cách diệt gián tại nhà<br>Cách diệt gián tại nhà "
    );
  }
});
$(".hamburger").click(function () {
  $(this).toggleClass("active");
  $(".menu_mb").toggleClass("active");
  $(".overlay").toggleClass("active");
});
$(".show_menu").click(function () {
  $(".overlay").toggleClass("active");
  $(".menu_mb").toggleClass("active");
});
$(".overlay").click(function () {
  $(this).removeClass("active");
  $(".menu_mb").removeClass("active");
  $(".hamburger").removeClass("active");
});
$(".show_search").click(function () {
  $(".box_search").toggleClass("active");
});
$(".label_cat").click(function () {
  $(this)
    .closest(".radio_group")
    .find(".label_cat")
    .find(".radio_cus")
    .removeClass("active");
  $(this).find(".radio_cus").addClass("active");
});

// JS ranger

/*
 * RANGE SLIDER
 * adapted from: https://medium.com/@predragdavidovic10/native-dual-range-slider-html-css-javascript-91e778134816
 */

document.addEventListener("DOMContentLoaded", () => {
  const COLOR_TRACK = "#CBD5E1";
  const COLOR_RANGE = "#608127";

  // Get the sliders and tooltips
  const fromSlider = document.querySelector("#fromSlider");
  const toSlider = document.querySelector("#toSlider");
  const fromTooltip = document.querySelector("#fromSliderTooltip");
  const toTooltip = document.querySelector("#toSliderTooltip");
  const scale = document.getElementById("scale");

  // Get min and max values from the fromSlider element
  const MIN = parseInt(fromSlider.getAttribute("min")); // scale will start from min value (first range slider)
  const MAX = parseInt(fromSlider.getAttribute("max")); // scale will end at max value (first range slider)
  const STEPS = parseInt(scale.dataset.steps); // update the data-steps attribute value to change the scale points

  function controlFromSlider(fromSlider, toSlider, fromTooltip, toTooltip) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
    if (from > to) {
      fromSlider.value = to;
    }
    setTooltip(fromSlider, fromTooltip);
  }

  function controlToSlider(fromSlider, toSlider, fromTooltip, toTooltip) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
    } else {
      toSlider.value = from;
    }
    setTooltip(toSlider, toTooltip);
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
        to right,
        ${sliderColor} 0%,
        ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
        ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
        ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
        ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
        ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector("#toSlider");
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  function setTooltip(slider, tooltip) {
    const value = slider.value;
    tooltip.textContent = `${value}` + " triệu";
    const thumbPosition = (value - slider.min) / (slider.max - slider.min);
    const percent = thumbPosition * 100;
    const markerWidth = 20; // Width of the marker in pixels
    const offset = (((percent - 50) / 50) * markerWidth) / 2;
    tooltip.style.left = `calc(${percent}% - ${offset}px)`;
  }

  // events
  fromSlider.oninput = () =>
    controlFromSlider(fromSlider, toSlider, fromTooltip, toTooltip);
  toSlider.oninput = () =>
    controlToSlider(fromSlider, toSlider, fromTooltip, toTooltip);

  // Initial load
  fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
  setToggleAccessible(toSlider);
  setTooltip(fromSlider, fromTooltip);
  setTooltip(toSlider, toTooltip);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////

$(".updown_rad").click(function () {
  $(this).closest(".radio_title").siblings(".radio_group").slideToggle("slow");
  $(this).find(".arrow").toggleClass("up");
});
Fancybox.bind("[data-fancybox]", {});

$(".slider_max").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider_min",
});
$(".slider_min").slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".slider_max",
  focusOnSelect: true,
});
var originalContent = $(".info_pro_text").html();
$(".menu_info_product li").click(function () {
  $(".menu_info_product li").removeClass("active");
  $(this).toggleClass("active");
  if ($(this).index() === 0) {
    $(".info_pro_text").html(originalContent);
  } else {
    $(".info_pro_text").html("Trang thông tin sản phẩm số: " + $(this).index());
  }
});

$(".orther_product").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 3000,
});
