const img = document.querySelectorAll('img'),
    arrowPrev = document.querySelector('.slider__arrow_prev'),
    arrowNext = document.querySelector('.slider__arrow_next');
let index = 0;

function replaceActiveSlider(oldIndex, newIndex) {
    let parent = img[oldIndex].parentElement;
    parent.className = "slider__item";
    parent = img[newIndex].parentElement;
    parent.className = "slider__item slider__item_active";
};

arrowPrev.onclick = () => {
    const oldIndex = index;
    if (index == 0) {
        index = img.length;
    }
    --index;
    replaceActiveSlider(oldIndex, index);
}

arrowNext.onclick = () => {
    const oldIndex = index;
    if (index + 1 == img.length) {
        index = -1;
    }
    ++index;
    replaceActiveSlider(oldIndex, index);
}