(()=> {
    'use strict';
    let rightClickArea = document.getElementById('tricky');
    let rightClickMenu = document.getElementById('context-menu');

    rightClickArea.oncontextmenu = context;
    document.onclick = hide;

    function hide(event) {
        rightClickMenu.style.display = 'none';
    }
    function context(event) {
        rightClickMenu.style.display = 'block';
        rightClickMenu.style.left = event.clientX + 'px';
        rightClickMenu.style.top = event.clientY + 'px';
        return false;
    }
})();