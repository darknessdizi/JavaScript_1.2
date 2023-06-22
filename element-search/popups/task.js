const modal = document.getElementsByClassName('modal');

const modalArray = Array.from(modal);

modalArray.forEach((element) => {
    if (element.id == 'modal_main') {
        element.className = 'modal modal_active';

        const showLink = element.querySelector('.btn');
        showLink.onclick = () => {
            element.nextElementSibling.className = 'modal modal_active';
            element.className = 'modal';
        };
    };

    let closeMain = element.querySelector('.modal__close');
    closeMain.onclick = () => element.className = 'modal';
    
});