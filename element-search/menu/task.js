const links = document.querySelectorAll('.menu__link');
console.log(links);

links.forEach((element) => {
    const parent = element.parentElement;
    if (parent.getElementsByClassName('menu menu_sub').length) {
        const subMenu = parent.querySelector('.menu_sub');
        element.onclick = () => {
            const subMenuAll = document.querySelectorAll('.menu_sub');
            subMenuAll.forEach((item) => item.className = 'menu menu_sub')
            subMenu.className = 'menu menu_sub menu_active';
            return false;
        };
    };
});
