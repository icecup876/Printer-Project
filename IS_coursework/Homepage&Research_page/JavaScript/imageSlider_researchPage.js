var images = [
  "../Homepage&Research_page/Research_page_images/apple_reference_home.png",
  "../Homepage&Research_page/Research_page_images/Canon_reference_home.png",
  "../Homepage&Research_page/Research_page_images/HP_reference_home.png",
  "../Homepage&Research_page/Research_page_images/walmart_reference_home.png",
];

var x = 0;
var imgs = document.getElementById("img");
setInterval(slider, 2500);

function slider() {
  if (x >= 0 && x < images.length) {
    imgs.innerHTML = "<img src=" + images[x] + ">";
    x = x + 1;
  } else {
    x = 0;
  }
}
