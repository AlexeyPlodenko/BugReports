'use strict';

nw.Window.open(
    'https://www.facebook.com/',
    {
        width: 800,
        height: 600
    },
    function(win) {
        win.showDevTools();
    }
);
