var images = [
  "../Homepage&Research_page/Images/Image_slider_images/choices_and_deals_printer.jpg",
  "Images\\printers\\HS.png",
  "../Homepage&Research_page/Images/Image_slider_images/Epson_printer_offers.png",
  "../Homepage&Research_page/Images/Image_slider_images/Pantum_offers.png",
  "Images\\printers\\X.jpg",
];

var x = 0;
var imgs = document.getElementById("img");
setInterval(slider, 3000);

function slider() {
  if (x >= 0 && x < images.length) {
    imgs.innerHTML = "<img src=" + images[x] + ">";
    x = x + 1;
  } else {
    x = 0;
  }
}
