// [[ Open ]]

// Array.from(document.getElementsByClassName("conatiner-home"))
//   .forEach((element) => element.addEventListener("click", function() {
//     alert("Hello World!")
//   }
//   ))

// [[ Copy & Paste tooltip text]]

let tag = document.getElementById("tagNav").getElementsByClassName("tooltip");
const inputTag = document.getElementById("cmd-k-input"); // Id has to be same as displayed on Intercom

for (let i=0; i < tag.length; i++) {
  tag[i].onclick = function () {
    let tagSelect = tag[i].dataset.text;
    navigator.clipboard.writeText(tagSelect); // Copies tooltip text
    inputTag.value = tagSelect; // Inserts copied text into input field (as used by Intercom on line 4)
  };
}


// [[ Visibility ]]

let visibleTags = document.getElementById("tagNav").getElementsByClassName("tagNavArea");
let whiteTags = document.getElementById("tagTableMain");

for (let i=0; i < visibleTags.length; i++) {
  visibleTags[i].onclick = function () {
    whiteTags.classList.toggle("fade");

  }
}
