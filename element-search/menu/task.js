const links = document.querySelectorAll('.menu__link');

links.forEach((element) => {
    const parent = element.parentElement;
    if (parent.getElementsByClassName('menu menu_sub').length) {
        const subMenu = parent.querySelector('.menu_sub');
        element.onclick = () => {
            if (subMenu.className.includes('menu_active')) {
                subMenu.className = 'menu menu_sub';
            } else {
                const menu = element.closest('.menu_main');
                const subMenuOld = menu.querySelector('.menu_active');
                if (subMenuOld) {
                    subMenuOld.className = 'menu menu_sub';
                }
                subMenu.className = 'menu menu_sub menu_active';
            }
            return false;
        };
    }
});
