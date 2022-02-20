let mobileSearchBar = document.querySelector(".mobile-search-bar-box");
let btnSearchMobile = document.querySelector(".mobile-btn-search");
let mainWrapper = document.querySelector(".page-main");
let navProductsLink = document.querySelector(".list-item-products-container");
let productsList = document.querySelector(".products-list");

const activateLeftRightScroll = () => {
  if (location.pathname === "/index.html") {
    let bestDealsCards = document.querySelector(".best-deals-cards-wrapper");
    let leftScroll = document.querySelector(".btn-left-scroll");
    let rightScroll = document.querySelector(".btn-right-scroll");
    leftScroll.addEventListener("click", () => {
      bestDealsCards.scrollLeft -= 290;
    });
    rightScroll.addEventListener("click", () => {
      bestDealsCards.scrollLeft += 290;
    });
  }
};
const showSearchBarInMobile = () => {
  mobileSearchBar.classList.toggle("mobile-search-btn-toggle");
  mainWrapper.classList.toggle("page-main-make-background-blur");
};

const showProductsList = () => {
  productsList.classList.toggle("display-block");
};

btnSearchMobile.addEventListener("click", showSearchBarInMobile);
navProductsLink.addEventListener("click", showProductsList);
activateLeftRightScroll();
