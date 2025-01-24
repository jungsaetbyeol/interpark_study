window.addEventListener("load", function () {
  // 헤더 마이페이지 클릭시 리스트 보임
  const mypageBtn = this.document.querySelector(".mypageBt");
  const mypageList = this.document.querySelector(".mypage-list");
  mypageBtn.addEventListener("click", function () {
    // console.log("click")
    mypageList.classList.toggle("showMypage")
  });
  // swiper
const swTour = new Swiper(".sw-tour", {
    // 모바일용
    slidesPerView: 1.2,
    grid:{
        rows: 3,
        fill: "row",
    },
    // 웹용
    breakpoints:{
        480: {
            spaceBetween: 32,
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
              rows: 2,
            },
          },
        1024: {
            slidesPerView:2.5,
            spaceBetween: 26,
        grid:{
            rows: 3,
        },
        },
        1280: {
            slidesPerView: 3.5,
            spaceBetween: 26,
            grid:{
                rows: 1,
            },
        },
    },
    navigation: {
      nextEl: ".tour .sw-next",
      prevEl: ".tour .sw-prev",
    },
});
const swShopping = new Swiper(".sw-shopping" , {
  spaceBetween: 15,
  slidesPerView: 1.5,
  grid:{
    rows: 1,
    fill:"row"
  },
  breakpoints:{
    480:{
      spaceBetween: 26,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768:{
      spaceBetween: 26,
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid:{
        rows: 2
      }
    },
    
    1280:{
      spaceBetween: 26,
      slidesPerView: 4,
      slidesPerGroup: 4,
    }
  },
  navigation: {
    nextEl: ".shopping .sw-next",
    prevEl: ".shopping .sw-prev",
  },

})
});
