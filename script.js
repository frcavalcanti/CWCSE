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
