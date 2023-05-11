const circle = document.querySelector(".circle");
const berkelas = document.getElementById("berkelas");
const shopNow = document.querySelector(".textBox a");
const footer = document.querySelector(".footer-boxes");
const navbar = document.getElementById("navbar");
const bag = document.getElementById("cart-bag");
const popDown = document.getElementById("pop-down");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-counter");

let addCart = [...document.getElementsByClassName("btn-add-cart")];

// append nama, harga, stock dari Card

const namaCard = [...document.querySelectorAll(".nama-card")];
const hargaCard = [...document.querySelectorAll(".harga-card")];
const stockCard = [...document.querySelectorAll(".card-stock span")];
const card = [
  { nama: "samsung", harga: 5000000, stock: 20 },
  { nama: "iphone", harga: 7000000, stock: 10 },
  { nama: "xiamai", harga: 3000000, stock: 40 },
  { nama: "bluemie", harga: 4000000, stock: 70 },
  { nama: "appa", harga: 2000000, stock: 30 },
];

const cartDB = [];

for (let i = 0; i < card.length; i++) {
  let { nama, harga, stock } = card[i];
  namaCard[i].innerText = nama;
  hargaCard[i].innerText = harga;
  stockCard[i].innerText = stock;
}

for (let i = 0; i < addCart.length; i++) {
  let nama = addCart[i].parentElement.previousElementSibling.firstElementChild.innerText;
  let harga = addCart[i].parentElement.previousElementSibling.lastElementChild.innerText;
  let stock = addCart[i].previousElementSibling.firstElementChild.innerText;
  // console.log(nama);
  addCart[i].addEventListener("click", function () {
    if (!cartDB[nama]) {
      cartDB[nama] = { harga, stock, qty: 0 };
    }
    cartDB[nama].stock -= 1;
    cartDB[nama].qty++;
    cartDB[nama].total = cartDB[nama].qty * cartDB[nama].harga;
    console.log(cartDB);
  });
}

// ganti warna start

function imgSlider(anything) {
  document.querySelector(".handphone").src = anything;
}
function changeCircleColor(color) {
  addCart.forEach((e) => (e.style.background = color));

  circle.style.background = color;
  shopNow.style.background = color;
  berkelas.style.color = color;
  footer.style.background = color;
  navbar.style.background = color;
}

// ganti warna end

// open cart bag

popDown.setAttribute("class", "display-none");
bag.addEventListener("click", function (e) {
  popDown.style.opacity = 1;
  popDown.classList.toggle("display-none");
  e.stopPropagation();
});

// add to cart

// addCart.forEach((e) => {
//   console.log(e.previousElementSibling.firstElementChild.innerText);

//   e.addEventListener("click", function () {
//     popDown.innerHTML += `<div class="items" id="cart-items">
//         <div class="btn-close">X</div>
//         <div class="item-image"></div>
//         <div class="item-text">
//           <p class="nama">${e.parentElement.previousElementSibling.firstElementChild.innerText}</p>
//           <p class="qty">
//             qty : <span>2</span>
//           </p>
//           <p class="harga">
//             Rp <span>${e.parentElement.previousElementSibling.lastElementChild.innerText}</span>
//           </p>
//         </div>
//       </div>`;
//   });
// });
