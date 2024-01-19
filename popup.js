let hiragana = document.querySelector("#hiragana");
let katakana = document.querySelector("#katakana");
let pronunciation = document.querySelector("#pronunciation");
let reload = document.querySelector("#reload");
const kana = [
  { hiragana: "あ", katakana: "ア", pronunciation: "a" },
  { hiragana: "い", katakana: "イ", pronunciation: "i" },
  { hiragana: "う", katakana: "ウ", pronunciation: "u" },
  { hiragana: "え", katakana: "エ", pronunciation: "e" },
  { hiragana: "お", katakana: "オ", pronunciation: "o" },
  { hiragana: "か", katakana: "カ", pronunciation: "ka" },
  { hiragana: "き", katakana: "キ", pronunciation: "ki" },
  { hiragana: "く", katakana: "ク", pronunciation: "ku" },
  { hiragana: "け", katakana: "ケ", pronunciation: "ke" },
  { hiragana: "こ", katakana: "コ", pronunciation: "ko" },
  { hiragana: "さ", katakana: "サ", pronunciation: "sa" },
  { hiragana: "し", katakana: "シ", pronunciation: "shi" },
  { hiragana: "す", katakana: "ス", pronunciation: "su" },
  { hiragana: "せ", katakana: "セ", pronunciation: "se" },
  { hiragana: "そ", katakana: "ソ", pronunciation: "so" },
  { hiragana: "た", katakana: "タ", pronunciation: "ta" },
  { hiragana: "ち", katakana: "チ", pronunciation: "chi" },
  { hiragana: "つ", katakana: "ツ", pronunciation: "tsu" },
  { hiragana: "て", katakana: "テ", pronunciation: "te" },
  { hiragana: "と", katakana: "ト", pronunciation: "to" },
  { hiragana: "な", katakana: "ナ", pronunciation: "na" },
  { hiragana: "に", katakana: "ニ", pronunciation: "ni" },
  { hiragana: "ぬ", katakana: "ヌ", pronunciation: "nu" },
  { hiragana: "ね", katakana: "ネ", pronunciation: "ne" },
  { hiragana: "の", katakana: "ノ", pronunciation: "no" },
  { hiragana: "は", katakana: "ハ", pronunciation: "ha" },
  { hiragana: "ひ", katakana: "ヒ", pronunciation: "hi" },
  { hiragana: "ふ", katakana: "フ", pronunciation: "fu" },
  { hiragana: "へ", katakana: "ヘ", pronunciation: "he" },
  { hiragana: "ほ", katakana: "ホ", pronunciation: "ho" },
  { hiragana: "ま", katakana: "マ", pronunciation: "ma" },
  { hiragana: "み", katakana: "ミ", pronunciation: "mi" },
  { hiragana: "む", katakana: "ム", pronunciation: "mu" },
  { hiragana: "め", katakana: "メ", pronunciation: "me" },
  { hiragana: "も", katakana: "モ", pronunciation: "mo" },
  { hiragana: "や", katakana: "ヤ", pronunciation: "ya" },
  { hiragana: "ゆ", katakana: "ユ", pronunciation: "yu" },
  { hiragana: "よ", katakana: "ヨ", pronunciation: "yo" },
  { hiragana: "ら", katakana: "ラ", pronunciation: "ra" },
  { hiragana: "り", katakana: "リ", pronunciation: "ri" },
  { hiragana: "る", katakana: "ル", pronunciation: "ru" },
  { hiragana: "れ", katakana: "レ", pronunciation: "re" },
  { hiragana: "ろ", katakana: "ロ", pronunciation: "ro" },
  { hiragana: "わ", katakana: "ワ", pronunciation: "wa" },
  { hiragana: "を", katakana: "ヲ", pronunciation: "wo" },
  { hiragana: "ん", katakana: "ン", pronunciation: "n" },
  { hiragana: "が", katakana: "ガ", pronunciation: "ga" },
  { hiragana: "ぎ", katakana: "ギ", pronunciation: "gi" },
  { hiragana: "ぐ", katakana: "グ", pronunciation: "gu" },
  { hiragana: "げ", katakana: "ゲ", pronunciation: "ge" },
  { hiragana: "ご", katakana: "ゴ", pronunciation: "go" },
  { hiragana: "ざ", katakana: "ザ", pronunciation: "za" },
  { hiragana: "じ", katakana: "ジ", pronunciation: "ji" },
  { hiragana: "ず", katakana: "ズ", pronunciation: "zu" },
  { hiragana: "ぜ", katakana: "ゼ", pronunciation: "ze" },
  { hiragana: "ぞ", katakana: "ゾ", pronunciation: "zo" },
  { hiragana: "だ", katakana: "ダ", pronunciation: "da" },
  { hiragana: "ぢ", katakana: "ヂ", pronunciation: "di" },
  { hiragana: "づ", katakana: "ヅ", pronunciation: "du" },
  { hiragana: "で", katakana: "デ", pronunciation: "de" },
  { hiragana: "ど", katakana: "ド", pronunciation: "do" },
  { hiragana: "ば", katakana: "バ", pronunciation: "ba" },
  { hiragana: "び", katakana: "ビ", pronunciation: "bi" },
  { hiragana: "ぶ", katakana: "ブ", pronunciation: "bu" },
  { hiragana: "べ", katakana: "ベ", pronunciation: "be" },
  { hiragana: "ぼ", katakana: "ボ", pronunciation: "bo" },
  { hiragana: "ぱ", katakana: "パ", pronunciation: "pa" },
  { hiragana: "ぴ", katakana: "ピ", pronunciation: "pi" },
  { hiragana: "ぷ", katakana: "プ", pronunciation: "pu" },
  { hiragana: "ぺ", katakana: "ペ", pronunciation: "pe" },
  { hiragana: "ぽ", katakana: "ポ", pronunciation: "po" },
];

let idx = 0;
function randomKanaIndex() { 
  let i = Math.floor(Math.random() * kana.length);;
  while (idx === i) {
    i = Math.floor(Math.random() * kana.length);
  }
  idx = i;
}

function showKana() { 
  randomKanaIndex();
  hiragana.innerText = kana[idx].hiragana;
  katakana.innerText = kana[idx].katakana;
  pronunciation.innerText = kana[idx].pronunciation;
}

showKana();
reload.addEventListener("click", showKana);




