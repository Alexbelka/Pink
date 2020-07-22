
(function() {
    let size = document.documentElement.clientWidth;
    let group = document.querySelectorAll('.slider-switcher');


    for (let i = 0; i < group.length; i++) {
        if (group[i].hasAttribute('checked') && size > 652) {
            group[i].removeAttribute('checked');
        }
    }
}());