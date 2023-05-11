const circle = document.querySelector(".circle");
const berkelas = document.getElementById("berkelas");
const shopNow = document.querySelector(".textBox a");
const footer = document.querySelector(".footer-boxes");
let addCart = [...document.getElementsByClassName("btn-add-cart")];
// ganti warna start
console.log(addCart);

function imgSlider(anything) {
  document.querySelector(".handphone").src = anything;
}
function changeCircleColor(color) {
  addCart.forEach((e) => (e.style.background = color));

  circle.style.background = color;
  shopNow.style.background = color;
  berkelas.style.color = color;
  footer.style.background = color;
}

// ganti warna end
