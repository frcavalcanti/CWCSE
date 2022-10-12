// [[ Copy tooltip text]]

let tag = document.getElementById("tagNav").getElementsByClassName("tooltip");

for (let i=0; i < tag.length; i++) {
  tag[i].onclick = function () {
    let tagSelect = tag[i].dataset.text;
    navigator.clipboard.writeText(tagSelect);
  };
}
