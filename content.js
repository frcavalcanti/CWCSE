chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    let cmdInput = document.getElementById("cmd-k-input");
      try {
        setTimeout(()=> {
          cmdInput.focus();
          document.execCommand('insertText', false, request.tooltip); // execCommand deprecated, haven't found an alternative
        }, 500)
        sendResponse({status: "Success!"});
      } catch (error) {
        console.log(error)
      }
  }
);
