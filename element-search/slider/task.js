function replaceActiveSlider(slider, oldIndex, newIndex) {
    const imgs = slider.querySelectorAll('img');
    let parent = imgs[oldIndex].parentElement;
    parent.className = "slider__item";
    parent = imgs[newIndex].parentElement;
    parent.className = "slider__item slider__item_active";

    // подсветка точек навигации:
    const dot = slider.querySelectorAll('.slider__dot');
    dot[oldIndex].className = "slider__dot";
    dot[newIndex].className = "slider__dot slider__dot_active";
}

function main() {
    const slider = document.querySelectorAll('.slider');
    slider.forEach((element) => {
        const imgs = element.querySelectorAll('img');
        const imgsArray = Array.from(imgs);
        let index = imgsArray.findIndex((value) => {
            const parent = value.parentElement;
            if (parent.className.includes('active')) {
                return true;
            } else {
                return false;
            }
        });

        const arrowPrev = element.querySelector('.slider__arrow_prev');
        arrowPrev.onclick = () => { 
            const oldIndex = index;
            if (index == 0) {
                index = imgs.length;
            }
            --index;
            replaceActiveSlider(element, oldIndex, index);
        };

        const arrowNext = element.querySelector('.slider__arrow_next');
        arrowNext.onclick = () => {
            const oldIndex = index;
            if (index + 1 == imgs.length) {
                index = -1;
            }
            ++index;
            replaceActiveSlider(element, oldIndex, index);
        };

        const dot = element.querySelectorAll('.slider__dot');
        dot.forEach((value, key) => {
            value.onclick = () => {
                const oldIndex = index;
                index = key;
                replaceActiveSlider(element, oldIndex, index);
            };
        });
    });
}


main();