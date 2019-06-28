chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    chrome.webNavigation.getAllFrames(
        {tabId: sender.tab.id},
        function (details) {
            sendResponse(JSON.stringify(details));
        }
    );
    return true;
});
