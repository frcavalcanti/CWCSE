chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      try {
          document.getElementById("cmd-k-input").value = request.tooltip;
          sendResponse({status: "Success!"});
      } catch (error) {
          console.log(error)
      }
  }
);
