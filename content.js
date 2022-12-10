chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    let cmdInput = document.getElementById("cmd-k-input"); // Intercom search field id new inbox
    let cmdOldInput = document.querySelector(".tagger__search-input") // Intercom tag field class old inbox

    try {
      cmdInput.focus();
      document.execCommand('insertText', false, request.tooltipArea);
      document.execCommand('insertText', false, request.tooltip); // execCommand deprecated, haven't found an alternative but works fine for this purpose
      document.execCommand('insertText', false, request.favTooltip);
      setTimeout(function() {
          let xBox = document.querySelectorAll('.items-center input[type=checkbox]') // items-center checkbox div class on new Intercom
          xBox[0].click()  // clicks first checkbox
        }, 1100) // increase timeout if Intercom has instability or lag
        sendResponse({status: "New Inbox!"});

      } catch  {
        cmdOldInput.focus();
        document.execCommand('insertText', false, request.tooltipArea);
        document.execCommand('insertText', false, request.tooltip); // execCommand deprecated, haven't found an alternative but works fine for this purpose
        document.execCommand('insertText', false, request.favTooltip);
        setTimeout(function() {
          let lineBox = document.querySelectorAll('.dropdown__list-item') // first search item on old Intercom
          lineBox[0].click(); // clicks first line
        }, 1100) // increase timeout if Intercom has instability or lag
        sendResponse({status: "Old Inbox!"});
      }
    }
  );
