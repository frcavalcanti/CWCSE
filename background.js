chrome.action.onClicked.addListener(function(){
  chrome.windows.create({
    url: chrome.runtime.getURL("home.html"),
    type: "popup",
    height: 2000,
    width: 600,
    focused: true
  })
 });
