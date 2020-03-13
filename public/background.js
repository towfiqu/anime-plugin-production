chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({ url: 'index.html' });
});

// browser.browserAction.onClicked.addListener(function() {
//   browser.tabs.create({ url: 'index.html' });
// });
