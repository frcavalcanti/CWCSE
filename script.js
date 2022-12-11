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
  let newURL = `https://metabase-dot-infinitepay-production.rj.r.appspot.com/dashboard/466-warroom?calendar_start=${today}&calendar_end=${today}&squad=${wrSquad.value}`
  chrome.tabs.create({ url: newURL })
})

// untagged
document.getElementById("untagged").addEventListener("click", function() {
  document.getElementById("wrSquad").value;
  document.getElementById("qrEngineer").value;
  sessionStorage.getItem("key", "value");
  let newURL = `https://metabase-dot-infinitepay-production.rj.r.appspot.com/question/5234-chats-without-tags-de-atendimento?CALENDAR_START=${thirtyDaysAgo}&CALENDAR_END=${today}&ANALISTA=%25${qrEngineer.value}%25&SQUAD=%25${wrSquad.value}%25`
  chrome.tabs.create({ url: newURL })
})

// pix
document.getElementById("pix").addEventListener("click", function() {
  document.getElementById("pixCNPJ").value;
  document.getElementById("pixStart").value;
  document.getElementById("pixEnd").value;
  sessionStorage.getItem("key", "value");
  let newURL = `https://metabase-dot-infinitepay-production.rj.r.appspot.com/question/3430-get-btg-webhooks-from-document?ECDoc=${pixCNPJ.value}&CALENDAR_START=${pixStart.value}&CALENDAR_END=${pixEnd.value}`
  chrome.tabs.create({ url: newURL })
})

// cancel
document.getElementById("cancel").addEventListener("click", function() {
  document.getElementById("cancelNSU").value;
  sessionStorage.getItem("key", "value");
  let newURL = `https://metabase-dot-infinitepay-production.rj.r.appspot.com/question/6383-validacao-de-cancelamento-cw?nsu=${cancelNSU.value}`
  chrome.tabs.create({ url: newURL })
});

// Fetch test
let updateGear = document.getElementById("updateGear")

updateGear.addEventListener ('click', fetchJSON) // wipe it
function fetchJSON () {
  fetch('https://sheets.googleapis.com/v4/spreadsheets/1jxbEhZQ-xCCcC4OEMcBK2jWnIi6dc5J150Gjy9o2BIc/values/json?alt=json&key=AIzaSyBQw0MCJnEvqEsZPA6DorajdFNLL7jtuR0')
    .then((response) => response.json())
    .then((data) => console.log(data));
}


// AIzaSyBQw0MCJnEvqEsZPA6DorajdFNLL7jtuR0 api key

// Search


let tagsJSON =
[   // --------------------------     Accreditation - Accreditation -------------------------------------------------
  {
    "id": 1,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(accr-denied)",
    "tTip": "Credenciamento negado",
  },
  {
    "id": 2,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(accr-informations)",
    "tTip": "Dúvidas gerais de credenciamento",
  },
  {
    "id": 3,
    "mArea":"ACCREDITATION" ,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(bank-account-update)",
    "tTip": "Troca de domicílio bancário pelo CRM/Chat",
  },
  {
    "id": 4,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(change-ownership-analysis)",
    "tTip": "Análise inicial para a troca de titularidade",
  },
  {
    "id": 5,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(change-ownership-data-collect)",
    "tTip": "Início do processo de troca após a análise inicial",
  },
  {
    "id": 6,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(change-ownership-informations)",
    "tTip": "Informações sobre, mas não iniciou a troca de titularidade",
  },
  {
    "id": 7,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(change-ownership-swap-pos)",
    "tTip": "Troca de POS entre cadastros após troca de titularidade aprovada",
  },
  {
    "id": 8,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(change-ownership-triage)",
    "tTip": "Triagem inicial antes da troca de titularidade",
  },
  {
    "id": 9,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(cnae-alteration)",
    "tTip": "Alteração de CNAE, que fica com o BKO",
  },
  {
    "id": 10,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(legal-representative-update)",
    "tTip": "Para quando há a alteração do representante legal",
  },
  {
    "id": 11,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(legal-representative-validation)",
    "tTip": "Validações de representante legal com clientes logados",
  },
  {
    "id": 12,
    "mArea":"ACCREDITATION" ,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(no-adiq-registry)",
    "tTip": "Solicitar cadastro na ADIQ para BKO",
  },
  {
    "id": 13,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(partnership-infinitepay)",
    "tTip": "Quando usuários solicitam parcerias de vários tipos conosco",
  },
  {
    "id": 14,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(rf-inactive)",
    "tTip": "Quando o CNPJ está baixado na Receita Federal",
  },
  {
    "id": 15,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(update-email)",
    "tTip": "Usuário logado solicita alteração de e-mail",
  },
  {
    "id": 16,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(update-phone)",
    "tTip": "Usuário logado solicita alteração de telefone",
  },
  {
    "id": 17,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(user-acc-info-update)",
    "tTip": "Atualizações cadastrais que envolvam o Backoffice, como alteração de RL",
  },
  {
    "id": 18,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(wrong-RF-declaration-value)",
    "tTip": "Casos onde houve a declaração errada de valores para a Receita Federal",
  },
  {
    "id": 19,
    "mAreaT": "(accreditation)(accreditation)",
    "tUniq": "(wrong-tid-info)",
    "tTip": "Quando as informações entre o portal da ADIQ e nosso EC estão divergentes, causando erro em vendas",
  },
  // --------------------------     Accreditation - APP -------------------------------------------------
  {
    "id": 20,
    "mAreaT": "(accreditation)(app)",
    "tUniq": "(app-features-biometry)",
    "tTip": "Acesso biométrico (Informações)",
  },
  {
    "id": 21 ,
    "mAreaT":"(accreditation)(app)" ,
    "tUniq": "(change-bank-account)",
    "tTip":"Alteração de domicílio bancário pelo app" ,
  },
  {
    "id": 22,
    "mAreaT":"(accreditation)(app)" ,
    "tUniq": "(change-infinite-tag)",
    "tTip":"Alterações de Infinite Tag pelo app" ,
  },
  {
    "id": 23,
    "mAreaT": "(accreditation)(app)",
    "tUniq": "(compromised-user-info)",
    "tTip":"Alguém tenta (ou consegue) aplicar golpes em um cliente nosso" ,
  },
  {
    "id": 24,
    "mAreaT":"(accreditation)(app)" ,
    "tUniq": "(establishment-name-change)",
    "tTip":"Para troca de nome fantasia e/ou handles" ,
  },
  {
    "id": 25,
    "mAreaT":"(accreditation)(app)" ,
    "tUniq": "(login-update-cellphone)",
    "tTip":"EC solicita alteração do telefone do app estando deslogado/sem acesso" ,
  },
  {
    "id": 26,
    "mAreaT": "(accreditation)(app)",
    "tUniq": "(password-reset)",
    "tTip":"Cliente esquece a senha para acesso no aplicativo",
  },
    // --------------------------     Accreditation - Bank -------------------------------------------------
    {
      "id": 27,
      "mAreaT": "(accreditation)(bank-account)",
      "tUniq": "(incorrect-bank-account)",
      "tTip": "Conta bancária cadastrada de forma incorreta ou cadastro de conta PF",
    },
    {
      "id": 28,
      "mAreaT": "(accreditation)(bank-account)",
      "tUniq": "(cora-cip)",
      "tTip": "Não é uma instituição financeira aceita pela InfinitePay",
    },
    {
      "id": 384,
      "mAreaT": "(accreditation)(bank-account)",
      "tUniq": "(incorrect-bank-account)",
      "tTip": "Conta bancária cadastrada de forma incorreta ou cadastro de conta PF.",
    },
    // --------------------------     Accreditation - LGPD -------------------------------------------------
    {
      "id": 29,
      "mAreaT": "(accreditation)(lgpd)",
      "tUniq": "(lgpd-cardholder)",
      "tTip": "Solicitação de inativação de dados de cardholder em nosso banco",
    },
    {
      "id": 30,
      "mAreaT": "(accreditation)(lgpd)",
      "tUniq": "(lgpd-merchant)",
      "tTip": "Solicitação de inativação de dados de merchant em nosso banco",
    },
     // --------------------------     Accreditation - LOGGED OUT -------------------------------------------------
     {
      "id": 31,
      "mAreaT": "(accreditation)(logged-out)",
      "tUniq": "(legal-representative-validation-logged-out)",
      "tTip": "Validações de representante legal com clientes deslogados",
    },
    {
      "id": 32,
      "mAreaT": "(accreditation)(logged-out)",
      "tUniq": "(logged-out)(chat)",
      "tTip": "Cliente em contato via chat deslogado",
    },
    {
      "id": 33,
      "mAreaT": "(accreditation)(logged-out)",
      "tUniq": "(logged-out)(email)",
      "tTip": "Cliente em contato por e-mail diferente do que está vinculado ao cadastro",
    },
    {
      "id": 34,
      "mAreaT": "(accreditation)(logged-out)",
      "tUniq": "(logged-out)(has-offenses)",
      "tTip": "Instruções de contato via e-mail (cliente que não tem acesso ao login no app)",
    },
    {
      "id": 35,
      "mAreaT": "(accreditation)(logged-out)",
      "tUniq": "(logged-out)(no-offenses)",
      "tTip": "Instruções de abertura de chat logado (cliente que tem acesso ao login no app)",
    },
    // --------------------------     Accreditation - MONITORING -------------------------------------------------
    {
      "id": 36,
      "mAreaT": "(accreditation)(monitoring)",
      "tUniq": "(merchant-blocked)",
      "tTip": "EC blocked/descredenciado",
    },
    // --------------------------     Delivery - LOGISTICS -------------------------------------------------
    {
      "id": 37,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(change-address)(nf-issued)",
      "tTip": "Alterações de endereço com NF",
    },
    {
      "id": 38,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(change-address)(no-nf)",
      "tTip": "Alterações de endereço sem NF",
    },
    {
      "id": 39,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(change-adress)(nf-issued)",
      "tTip": "Alteração de endereço com nota fiscal emitida",
    },
    {
      "id": 40,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(confrontation)",
      "tTip": "Acareação de logística",
    },
    {
      "id": 41,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(delayed-delivery)",
      "tTip": "Casos onde a entrega do EC está atrasada",
    },
    {
      "id": 42,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(delivery-attempt)(attempt-client)",
      "tTip": "Destinatário ausente",
    },
    {
      "id": 43,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(delivery-attempt)(attempt-sequoia)",
      "tTip": "Problemas mecânicos, chuvas torrenciais ou lugar não visitado",
    },
    {
      "id": 44,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(error-nf)",
      "tTip": "NF não foi gerada - portanto a DO não existe ou quando possui pendência na SEFAZ",
    },
    {
      "id": 45,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(log-informations)",
      "tTip": "Informações gerais sobre a entrega que não se enquadrem nas outras tags de logistics",
    },
    {
      "id": 46,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(log-informations)",
      "tTip": "Informações e dúvidas gerais que não alteram o status de DO e não precisam ser especificados",
    },
    {
      "id": 47,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(log-interception)",
      "tTip": "Interceptação de entrega",
    },
    {
      "id": 48,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(log-tracking)",
      "tTip": "Rastreio do pedido",
    },
    {
      "id": 49,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(log-tracking)",
      "tTip": "Rastreio de pacote em qualquer parceira nossa",
    },
    {
      "id": 50,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(pos-collection)",
      "tTip": "Coleta de POS e também para POS duplicada",
    },
    {
      "id": 51,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(pos-collection-wo-swap)",
      "tTip": "Casos onde precisamos abrir coletas sem envio/troca de POS",
    },
    {
      "id": 52,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(post-office)(delivery-attempt)",
      "tTip": "Tentativa de entrega pelos correios",
    },
    {
      "id": 53,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(re-delivery)(absent-receiver)",
      "tTip": "Cliente se mudou, destinatário desconhecido no endereço ou local fechado",
    },
    {
      "id": 54,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(re-delivery)(address-error)",
      "tTip": "Número inexistente, endereço insuficiente, endereço desconhecid ou CEP errado",
    },
    {
      "id": 55,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(re-delivery)(refused-delivery)",
      "tTip": "Recusado port/sind ou recusado",
    },
    {
      "id": 56,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(re-delivery)(third-attempt-error)",
      "tTip": "Erro na terceira tentativa de entrega",
    },
    {
      "id": 57,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(re-delivery)(unavailable-area)",
      "tTip": "Zona rural, praça não atendida ou área de risco",
    },
    {
      "id": 58,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(re-delivery-unaccomplished)",
      "tTip": "Insucesso na reentrega",
    },
    {
      "id": 59,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(resend)(confrontation)",
      "tTip": "Reenvio gerado após acareação",
    },
    {
      "id": 60,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(resend)(lost)",
      "tTip": "Pacote devolvido extraviado ou recuperado",
    },
    {
      "id": 61,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(resend)(product-problem)",
      "tTip": "Encomenda danificada, produto avariado ou produto divergente",
    },
    {
      "id": 62,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(resend)(re-delivery-error)",
      "tTip": "Reenvio após erro na reentrega",
    },
    {
      "id": 63,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(send-suply)(paper-roll-cover)",
      "tTip": "Envio de insumo - tampa de impressora",
    },
    {
      "id": 64,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(send-supply)(battery)",
      "tTip": "Envio de insumo - Bateria",
    },
    {
      "id": 65,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(send-supply)(battery-cover)",
      "tTip": "Envio de insumo - tampa de bateria",
    },
    {
      "id": 66,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(send-supply)(charger)",
      "tTip": "Envio de insumo - carregador",
    },
    {
      "id": 67,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(send-supply)(chip-algar)",
      "tTip": "Envio de insumo - chip Algar",
    },
    {
      "id": 68,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(send-supply)(chip-hologram)",
      "tTip": "Envio de insumo - chip Hologram",
    },
    {
      "id": 69,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(send-supply)(paper-roll)",
      "tTip": "Envio de insumo - bobina",
    },
    {
      "id": 70,
      "mAreaT": "(delivery)(logistics)",
      "tUniq": "(send-supply)(table-charger)",
      "tTip": "Envio de insumo - carregador de mesa",
    },
    // --------------------------     POS DOUBT - P2 / x990 -------------------------------------------------
    {
      "id": 71,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(activation)",
      "tTip": "Instruções de ativação de POS modelo p2",
    },
    {
      "id": 72,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(battery-issues)",
      "tTip": "Workflow de problema de bateria na P2",
    },
    {
      "id": 73,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(cache-cleaning)",
      "tTip": "Processo de limpeza de cache na p2",
    },
    {
      "id": 74,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(configuration-issue)",
      "tTip": "Para erros na P2 gerados devido configurações alteradas (ex: tamanho do texto)",
    },
    {
      "id": 75,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(connection)(chip)(gif)(cw)",
      "tTip": "Gif de instruções de conexão via chip na p2 (Chip da CW)",
    },
    {
      "id": 76,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(connection)(chip)(gif)(proprio)",
      "tTip": "Gif de instruções de conexão via chip na P2 (Chip próprio)",
    },
    {
      "id": 77,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(connection-issues)(chip)(proprio)",
      "tTip": "Problemas gerais de conexão via chip na P2 (chip próprio)",
    },
    {
      "id": 78,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(connection-issues)(chip-nano)",
      "tTip": "Para caso de problemas com chips no slot errado da P2",
    },
    {
      "id": 79,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(deleted-app)",
      "tTip": "ECs que deletaram o app da InfinitePay de sua P2",
    },
    {
      "id": 80,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(misuse)",
      "tTip": "Tag para especificar problemas de mal uso na P2 Ex: Cair no chão, quebrar a tela, dano na entrada do carregador, etc  ",
    },
    {
      "id": 81,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(ped-tampered)",
      "tTip": "PED Tamper em p2",
    },
    {
      "id": 82,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(refund-nfc)",
      "tTip": "Instruções de cancelamento de venda na p2 por NFC (aproximação)",
    },
    {
      "id": 83,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(slow-or-freezing)",
      "tTip": "P2 lenta ou travando",
    },
    {
      "id": 84,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(unrecoverable)",
      "tTip": "POS irrecuperável (perda, roubo, acidentes onde a culpa não é do EC)",
    },
    {
      "id": 85,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2)(update)",
      "tTip": "Instruções de atualização de POS modelo p2",
    },
    {
      "id": 86,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(p2-informations)",
      "tTip": "Informações gerais sobre a P2",
    },
    {
      "id": 87,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920-p2)(battery-issues)",
      "tTip": "Casos de workflow de POS não liga (apenas p2 e s920)",
    },
    {
      "id": 88,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(smart)(activation-information)",
      "tTip": "Passo a passo de ativação de POS modelo Smart (exceto gif)",
    },
    {
      "id": 89,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(smart)(activation-information)(gif)",
      "tTip": "Gif de instruções de ativação de POS Smart",
    },
    {
      "id": 90,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(smart)(battery-issues)",
      "tTip": "Casos de workflow de bateria descarregando muito rápido (apenas modelos Smart)",
    },
    {
      "id": 91,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(smart)(chip-priority)(gif)",
      "tTip": "Gif de alteração de prioridade de operadora do chip",
    },
    {
      "id": 92,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(smart)(connection-information)(wifi)",
      "tTip": "Instruções de configuração do wifi em POS modelo Smart",
    },
    {
      "id": 93,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(smart)(connection-informations)(chip)(proprio)",
      "tTip": "Problemas gerais de conexão via chip (chip próprio)",
    },
    {
      "id": 94,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(smart)(connection-issues)(chip)(cw)",
      "tTip": "Casos de workflow de problemas de conexão via chip (apenas modelos Smart, chip CW)",
    },
    {
      "id": 95,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(smart)(pix-informations)",
      "tTip": "Instruções para realização de venda via PIX na POS",
    },
    {
      "id": 96,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(smart)(refund-process)",
      "tTip": "Instruções para cancelamento de venda em POS modelo Smart",
    },
    {
      "id": 97,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(smart)(update)",
      "tTip": "Instruções de atualização de POS Smart",
    },
    {
      "id": 98,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(smart-hardware-test)",
      "tTip": "Para quando solicitamos o teste de hardware das POS smart (00 77777 7777)",
    },
    {
      "id": 99,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(activation)(gif)",
      "tTip": "Gif de instruções para ativação de POS x990",
    },
    {
      "id": 100,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(battery-issues)",
      "tTip": "Solicitação de dados de consumo da bateria de POS x990",
    },
    {
      "id": 101,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(cache-cleaning)",
      "tTip": "Processo de limpeza de cache na x990",
    },
    {
      "id": 102,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(configuration-issue)",
      "tTip": "Para erros na x990 gerados devido configurações alteradas (ex: tamanho do texto)",
    },
    {
      "id": 103,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(connection)(chip)(gif)(proprio)",
      "tTip": "Gif de instruções de conexão via chip na X990 (Chip próprio)",
    },
    {
      "id": 104,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(connection-informations)(chip)(gif)(cw)",
      "tTip": "Gif de instruções de acesso à área de informações sobre conexão de chip da x990 (chip CW)",
    },
    {
      "id": 105,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(connection-informations)(wifi)(gif)",
      "tTip": "Gif de instruções de acesso à área de informações sobre conexão Wifi da x990",
    },
    {
      "id": 106,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(connection-issues)(chip)(proprio)",
      "tTip": "Problemas gerais de conexão via chip na X990 (chip próprio)",
    },
    {
      "id": 107,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(deleted-app)",
      "tTip": "ECs que deletaram o app da InfinitePay de sua x990",
    },
    {
      "id": 108,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(emv-informations)(gif)",
      "tTip": "Gif de instruções sobre realização de venda com cartão na x990",
    },
    {
      "id": 109,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(misuse)",
      "tTip": "Tag para especificar problemas de mal uso na x990 - Ex: Cair no chão, quebrar a tela, dano na entrada do carregador, etc  ",
    },
    {
      "id": 110,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(nfc-informations)(gif)",
      "tTip": "Gif de instruções sobre realização de venda por aproximação na x990",
    },
    {
      "id": 111,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(ped-tampered)",
      "tTip": "PED Tamper em x990",
    },
    {
      "id": 112,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(refund)(gif)",
      "tTip": "Gif de instruções sobre cancelamento de venda na x990",
    },
    {
      "id": 113,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(slow-or-freezing)",
      "tTip": "x990 lenta ou travando",
    },
    {
      "id": 114,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(timezone)",
      "tTip": "Instruções de ajuste do fuso horário da máquina para regiões fora do horário de Brasília",
    },
    {
      "id": 115,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(timezone)(gmt-3)",
      "tTip": "Instruções de ajuste do fuso horário da máquina para regiões que seguem o horário de Brasília",
    },
    {
      "id": 116,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(unrecoverable)",
      "tTip": "POS irrecuperável (perda, roubo, acidentes onde a culpa não é do EC)",
    },
    {
      "id": 117,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990)(update)(gif)",
      "tTip": "Gif de instruções sobre atualização de POS modelo x990",
    },
    {
      "id": 118,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(x990-informations)",
      "tTip": "Solicitação do Serial Number (SN) da x990",
    },
   // --------------------------     POS DOUBT - AUTHORIZATION -------------------------------------------------
    {
      "id": 119,
      "mAreaT": "(pos-doubt)(authorization)",
      "tUniq": "(auth-code-information)",
      "tTip": "Casos onde o cliente solicita o código AUT (auth) da venda para uso em relatórios externos",
    },
    {
      "id": 120,
      "mAreaT": "(pos-doubt)(authorization)",
      "tUniq": "(denied-monitoring-informations)",
      "tTip": "Explicação sobre venda para parentes e a possibilidade de recusa de transações consideradas atípicas",
    },
    {
      "id": 121,
      "mAreaT": "(pos-doubt)(authorization)",
      "tUniq": "(limit-amount-nf-informations)",
      "tTip": "Informações sobre o limite de valor para vendas com cartão presente",
    },
    // --------------------------     POS DOUBT - PIX -------------------------------------------------
    {
      "id": 122,
      "mAreaT": "(pos-doubt)(pix)",
      "tUniq": "(smart)(pix-informations)",
      "tTip": "Instruções para realização de venda via PIX na POS.",
    },
    // --------------------------     POS DOUBT - REFUND -------------------------------------------------
    {
      "id": 123,
      "mAreaT": "(pos-doubt)(refund)",
      "tUniq": "(billing-refund)",
      "tTip": "Cliente que solicita cancelamento de venda mas tem billing pendente.",
    },
    {
      "id": 124,
      "mAreaT": "(pos-doubt)(refund)",
      "tUniq": "(enough-funds)",
      "tTip": "Confirmação de cancelamento de venda para cliente que tem recebíveis suficientes a serem descontados",
    },
    {
      "id": 125,
      "mAreaT": "(pos-doubt)(refund)",
      "tUniq": "(insufficient-funds)",
      "tTip": "Cliente sem recebíveis suficientes para solicitação de cancelamento de venda",
    },
    {
      "id": 126,
      "mAreaT": "(pos-doubt)(refund)",
      "tUniq": "(refund-informations)",
      "tTip": "Informações sobre prazo e fluxo de estorno de vendas canceladas",
    },
    {
      "id": 127,
      "mAreaT": "(pos-doubt)(refund)",
      "tUniq": "(refund-interest)",
      "tTip": "Cliente que solicita cancelamento de uma venda",
    },
    {
      "id": 128,
      "mAreaT": "(pos-doubt)(refund)",
      "tUniq": "(transfer-cw-details)",
      "tTip": "Dados da conta bancária da CW para clientes que optem por fazer transferência ao solicitar cancelamento de venda",
    },
    // --------------------------     POS DOUBT - SALES -------------------------------------------------
    {
      "id": 129,
      "mAreaT": "(pos-doubt)(sales)",
      "tUniq": "(pos-expensive)",
      "tTip": "Explicação sobre a diferença de preço da segunda POS",
    },
    {
      "id": 130,
      "mAreaT": "(pos-doubt)(sales)",
      "tUniq": "(pos-price-informations)",
      "tTip": "Informações sobre o preço das máquinas e do Link de Pagamento",
    },
    // --------------------------     POS DOUBT - s920 -------------------------------------------------
    {
      "id": 131,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(activation)(gif)",
      "tTip": "Gif de instruções para ativação de POS s920",
    },
    {
      "id": 132,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(battery-issues)",
      "tTip": "Para o Workflow de problemas de bateria da s920 que usamos em notas",
    },
    {
      "id": 133,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(battery-triage)",
      "tTip": "Processo de triagem de problemas na bateria da s920.",
    },
    {
      "id": 134,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(connection)(gif)",
      "tTip": "Gif de instruções de acesso à área de informações sobre conexão da s920",
    },
    {
      "id": 135,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(connection)(wifi)(gif)",
      "tTip": "Gif de instruções sobre conexão via Wifi na s920",
    },
    {
      "id": 136,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(connection-issues)(chip)",
      "tTip": "Casos de workflow de problemas de conexão via chip na s920",
    },
    {
      "id": 137,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(connection-issues)(chip)(gif)",
      "tTip": "Gif de instruções sobre conexão via chip na s920",
    },
    {
      "id": 138,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(connection-issues)(wifi)(chip)",
      "tTip": "Relacionado ao problema da tarja amarela na s920",
    },
    {
      "id": 139,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(emv-informations)(gif)",
      "tTip": "Gif de instruções sobre realização de venda com cartão na s920",
    },
    {
      "id": 140,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(keyboard-issues)",
      "tTip": "Problemas no teclado físico da s920",
    },
    {
      "id": 141,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(misuse)",
      "tTip": "Tag para especificar problemas de mal uso na s920. Ex: Cair no chão, quebrar a tela, dano na entrada do carregador, etc.  ",
    },
    {
      "id": 142,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(ped-tampered)",
      "tTip": "PED Tamper em s920",
    },
    {
      "id": 143,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(pix-informations)",
      "tTip": "Cliente perguntando sobre venda via PIX/QR Code na s920",
    },
    {
      "id": 144,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(refund)(gif)",
      "tTip": "Instruções de cancelamento de venda na s920",
    },
    {
      "id": 145,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(reprint)(gif)",
      "tTip": "Instruções de reimpressão de recibo de venda na s920",
    },
    {
      "id": 146,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(slow-or-freezing)",
      "tTip": "s920 lenta ou travando",
    },
    {
      "id": 147,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(software-charge)",
      "tTip": "Carga de sistema na POS s920",
    },
    {
      "id": 148,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(transaction-refund)",
      "tTip": "Instruções para cancelamento de venda na POS s920 (exceto gif)",
    },
    {
      "id": 149,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(unrecoverable)",
      "tTip": "POS irrecuperável (perda, roubo, acidentes onde a culpa não é do EC)",
    },
    {
      "id": 150,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(update)",
      "tTip": "Informando ao cliente que sua s920 precisa ser atualizada e setando expectativa de tempo",
    },
    {
      "id": 151,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(update)(gif)",
      "tTip": "Gif de instruções de update da s920",
    },
    {
      "id": 152,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920)(update-7417)",
      "tTip": "Instruções para atualização de s920 que esteja na versão 7.4.17.",
    },
    {
      "id": 153,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920-informations)",
      "tTip": "Solicitação do Serial Number (SN) da s920",
    },
    {
      "id": 154,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920-informations)(gif)",
      "tTip": "Gif de instruções de acesso à área de informações sobre métricas e estabelecimento e reinicialização da s920",
    },
    {
      "id": 155,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(s920-p2)(battery-issues)",
      "tTip": "Casos de workflow de POS não liga (apenas p2 e s920)",
    },
    // --------------------------     POS DOUBT - Variado -------------------------------------------------
    {
      "id": 156,
      "mAreaT": "-",
      "tUniq": "(activation-failed)",
      "tTip": "Casos de workflow de falha na ativação.",
    },
    {
      "id": 157,
      "mAreaT": "-",
      "tUniq": "(buy-second-pos)",
      "tTip": "Informações sobre aquisição de segunda POS.",
    },
    {
      "id": 158,
      "mAreaT": "-",
      "tUniq": "(chip-hologram-free-exchange)",
      "tTip": "Para casos onde enviamos um chip Algar gratuito para chips Hologram desativados",
    },
    {
      "id": 159,
      "mAreaT": "-",
      "tUniq": "(connection-issues)(wifi)",
      "tTip": "Casos de workflow de problema de conexão via Wifi",
    },
    {
      "id": 160,
      "mAreaT": "-",
      "tUniq": "(deactivated-chip)",
      "tTip": "Para casos de chips inativados",
    },
    {
      "id": 161,
      "mAreaT": "-",
      "tUniq": "(fees-calculator)",
      "tTip": "Instruções de cálculo de repasse de taxas",
    },
    {
      "id": 162,
      "mAreaT": "-",
      "tUniq": "(internal-WF)(battery-issues)",
      "tTip": "Para quando abrimos o WF interno (de notas) para validação do Guardian sobre casos de Bateria",
    },
    {
      "id": 163,
      "mAreaT": "-",
      "tUniq": "(internal-WF)(ped-tampered)",
      "tTip": "Para quando abrimos o WF interno (de notas) para validação do Guardian sobre casos de Ped Tamper",
    },
    {
      "id": 164,
      "mAreaT": "-",
      "tUniq": "(limit-amount-informations)",
      "tTip": "Informações sobre limite de valor para vendas (exceto por link de pagamento)",
    },
    {
      "id": 165,
      "mAreaT": "-",
      "tUniq": "(permanent-chip-deactivation)",
      "tTip": "Para casos de chips inativados permanentemente, conforme anúncio do Luis Rosa",
    },
    {
      "id": 166,
      "mAreaT": "-",
      "tUniq": "(pos-swap)",
      "tTip": "Chat em que foi necessário solicitar troca de POS",
    },
    {
      "id": 167,
      "mAreaT": "-",
      "tUniq": "(printing-issues)",
      "tTip": "Casos de workflow de falha na impressão",
    },
    {
      "id": 168,
      "mAreaT": "-",
      "tUniq": "(promotion-upgrade-pos)",
      "tTip": "Para upgrades de POS",
    },
    {
      "id": 169,
      "mAreaT": "-",
      "tUniq": "(rent-informations)",
      "tTip": "Questões sobre aluguel de POS",
    },
    {
      "id": 170,
      "mAreaT": "-",
      "tUniq": "(roller-paper)(change-informations)",
      "tTip": "Solicitação de troca de informações da bobina.",
    },
    {
      "id": 171,
      "mAreaT": "-",
      "tUniq": "(roller-paper)(printing-issues)",
      "tTip": "Instruções de limpeza do compartimento de bobina",
    },
    {
      "id": 172,
      "mAreaT": "-",
      "tUniq": "(roller-paper-informations)",
      "tTip": "Informações sobre o fornecimento de bobinas e detalhes sobre as medidas.",
    },
    {
      "id": 173,
      "mAreaT": "-",
      "tUniq": "(send-logs)",
      "tTip": "Instruções para envio de logs da máquina",
    },
    {
      "id": 174,
      "mAreaT": "-",
      "tUniq": "(swapped-pos-activation)",
      "tTip": "Para quando o nosso EC recebe a POS de troca, mas não consegue ativá-la",
    },
    {
      "id": 175,
      "mAreaT": "-",
      "tUniq": "(touchscreen-impaired)",
      "tTip": "Casos de workflow de problemas no touchscreen.",
    },
    {
      "id": 176,
      "mAreaT": "-",
      "tUniq": "(typed-sale)",
      "tTip": "Informações sobre venda digitada",
    },
    {
      "id": 177,
      "mAreaT": "-",
      "tUniq": "(warranty-informations)",
      "tTip": "Questões sobre a garantia de POS",
    },
    // --------------------------     SALES ERROR - AUTHORIZATION -------------------------------------------------
    {
      "id": 179,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(auth-instability)",
      "tTip": "Casos de instabilidade geral que afetam transações",
    },
    {
      "id": 180,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(denied-transaction-authorizer)",
      "tTip": "Para vendas negadas pelo emissor e que não tenham uma tag própria",
    },
    {
      "id": 181,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(denied-transaction-cardholder)",
      "tTip": "Para casos onde o Cardholder vem falar conosco sobre não conseguir transacionar conosco (link/pos)",
    },
    {
      "id": 182,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(error-03)",
      "tTip": "Erro de transação 03 (não-adiq)",
    },
    {
      "id": 183,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(error-03-adiq)",
      "tTip": "Para casos de problema com MID, TID, MCC, cadastro na adiq ou departamento impedindo vendas com Hipercard",
    },
    {
      "id": 184,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(error-05)",
      "tTip": "Venda negada por erro 05",
    },
    {
      "id": 185,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(error-06-adiq)",
      "tTip": "Erro 06 em vendas adiq",
    },
    {
      "id": 186,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(error-51)",
      "tTip": "Venda negada por erro 51 (saldo insuficiente)",
    },
    {
      "id": 187,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(error-55)",
      "tTip": "Venda negada por erro 55 (senha inválida)",
    },
    {
      "id": 188,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(error-57)",
      "tTip": "Erro de transação 57",
    },
    {
      "id": 189,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(error-63)(original-picpay)",
      "tTip": "Erro de transação 63 do Banco Original ou PicPay",
    },
    {
      "id": 190,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(error-63)(pan-bank)",
      "tTip": "Erro de transação 63 do Banco Pan",
    },
    {
      "id": 191,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(error-63)(picpay-bank)",
      "tTip": "Erro de transação 63 do PicPay",
    },
    {
      "id": 192,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(error-82)",
      "tTip": "Erro de transação 82",
    },
    {
      "id": 193,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(error-83)",
      "tTip": "Erro de transação 83",
    },
    {
      "id": 194,
      "mAreaT": "(sales-error)(authorization)",
      "tUniq": "(improper-charge)",
      "tTip": "Usada para casos de cobrança indevida onde não houve desfazimento (venda denied, refunded, ou failed)",
    },
    // --------------------------     SALES ERROR - CONNECTION -------------------------------------------------
    {
      "id": 195,
      "mAreaT": "(sales-error)(connection)",
      "tUniq": "(chip-inactive)",
      "tTip": "Para casos de chip inativo",
    },
    {
      "id": 196,
      "mAreaT": "(sales-error)(connection)",
      "tUniq": "(connection-issues)(chip)",
      "tTip": "Para procedimentos de chip não necessariamente relacionados a um modelo de POS específico",
    },
    // --------------------------     SALES ERROR - MONITORING -------------------------------------------------
    {
      "id": 197,
      "mAreaT": "(sales-error)(monitoring)",
      "tUniq": "(denied-monitoring-ecommerce)",
      "tTip": "Para vendas negadas por risco que foram feitas por ecommerce",
    },
    {
      "id": 199,
      "mAreaT": "(sales-error)(monitoring)",
      "tUniq": "(present-card-limit)",
      "tTip": "Para casos de limite de venda presencial",
    },
    {
      "id": 200,
      "mAreaT": "(sales-error)(monitoring)",
      "tUniq": "(working-capital)",
      "tTip": "Para casos de autofinanciamento",
    },
    // --------------------------     SALES ERROR - PIX -------------------------------------------------
    {
      "id": 201,
      "mAreaT": "(sales-error)(pix)",
      "tUniq": "(pix-cashin-error)",
      "tTip": "Para erros de cash-ins de PIX",
    },
    {
      "id": 202,
      "mAreaT": "(sales-error)(pix)",
      "tUniq": "(pix-cashout-error)",
      "tTip": "Para erros de transfer cashout de pix onde o EC já está validado",
    },
    {
      "id": 203,
      "mAreaT": "(sales-error)(pix)",
      "tUniq": "(pix-key-issues)",
      "tTip": "Para quando o EC tem problemas com a chave pix",
    },
    // --------------------------     SALES ERROR - POS -------------------------------------------------
    {
      "id": 204,
      "mAreaT": "(sales-error)(pos)",
      "tUniq": "(emv-issues)",
      "tTip": "Problemas gerais com vendas por cartão presencial",
    },
    {
      "id": 205,
      "mAreaT": "(sales-error)(pos)",
      "tUniq": "(nfc-issues)",
      "tTip": "Problemas gerais com vendas por aproximação",
    },
    {
      "id": 206,
      "mAreaT": "(sales-error)(pos)",
      "tUniq": "(p2)(connection-issues)(chip)(cw)",
      "tTip": "Para casos de chip nano na P2",
    },
    {
      "id": 207,
      "mAreaT": "(sales-error)(pos)",
      "tUniq": "(p2)(emv-informations)(gif)",
      "tTip": "Gif de como fazer vendas com cartão físico",
    },
    {
      "id": 208,
      "mAreaT": "(sales-error)(pos)",
      "tUniq": "(p2)(nfc-informations)(gif)",
      "tTip": "Gif de como fazer vendas por aproximação",
    },
    {
      "id": 209,
      "mAreaT": "(sales-error)(pos)",
      "tUniq": "(smart)(chip-priority)(gif)",
      "tTip": "Gif de alteração de prioridade de operadora do chip",
    },
    {
      "id": 210,
      "mAreaT": "(sales-error)(pos)",
      "tUniq": "(transaction-reversal)",
      "tTip": "Desfazimento",
    },
    // --------------------------     SERVICES - APP -------------------------------------------------
    {
      "id": 211,
      "mAreaT": "(services)(app)",
      "tUniq": "(app-features)",
      "tTip": "Gif de instruções de acesso à DIRF via app.",
    },
    {
      "id": 212,
      "mAreaT": "(services)(app)",
      "tUniq": "(app-how-to-login)",
      "tTip": "Usado para quando ensinamos usuários a logar no aplicativo",
    },
    {
      "id": 213,
      "mAreaT": "(services)(app)",
      "tUniq": "(app-instability)",
      "tTip": "Instabilidade no sistema do nosso aplicativo.",
    },
    {
      "id": 214,
      "mAreaT": "(services)(app)",
      "tUniq": "(app-login-forgot-number)",
      "tTip": "Usada quando usuários esquecem o telefone registrado conosco",
    },
    {
      "id": 215,
      "mAreaT": "(services)(app)",
      "tUniq": "(app-login-sms-issue)",
      "tTip": "Usado quando usuários tem dificuldades com o SMS relacionado ao login do app",
    },
    {
      "id": 216,
      "mAreaT": "(services)(app)",
      "tUniq": "(app-login-two-accounts)",
      "tTip": "Instruções de como logar no mesmo cadastro em diferentes aparelhos",
    },
    {
      "id": 217,
      "mAreaT": "(services)(app)",
      "tUniq": "(clear-data)",
      "tTip": "Orientações de limpeza de cache do aplicativo.",
    },
    {
      "id": 218,
      "mAreaT": "(services)(app)",
      "tUniq": "(fees-calculator-informations)",
      "tTip": "Instruções de como utilizar a calculadora de taxas (exceto gif).",
    },
    {
      "id": 219,
      "mAreaT": "(services)(app)",
      "tUniq": "(fees-calculator-informations)(gif)",
      "tTip": "Gif de instruções de utilização da calculadora de taxas",
    },
    {
      "id": 220,
      "mAreaT": "(services)(app)",
      "tUniq": "(infinitetap)",
      "tTip": "Tag geral para atendimentos do InfiniteTap",
    },
    {
      "id": 221,
      "mAreaT": "(services)(app)",
      "tUniq": "(infinitetap)(fees)",
      "tTip": "Para questões relacionadas às taxas aumentadas do InfiniteTap",
    },
    {
      "id": 222,
      "mAreaT": "(services)(app)",
      "tUniq": "(infinitetap-tips)",
      "tTip": "Para dúvidas do InfiniteTap. Atenção: somente o @cse-beta pode usar essa tag!",
    },
    {
      "id": 223,
      "mAreaT": "(services)(app)",
      "tUniq": "(internal-sales-report)",
      "tTip": "Instruções de acesso ao relatório de vendas pelo aplicativo.",
    },
    {
      "id": 224,
      "mAreaT": "(services)(app)",
      "tUniq": "(mpos-security-crash)",
      "tTip": "Para casos onde o nosso EC tem problemas com a última versão do app devido o status MPOS",
    },
    {
      "id": 225,
      "mAreaT": "(services)(app)",
      "tUniq": "(password-registration)",
      "tTip": "Para casos de criação da senha no nosso app",
    },
    {
      "id": 226,
      "mAreaT": "(services)(app)",
      "tUniq": "(payment-link-app-informations)",
      "tTip": "Instruções sobre como vender via Link de Pagamento (exceto gif).",
    },
    {
      "id": 227,
      "mAreaT": "(services)(app)",
      "tUniq": "(payment-link-creation-error) ",
      "tTip": "Para quando há erros ao criar o link de pagamento",
    },
    {
      "id": 228,
      "mAreaT": "(services)(app)",
      "tUniq": "(payment-link-creation-tutorial)",
      "tTip": "Instruções sobre como criar links de pagamento",
    },
    {
      "id": 229,
      "mAreaT": "(services)(app)",
      "tUniq": "(payment-link-creation-tutorial)(gif)",
      "tTip": "Instruções sobre como criar links de pagamento (gif)",
    },
    {
      "id": 230,
      "mAreaT": "(services)(app)",
      "tUniq": "(payment-link-fees-informations)",
      "tTip": "Informações sobre as taxas aplicadas a vendas feitas pelo Link de Pagamento.",
    },
    {
      "id": 231,
      "mAreaT": "(services)(app)",
      "tUniq": "(payment-link-how-to-pay)",
      "tTip": "Instruções sobre como pagar um link de pagamento (cardholder)",
    },
    {
      "id": 232,
      "mAreaT": "(services)(app)",
      "tUniq": "(payment-link-installment-information)",
      "tTip": "Instruções sobre como alterar parcelas no link de pagamento",
    },
    {
      "id": 233,
      "mAreaT": "(services)(app)",
      "tUniq": "(payment-link-limit-amount)",
      "tTip": "Referente ao limite de R$10.000,00 do link de pagamento",
    },
    {
      "id": 234,
      "mAreaT": "(services)(app)",
      "tUniq": "(payment-link-security-tips)",
      "tTip": "Relacionado às dicas de segurança dos links de pagamento",
    },
    {
      "id": 235,
      "mAreaT": "(services)(app)",
      "tUniq": "(transaction-refund)",
      "tTip": "Instruções de cancelamento de transação via app",
    },
    {
      "id": 236,
      "mAreaT": "(services)(app)",
      "tUniq": "(update)",
      "tTip": "Instruções para atualização do nosso aplicativo",
    },
    // --------------------------     SERVICES - CHURN -------------------------------------------------
    {
      "id": 237,
      "mAreaT": "(services)(churn)",
      "tUniq": "(blocked-wo-pos-reversal)",
      "tTip": "Cliente bloqueado sem direito a coleta da POS e estorno.",
    },
    {
      "id": 238,
      "mAreaT": "(services)(churn)",
      "tUniq": "(churn-reason)",
      "tTip": "Questionamento do motivo do pedido de cancelamento.",
    },
    {
      "id": 239,
      "mAreaT": "(services)(churn)",
      "tUniq": "(collect-denied)",
      "tTip": "Coleta de POS negada.",
    },
    {
      "id": 240,
      "mAreaT": "(services)(churn)",
      "tUniq": "(repurchase-denied)",
      "tTip": "Recompra de POS negada",
    },
    {
      "id": 241,
      "mAreaT": "(services)(churn)",
      "tUniq": "(repurchase-interest)",
      "tTip": "Cliente interessado no processo de recompra da POS",
    },
    {
      "id": 242,
      "mAreaT": "(services)(churn)",
      "tUniq": "(repurchase-processed)",
      "tTip": "Confirmação de recompra aprovada",
    },
    {
      "id": 243,
      "mAreaT": "(services)(churn)",
      "tUniq": "(whatsapp)",
      "tTip": "Orientando o cliente de que não pedimos o código de acesso do app",
    },
    // --------------------------     SERVICES - DASHBOARD -------------------------------------------------
    {
      "id": 244,
      "mAreaT": "(services)(dashboard)",
      "tUniq": "(dash-cnpj-exchange)",
      "tTip": "Para quando ensinamos um EC a fazer a troca de titularidade pela dash web",
    },
    {
      "id": 245,
      "mAreaT": "(services)(dashboard)",
      "tUniq": "(dash-information)",
      "tTip": "Tag para informações referentes a dashboard web.",
    },
    {
      "id": 246,
      "mAreaT": "(services)(dashboard)",
      "tUniq": "(dash-login-issues)",
      "tTip": "Problemas no login da Dashboard (control room)",
    },
    {
      "id": 247,
      "mAreaT": "(services)(dashboard)",
      "tUniq": "(dash-pos-deactivation)",
      "tTip": "Para quando ensinamos um EC a fazer a desativação de POS pela dash web",
    },
    {
      "id": 248,
      "mAreaT": "(services)(dashboard)",
      "tUniq": "(dash-sales-report)",
      "tTip": "Informações sobre o relatório de vendas exportado da Dashboard",
    },
    {
      "id": 249,
      "mAreaT": "(services)(dashboard)",
      "tUniq": "(web-QR-code-print)",
      "tTip": "Para quando ensinamos nossos ECs a imprimir o QR code que geramos pela dash web",
    },
    // --------------------------     SERVICES - DIRF -------------------------------------------------
    {
      "id": 250,
      "mAreaT": "(services)(dirf)",
      "tUniq": "(dirf-generate)",
      "tTip": "Instruções de como gerar a DIRF em nosso aplicativo (exceto gif)",
    },
    {
      "id": 251,
      "mAreaT": "(services)(dirf)",
      "tUniq": "(dirf-informations)",
      "tTip": "Detalhamento do que é e para que serve a DIRF.",
    },
    // --------------------------     SERVICES - ECOMMERCE -------------------------------------------------
    {
      "id": 252,
      "mAreaT": "(services)(ecommerce)",
      "tUniq": "(ecommerce-credentials)",
      "tTip": "Para casos onde nosso cliente precisa de ajuda com as credenciais de ecommerce",
    },
    {
      "id": 253,
      "mAreaT": "(services)(ecommerce)",
      "tUniq": "(ecommerce-queue)",
      "tTip": "Encaminhamento de chat para a fila de e-commerce",
    },
    {
      "id": 254,
      "mAreaT": "(services)(ecommerce)",
      "tUniq": "(ecomplus-informations)",
      "tTip": "Informações sobre o plugin com o Ecomplus",
    },
    {
      "id": 255,
      "mAreaT": "(services)(ecommerce)",
      "tUniq": "(magento-informations)",
      "tTip": "Informações sobre o plugin com o Magento",
    },
    {
      "id": 256,
      "mAreaT": "(services)(ecommerce)",
      "tUniq": "(wbuy-informations)",
      "tTip": "Informações sobre o plugin com o Wbuy",
    },
    {
      "id": 257,
      "mAreaT": "(services)(ecommerce)",
      "tUniq": "(woocommerce)(installing)",
      "tTip": "Instruções de instalação do plugin de pagamento para WooCommerce",
    },
    {
      "id": 258,
      "mAreaT": "(services)(ecommerce)",
      "tUniq": "(woocommerce-informations)",
      "tTip": "Informações sobre o plugin com o Woocommerce",
    },
    // --------------------------     SERVICES - FEES -------------------------------------------------
    {
      "id": 259,
      "mAreaT": "(services)(fees)",
      "tUniq": "(payment-link-fees-calculator)",
      "tTip": "Instruções de uso da calculadora comparativa de taxas do nosso site",
    },
    {
      "id": 260,
      "mAreaT": "(services)(fees)",
      "tUniq": "(fee-negotiation)",
      "tTip": "Para casos onde o EC tenta negociar taxas conosco",
    },
    // --------------------------     SERVICES - INFINITECARD -------------------------------------------------
    {
      "id": 261,
      "mAreaT": "(services)(infinitecard)",
      "tUniq": "(additional-card-info)",
      "tTip": "Duvidas sobre cartões adicionais",
    },
    {
      "id": 262,
      "mAreaT": "(services)(infinitecard)",
      "tUniq": "(card-creation-error)",
      "tTip": "Falha ao tentar criar o cartão (emissão/Issuing)",
    },
    {
      "id": 263,
      "mAreaT": "(services)(infinitecard)",
      "tUniq": "(card-tokenization-error)",
      "tTip": "Para quando há falha ao tokenizar o cartão (Google wallet/Apple pay)",
    },
    {
      "id": 264,
      "mAreaT": "(services)(infinitecard)",
      "tUniq": "(failed-infinitecard-transaction)",
      "tTip": "Falha na transação do InfiniteCard",
    },
    {
      "id": 265,
      "mAreaT": "(services)(infinitecard)",
      "tUniq": "(infinitecard)(cashback)",
      "tTip": "Para questões relacionadas ao nosso novo cashback de 1.5%",
    },
    {
      "id": 266,
      "mAreaT": "(services)(infinitecard)",
      "tUniq": "(infinitecard-chargeback)",
      "tTip": "Contestação de transação no InfiniteCard (chargeback)",
    },
    {
      "id": 267,
      "mAreaT": "(services)(infinitecard)",
      "tUniq": "(infinitecard-feedback)",
      "tTip": "Para contatos proativos sobre feedback de issuing",
    },
    {
      "id": 268,
      "mAreaT": "(services)(infinitecard)",
      "tUniq": "(infinitecard-informations)",
      "tTip": "Para informações gerais do InfiniteCard",
    },
    // --------------------------     SERVICES - INFORMATIONS -------------------------------------------------
    {
      "id": 269,
      "mAreaT": "(services)(informations)",
      "tUniq": "(card-brands)",
      "tTip": "Dúvidas sobre as bandeiras de cartão aceitas.",
    },
    {
      "id": 270,
      "mAreaT": "(services)(informations)",
      "tUniq": "(contract-link)",
      "tTip": "Envio do link do nosso Contrato de Afiliação",
    },
    {
      "id": 271,
      "mAreaT": "(services)(informations)",
      "tUniq": "(customer-suggestion)",
      "tTip": "Para clientes nossos que sugerem funções e indicamos o site de feedback",
    },
    {
      "id": 272,
      "mAreaT": "(services)(informations)",
      "tUniq": "(legal-documents)",
      "tTip": "Para casos de recepção de documentos referentes a casos legais ou ofícios",
    },
    {
      "id": 273,
      "mAreaT": "(services)(informations)",
      "tUniq": "(service-channels)",
      "tTip": "Dúvidas sobre nossos canais de atendimento",
    },
    {
      "id": 274,
      "mAreaT": "(services)(informations)",
      "tUniq": "(site-informations)",
      "tTip": "Para dúvidas relacionadas ao nosso site",
    },
    {
      "id": 275,
      "mAreaT": "(services)(informations)",
      "tUniq": "(transaction-informations)",
      "tTip": "Para qualquer dúvida relacionada com transações no geral",
    },
    // --------------------------     SERVICES - LENDING -------------------------------------------------
    {
      "id": 276,
      "mAreaT": "(services)(lending)",
      "tUniq": "(autopilot-payment-error)",
      "tTip": "Casos onde há erro na hora de pagar os valores do Autopilot"
    },
    {
      "id": 277,
      "mAreaT": "(services)(lending)",
      "tUniq": "(deadline-details)",
      "tTip": "Cliente com dúvidas sobre o prazo de pagamento do empréstimo"
    },
    {
      "id": 278,
      "mAreaT": "(services)(lending)",
      "tUniq": "(excessive-discount)",
      "tTip": "Casos onde o Autopilot cobra valores a mais do cliente"
    },
    {
      "id": 279,
      "mAreaT": "(services)(lending)",
      "tUniq": "(failed-lending-pix-payment)",
      "tTip": "Para casos de falhas de pagamento de lending relacionados ao QR code/PIX do app"
    },
    {
      "id": 280,
      "mAreaT": "(services)(lending)",
      "tUniq": "(lending-deadletter)",
      "tTip": "Para casos onde o EC está em deadletter, sem acesso ao lending"
    },
    {
      "id": 281,
      "mAreaT": "(services)(lending)",
      "tUniq": "(lending-informations)",
      "tTip": "Cliente solicitando informações sobre o empréstimo inteligente"
    },
    {
      "id": 282,
      "mAreaT": "(services)(lending)",
      "tUniq": "(lending-instability)",
      "tTip": "Instabilidade no sistema de empréstimo inteligente"
    },
    {
      "id": 283,
      "mAreaT": "(services)(lending)",
      "tUniq": "(lending-interest)",
      "tTip": "Cliente mencionando interesse em contratar o empréstimo inteligente"
    },
    {
      "id": 284,
      "mAreaT": "(services)(lending)",
      "tUniq": "(market1-unavailable)",
      "tTip": "Para casos de lending onde um cliente que antes tinha acesso ao empréstimo agora não tem, pois está em Market 1"
    },
    {
      "id": 285,
      "mAreaT": "(services)(lending)",
      "tUniq": "(sent-to-cerc)",
      "tTip": "Usada para casos onde enviamos nosso cliente para a CERC devido lendings em atraso"
    },
    {
      "id": 286,
      "mAreaT": "(services)(lending)",
      "tUniq": "(sent-to-cerc-and-partner)",
      "tTip": "Para casos onde o EC foi enviado tanto para a cobrança de empresa parceira quanto para a CERC em outras máquinas",
    },
    // --------------------------     SERVICES - PHONE SUPP -------------------------------------------------
    {
      "id": 287,
      "mAreaT": "(services)(phone-support)",
      "tUniq": "(nps-no-return)",
      "tTip": "Chat aberto após insucesso no contato telefônico do NPS.",
    },
    {
      "id": 288,
      "mAreaT": "(services)(phone-support)",
      "tUniq": "(ombudsman-contact)",
      "tTip": "Atendimentos encaminhados para a Ouvidoria",
    },
    {
      "id": 289,
      "mAreaT": "(services)(phone-support)",
      "tUniq": "(proactive-phone-contact)",
      "tTip": "Usada quando ligamos proativamente para um cliente",
    },
    {
      "id": 290,
      "mAreaT": "(services)(phone-support)",
      "tUniq": "(restricted-access)",
      "tTip": "Explicando ao cliente que a Central Telefônica ainda está restrita devido à fase de testes",
    },
    // --------------------------     SERVICES - RECEIVABLES -------------------------------------------------
    {
      "id": 291,
      "mAreaT": "(services)(receivables)",
      "tUniq": "(referral-program-informations)",
      "tTip": "Informações sobre o nosso programa de indicação",
    },
    // --------------------------     WITHDRAWS - CERC -------------------------------------------------
    {
      "id": 292,
      "mAreaT": "(withdraws)(cerc)",
      "tUniq": "(cerc-error-paid)",
      "tTip": "Informações sobre fluxo de pagamento durante análise de contestação da CERC. Para quando depositamos na conta normal devido a demora",
    },
    {
      "id": 293,
      "mAreaT": "(withdraws)(cerc)",
      "tUniq": "(cerc-informations)",
      "tTip": "Informações gerais sobre CERC e desconto de recebíveis associados a contratos CERC.",
    },
    {
      "id": 294,
      "mAreaT": "(withdraws)(cerc)",
      "tUniq": "(cerc-plea)",
      "tTip": "Contestação de cobrança da CERC.",
    },
    {
      "id": 295,
      "mAreaT": "(withdraws)(cerc)",
      "tUniq": "(cerc-plea)(no-response)",
      "tTip": "Contestação CERC ainda sem retorno.",
    },
    // --------------------------     WITHDRAWS - CHARGEBACK -------------------------------------------------
    {
      "id": 296,
      "mAreaT": "(withdraws)(chargeback)",
      "tUniq": "(cbk-payment-methods)",
      "tTip": "Dúvidas sobre como pagar um chargeback",
    },
    {
      "id": 297,
      "mAreaT": "(withdraws)(chargeback)",
      "tUniq": "(chargeback-informations)",
      "tTip": "Informações gerais sobre chargeback que não se enquadrem nas demais tags dessa categoria.",
    },
    {
      "id": 298,
      "mAreaT": "(withdraws)(chargeback)",
      "tUniq": "(dispute-documents-app)",
      "tTip": "Instruções para abertura de disputa de chargeback via app",
    },
    {
      "id": 299,
      "mAreaT": "(withdraws)(chargeback)",
      "tUniq": "(dispute-documents-request)",
      "tTip": "Para casos onde solicitamos documentação para disputa de CBK para o EC no chat",
    },
    {
      "id": 300,
      "mAreaT": "(withdraws)(chargeback)",
      "tUniq": "(fraudulent-transaction-chargeback)",
      "tTip": "Cliente que sofreu chargeback de tipo fraude",
    },
    {
      "id": 301,
      "mAreaT": "(withdraws)(chargeback)",
      "tUniq": "(payment-link-safety-tips)",
      "tTip": "Dicas para o cliente se precaver contra chargebacks em vendas via link.",
    },
    // --------------------------     WITHDRAWS - COLLECTION -------------------------------------------------
    {
      "id": 302,
      "mAreaT": "(withdraws)(collection)",
      "tUniq": "(collection-negotiation)",
      "tTip": "Encaminhamento de tratativa de cobrança para parceira externa para negociação de valores",
    },
    {
      "id": 303,
      "mAreaT": "(withdraws)(collection)",
      "tUniq": "(collection-receipt)",
      "tTip": "Comprovante/recibo de pagamento referente a billing",
    },
    {
      "id": 304,
      "mAreaT": "(withdraws)(collection)",
      "tUniq": "(pending-billing-informations)",
      "tTip": "Informações sobre uma billing específica e como quitá-la",
    },
    {
      "id": 305,
      "mAreaT": "(withdraws)(collection)",
      "tUniq": "(pending-billing-leader)",
      "tTip": "Informações sobre a parceira de cobrança Leader",
    },
    {
      "id": 306,
      "mAreaT": "(withdraws)(collection)",
      "tUniq": "(pending-billing-meireles)",
      "tTip": "Informações sobre a parceira de cobrança Meireles e Freitas",
    },
    // --------------------------     WITHDRAWS - FEES -------------------------------------------------
    {
      "id": 307,
      "mAreaT": "(withdraws)(fees)",
      "tUniq": "(fee-video)",
      "tTip": "Link do vídeo sobre nossas taxas",
    },
    {
      "id": 308,
      "mAreaT": "(withdraws)(fees)",
      "tUniq": "(fees-anticipation)",
      "tTip": "Informações gerais sobre as taxas aplicadas e antecipação.",
    },
    {
      "id": 309,
      "mAreaT": "(withdraws)(fees)",
      "tUniq": "(fees-details)",
      "tTip": "Detalhamento sobre taxas aplicadas",
    },
    // --------------------------     WITHDRAWS - MONITORING -------------------------------------------------
    {
      "id": 310,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(3-day-withdraw-blocked)",
      "tTip": "Informações sobre bloqueio de 3 dias para análise de vendas atípicas.",
    },
    {
      "id": 311,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(3-day-withdraw-blocked-insist)",
      "tTip": "Cliente que insiste após passarmos as informações sobre bloqueio de 3 dias para análise de vendas atípicas.",
    },
    {
      "id": 312,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(business-validation-information)",
      "tTip": "Solicitação de detalhes do estabelecimento para validação de negócio.",
    },
    {
      "id": 313,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(cardholder-blocked)",
      "tTip": "Informações sobre bloqueio de conta de cardholder.",
    },
    {
      "id": 314,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(cardholder-blocked-reason)",
      "tTip": "Explicação bloqueio de CardHolder.",
    },
    {
      "id": 315,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(merchant-blocked-insist)",
      "tTip": "EC bloqueado que insiste após já termos explicado o motivo do bloqueio do cadastro.",
    },
    {
      "id": 316,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(merchant-blocked-insist-2)",
      "tTip": "EC bloqueado que continua insistindo por informações",
    },
    {
      "id": 317,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(merchant-blocked-shutdown)",
      "tTip": "Quando encerramos o contato após insistência no mesmo assunto pelo EC",
    },
    {
      "id": 318,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(transfer-monitoring)",
      "tTip": "Atendimento sendo encaminhado para monitoring",
    },
    {
      "id": 319,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-doc-request)",
      "tTip": "(Fila UNICO) Requisição de documentos",
    },
    {
      "id": 320,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-loading-loop)",
      "tTip": "Instruções para resolução de tela travada durante validação da UNICO",
    },
    {
      "id": 321,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-manual-validation-approved)",
      "tTip": "(Fila UNICO) Quando aprovamos um EC por validação manual",
    },
    {
      "id": 322,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-manual-validation-denied)",
      "tTip": "(Fila UNICO) Quando negamos um EC por validação manual",
    },
    {
      "id": 323,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-manual-validation-ok)",
      "tTip": "(Fila UNICO) Validação manual iniciada",
    },
    {
      "id": 324,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-reschedule)",
      "tTip": "(Fila UNICO) Reagendamento de meet UNICO",
    },
    {
      "id": 325,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-RL-divergent)",
      "tTip": "(Fila UNICO) RL divergente",
    },
    {
      "id": 326,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-scheduled)",
      "tTip": "(Fila UNICO) Validação agendada",
    },
    {
      "id": 327,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-validation)",
      "tTip": "Instruções para validação de identidade da UNICO que temos no app",
    },
    {
      "id": 328,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-validation-denied)",
      "tTip": "Atendimento sendo encaminhado para fila de UNICO denied",
    },
    {
      "id": 329,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-validation-resent)",
      "tTip": "Reenvio de link de validação da UNICO",
    },
    {
      "id": 330,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-validation-resent-approved)",
      "tTip": "(Fila UNICO) Validação reenviada com EC approved",
    },
    {
      "id": 331,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-validation-tips)",
      "tTip": "Dicas para facilitar validação de identidade via UNICO",
    },
    {
      "id": 332,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-video-completed)",
      "tTip": "(Fila UNICO) Vídeo do meet da UNICO corretamente processado",
    },
    {
      "id": 333,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-waiting-appointment)",
      "tTip": "(Fila UNICO) Aguardando agendamento",
    },
    {
      "id": 334,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(UNICO-waiting-return)",
      "tTip": "(Fila UNICO) Aguardando retorno do EC",
    },
    {
      "id": 335,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(withdraw-locked-business-validation)",
      "tTip": "Questões referentes a recebimentos e antecipação",
    },
    {
      "id": 336,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(withdraw-locked-cardholder)",
      "tTip": "Informações sobre bloqueio de recebíveis e respaldo contratual para o mesmo",
    },
    {
      "id": 337,
      "mAreaT": "(withdraws)(monitoring)",
      "tUniq": "(withdraw-locked-information)",
      "tTip": "Informações sobre bloqueio de recebíveis e respaldo contratual para o mesmo",
    },
    // --------------------------     WITHDRAWS - PIX -------------------------------------------------
    {
      "id": 338,
      "mAreaT": "(withdraws)(pix)",
      "tUniq": "(brlc-informations)",
      "tTip": "Dúvidas gerais sobre BRLC, exceto sobre como fazer transferência.",
    },
    {
      "id": 339,
      "mAreaT": "(withdraws)(pix)",
      "tUniq": "(brlc-transfer-guide)",
      "tTip": "Dúvida sobre como realizar transferência de BRLC.",
    },
    {
      "id": 340,
      "mAreaT": "(withdraws)(pix)",
      "tUniq": "(brlc-transfer-informations)",
      "tTip": "Dúvidas sobre uma transferência de BRLC.",
    },
    {
      "id": 341,
      "mAreaT": "(withdraws)(pix)",
      "tUniq": "(pix-cashin-guide)",
      "tTip": "Cliente pede orientações sobre como fazer um Pix para a InfiniteWallet",
    },
    {
      "id": 342,
      "mAreaT": "(withdraws)(pix)",
      "tUniq": "(pix-receipt)",
      "tTip": "Questões envolvendo recibo de transações Pix",
    },
    // --------------------------     WITHDRAWS - RECEIVABLES -------------------------------------------------
    {
      "id": 343,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(analise_casos_20221023)",
      "tTip": "Para casos de vendas do dia 23/10 (instabilidade) que não aparecem no CRM",
    },
    {
      "id": 344,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(cerc-peac)",
      "tTip": "Explicação do programa PEAC Maquininhas.",
    },
    {
      "id": 345,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(cip)",
      "tTip": "Instabilidade na liquidação de recebíveis por problemas na CIP.",
    },
    {
      "id": 346,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(cip-explanation)",
      "tTip": "Explicação do que é a CIP.",
    },
    {
      "id": 347,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(cpf-account-transfer)",
      "tTip": "Transferência para conta PF",
    },
    {
      "id": 348,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(d30-information)",
      "tTip": "Cliente interessado em aderir ao programa de não antecipação",
    },
    {
      "id": 349,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(d30-interested)",
      "tTip": "Cliente interessado em aderir ao programa de não antecipação",
    },
    {
      "id": 350,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(payment-delay)",
      "tTip": "Quando o cliente reclama na demora dos pagamentos, mas que é resolvido em pouco tempo. Pode ser algo de risco, erro geral ou falha de pagamento",
    },
    {
      "id": 351,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(payment-delayed-error)",
      "tTip": "Pagamento em atraso que consta com erro em nosso sistema devido a questões externas (falha do banco)",
    },
    {
      "id": 352,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(payment-delayed-error-cw)",
      "tTip": "Pagamento em atraso que consta com erro em nosso sistema devido a questões internas (falha da CW)",
    },
    {
      "id": 353,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(payment-delayed-in-transfer)",
      "tTip": "Pagamentos em atraso que ainda não tem transfer gerada, mas aparecem como 'To be made available today'",
    },
    {
      "id": 354,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(payment-delayed-pending)",
      "tTip": "Pagamento em atraso que consta como pendente em nosso sistema",
    },
    {
      "id": 355,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(payment-delayed-success)",
      "tTip": "Pagamento em atraso que consta como sucesso em nosso sistema",
    },
    {
      "id": 356,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(payment-instability)",
      "tTip": "Instabilidade na liquidação de recebíveis por problemas internos",
    },
    {
      "id": 357,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(payment-time)",
      "tTip": "Quando o cliente solicita pagamentos mais cedo, reclamando do horário padrão",
    },
    {
      "id": 358,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(receivables-dispute) ",
      "tTip": "Quando o cliente questiona o valor recebido na transferência, dizendo que está errado",
    },
    {
      "id": 359,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(receivables-informations)",
      "tTip": "Informações gerais sobre os valores de recebimento.",
    },
    {
      "id": 360,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(receiving-via-ted)",
      "tTip": "Para casos onde o EC está recebendo seus valores via TED",
    },
    {
      "id": 361,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(referral-program)",
      "tTip": "Informações sobre o pagamento de bônus pelo programa de indicação",
    },
    {
      "id": 362,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(split-payment)",
      "tTip": "Explicação do modelo de pagamento fracionado",
    },
    {
      "id": 363,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(spot-anticipation)",
      "tTip": "Para atendimentos gerais relacionados ao Spot anticipation",
    },
    // --------------------------     STANDALONE - - -------------------------------------------------
    {
      "id": 364,
      "mAreaT": "-",
      "tUniq": "(appstore-rating)",
      "tTip": "Solicitação para que o aplicativo seja avaliado pelo EC, especificamente para a plataforma da AppStore.",
    },
    {
      "id": 365,
      "mAreaT": "-",
      "tUniq": "(fim-de-turno-teste)",
      "tTip": "Macro de teste para alguns squads",
    },
    {
      "id": 366,
      "mAreaT": "-",
      "tUniq": "(general-rating)",
      "tTip": "Solicitação para que o aplicativo seja avaliado pelo EC, sem especificação da plataforma.",
    },
    {
      "id": 367,
      "mAreaT": "-",
      "tUniq": "(googleplay-rating)",
      "tTip": "Solicitação para que o aplicativo seja avaliado pelo EC, especificamente para a plataforma da Google Play.",
    },
    {
      "id": 368,
      "mAreaT": "-",
      "tUniq": "(internal-WF)(address-exchg)",
      "tTip": "Tag usada apenas aos Finais de semana, para analistas liberados",
    },
    {
      "id": 369,
      "mAreaT": "-",
      "tUniq": "(internal-WF)(DO-status)",
      "tTip": "Tag usada apenas aos Finais de semana, para analistas liberados",
    },
    {
      "id": 370,
      "mAreaT": "-",
      "tUniq": "(internal-WF)(other-problems)",
      "tTip": "Tag usada apenas aos Finais de semana, para analistas liberados",
    },
    {
      "id": 371,
      "mAreaT": "-",
      "tUniq": "(internal-WF)(P2-issues)",
      "tTip": "Tag usada apenas aos Finais de semana, para analistas liberados",
    },
    {
      "id": 372,
      "mAreaT": "-",
      "tUniq": "(internal-WF)(pix)",
      "tTip": "Tag usada apenas aos Finais de semana, para analistas liberados",
    },
    {
      "id": 373,
      "mAreaT": "-",
      "tUniq": "(internal-WF)(POS-Display)",
      "tTip": "Tag usada apenas aos Finais de semana, para analistas liberados",
    },
    {
      "id": 374,
      "mAreaT": "-",
      "tUniq": "(internal-WF)(S920-issues)",
      "tTip": "Tag usada apenas aos Finais de semana, para analistas liberados",
    },
    {
      "id": 375,
      "mAreaT": "-",
      "tUniq": "(internal-WF)(Wifi-Connection)",
      "tTip": "Tag usada apenas aos Finais de semana, para analistas liberados",
    },
    {
      "id": 376,
      "mAreaT": "-",
      "tUniq": "(internal-WF)(X990-issues)",
      "tTip": "Tag usada apenas aos Finais de semana, para analistas liberados",
    },
    {
      "id": 377,
      "mAreaT": "-",
      "tUniq": "(no-subject)",
      "tTip": "Use com cuidado! Tag para chats onde o EC não deixa o assunto/problema claro e não retorna",
    },
    {
      "id": 378,
      "mAreaT": "-",
      "tUniq": "(payment-error-sept-12)",
      "tTip": "Erro de pagamento dia 12/09",
    },
    {
      "id": 379,
      "mAreaT": "-",
      "tUniq": "(pj-in-ch-account)",
      "tTip": "Para casos onde nosso EC loga na conta de Cardholder e não percebe, gerando problemas",
    },
    {
      "id": 380,
      "mAreaT": "-",
      "tUniq": "(problem-solved)",
      "tTip": "Tag de controle para teste no chat",
    },
    {
      "id": 381,
      "mAreaT": "-",
      "tUniq": "(ra-closure-evaluation)",
      "tTip": "(Exclusivo do RA) Para finalizações de tickets do RA onde pedimos a avaliação",
    },
    {
      "id": 382,
      "mAreaT": "-",
      "tUniq": "(risk-compliance)",
      "tTip": "Tag especial de uso de outro time. Favor não usar",
    },
    {
      "id": 383,
      "mAreaT": "-",
      "tUniq": "(social-media-inquiry)",
      "tTip": "Dúvidas relacionadas ao time Myriads, de mídias",
    },
// --------------------------     Atualizações 05/12 -------------------------------------------------
    {
      "id": 384,
      "mAreaT": "(pos-doubt)(refund)",
      "tUniq": "(d0-refund-information)",
      "tTip": "Informações sobre cancelamento de venda em plano d+0",
    },
    {
      "id": 385,
      "mAreaT": "(pos-doubt)(refund)",
      "tUniq": "(d0-refund-information)",
      "tTip": "Informações sobre cancelamento de venda em plano d+0",
    },
    {
      "id": 386,
      "mAreaT": "(services)(app)",
      "tUniq": "(payment-link-missing-transaction)",
      "tTip": "Erro específico desde dia 5/11 relativo a vendas por payment link que não aparecem no CRM",
    },
    {
      "id": 387,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(d0-payment-instability)",
      "tTip": "Instabilidade na liquidação de recebíveis por problemas internos",
    },
    {
      "id": 388,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(d0-payment-delay)",
      "tTip": "Cliente reclama na demora dos pagamentos, mas que é resolvido em pouco tempo. Pode ser algo de risco, erro geral ou falha de pagamento",
    },
    {
      "id": 389,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(d0-interested)",
      "tTip": "Cliente interessado em aderir ao programa d+0 de antecipação",
    },
    {
      "id": 390,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(d0-information)",
      "tTip": "Cliente com dúvidas sobre funcionamento geral do programa d+0 de antecipação",
    },
    {
      "id": 391,
      "mAreaT": "(services)(web)",
      "tUniq": "(payment-link-web-denied)",
      "tTip": "Quando uma tentativa de pagamento pelo Link web é negada",
    },
    {
      "id": 392,
      "mAreaT": "(services)(informations)",
      "tUniq": "(black-friday-2022-information)",
      "tTip": "Dúvidas sobre participação e regulamentação da promoção de Black Friday 2022",
    },
    {
      "id": 393,
      "mAreaT": "(pos-doubt)(pos)",
      "tUniq": "(no-SIM-POS-dispute)",
      "tTip": "Cliente reclama do recebimento da máquina sem chip",
    },
    {
      "id": 394,
      "mAreaT": "(accreditation)(logged-out)",
      "tUniq": "(legal-representative-validation-logged-out)",
      "tTip": "Clientes que estão deslogados e precisam fazer validação",
    },
    {
      "id": 395,
      "mAreaT": "(withdraws)(homebanking)",
      "tUniq": "(delayed-minting)",
      "tTip": "Casos onde a mintagem dos BRLCs atrasa, deixando a transfer como success mas o valor indisponível",
    },
    {
      "id": 396,
      "mAreaT": "(withdraws)(homebanking)",
      "tUniq": "(opt-in-request)",
      "tTip": "Solicitação de entrada no homebanking",
    },
    {
      "id": 397,
      "mAreaT": "(withdraws)(homebanking)",
      "tUniq": "(opt-out-request)",
      "tTip": "Solicitação de remoção do homebanking",
    },
    {
      "id": 398,
      "mAreaT": "(withdraws)(homebanking)",
      "tUniq": "(hb-payment-delay)",
      "tTip": "Reclamações de atrasos em pagamentos no homebanking",
    },
    {
      "id": 399,
      "mAreaT": "(withdraws)(homebanking)",
      "tUniq": "(hb-receivables-dispute)",
      "tTip": "Cliente questiona o valor recebido na transferência, dizendo que está errado",
    },
    {
      "id": 400,
      "mAreaT": "(withdraws)(homebanking)",
      "tUniq": "(hb-receivables-informations)",
      "tTip": "Informações gerais de recebimento no homebanking",
    },
    {
      "id": 401,
      "mAreaT": "(withdraws)(homebanking)",
      "tUniq": "(homebank-receivables)",
      "tTip": "Duvidas sobre recebiveis em BRLC ou Homebanking",
    },
    {
      "id": 402,
      "mAreaT": "(services)(app)",
      "tUniq": "(infinitetap)(phone-not-supported)",
      "tTip": "Telefones não suportados/sem NFC para o InfiniteTap",
    },
    {
      "id": 403,
      "mAreaT": "(services)(app)",
      "tUniq": "(infinitetap)(security-block)",
      "tTip": "Bloqueio de segurança do InfiniteTap",
    },
    {
      "id": 404,
      "mAreaT": "(services)(app)",
      "tUniq": "(infinitetap)(general-informations)",
      "tTip": "Informações e dúvidas gerais",
    },
    {
      "id": 405,
      "mAreaT": "(services)(app)",
      "tUniq": "(infinitetap)(fee-dispute)",
      "tTip": "Questionamentos sobre a alteração das taxas pós-lançamento",
    },
    {
      "id": 406,
      "mAreaT": "(services)(infinitecard)",
      "tUniq": "(card-block)",
      "tTip": "Solicitação ou questionamentos sobre bloqueios do InfiniteCard",
    },
    {
      "id": 407,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(spot-anticipation-request)",
      "tTip": "ECs que querem aderir ao Spot Anticipation",
    },
    {
      "id": 408,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(spot-anticipation-value-availability)",
      "tTip": "Questionamentos relacionados à disponibilidade de valores/vendas para antecipação via Spot",
    },
    {
      "id": 409,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(spot-anticipation-error)",
      "tTip": "Erros ao antecipar vendas pelo app",
    },
    {
      "id": 410,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(spot-anticipation-informations)",
      "tTip": "Informações gerais do Spot Anticipation",
    },
    {
      "id": 411,
      "mAreaT": "(withdraws)(receivables)",
      "tUniq": "(spot-anticipation-status-error)",
      "tTip": "Status da antecipação aparece como liquidado, mas não houve depósito referente",
    },
    {
      "id": 412,
      "mAreaT": "(services)(app)",
      "tUniq": "(payment-link-web-informations)",
      "tTip": "Dúvidas sobre o link de pagamento web",
    },
    {
      "id": 413,
      "mAreaT": "(services)(app)",
      "tUniq": "(payment-link-web)",
      "tTip": "Atendimentos relacionados ao link de pagamento web",
    },
    // --------------------------     Atualizações 07/12 -------------------------------------------------
    {
      "id": 414,
      "mAreaT": "(sales-error)(monitoring)",
      "tUniq": "(denied-monitoring-payment-link)",
      "tTip": "Para vendas negadas por risco que foram feitas pelo link de pagamento do app",
    },
    {
      "id": 415,
      "mAreaT": "(sales-error)(monitoring)",
      "tUniq": "(denied-monitoring-payment-link-web)",
      "tTip": "Para vendas negadas por risco que foram feitas pelo link de pagamento web",
    }
  ]

// Order json by mAreaT then by tUniq
tagsJSON.sort(function(a, b) {
  if (a.mAreaT.toLowerCase() === b.mAreaT.toLowerCase()) {
    return a.tUniq.toLowerCase() > b.tUniq.toLowerCase() ? 1 : (a.tUniq === b.tUniq ? 0 : -1) ;
  }
  return a.mAreaT.toLowerCase() > b.mAreaT.toLowerCase() ? 1: -1;
});

const searchInput = document.querySelector("[data-search]"); // search input field
const motherText = document.getElementById("motherText");
const tagText = document.getElementById("tagText");
const allClear = document.getElementById("clearBtn"); // X
const tagCardTemplate = document.querySelector("[data-tag-template]");  // template
const tagCardContainer = document.querySelector("[data-tag-cards-container]"); // container for all cards

let allTags = [] // arr for json

window.addEventListener('load', hideList); // dnone on all cards at load
function hideList () {
  allTags.forEach(e => {
    e.element.classList.add("dnone")
  })
}

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

allTags = tagsJSON.map(tagJ => { // allTags arr equals mapped json
  const tagCard = tagCardTemplate.content.cloneNode(true).children[0]
  const mAreaT = tagCard.querySelector("[data-mAreaT]")
  const tUniq = tagCard.querySelector("[data-tUniq]")
  const tTip = tagCard.querySelector("[data-tTip]")

  mAreaT.textContent = tagJ.mAreaT // html equals tagJ.mareaT value
  tUniq.textContent = tagJ.tUniq
  tTip.textContent = tagJ.tTip
  tagCardContainer.append(tagCard)
  return { mAreaT: tagJ.mAreaT, tUniq: tagJ.tUniq, tTip: tagJ.tTip, element: tagCard }
})

// clicks

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
