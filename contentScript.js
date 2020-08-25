//sendResponse(document.all[0].outerHTML);
console.log("oh, I did it")



// if ($(".ql-editor:contains('pw')").length) {
//     const rootElement = document.body;
//     rootElement.innerHTML = rootElement.innerHTML.replace(/(pw)/g, "<em style=\"padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); color: rgb(0, 0, 0); font-style: inherit;\">pw</em>");
//     console.log("wuf");
//     }

// const SEARCHED_WORD = 'pw';
// const MARKER = '!.'

// function textNodesUnder(el) {
//   let n;
//   const a = [];
//   const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  
//   while(n=walk.nextNode()) {a.push(n)}
  
//   return a;
// }

// const checkIsSearchedWordIncluded = nodeElement => nodeElement.data.includes(SEARCHED_WORD);
// const markSearchedWord = string => string.replace(SEARCHED_WORD, `${MARKER}${SEARCHED_WORD}`);

// const textNodes = textNodesUnder(document.body);
// const textNodesArray = Array.from(textNodes);
// const textNodesWithSearchedWord = textNodesArray.filter(checkIsSearchedWordIncluded);
// textNodesWithSearchedWord.map(nodeElement => nodeElement.data = markSearchedWord(nodeElement.data));
// const bodyContentInString = document.body.innerHTML;
// document.body.innerHTML = bodyContentInString.replace(`${MARKER}${SEARCHED_WORD}`, `<b>${SEARCHED_WORD}</b>`);


// constants
const SEARCHED_WORLD = "Hello";
const SEARCHED_WORLD_ARRAY = ['pw', 'pass', 'phone', 'credit', 'debit', 'card', 'id card', 'id number', 'tel.', 'телефонный номер', 'парол', 'номер', 'кредит', 'карта'];
const MARKER1 = "!.!.!.";
const MARKER2 = "-----";

// helpers
const textNodesUnder = (el) => {
  let n;
  const a = [];
  const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);

  while ((n = walk.nextNode())) {
    a.push(n);
  }

  return a;
};

const checkIsSearchedWordIncluded = (nodeElement) => {
  for (let i = 0; i < SEARCHED_WORLD_ARRAY.length; i++) {
    const searchedWorld = SEARCHED_WORLD_ARRAY[i];
    const regExp = new RegExp(`${searchedWorld}`, "i");
    if (regExp.test(nodeElement.data)) {
      return true;
    }
  }

  return false;
};

const markSearchedWord = (string) => {
  console.log("string: ", string);

  const finalString = SEARCHED_WORLD_ARRAY.reduce(
    (currentString, word, index) => {
      return currentString.replace(
        new RegExp(`${word}`, "gi"),
        (findedString) => `${MARKER1}${findedString}${MARKER2}`
      );
    },
    string
  );
  return finalString;
};

const findAllSubstringIndexes = (str, target) => {
  let pos = -1;
  const arr = [];
  while ((pos = str.indexOf(target, pos + 1)) != -1) {
    arr.push(pos);
  }

  return arr;
};

// runtime
const textNodes = textNodesUnder(document.body);
const textNodesArray = Array.from(textNodes);
const textNodesWithSearchedWorld = textNodesArray.filter(
  checkIsSearchedWordIncluded
);

textNodesWithSearchedWorld.map(
  (nodeElement) => (nodeElement.data = markSearchedWord(nodeElement.data))
);

// const bodyContentInString = document.body.innerHTML;
// let updatedBodyContentString;
// updatedBodyContentString = bodyContentInString.replace(
//   new RegExp(`${MARKER2}`, "ig"),
//   "</b>"
// );

// updatedBodyContentString = updatedBodyContentString.replace(
//   new RegExp(`${MARKER1}`, "ig"),
//   "<b style=\"padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(252, 123, 3); color: rgb(0, 0, 0); font-style: inherit;\">"
// );

document.body.innerHTML = updatedBodyContentString;


console.log("bliat")