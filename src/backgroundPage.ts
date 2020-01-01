// Listen for messages sent from other parts of the extension
chrome.runtime.onMessage.addListener(request => {
    // chrome.runtime.onMessage must return "true" if response is async
    let isResponseAsync = false;

    // Log statement if request.popupMounted is true
    // NOTE: this request is sent in `popup/component.tsx`
    if (request.popupMounted) {
        console.log("backgroundPage notified that Popup.tsx has mounted.");
    }

    return isResponseAsync;
});
