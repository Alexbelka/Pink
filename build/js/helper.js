
(function() {
    let size = document.documentElement.clientWidth;
    let group = document.querySelectorAll('.slider-switcher');

        if ( size > 652) {
            for(let i = 0; i < group.length; i++) {
                group[i].removeAttribute('checked');
            }
        }
}());