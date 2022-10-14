// [[ Open ]]

// Array.from(document.getElementsByClassName("conatiner-home"))
//   .forEach((element) => element.addEventListener("click", function() {
//     alert("Hello World!")
//   }
//   ))

// [[ Copy tooltip text]]

let tag = document.getElementById("tagNav").getElementsByClassName("tooltip");

for (let i=0; i < tag.length; i++) {
  tag[i].onclick = function () {
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        tooltip: tag[i].dataset.text, // converts tooltip to text, sends message to content.js code, paste into div cmd-k-input
      }), function(response) {
        console.log(response.status)
      }
    })
  };
}

// [[ Paste tooltip text]]




// [[ Visibility ]]

let visibleTags = document.getElementById("tagNav").getElementsByClassName("tagNavArea");
let whiteTags = document.getElementById("tagTableMain");

for (let i=0; i < visibleTags.length; i++) {
  visibleTags[i].onclick = function () {
    whiteTags.classList.toggle("fade");

  }
}
