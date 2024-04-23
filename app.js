const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "ORGANIC TEA",
    price: 299,
    colors: [
        {
            img: "./img/store-product-1.jpg",
          },
        ],
  },
  {
    id: 2,
    title: "GREEN TEA",
    price: 149,
    colors: [
        {
          img: "./img/store-product-2.jpg",
        },
      ],
    

  },
  {
    id: 3,
    title: "SPICED TEA",
    price: 149,
    colors: [
      {
        img: "./img/store-product-3.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "BLACK TEA",
    price: 129,
    colors: [
      {
        img: "./img/store-product-1.jpg",
        
      },
    ],
  },
  {
    id: 5,
    title: "ICED TEA",
    price: 149,
    colors: [
      {
        img: "./img/store-product-3.jpg",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

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
