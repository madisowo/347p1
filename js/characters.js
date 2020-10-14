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

function funcStar(pass) {
    var bool = new Boolean(pass);
    showAll();
    var star = document.getElementsByName("star");
    var len = star.length;
    if (!star[0].checked) {
        for (i = 0; i < len; i++) {
            if (!star[i].checked) {
                var myClasses = document.getElementsByClassName(star[i].value);
                for (j = 0; j < myClasses.length; j++) {
                    myClasses[j].style.display = "none";
                }
            }
        }
    }
    if (bool) {
        funcColor(true);
    }
}

function funcColor(stop) {
    if (!stop) {
        funcStar(false);
    }
    var color = document.getElementsByName("color");
    var len = color.length;
    if (!color[0].checked) {
        for (i = 0; i < len; i++) {
            if (!color[i].checked) {
                var myClasses = document.getElementsByClassName(color[i].value);
                for (j = 0; j < myClasses.length; j++) {
                    myClasses[j].style.display = "none";
                }
            }
        }
    }
}

function showAll() {
    var all = document.getElementsByClassName("cha");
    for (i = 0; i < all.length; i++) {
        all[i].style.display = "block";
    }
}
