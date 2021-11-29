import "./libs/bootstrap";
import "./libs/zoom";
import { swiperSliders } from "./components/swiper";

var $ = window.$;

function handleSlider() {
    const slider = swiperSliders();

    slider.swiperAwardImagesLoaded();
    slider.swiperMainBannerHomepageLoaded();
    slider.swiperMainProductImage();
    slider.swiperContentListLoaded();
}

function handleAddQuantity() {
    $(".icon-plus").on("click", function () {
        const $input = $(this).closest(".block-quantity").find("input");
        const valueInput = $input[0].value;
        $input.val(Number(valueInput) + 1);
    });
    $(".icon-minus").on("click", function () {
        const $input = $(this).closest(".block-quantity").find("input");
        const valueInput = $input[0].value;
        if (valueInput > 1) {
            $input.val(Number(valueInput) - 1);
        }
    });
}

function handleStopVideoWhenCloseModal() {
    const contentVideoModal = document.getElementsByClassName("video-content-youtube")[0];
    if (contentVideoModal) {
        contentVideoModal.addEventListener("hidden.bs.modal", function () {
            const $modal = $(this);
            if ($modal.find("iframe").length === 0) return;
            const html = $modal.html();
            $modal.html(html);
        });
    }
}

function handleZoomMainProductImage() {
    $(".main-product-image-thumb .swiper-slide").zoom({
        touch: false
    });
}

function initLoaded() {
    handleAddQuantity();
    handleSlider();
    handleStopVideoWhenCloseModal();
    handleZoomMainProductImage();
}

$(document).ready(function () {
    initLoaded();
});