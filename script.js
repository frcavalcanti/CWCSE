// [[ Save]]

document.getElementById("save").addEventListener("click", () => {

  chrome.storage.sync.set ({
    wrSquad: document.getElementById("wrSquad").value,
  },
    function() {
      chrome.storage.sync.get([
          "wrSquad"
        ],
        function(result) {
          document.getElementById('wrSquad').textContent = result.wrSquad
        }
      )
    }
  )
})

// [[ When OPEN = GET saved inputs ]]

window.onload = function() {
  chrome.storage.sync.get([
    "wrSquad"
    ],

    function(result) {
      document.getElementById('wrSquad').textContent = result.wrSquad
    }
  )
};

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

// [[ Visibility ]]

document.getElementById("accreditationHide").onclick = function () {
  let accreditationTags = document.getElementById("accreditationTableMain");
  accreditationTags.classList.toggle("fade")
}

document.getElementById("deliveryHide").onclick = function () {
  let deliveryTags = document.getElementById("deliveryTableMain");
  deliveryTags.classList.toggle("fade")
}

document.getElementById("posDoubtHide").onclick = function () {
  let posDoubtTags = document.getElementById("posDoubtTableMain");
  posDoubtTags.classList.toggle("fade")
}

document.getElementById("salesErrorHide").onclick = function () {
  let salesErrorTags = document.getElementById("salesErrorTableMain");
  salesErrorTags.classList.toggle("fade")
}

document.getElementById("servicesHide").onclick = function () {
  let serviceTags = document.getElementById("serviceTableMain");
  serviceTags.classList.toggle("fade")
}

document.getElementById("withdrawsHide").onclick = function () {
  let withdrawsTags = document.getElementById("withdrawsTableMain");
  withdrawsTags.classList.toggle("fade")
}

document.getElementById("standaloneHide").onclick = function () {
  let standaloneTags = document.getElementById("standaloneTableMain");
  standaloneTags.classList.toggle("fade")
}

// [[ Queries]]

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January 0!
let yyyy = today.getFullYear();

today = `${yyyy}-${mm}-${dd}`;

document.getElementById("warRoom").addEventListener("click", function() {
  document.getElementById("wrSquad").value;
  window.open(`https://metabase-dot-infinitepay-production-rj.r.appspot.com/dashboard/466-warroom?calendar_start=${today}&calendar_end=${today}&squad=${wrSquad.value}`)
})
