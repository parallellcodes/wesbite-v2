const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Rolex",
    price: 5000,
    colors: [
      {
        code: "red",
        img: "./images/Rolex watch.jpg",
      },
      {
        code: "darkblue",
        img: "./Images/Rolex watch.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Hugo Boss",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./images/hugo boss.jpg",
      },
      {
        code: "green",
        img: "./images/hugo boss.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "The collection",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./images/hugo boss.jpg",
      },
      {
        code: "green",
        img: "./images/hugo boss.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 199,
    colors: [
      {
        code: "boss",
        img: "./images/email.jpg,"
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Armani",
    price: 156,
    colors: [
      {
        code: "gray",
        img: "./images/hugo boss.jpg",
      },
      {
        code: "black",
        img: "./img/hugo2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".strap type");
const currentProductSizes = document.querySelectorAll(".sizes");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});