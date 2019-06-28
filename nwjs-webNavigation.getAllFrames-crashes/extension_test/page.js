setTimeout(function() {
    chrome.runtime.sendMessage(
        {key: 'test'},
        function (resp) {
            console.log('chrome.runtime.sendMessage', 'response', resp);
        }
    );
}, 999);
