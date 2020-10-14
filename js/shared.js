window.onload=function() {

    const navigation = document.getElementById('mobile-nav');
    const menuButton = document.getElementById('menu-button');

    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        event.stopPropagation();
    });

    document.addEventListener('click', () => {
        navigation.classList.remove('open');
    });

}