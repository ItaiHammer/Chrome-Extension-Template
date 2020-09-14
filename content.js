//*content.js
//*this is the content script
console.log('content.js is running');

chrome.runtime.onMessage.addListener((req, send, res) => {
	console.log(req);
});