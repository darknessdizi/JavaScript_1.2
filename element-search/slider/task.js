const img = document.querySelectorAll('img');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const dot = document.querySelectorAll('.slider__dot');
let index = 0;

function replaceActiveSlider(oldIndex, newIndex) {
    let parent = img[oldIndex].parentElement;
    parent.className = "slider__item";
    parent = img[newIndex].parentElement;
    parent.className = "slider__item slider__item_active";

    // подсветка точек навигации:
    dot[oldIndex].className = "slider__dot";
    dot[index].className = "slider__dot slider__dot_active";
}

arrowPrev.onclick = () => {
    const oldIndex = index;
    if (index == 0) {index = img.length;}
    --index;
    replaceActiveSlider(oldIndex, index);
};

arrowNext.onclick = () => {
    const oldIndex = index;
    if (index + 1 == img.length) {index = -1;}
    ++index;
    replaceActiveSlider(oldIndex, index);
};

dot.forEach((element, key) => {
    element.onclick = () => {
        const oldIndex = index;
        index = key;
        replaceActiveSlider(oldIndex, index);
    };
});