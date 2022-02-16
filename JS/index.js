let bestDealsCards = document.querySelector(".best-deals-cards-wrapper");
let leftScroll = document.querySelector(".btn-left-scroll");
let rightScroll = document.querySelector(".btn-right-scroll");
let mobileSearchBar = document.querySelector(".mobile-search-bar-box");
let btnSearchMobile = document.querySelector(".mobile-btn-search");
let mainWrapper = document.querySelector(".page-main");

leftScroll.addEventListener("click", () => {
  bestDealsCards.scrollLeft -= 290;
});
rightScroll.addEventListener("click", () => {
  bestDealsCards.scrollLeft += 290;
});

btnSearchMobile.addEventListener("click", () => {
  mobileSearchBar.classList.toggle("mobile-search-btn-toggle");
  mainWrapper.classList.toggle("page-main-reduce-opacity");
});
