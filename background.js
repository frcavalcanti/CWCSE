chrome.action.onClicked.addListener(function(){
  chrome.windows.create({
      url: chrome.runtime.getURL("home.html"),
      type: "panel",
      height: 2000,
      width: 600,
  })
});


// chrome.runtime.onMessage.addListener(request => {

//   if (request == "OpenPopup") {

//       chrome.windows.create({
//           url: "popup.html",
//           type: "popup",
//           focused: true,
//           width: 400,
//           height: 600,
//           top: 0,
//           left: screen.width - 400,
//       }, () => {
//           console.log("Opened popup!")
//       })

//   }

// })
