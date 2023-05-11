const circle = document.querySelector(".circle");
const berkelas = document.getElementById("berkelas");
const shopNow = document.querySelector(".textBox a");
const footer = document.querySelector(".footer-boxes");
const navbar = document.getElementById("navbar");
const bag = document.getElementById("cart-bag");
const popDown = document.getElementById("pop-down");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-counter");
let counter = 0;
let addCart = [...document.getElementsByClassName("btn-add-cart")];

// append nama, harga, stock dari Card

const namaCard = [...document.querySelectorAll(".nama-card")];
const hargaCard = [...document.querySelectorAll(".harga-card")];
const stockCard = [...document.querySelectorAll(".card-stock span")];
const card = [
  { nama: "samsung", harga: 5000000, stock: 20, id: "satu" },
  { nama: "iphone", harga: 7000000, stock: 10, id: "dua" },
  { nama: "xiamai", harga: 3000000, stock: 40, id: "tiga" },
  { nama: "bluemie", harga: 4000000, stock: 70, id: "empat" },
  { nama: "appa", harga: 2000000, stock: 30, id: "lima" },
];

{
  /* <div class="items" id="cart-items">
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
//       </div> */
}
const cartDB = {};

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
  let id = card[i].id;
  // console.log(nama);
  addCart[i].addEventListener("click", function () {
    if (!cartDB[nama]) {
      cartDB[nama] = { harga, id, stock, qty: 0 };
      popDown.setAttribute(id, true);
      cartDB[nama].stock -= 1;
      cartDB[nama].qty++;
      cartDB[nama].total = cartDB[nama].qty * cartDB[nama].harga;

      const divItems = document.createElement("div");
      divItems.classList.add("items");
      divItems.setAttribute("id", "cart-items");
      const btnClose = document.createElement("div");
      btnClose.classList.add("btn-close");
      btnClose.innerText = "X";
      divItems.appendChild(btnClose);
      const itemImage = document.createElement("div");
      itemImage.classList.add("item-image");
      divItems.appendChild(itemImage);
      const itemText = document.createElement("div");
      itemText.classList.add("item-text");
      divItems.appendChild(itemText);
      const pNama = document.createElement("p");
      pNama.classList.add("nama");
      itemText.appendChild(pNama);
      pNama.innerText = `${card[i].nama}`;
      const pQty = document.createElement("p");
      pQty.classList.add("qty");
      pQty.setAttribute("id", `qty-${id}`);
      itemText.appendChild(pQty);
      pQty.innerText = `qty : ${cartDB[nama].qty}`;
      const pHarga = document.createElement("p");
      pHarga.classList.add("harga");
      pHarga.setAttribute("id", `harga-${id}`);
      itemText.appendChild(pHarga);
      pHarga.innerText = `Rp ${cartDB[nama].total}`;

      popDown.appendChild(divItems);
    } else {
      cartDB[nama].stock -= 1;
      cartDB[nama].qty++;
      cartDB[nama].total = cartDB[nama].qty * cartDB[nama].harga;
      const ambilHarga = document.getElementById(`harga-${id}`);
      const ambilQty = document.getElementById(`qty-${id}`);

      ambilHarga.innerText = `Rp ${cartDB[nama].total}`;
      ambilQty.innerText = `qty : ${cartDB[nama].qty}`;
    }

    addCart[i].previousElementSibling.firstElementChild.innerText = cartDB[nama].stock;
    cartCount.innerText = `${Number(cartCount.innerText) + 1}`;
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
