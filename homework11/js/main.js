(()=> {
    'use strict';
    let rightClickArea = document.getElementById('tricky');
    let rightClickMenu = document.getElementById('context-menu');

    rightClickArea.addEventListener('contextmenu', (event) =>{
        event.preventDefault();
        rightClickMenu.style.display = 'block';
        rightClickMenu.style.left = event.clientX + 'px';
        rightClickMenu.style.top = event.clientY + 'px';
        return false;
    });

    document.addEventListener('click', function(event) {
        rightClickMenu.style.display = 'none';
    })
})();