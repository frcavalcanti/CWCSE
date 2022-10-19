console.log("Toolbox Content Script Loaded")
const cmdInput = document.getElementById("cmd-k-input")
let ev = new KeyboardEvent('keydown', {
  key: 'a',
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      try {
          cmdInput.value = request.tooltip;
          setTimeout(() => {
            cmdInput.dispatchEvent(ev);
            cmdInput.value += " !"
          }, 1000);
          sendResponse({status: "Success!"});
      } catch (error) {
          console.log(error)
      }
  }
);
