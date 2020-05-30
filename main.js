(function () {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('hscroll-wrapper').scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
    }

    if (document.getElementById('hscroll-wrapper').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('hscroll-wrapper').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('hscroll-wrapper').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('hscroll-wrapper').attachEvent("onmousewheel", scrollHorizontally);
    }
})();