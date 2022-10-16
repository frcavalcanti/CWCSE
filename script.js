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

document.getElementById("warRoom").addEventListener("click", function() {
  document.getElementById("wrSquad").value;
  window.open(`https://metabase-dot-infinitepay-production-rj.r.appspot.com/dashboard/466-warroom?calendar_start=${today}&calendar_end=${today}&squad=${wrSquad.value}`)
})

document.getElementById("untagged").addEventListener("click", function() {
  document.getElementById("qrEngineer").value;
  window.open(`https://metabase-dot-infinitepay-production-rj.r.appspot.com/question/5831-chats-without-tags-de-atendimento-2-0?calendar_start=${today}&calendar_end=${today}&ANALISTA=%25&squad=%25${wrSquad.value}%25`)
})

document.getElementById("pix").addEventListener("click", function() {
  document.getElementById("pixCNPJ").value;
  document.getElementById("pixStart").value;
  document.getElementById("pixEnd").value;
  window.open(`https://metabase-dot-infinitepay-production-rj.r.appspot.com/question/3430-get-btg-webhooks-from-document?ECDoc=${pixCNPJ.value}&calendar_start=${pixStart.value}&calendar_end=${pixEnd.value}`)
})
