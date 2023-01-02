// [[ Save ]]

document.querySelectorAll('.saveIt').forEach(item => {
  item.addEventListener('click', function () {

    chrome.storage.sync.set ({
      // queries input field values
      wrSquad: document.getElementById("wrSquad").value,
      qrEngineer: document.getElementById("qrEngineer").value,
      pixCNPJ: document.getElementById("pixCNPJ").value,
      pixStart: document.getElementById("pixStart").value,
      pixEnd: document.getElementById("pixEnd").value,
      cancelNSU: document.getElementById("cancelNSU").value,
      takeNote: document.getElementById("takeNote").value,
      // search tags input field values
      motherText: document.getElementById("motherText").value,
      tagText: document.getElementById("tagText").value,
      // favorite tags input field values
      favOne: document.getElementById("favOne").value,
      favTwo: document.getElementById("favTwo").value,
      favThree: document.getElementById("favThree").value,
      favFour: document.getElementById("favFour").value,
      favFive: document.getElementById("favFive").value,
      favSix: document.getElementById("favSix").value,
      favSeven: document.getElementById("favSeven").value,
      favEight: document.getElementById("favEight").value,
      favNine: document.getElementById("favNine").value,
      favTen: document.getElementById("favTen").value,
      favEleven: document.getElementById("favEleven").value,
      favTwelve: document.getElementById("favTwelve").value,
      // data attributes for search tags to send to content.js
      motherTag: document.getElementById("motherTag").setAttribute('data-text', document.getElementById("motherText").textContent),
      tagTag: document.getElementById("tagTag").setAttribute('data-text', document.getElementById("tagText").textContent),
      // data attributes for fav tags to send to content.js
      oneTag: document.getElementById("oneTag").setAttribute('data-text', document.getElementById("favOne").textContent),
      twoTag: document.getElementById("twoTag").setAttribute('data-text', document.getElementById("favTwo").textContent),
      threeTag: document.getElementById("threeTag").setAttribute('data-text', document.getElementById("favThree").textContent),
      fourTag: document.getElementById("fourTag").setAttribute('data-text', document.getElementById("favFour").textContent),
      fiveTag: document.getElementById("fiveTag").setAttribute('data-text', document.getElementById("favFive").textContent),
      sixTag: document.getElementById("sixTag").setAttribute('data-text', document.getElementById("favSix").textContent),
      sevenTag: document.getElementById("sevenTag").setAttribute('data-text', document.getElementById("favSeven").textContent),
      eightTag: document.getElementById("eightTag").setAttribute('data-text', document.getElementById("favEight").textContent),
      nineTag: document.getElementById("nineTag").setAttribute('data-text', document.getElementById("favNine").textContent),
      tenTag: document.getElementById("tenTag").setAttribute('data-text', document.getElementById("favTen").textContent),
      elevenTag: document.getElementById("elevenTag").setAttribute('data-text', document.getElementById("favEleven").textContent),
      twelveTag: document.getElementById("twelveTag").setAttribute('data-text', document.getElementById("favTwelve").textContent),
    },
      function() {
        chrome.storage.sync.get([
            "wrSquad",
            "qrEngineer",
            "pixCNPJ",
            "pixStart",
            "pixEnd",
            "cancelNSU",
            "takeNote",
            "motherText",
            "tagText",
            "favOne",
            "favTwo",
            "favThree",
            "favFour",
            "favFive",
            "favSix",
            "favSeven",
            "favEight",
            "favNine",
            "favTen",
            "favEleven",
            "favTwelve",
            "motherTag",
            "tagTag",
            "oneTag",
            "twoTag",
            "threeTag",
            "fourTag",
            "fiveTag",
            "sixTag",
            "sevenTag",
            "eightTag",
            "nineTag",
            "tenTag",
            "elevenTag",
            "twelveTag"
          ],
          function(result) {
            document.getElementById('wrSquad').textContent = result.wrSquad;
            document.getElementById('qrEngineer').textContent = result.qrEngineer;
            document.getElementById('pixCNPJ').textContent = result.pixCNPJ;
            document.getElementById('pixStart').textContent = result.pixStart;
            document.getElementById('pixEnd').textContent = result.pixEnd;
            document.getElementById('cancelNSU').textContent = result.cancelNSU
            document.getElementById('takeNote').textContent = result.takeNote;
            document.getElementById('motherText').textContent = result.motherText;
            document.getElementById('tagText').textContent = result.tagText;
            document.getElementById('favOne').textContent = result.favOne;
            document.getElementById('favTwo').textContent = result.favTwo;
            document.getElementById('favThree').textContent = result.favThree;
            document.getElementById('favFour').textContent = result.favFour;
            document.getElementById('favFive').textContent = result.favFive;
            document.getElementById('favSix').textContent = result.favSix;
            document.getElementById('favSeven').textContent = result.favSeven;
            document.getElementById('favEight').textContent = result.favEight;
            document.getElementById('favNine').textContent = result.favNine;
            document.getElementById('favTen').textContent = result.favTen;
            document.getElementById('favEleven').textContent = result.favEleven;
            document.getElementById('favTwelve').textContent = result.favTwelve;
            document.getElementById("motherTag").setAttribute('data-text', document.getElementById("motherText").textContent),
            document.getElementById("tagTag").setAttribute('data-text', document.getElementById("tagText").textContent),
            document.getElementById('oneTag').setAttribute('data-text', document.getElementById('favOne').textContent);
            document.getElementById("twoTag").setAttribute('data-text', document.getElementById("favTwo").textContent);
            document.getElementById("threeTag").setAttribute('data-text', document.getElementById("favThree").textContent);
            document.getElementById("fourTag").setAttribute('data-text', document.getElementById("favFour").textContent);
            document.getElementById("fiveTag").setAttribute('data-text', document.getElementById("favFive").textContent);
            document.getElementById("sixTag").setAttribute('data-text', document.getElementById("favSix").textContent);
            document.getElementById("sevenTag").setAttribute('data-text', document.getElementById("favSeven").textContent);
            document.getElementById("eightTag").setAttribute('data-text', document.getElementById("favEight").textContent);
            document.getElementById("nineTag").setAttribute('data-text', document.getElementById("favNine").textContent);
            document.getElementById("tenTag").setAttribute('data-text', document.getElementById("favTen").textContent);
            document.getElementById("elevenTag").setAttribute('data-text', document.getElementById("favEleven").textContent);
            document.getElementById("twelveTag").setAttribute('data-text', document.getElementById("favTwelve").textContent);
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
    "cancelNSU",
    "takeNote",
    "motherText",
    "tagText",
    "favOne",
    "favTwo",
    "favThree",
    "favFour",
    "favFive",
    "favSix",
    "favSeven",
    "favEight",
    "favNine",
    "favTen",
    "favEleven",
    "favTwelve",
    "motherTag",
    "tagTag",
    "oneTag",
    "twoTag",
    "threeTag",
    "fourTag",
    "fiveTag",
    "sixTag",
    "sevenTag",
    "eightTag",
    "nineTag",
    "tenTag",
    "elevenTag",
    "twelveTag"
    ],

    function(result) {
      // queries input field values
      document.getElementById('wrSquad').textContent = result.wrSquad;
      document.getElementById('wrSquad').textContent = result.wrSquad;
      document.getElementById('qrEngineer').textContent = result.qrEngineer;
      document.getElementById('pixCNPJ').textContent = result.pixCNPJ;
      document.getElementById('pixStart').textContent = result.pixStart;
      document.getElementById('pixEnd').textContent = result.pixEnd;
      document.getElementById('cancelNSU').textContent = result.cancelNSU
      document.getElementById('takeNote').textContent = result.takeNote;
      // search tags input field values
      document.getElementById('motherText').textContent = result.motherText;
      document.getElementById('tagText').textContent = result.tagText;
      // favorite tags input field values
      document.getElementById("favOne").textContent = result.favOne;
      document.getElementById("favTwo").textContent = result.favTwo;
      document.getElementById("favThree").textContent = result.favThree;
      document.getElementById("favFour").textContent = result.favFour;
      document.getElementById("favFive").textContent = result.favFive;
      document.getElementById("favSix").textContent = result.favSix;
      document.getElementById("favSeven").textContent = result.favSeven;
      document.getElementById("favEight").textContent = result.favEight;
      document.getElementById("favNine").textContent = result.favNine;
      document.getElementById("favTen").textContent = result.favTen;
      document.getElementById("favEleven").textContent = result.favEleven;
      document.getElementById("favTwelve").textContent = result.favTwelve;
      // data attributes for search tags to send to content.js
      document.getElementById("motherTag").setAttribute('data-text', document.getElementById("motherText").textContent),
      document.getElementById("tagTag").setAttribute('data-text', document.getElementById("tagText").textContent),
      // data attributes for fav tags to send to content.js
      document.getElementById("oneTag").setAttribute("data-text", document.getElementById("favOne").textContent);
      document.getElementById("twoTag").setAttribute('data-text', document.getElementById("favTwo").textContent);
      document.getElementById("threeTag").setAttribute('data-text', document.getElementById("favThree").textContent);
      document.getElementById("fourTag").setAttribute('data-text', document.getElementById("favFour").textContent);
      document.getElementById("fiveTag").setAttribute('data-text', document.getElementById("favFive").textContent);
      document.getElementById("sixTag").setAttribute('data-text', document.getElementById("favSix").textContent);
      document.getElementById("sevenTag").setAttribute('data-text', document.getElementById("favSeven").textContent);
      document.getElementById("eightTag").setAttribute('data-text', document.getElementById("favEight").textContent);
      document.getElementById("nineTag").setAttribute('data-text', document.getElementById("favNine").textContent);
      document.getElementById("tenTag").setAttribute('data-text', document.getElementById("favTen").textContent);
      document.getElementById("elevenTag").setAttribute('data-text', document.getElementById("favEleven").textContent);
      document.getElementById("twelveTag").setAttribute('data-text', document.getElementById("favTwelve").textContent);
    }
  )
};

// [[ Copy tooltip text]]

// copy area tag
let tagArea = document.getElementById("tagNav").getElementsByClassName("selectTop");

for (let i=0; i < tagArea.length; i++) {
  tagArea[i].onclick = function () {
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        tooltipArea: tagArea[i].dataset.text, // JSON key: value - tag[i].innerHTML for p/h3 text
      }), function(response) {
        console.log(response.status)
      }
    })
  };
}



// copy favorite and search tag
let favAndSearchTag = document.getElementById("tagNav").getElementsByClassName("material-symbols-outlined");

for (let i=0; i < favAndSearchTag.length; i++) {
  favAndSearchTag[i].onclick = function () {
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        favTooltip: favAndSearchTag[i].dataset.text // JSON key: value
      }), function(response) {
        console.log(response.status)
      }
    })
  };
}

// [[ Visibility ]]

// Alt + X collapse function
let allTables = document.getElementsByClassName("tableMain")
let allHeaders = document.getElementsByClassName("tagNavArea")

chrome.commands.onCommand.addListener((command) => {
   if (command === "collapse-tags") {
    for (let i = 0; i < allTables.length; i++) {
      allTables[i].classList.remove("fade")
      allHeaders[i].classList.remove("black");
    }
  }
});


// Scroll Into View
let intoView = document.getElementById("headerTwo")

intoView.onclick = function () {
  intoView.scrollIntoView({behavior: "smooth"});
}


// Tag Menus -- could be refactored
let accreditationTags = document.getElementById("accreditationTableMain");
let deliveryTags = document.getElementById("deliveryTableMain");
let posDoubtTags = document.getElementById("posTableMain");
let salesErrorTags = document.getElementById("salesErrorTableMain")
let serviceTags = document.getElementById("serviceTableMain");
let withdrawsTags = document.getElementById("withdrawsTableMain");
let standaloneTags = document.getElementById("standaloneTableMain");


const accrHide = document.getElementById("accreditationHide");
const delHide = document.getElementById("deliveryHide");
const posHide = document.getElementById("posDoubtHide");
const salesHide = document.getElementById("salesErrorHide");
const servHide = document.getElementById("servicesHide");
const withHide = document.getElementById("withdrawsHide");
const standHide = document.getElementById("standaloneHide");


accrHide.onclick = function () {
  accrHide.classList.toggle("black");
  delHide.classList.remove("black");
  posHide.classList.remove("black");
  salesHide.classList.remove("black");
  servHide.classList.remove("black");
  withHide.classList.remove("black");
  standHide.classList.remove("black");
  accreditationTags.classList.toggle("fade");
  deliveryTags.classList.remove("fade");
  posDoubtTags.classList.remove("fade");
  salesErrorTags.classList.remove("fade");
  serviceTags.classList.remove("fade");
  withdrawsTags.classList.remove("fade");
  standaloneTags.classList.remove("fade");
}

delHide.onclick = function () {
  accrHide.classList.remove("black");
  delHide.classList.toggle("black");
  posHide.classList.remove("black");
  salesHide.classList.remove("black");
  servHide.classList.remove("black");
  withHide.classList.remove("black");
  standHide.classList.remove("black");
  deliveryTags.classList.toggle("fade");
  posDoubtTags.classList.remove("fade");
  salesErrorTags.classList.remove("fade");
  serviceTags.classList.remove("fade");
  withdrawsTags.classList.remove("fade");
  standaloneTags.classList.remove("fade");
  accreditationTags.classList.remove("fade");
}

posHide.onclick = function () {
  accrHide.classList.remove("black");
  delHide.classList.remove("black");
  posHide.classList.toggle("black");
  salesHide.classList.remove("black");
  servHide.classList.remove("black");
  withHide.classList.remove("black");
  standHide.classList.remove("black");
  posDoubtTags.classList.toggle("fade");
  salesErrorTags.classList.remove("fade");
  serviceTags.classList.remove("fade");
  withdrawsTags.classList.remove("fade");
  standaloneTags.classList.remove("fade");
  accreditationTags.classList.remove("fade");
  deliveryTags.classList.remove("fade");
}

salesHide.onclick = function () {
  accrHide.classList.remove("black");
  delHide.classList.remove("black");
  posHide.classList.remove("black");
  salesHide.classList.toggle("black");
  servHide.classList.remove("black");
  withHide.classList.remove("black");;
  standHide.classList.remove("black")
  salesErrorTags.classList.toggle("fade");
  serviceTags.classList.remove("fade");
  withdrawsTags.classList.remove("fade");
  standaloneTags.classList.remove("fade");
  accreditationTags.classList.remove("fade");
  deliveryTags.classList.remove("fade");
  posDoubtTags.classList.remove("fade");
}

servHide.onclick = function () {
  accrHide.classList.remove("black");
  delHide.classList.remove("black");
  posHide.classList.remove("black");
  salesHide.classList.remove("black");
  servHide.classList.toggle("black");
  withHide.classList.remove("black");
  standHide.classList.remove("black");
  serviceTags.classList.toggle("fade");
  withdrawsTags.classList.remove("fade");
  standaloneTags.classList.remove("fade");
  accreditationTags.classList.remove("fade");
  deliveryTags.classList.remove("fade");
  posDoubtTags.classList.remove("fade");
  salesErrorTags.classList.remove("fade");
}

withHide.onclick = function () {
  accrHide.classList.remove("black");
  delHide.classList.remove("black");
  posHide.classList.remove("black");
  salesHide.classList.remove("black");
  servHide.classList.remove("black");
  withHide.classList.toggle("black");
  standHide.classList.remove("black");
  withdrawsTags.classList.toggle("fade");
  standaloneTags.classList.remove("fade");
  accreditationTags.classList.remove("fade");
  deliveryTags.classList.remove("fade");
  posDoubtTags.classList.remove("fade");
  salesErrorTags.classList.remove("fade");
  serviceTags.classList.remove("fade");
}

standHide.onclick = function () {
  accrHide.classList.remove("black");
  delHide.classList.remove("black");
  posHide.classList.remove("black");
  salesHide.classList.remove("black");
  servHide.classList.remove("black");
  withHide.classList.remove("black");
  standHide.classList.toggle("black");
  standaloneTags.classList.toggle("fade");
  accreditationTags.classList.remove("fade");
  deliveryTags.classList.remove("fade");
  posDoubtTags.classList.remove("fade");
  salesErrorTags.classList.remove("fade");
  serviceTags.classList.remove("fade");
  withdrawsTags.classList.remove("fade");
}

// Switch to notebook
document.getElementById("notebook").onclick = function () {
  let tagContainer = document.getElementById("tagNav")
  let notesContainer = document.getElementById("notesHide")

  tagContainer.classList.toggle("dnone")
  notesContainer.classList.toggle("dshow")
}

// [[ Queries]]
let today = new Date();
let thirtyDaysAgo = new Date(new Date().setDate(today.getDate() - 30));

let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January 0!
let yyyy = today.getFullYear();


let ddThirty = String(thirtyDaysAgo.getDate()).padStart(2, '0');
let mmThirty = String(thirtyDaysAgo.getMonth() + 1).padStart(2, '0'); //January 0!
let yyyyThirty = thirtyDaysAgo.getFullYear();

today = `${yyyy}-${mm}-${dd}`; // for WR and Untagged
thirtyDaysAgo = `${yyyyThirty}-${mmThirty}-${ddThirty}`; // for Untagged

// wr
document.getElementById("warRoom").addEventListener("click", function() {
  document.getElementById("wrSquad").value;
  sessionStorage.getItem("key", "value");
  let newURL = ''
  chrome.tabs.create({ url: newURL })
})

// untagged
document.getElementById("untagged").addEventListener("click", function() {
  document.getElementById("wrSquad").value;
  document.getElementById("qrEngineer").value;
  sessionStorage.getItem("key", "value");
  let newURL = ''
  chrome.tabs.create({ url: newURL })
})

// pix
document.getElementById("pix").addEventListener("click", function() {
  document.getElementById("pixCNPJ").value;
  document.getElementById("pixStart").value;
  document.getElementById("pixEnd").value;
  sessionStorage.getItem("key", "value");
  let newURL = ''
  chrome.tabs.create({ url: newURL })
})

// cancel
document.getElementById("cancel").addEventListener("click", function() {
  document.getElementById("cancelNSU").value;
  sessionStorage.getItem("key", "value");
  let newURL = ''
  chrome.tabs.create({ url: newURL })
});


// Search
let tagsJSON = []
let url = 'https://fr-cavalcanti.github.io/LaserJSON/tagDB.json'

const getTags = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    //Sort data by mAreaT then by tUniq
    data.sort(function(a, b) {
    if (a.mAreaT.toLowerCase() === b.mAreaT.toLowerCase()) {
      return a.tUniq.toLowerCase() > b.tUniq.toLowerCase() ? 1 : (a.tUniq === b.tUniq ? 0 : -1) ;
    }
    return a.mAreaT.toLowerCase() > b.mAreaT.toLowerCase() ? 1: -1;
    });

  // Returns sorted data for JSON
    console.log(data)
    return data
  } catch(e) {
    console.error(e)
  }
}

const searchInput = document.querySelector("[data-search]"); // search input field
const motherText = document.getElementById("motherText");
const tagText = document.getElementById("tagText");
const allClear = document.getElementById("clearBtn"); // X
const tagCardTemplate = document.querySelector("[data-tag-template]");  // template
const tagCardContainer = document.querySelector("[data-tag-cards-container]"); // container for all cards

(async () => {
  const tagData = await getTags()

  //Search card creation
  allTags = tagData.map(tagJ => { // allTags arr equals mapped json
    const tagCard = tagCardTemplate.content.cloneNode(true).children[0]
    const mAreaT = tagCard.querySelector("[data-mAreaT]")
    const tUniq = tagCard.querySelector("[data-tUniq]")
    const tTip = tagCard.querySelector("[data-tTip]")

    mAreaT.textContent = tagJ.mAreaT // html equals tagJ.mareaT value
    tUniq.textContent = tagJ.tUniq
    tTip.textContent = tagJ.tTip
    tagCardContainer.append(tagCard)
    return { mAreaT: tagJ.mAreaT, tUniq: tagJ.tUniq, tTip: tagJ.tTip, element: tagCard }
  });

  // Hide on load
  allTags.forEach(e => {
    e.element.classList.add("dnone")
  });

  // Click on tag
  let tagClick = document.querySelectorAll(".tagCard"); // individual card div

  for (let i = 0; i < tagClick.length; i++) {
    tagClick[i].onclick = function () {
      searchInput.value = tagClick[i].firstElementChild.textContent
      motherText.value = tagClick[i].children[1].textContent
      tagText.value = tagClick[i].children[2].textContent
      allTags.forEach(e => {
        e.element.classList.add("dnone")
      })
    }
  }

  // Tags for dropdown menu
  dropTags = tagData.map(dropJ => {
    const dropCard = document.querySelector("[data-drop-template]").content.cloneNode(true).children[0]
    const tUniq2 = dropCard.querySelector(".selectFinal")
    const tTip2 = dropCard.querySelector("[data-text]")

    //Accreditation
    if (dropJ.mAreaT === "(accreditation)(accreditation)") {
        document.querySelector("[data-drop-accreditation-accreditation]").append(dropCard);
     } else if (dropJ.mAreaT === "(accreditation)(app)") {
        document.querySelector("[data-drop-accreditation-app]").append(dropCard);
      } else if (dropJ.mAreaT === "(accreditation)(bank-account)") {
        document.querySelector("[data-drop-accreditation-bank-account]").append(dropCard);
      } else if (dropJ.mAreaT === "(accreditation)(lgpd)") {
        document.querySelector("[data-drop-accreditation-lgpd]").append(dropCard);
      } else if (dropJ.mAreaT === "(accreditation)(logged-out)") {
        document.querySelector("[data-drop-accreditation-logged-out]").append(dropCard);
      } else if (dropJ.mAreaT === "(accreditation)(monitoring)") {
        document.querySelector("[data-drop-accreditation-monitoring]").append(dropCard);
      // Delivery
      } else if (dropJ.mAreaT === "(delivery)(logistics)") {
        document.querySelector("[data-drop-delivery-logistics]").append(dropCard);
      // POS Doubt
      } else if (dropJ.tUniq.includes('s920')) {
        document.querySelector("[data-drop-pos-s920]").append(dropCard);
      } else if (dropJ.mAreaT === "(pos-doubt)(pos)") {
        document.querySelector("[data-drop-pos-pos]").append(dropCard);
      } else if (dropJ.mAreaT === "(pos-doubt)(authorization)") {
        document.querySelector("[data-drop-pos-authorization]").append(dropCard);
      } else if (dropJ.mAreaT === "(pos-doubt)(pix)") {
        document.querySelector("[data-drop-pos-pix]").append(dropCard);
      } else if (dropJ.mAreaT === "(pos-doubt)(refund)") {
        document.querySelector("[data-drop-pos-refund]").append(dropCard);
      } else if (dropJ.mAreaT === "(pos-doubt)(sales)") {
        document.querySelector("[data-drop-pos-sales]").append(dropCard);
      // POS Doubt
      } else if (dropJ.mAreaT === "(sales-error)(authorization)") {
        document.querySelector("[data-drop-error-authorization]").append(dropCard);
      } else if (dropJ.mAreaT === "(sales-error)(connection)") {
        document.querySelector("[data-drop-error-connection]").append(dropCard);
      } else if (dropJ.mAreaT === "(sales-error)(monitoring)") {
        document.querySelector("[data-drop-error-monitoring]").append(dropCard);
      } else if (dropJ.mAreaT === "(sales-error)(pos)") {
        document.querySelector("[data-drop-error-pos]").append(dropCard);
      } else if (dropJ.mAreaT === "(sales-error)(pix)") {
        document.querySelector("[data-drop-error-pix]").append(dropCard);
      //Services
      } else if (dropJ.mAreaT === "(services)(app)") {
        document.querySelector("[data-drop-services-app]").append(dropCard);
      } else if (dropJ.mAreaT === "(services)(churn)") {
        document.querySelector("[data-drop-services-churn]").append(dropCard);
      } else if (dropJ.mAreaT === "(services)(dirf)") {
        document.querySelector("[data-drop-services-dirf]").append(dropCard);
      } else if (dropJ.mAreaT === "(services)(ecommerce)") {
        document.querySelector("[data-drop-services-ecommerce]").append(dropCard);
      } else if (dropJ.mAreaT === "(services)(fees)") {
        document.querySelector("[data-drop-services-fees]").append(dropCard);
      } else if (dropJ.mAreaT === "(services)(infinitecard)") {
        document.querySelector("[data-drop-services-infinitecard]").append(dropCard);
      } else if (dropJ.mAreaT === "(services)(informations)") {
        document.querySelector("[data-drop-services-informations]").append(dropCard);
      } else if (dropJ.mAreaT === "(services)(lending)") {
        document.querySelector("[data-drop-services-lending]").append(dropCard);
      } else if (dropJ.mAreaT === "(services)(phone-support)") {
        document.querySelector("[data-drop-services-phone]").append(dropCard);
      } else if (dropJ.mAreaT === "(services)(receivables)") {
        document.querySelector("[data-drop-services-receivables]").append(dropCard);
      } else if (dropJ.mAreaT === "(services)(web)") {
        document.querySelector("[data-drop-services-web]").append(dropCard);
      //Withdraws
      } else if (dropJ.mAreaT === "(withdraws)(cerc)") {
        document.querySelector("[data-drop-withdraws-cerc]").append(dropCard);
      } else if (dropJ.mAreaT === "(withdraws)(chargeback)") {
        document.querySelector("[data-drop-withdraws-chargeback]").append(dropCard);
      } else if (dropJ.mAreaT === "(withdraws)(collection)") {
        document.querySelector("[data-drop-withdraws-collection]").append(dropCard);
      } else if (dropJ.mAreaT === "(withdraws)(fees)") {
        document.querySelector("[data-drop-withdraws-fees]").append(dropCard);
      } else if (dropJ.mAreaT === "(withdraws)(homebanking)") {
        document.querySelector("[data-drop-withdraws-homebanking]").append(dropCard);
      } else if (dropJ.mAreaT === "(withdraws)(monitoring)") {
        document.querySelector("[data-drop-withdraws-monitoring]").append(dropCard);
      } else if (dropJ.mAreaT === "(withdraws)(pix)") {
        document.querySelector("[data-drop-withdraws-pix]").append(dropCard);
      } else if (dropJ.mAreaT === "(withdraws)(receivables)") {
        document.querySelector("[data-drop-withdraws-receivables]").append(dropCard);
      // Standalone
      } else if (dropJ.mAreaT === "--") {
        document.querySelector("[data-drop-standalone]").append(dropCard);
      }

    tUniq2.innerHTML = dropJ.tUniq
    tTip2.dataset.text = dropJ.tTip
    return { mAreaT2: dropJ.mAreaT, tUniq2: dropJ.tUniq, tTip2: dropJ.tTip }
  })

  // copy minor tag
  let tag = document.getElementById("tagNav").getElementsByClassName("selectFinal");

  for (let i=0; i < tag.length; i++) {
    tag[i].onclick = function () {
      chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          tooltip: tag[i].innerHTML, // JSON key: value - tag[i].dataset.text for tooltip text
        }), function(response) {
          console.log(response.status)
        }
      })
    };
  }
})()


allClear.addEventListener ('click', clearSearch) // wipe it
function clearSearch () {
  searchInput.value = ""
  motherText.value = ""
  tagText.value = ""
  allTags.forEach(e => {
    e.element.classList.add("dnone")
  })
}

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()

  if (searchInput.value == "") allTags.forEach(tagJ => { // visibility functions for each element in allTags arr
    tagJ.element.classList.add("dnone")
  }); else {
    allTags.forEach(tagJ => {
      const isVisible = tagJ.mAreaT.toLowerCase().includes(value) || tagJ.tUniq.toLowerCase().includes(value) || tagJ.tTip.toLowerCase().includes(value)
      tagJ.element.classList.toggle("dnone", !isVisible)
    })
  }
})
