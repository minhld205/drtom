import Swiper, { Navigation, HashNavigation, Pagination, Thumbs, Autoplay, EffectFade } from "swiper";

// config modules used
Swiper.use([Navigation, HashNavigation, Pagination, Thumbs, Autoplay, EffectFade]);

function swiperInit(selector, options) {
    return new Swiper(selector, options);
}

export function swiperSliders() {
    const swiperMainBannerHomepageLoaded = () => {
        swiperInit(".main-banner", {
            loop: true,
            // effect: "fade",
            // fadeEffect: {
            //     crossFade: true
            // },
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            }
        });
    };

    const swiperAwardImagesLoaded = () => {
        swiperInit(".award-images", {
            slidesPerView: 6,
            spaceBetween: 32,
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            breakpoints: {
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 16
                },
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 16
                },
                480: {
                    slidesPerView: 1.5,
                    spaceBetween: 16
                },
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 16
                },
                770: {
                    slidesPerView: 3.5,
                    spaceBetween: 32,
                },
                1025: {
                    slidesPerView: 4.5,
                    spaceBetween: 32,
                },
                1440: {
                    slidesPerView: 5.5,
                    spaceBetween: 32,
                },
                1600: {
                    slidesPerView: 6,
                    spaceBetween: 32,
                },
            },
        });
    };
    
    const swiperContentListLoaded = () => {
        swiperInit(
            ".content-list",
            {
                slidesPerView: 2.5,
                spaceBetween: 45,
                centeredSlides: true,
                grabCursor: true,
                loop: true,
                autoplay: {
                    delay: 5000,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.5,
                        spaceBetween: 16
                    },
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 16
                    },
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 16
                    },
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 21
                    },
                    770: {
                        slidesPerView: 2.5,
                        spaceBetween: 45,
                    },
                },
            },
        );
    };
    
    const swiperMainProductImage = () => {
        const productThumbSidebar = swiperInit(".main-product-image-left-side", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: false,
            direction: "vertical",
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        
        swiperInit(".main-product-image-thumb", {
            thumbs: {
              swiper: productThumbSidebar,
            },
        });
    };

    return {
        swiperAwardImagesLoaded,
        swiperContentListLoaded,
        swiperMainBannerHomepageLoaded,
        swiperMainProductImage,
    };
}