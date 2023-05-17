const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function (element) {
  element.addEventListener('click', open);
})

function open(evt) {
  const tabTarget = evt.currentTarget
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item){
    item.classList.remove('tabs__btn-item_active');
  })

  tabTarget.classList.add('tabs__btn-item_active');

  tabContent.forEach(function(item){
    item.classList.remove('tabs__content-item_active')
  })

  document.querySelector(`#${button}`).classList.add('tabs__content-item_active');
}

const menuBtn = document.querySelector('.header__menu-btn')
const menu = document.querySelector('.header__menu-list')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('header__menu-list_active');
})


const swiper = new Swiper(".swiper", {
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});