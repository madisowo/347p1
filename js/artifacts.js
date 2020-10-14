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
        funcClass(true);
    }
}

function funcClass(stop) {
    if (!stop) {
        funcStar(false);
    }
    var arti = document.getElementsByName("class");
    var len = arti.length;
    if (!arti[0].checked) {
        for (i = 0; i < len; i++) {
            if (!arti[i].checked) {
                var myClasses = document.getElementsByClassName(arti[i].value);
                for (j = 0; j < myClasses.length; j++) {
                    myClasses[j].style.display = "none";
                }
            }
        }
    }
}

function showAll() {
    var all = document.getElementsByClassName("art");
    for (i = 0; i < all.length; i++) {
        all[i].style.display = "block";
    }
}
