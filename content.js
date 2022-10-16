chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const e = new Event("change");
    const element = document.getElementById('cmd-k-input');

      try {
          document.getElementById("cmd-k-input").value = request.tooltip;
          element.dispatchEvent(e);
          sendResponse({status: "Success!"});
      } catch (error) {
          console.log(error)
      }
  }
);
