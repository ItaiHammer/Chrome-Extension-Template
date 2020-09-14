//*background.js
//*this is the background script
console.log('background.js is running');

chrome.browserAction.onClicked.addListener(sendMessage);

function sendMessage () {
    chrome.tabs.query(
        { currentWindow: true, active: true },
        tabs => {
            chrome.tabs.sendMessage(tabs.id, 'hello');
        }
    );
}