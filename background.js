//*background.js
//*this is the background script

console.log('background.js is running');

window.addEventListener('load', sendMessage);

function sendMessage () {
    chrome.tabs.query(
        { currentWindow: true, active: true },
        tabs => {
            chrome.tabs.sendMessage(tabs[0].id, 'background.js is open');
        }
    );
}