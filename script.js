// [[ Save ]]

document.querySelectorAll('.saveIt').forEach(item => {
  item.addEventListener('click', function () {
    chrome.storage.sync.set ({
      wrSquad: document.getElementById("wrSquad").value,
      qrEngineer: document.getElementById("qrEngineer").value,
      pixCNPJ: document.getElementById("pixCNPJ").value,
      pixStart: document.getElementById("pixStart").value,
      pixEnd: document.getElementById("pixEnd").value,
      takeNote: document.getElementById("takeNote").value
    },
      function() {
        chrome.storage.sync.get([
            "wrSquad",
            "qrEngineer",
            "pixCNPJ",
            "pixStart",
            "pixEnd",
            "takeNote"
          ],
          function(result) {
            document.getElementById('wrSquad').textContent = result.wrSquad;
            document.getElementById('qrEngineer').textContent = result.qrEngineer;
            document.getElementById('pixCNPJ').textContent = result.pixCNPJ;
            document.getElementById('pixStart').textContent = result.pixStart;
            document.getElementById('pixEnd').textContent = result.pixEnd;
            document.getElementById('takeNote').textContent = result.takeNote
          }
        )
      }
    )
  })
})

// [[ When OPEN = GET saved inputs ]]

window.onload = function() {
  chrome.storage.sync.get([
    "wrSquad",
    "qrEngineer",
    "pixCNPJ",
    "pixStart",
    "pixEnd",
    "takeNote"
    ],

    function(result) {
      document.getElementById('wrSquad').textContent = result.wrSquad;
      document.getElementById('wrSquad').textContent = result.wrSquad;
      document.getElementById('qrEngineer').textContent = result.qrEngineer;
      document.getElementById('pixCNPJ').textContent = result.pixCNPJ;
      document.getElementById('pixStart').textContent = result.pixStart;
      document.getElementById('pixEnd').textContent = result.pixEnd;
      document.getElementById('takeNote').textContent = result.takeNote;
    }
  )
};

// [[ Copy tooltip text]]

let tag = document.getElementById("tagNav").getElementsByClassName("tooltip");

for (let i=0; i < tag.length; i++) {
  tag[i].onclick = function () {
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        tooltip: tag[i].dataset.text, // JSON key: value
      }), function(response) {
        console.log(response.status)
      }
    })
  };
}

// [[ Visibility ]] -- could be refactored next update

let hideAll = document.getElementById("collapseTags")

let accreditationTags = document.getElementById("accreditationTableMain");
let deliveryTags = document.getElementById("deliveryTableMain");
let posDoubtTags = document.getElementById("posTableMain");
let salesErrorTags = document.getElementById("salesErrorTableMain")
let serviceTags = document.getElementById("serviceTableMain");
let withdrawsTags = document.getElementById("withdrawsTableMain");
let standaloneTags = document.getElementById("standaloneTableMain");




hideAll.onclick = function () {
  accreditationTags.classList.remove("fade");
  deliveryTags.classList.remove("fade");
  posDoubtTags.classList.remove("fade");
  salesErrorTags.classList.remove("fade");
  serviceTags.classList.remove("fade");
  withdrawsTags.classList.remove("fade");
  standaloneTags.classList.remove("fade");
}


document.getElementById("accreditationHide").onclick = function () {
  accreditationTags.classList.toggle("fade")
}

document.getElementById("deliveryHide").onclick = function () {
  deliveryTags.classList.toggle("fade")
}

document.getElementById("posDoubtHide").onclick = function () {
  posDoubtTags.classList.toggle("fade")
}

document.getElementById("salesErrorHide").onclick = function () {
  salesErrorTags.classList.toggle("fade")
}

document.getElementById("servicesHide").onclick = function () {
  serviceTags.classList.toggle("fade")
}

document.getElementById("withdrawsHide").onclick = function () {
  withdrawsTags.classList.toggle("fade")
}

document.getElementById("standaloneHide").onclick = function () {
  standaloneTags.classList.toggle("fade")
}

document.getElementById("clip").onclick = function () {
  let tagContainer = document.getElementById("tagNav")
  let notesContainer = document.getElementById("notesHide")

  tagContainer.classList.toggle("dnone")
  notesContainer.classList.toggle("dshow")
}



// [[ Queries]]

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January 0!
let yyyy = today.getFullYear();

today = `${yyyy}-${mm}-${dd}`;

const wR = document.getElementById("warRoom")

wR.addEventListener("click", function() {
  document.getElementById("wrSquad").value;
  let newURL =
  chrome.tabs.create({ url: newURL})
})

// document.getElementById("untagged").addEventListener("click", function() {
//   document.getElementById("qrEngineer").value;
//   window.open(``)
// })

// document.getElementById("pix").addEventListener("click", function() {
//   document.getElementById("pixCNPJ").value;
//   document.getElementById("pixStart").value;
//   document.getElementById("pixEnd").value;
//   window.open(``)
// })
