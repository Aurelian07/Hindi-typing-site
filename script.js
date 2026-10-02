console.log("Hindi Typing Tutor loaded.");

const SHOW_PHONETIC_LABELS = false;

const INSCRIPT_LAYOUT = {
  Backquote: { unshifted: "ॊ", shifted: "ऒ" },
  Digit1: { unshifted: "1", shifted: "ऍ" },
  Digit2: { unshifted: "2", shifted: "ॅ" },
  Digit3: { unshifted: "3", shifted: "्र" },
  Digit4: { unshifted: "4", shifted: "र्" },
  Digit5: { unshifted: "5", shifted: "ज्ञ" },
  Digit6: { unshifted: "6", shifted: "त्र" },
  Digit7: { unshifted: "7", shifted: "क्ष" },
  Digit8: { unshifted: "8", shifted: "श्र" },
  Digit9: { unshifted: "9", shifted: "(" },
  Digit0: { unshifted: "0", shifted: ")" },
  Minus: { unshifted: "-", shifted: "ः" },
  Equal: { unshifted: "ृ", shifted: "ऋ" },
  KeyQ: { unshifted: "ौ", shifted: "औ" },
  KeyW: { unshifted: "ै", shifted: "ऐ" },
  KeyE: { unshifted: "ा", shifted: "आ" },
  KeyR: { unshifted: "ी", shifted: "ई" },
  KeyT: { unshifted: "ू", shifted: "ऊ" },
  KeyY: { unshifted: "ब", shifted: "भ" },
  KeyU: { unshifted: "ह", shifted: "ङ" },
  KeyI: { unshifted: "ग", shifted: "घ" },
  KeyO: { unshifted: "द", shifted: "ध" },
  KeyP: { unshifted: "ज", shifted: "झ" },
  BracketLeft: { unshifted: "ड", shifted: "ढ" },
  BracketRight: { unshifted: "़", shifted: "ञ" },
  Backslash: { unshifted: "ॉ", shifted: "ऑ" },
  KeyA: { unshifted: "ो", shifted: "ओ" },
  KeyS: { unshifted: "े", shifted: "ए" },
  KeyD: { unshifted: "्", shifted: "अ" },
  KeyF: { unshifted: "ि", shifted: "इ" },
  KeyG: { unshifted: "ु", shifted: "उ" },
  KeyH: { unshifted: "प", shifted: "फ" },
  KeyJ: { unshifted: "र", shifted: "ऱ" },
  KeyK: { unshifted: "क", shifted: "ख" },
  KeyL: { unshifted: "त", shifted: "थ" },
  Semicolon: { unshifted: "च", shifted: "छ" },
  Quote: { unshifted: "ट", shifted: "ठ" },
  KeyZ: { unshifted: null, shifted: null },
  KeyX: { unshifted: "ं", shifted: "ँ" },
  KeyC: { unshifted: "म", shifted: "ण" },
  KeyV: { unshifted: "न", shifted: null },
  KeyB: { unshifted: "व", shifted: "ऴ" },
  KeyN: { unshifted: "ल", shifted: "ळ" },
  KeyM: { unshifted: "स", shifted: "श" },
  Comma: { unshifted: ",", shifted: "ष" },
  Period: { unshifted: ".", shifted: "।" },
  Slash: { unshifted: "य", shifted: "य़" }
};

const PHONETIC_NAMES = {
  Backquote: { unshifted: "o", shifted: "o" },
  Digit1: { unshifted: "ek", shifted: "ae" },
  Digit2: { unshifted: "do", shifted: "e" },
  Digit3: { unshifted: "teen", shifted: "ra" },
  Digit4: { unshifted: "chaar", shifted: "r" },
  Digit5: { unshifted: "paanch", shifted: "gya" },
  Digit6: { unshifted: "chhah", shifted: "tra" },
  Digit7: { unshifted: "saat", shifted: "ksha" },
  Digit8: { unshifted: "aath", shifted: "shra" },
  Digit9: { unshifted: "nau", shifted: "open paren" },
  Digit0: { unshifted: "shunya", shifted: "close paren" },
  Minus: { unshifted: "minus", shifted: "visarga" },
  Equal: { unshifted: "ri", shifted: "ri" },
  KeyQ: { unshifted: "au", shifted: "au" },
  KeyW: { unshifted: "ai", shifted: "ai" },
  KeyE: { unshifted: "aa", shifted: "aa" },
  KeyR: { unshifted: "ee", shifted: "ee" },
  KeyT: { unshifted: "oo", shifted: "oo" },
  KeyY: { unshifted: "ba", shifted: "bha" },
  KeyU: { unshifted: "ha", shifted: "nga" },
  KeyI: { unshifted: "ga", shifted: "gha" },
  KeyO: { unshifted: "da", shifted: "dha" },
  KeyP: { unshifted: "ja", shifted: "jha" },
  BracketLeft: { unshifted: "da", shifted: "dha" },
  BracketRight: { unshifted: "nukta", shifted: "nya" },
  Backslash: { unshifted: "aw", shifted: "aw" },
  KeyA: { unshifted: "o", shifted: "o" },
  KeyS: { unshifted: "e", shifted: "e" },
  KeyD: { unshifted: "virama", shifted: "a" },
  KeyF: { unshifted: "i", shifted: "i" },
  KeyG: { unshifted: "u", shifted: "u" },
  KeyH: { unshifted: "pa", shifted: "pha" },
  KeyJ: { unshifted: "ra", shifted: "rra" },
  KeyK: { unshifted: "ka", shifted: "kha" },
  KeyL: { unshifted: "ta", shifted: "tha" },
  Semicolon: { unshifted: "cha", shifted: "chha" },
  Quote: { unshifted: "ta", shifted: "tha" },
  KeyZ: { unshifted: null, shifted: null },
  KeyX: { unshifted: "anusvara", shifted: "chandrabindu" },
  KeyC: { unshifted: "ma", shifted: "na" },
  KeyV: { unshifted: "na", shifted: null },
  KeyB: { unshifted: "va", shifted: "zha" },
  KeyN: { unshifted: "la", shifted: "lla" },
  KeyM: { unshifted: "sa", shifted: "sha" },
  Comma: { unshifted: "comma", shifted: "sha" },
  Period: { unshifted: "period", shifted: "danda" },
  Slash: { unshifted: "ya", shifted: "ya" }
};

const KEYBOARD_ROWS = [
  ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal"],
  ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"],
  ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote"],
  ["KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash"]
];

const LEFT_HAND_CODES = [
  "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5",
  "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT",
  "KeyA", "KeyS", "KeyD", "KeyF", "KeyG",
  "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB"
];

const LESSON_STAGES = [
  {
    id: 1,
    newKeys: ["KeyF", "KeyJ"],
    words: ["रि", "र"]
  },
  {
    id: 2,
    newKeys: ["KeyD", "KeyK"],
    words: ["कर", "रक", "कि", "क्र"]
  },
  {
    id: 3,
    newKeys: ["KeyS", "KeyL"],
    words: ["तक", "कर", "ते", "तर"]
  },
  {
    id: 4,
    newKeys: ["KeyA", "Semicolon"],
    words: ["चोर", "कोर", "कर", "तक"]
  },
  {
    id: 5,
    newKeys: ["KeyG", "KeyH"],
    words: ["पर", "पत्र", "पर", "तर"]
  },
  {
    id: 6,
    newKeys: ["Quote"],
    words: ["चोट", "तट", "पेट"]
  },
  {
    id: 7,
    newKeys: [],
    words: ["कर", "तक", "पर", "चोर", "चोट", "तट", "पेट", "पत्र", "रोक", "कोर"]
  },
  {
    id: 8,
    newKeys: [],
    words: ["कर", "तक", "पर", "चोर", "चोट", "तट", "पेट", "पत्र", "रोक", "कोर"],
    isMasteryCheck: true
  },
  {
    id: 9,
    newKeys: ["KeyR", "KeyU"],
    words: ["तीर", "कीट", "हल", "हर", "ही"]
  },
  {
    id: 10,
    newKeys: ["KeyE", "KeyI"],
    words: ["कान", "पान", "हार", "गाना"]
  },
  {
    id: 11,
    newKeys: ["KeyW", "KeyO"],
    words: ["दही", "दान", "दर", "पैर", "कैसा"]
  },
  {
    id: 12,
    newKeys: ["KeyQ", "KeyP"],
    words: ["जाता", "राज", "सौ", "कौन"]
  },
  {
    id: 13,
    newKeys: ["KeyT", "KeyY"],
    words: ["बात", "बहू", "सूत", "रोटी"]
  },
  {
    id: 14,
    newKeys: ["BracketLeft", "BracketRight", "Backslash"],
    words: ["बड़ा", "पेड़", "लड़का", "डॉक्टर"]
  },
  {
    id: 15,
    newKeys: [],
    words: ["कान", "हार", "दही", "कैसा", "जाता", "कौन", "बात", "रोटी", "बड़ा", "लड़का"]
  },
  {
    id: 16,
    newKeys: [],
    words: ["कान", "हार", "दही", "कैसा", "जाता", "कौन", "बात", "रोटी", "बड़ा", "लड़का"],
    isMasteryCheck: true
  },
  {
    id: 17,
    newKeys: ["KeyX", "KeyC"],
    words: ["मन", "नम", "कम", "तन", "मत"]
  },
  {
    id: 18,
    newKeys: ["KeyV", "KeyB"],
    words: ["वन", "नव", "वह", "बस", "सब"]
  },
  {
    id: 19,
    newKeys: ["KeyN", "KeyM"],
    words: ["नल", "मल", "सन", "मन", "लन"]
  },
  {
    id: 20,
    newKeys: ["Comma", "Period"],
    words: ["राम, श्याम.", "सच, झूठ.", "यह, वह."]
  },
  {
    id: 21,
    newKeys: ["Slash"],
    words: ["यम", "यह", "मय", "नय"]
  },
  {
    id: 22,
    newKeys: [],
    words: ["मन", "वन", "नल", "बस", "सब", "यह", "राम", "सच", "मय", "कम"]
  },
  {
    id: 23,
    newKeys: [],
    words: ["नम", "वह", "मल", "सन", "यम", "तन", "मत", "नव", "यह", "बस"]
  },
  {
    id: 24,
    newKeys: [],
    words: ["मन", "वन", "नल", "बस", "सब", "यह", "राम", "सच", "मय", "कम"],
    isMasteryCheck: true
  },
  {
    id: 25,
    newKeys: ["KeyE", "KeyR"],
    words: ["आम", "ईद", "आग", "कई"]
  },
  {
    id: 26,
    newKeys: ["KeyT", "KeyQ"],
    words: ["ऊन", "कौन", "ऊपर", "औरत"]
  },
  {
    id: 27,
    newKeys: ["KeyW", "KeyY"],
    words: ["ऐनक", "भारत", "भाई", "भला"]
  },
  {
    id: 28,
    newKeys: ["KeyI", "KeyO"],
    words: ["घर", "धन", "बाघ", "धूप"]
  },
  {
    id: 29,
    newKeys: ["KeyP", "BracketLeft"],
    words: ["झूठ", "ढाल", "झरना", "ढोल"]
  },
  {
    id: 30,
    newKeys: ["KeyX", "KeyC"],
    words: ["कहाँ", "यहाँ", "गण", "बाण"]
  },
  {
    id: 31,
    newKeys: ["KeyM"],
    words: ["शहर", "शाम", "विश", "आशा"]
  },
  {
    id: 32,
    newKeys: [],
    words: ["आम", "भारत", "धन", "शहर", "कहाँ", "औरत", "भाई", "ऊपर", "झूठ", "बाण"]
  },
  {
    id: 33,
    newKeys: [],
    words: ["आम", "भारत", "धन", "शहर", "कहाँ", "औरत", "भाई", "ऊपर", "झूठ", "बाण"],
    isMasteryCheck: true
  }
];
// Future pages can read localStorage["hindiTutorProgress"] as JSON:
// { currentStageIndex: number (zero-based), wordsCompletedInStage: number,
//   wordsCompleted: number, isHomeRowMastered: boolean, isTopRowMastered: boolean,
//   isBottomRowMastered: boolean, isShiftPracticeMastered: boolean }.
const PROGRESS_STORAGE_KEY = "hindiTutorProgress";

function loadProgress() {
  try {
    const serializedProgress = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!serializedProgress) {
      return null;
    }

    const progress = JSON.parse(serializedProgress);
    if (
      !progress ||
      !Number.isInteger(progress.currentStageIndex) ||
      progress.currentStageIndex < 0 ||
      progress.currentStageIndex >= LESSON_STAGES.length ||
      !Number.isInteger(progress.wordsCompletedInStage) ||
      progress.wordsCompletedInStage < 0 ||
      !Number.isInteger(progress.wordsCompleted) ||
      progress.wordsCompleted < 0 ||
      typeof progress.isHomeRowMastered !== "boolean" ||
      (progress.isTopRowMastered !== undefined && typeof progress.isTopRowMastered !== "boolean") ||
      (progress.isBottomRowMastered !== undefined && typeof progress.isBottomRowMastered !== "boolean") ||
      (progress.isShiftPracticeMastered !== undefined && typeof progress.isShiftPracticeMastered !== "boolean")
    ) {
      return null;
    }

    return {
      ...progress,
      isTopRowMastered: progress.isTopRowMastered === true,
      isBottomRowMastered: progress.isBottomRowMastered === true,
      isShiftPracticeMastered: progress.isShiftPracticeMastered === true
    };
  } catch {
    return null;
  }
}

function saveProgress() {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify({
      currentStageIndex,
      wordsCompletedInStage,
      wordsCompleted: completedWords,
      isHomeRowMastered,
      isTopRowMastered,
      isBottomRowMastered,
      isShiftPracticeMastered
    }));
  } catch {
    // Progress persistence is optional when storage is unavailable.
  }
}

let currentStageIndex = 0;
let wordsCompletedInStage = 0;
let isHomeRowMastered = false;
let isTopRowMastered = false;
let isBottomRowMastered = false;
let isShiftPracticeMastered = false;
let masteryCorrectChars = 0;
let masteryTotalAttempts = 0;
let topRowMasteryCorrectChars = 0;
let topRowMasteryTotalAttempts = 0;
let bottomRowMasteryCorrectChars = 0;
let bottomRowMasteryTotalAttempts = 0;
let shiftPracticeMasteryCorrectChars = 0;
let shiftPracticeMasteryTotalAttempts = 0;
const WORDS_PER_STAGE = 5;
const MASTERY_WORDS_TO_COMPLETE = 8;
let completedWords = 0;

const savedProgress = loadProgress();
if (savedProgress) {
  currentStageIndex = savedProgress.currentStageIndex;
  wordsCompletedInStage = savedProgress.wordsCompletedInStage;
  completedWords = savedProgress.wordsCompleted;
  isHomeRowMastered = savedProgress.isHomeRowMastered;
  isTopRowMastered = savedProgress.isTopRowMastered;
  isBottomRowMastered = savedProgress.isBottomRowMastered;
  isShiftPracticeMastered = savedProgress.isShiftPracticeMastered;
}

const promptDisplay = document.getElementById("promptDisplay");
const userInputDisplay = document.getElementById("userInputDisplay");
const wordsCompletedDisplay = document.getElementById("wordsCompletedDisplay");
wordsCompletedDisplay.textContent = `Words completed: ${completedWords}`;
const keyboard = document.getElementById("keyboard");
const completionMessage = document.createElement("div");
completionMessage.id = "completionMessage";
userInputDisplay.insertAdjacentElement("afterend", completionMessage);

const statsDisplay = document.createElement("div");
const stageDisplay = document.createElement("div");
const topRowMasteryBadge = document.createElement("div");
const bottomRowMasteryBadge = document.createElement("div");
const shiftPracticeMasteryBadge = document.createElement("div");
const lastCpmDisplay = document.createElement("div");
const averageCpmDisplay = document.createElement("div");
const accuracyDisplay = document.createElement("div");
statsDisplay.id = "statsDisplay";
topRowMasteryBadge.id = "topRowMasteryBadge";
topRowMasteryBadge.className = "top-row-mastery-badge";
topRowMasteryBadge.textContent = "✓ Top Row Mastered — Free Practice Mode";
bottomRowMasteryBadge.id = "bottomRowMasteryBadge";
bottomRowMasteryBadge.className = "top-row-mastery-badge";
bottomRowMasteryBadge.textContent = "✓ Bottom Row Mastered — Free Practice Mode";
shiftPracticeMasteryBadge.id = "shiftPracticeMasteryBadge";
shiftPracticeMasteryBadge.className = "top-row-mastery-badge";
shiftPracticeMasteryBadge.textContent = "✓ Shift Practice Mastered — Free Practice Mode";
lastCpmDisplay.textContent = "Last word: 0 CPM";
averageCpmDisplay.textContent = "Average: 0 CPM";
accuracyDisplay.textContent = "Accuracy: 100%";
statsDisplay.append(stageDisplay, topRowMasteryBadge, bottomRowMasteryBadge, shiftPracticeMasteryBadge, lastCpmDisplay, averageCpmDisplay, accuracyDisplay);
wordsCompletedDisplay.insertAdjacentElement("afterend", statsDisplay);
updateStageDisplay();

let lastPrompt = "";
let currentPrompt = pickRandomPrompt();
let isTransitioning = false;
let promptStartTime = null;
let totalCpm = 0;
let correctChars = 0;
let totalMistakes = 0;

// Track what's been typed so far as a plain string (not reading it back
// from the DOM each time — the DOM is just a display, this is the source
// of truth).
let typedText = "";

function updateStageDisplay() {
  topRowMasteryBadge.hidden = !isTopRowMastered;
  bottomRowMasteryBadge.hidden = !isBottomRowMastered;
  shiftPracticeMasteryBadge.hidden = !isShiftPracticeMastered;
  const currentStage = LESSON_STAGES[currentStageIndex];
  if (currentStage.newKeys.length === 0) {
    const practiceName = currentStage.id >= 32
      ? "shift practice"
      : `${currentStage.id >= 22 ? "bottom" : currentStage.id >= 15 ? "top" : "home"} row practice`;
    stageDisplay.textContent = `Stage ${currentStage.id} — Full ${practiceName}`;
    return;
  }

  const readableKeys = currentStage.newKeys.map((key) => key.replace("Key", ""));
  const stageProgress = Math.min(wordsCompletedInStage, WORDS_PER_STAGE);
  stageDisplay.textContent = `Stage ${currentStage.id} (${readableKeys.join(", ")}) — ${stageProgress}/${WORDS_PER_STAGE} words`;
}

function pickRandomPrompt() {
  const stageWords = LESSON_STAGES[currentStageIndex].words;
  let selectedPrompt;

  do {
    const randomIndex = Math.floor(Math.random() * stageWords.length);
    selectedPrompt = stageWords[randomIndex];
  } while (stageWords.length > 1 && selectedPrompt === lastPrompt);

  lastPrompt = selectedPrompt;
  return selectedPrompt;
}

function renderPrompt() {
  const isPromptReplacement = promptDisplay.querySelector("span") !== null;
  promptDisplay.innerHTML = "";

  Array.from(currentPrompt).forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.textContent = character;
    if (character === " ") {
      characterSpan.classList.add("space-character");
    }
    if (isPromptReplacement) {
      characterSpan.classList.add("prompt-entering");
    }
    promptDisplay.appendChild(characterSpan);
  });
}

function findKeyForCharacter(character) {
  if (character === null || character === undefined || character === "") {
    return null;
  }

  for (const [code, mapping] of Object.entries(INSCRIPT_LAYOUT)) {
    if (mapping.unshifted === character) {
      return { code, needsShift: false };
    }
    if (mapping.shifted === character) {
      return { code, needsShift: true };
    }
  }

  return null;
}

function updateNextKeyHint(character) {
  keyboard.querySelectorAll(".next-key-hint").forEach((keyElement) => {
    keyElement.classList.remove("next-key-hint");
  });

  const keyMapping = findKeyForCharacter(character);
  if (!keyMapping) {
    return;
  }

  const keyElement = keyboard.querySelector(`.inscript-key[data-code="${keyMapping.code}"]`);
  if (!keyElement) {
    return;
  }

  keyElement.classList.add("next-key-hint");
  if (keyMapping.needsShift) {
    const shiftKeyId = LEFT_HAND_CODES.includes(keyMapping.code)
      ? "right-shift-key"
      : "left-shift-key";
    document.getElementById(shiftKeyId)?.classList.add("next-key-hint");
  }
}

function renderTypingState() {
  const promptCharacters = promptDisplay.querySelectorAll("span");

  promptCharacters.forEach((characterSpan, index) => {
    characterSpan.classList.remove("correct", "incorrect", "pending", "current-character");

    if (index >= typedText.length) {
      characterSpan.classList.add("pending");
    } else if (typedText[index] === currentPrompt[index]) {
      characterSpan.classList.add("correct");
    } else {
      characterSpan.classList.add("incorrect");
    }

    if (index === typedText.length && index < currentPrompt.length) {
      characterSpan.classList.add("current-character");
    }
  });

  const nextCharacter = promptCharacters[typedText.length]?.textContent || null;
  updateNextKeyHint(nextCharacter);
  userInputDisplay.textContent = typedText;
  completionMessage.textContent = "";
}

function addCharacter(character) {
  if (isTransitioning) {
    return;
  }

  if (typedText.length === 0 && promptStartTime === null) {
    promptStartTime = Date.now();
  }

  const expectedCharacter = currentPrompt[typedText.length];
  if (character === expectedCharacter) {
    correctChars += 1;
  } else {
    totalMistakes += 1;
  }
  const currentStage = LESSON_STAGES[currentStageIndex];
  if (currentStage.id === 8 && currentStage.isMasteryCheck) {
    masteryTotalAttempts += 1;
    if (character === expectedCharacter) {
      masteryCorrectChars += 1;
    }
  }
  if (currentStage.id === 16 && currentStage.isMasteryCheck && !isTopRowMastered) {
    topRowMasteryTotalAttempts += 1;
    if (character === expectedCharacter) {
      topRowMasteryCorrectChars += 1;
    }
  }
  if (currentStage.id === 24 && currentStage.isMasteryCheck && !isBottomRowMastered) {
    bottomRowMasteryTotalAttempts += 1;
    if (character === expectedCharacter) {
      bottomRowMasteryCorrectChars += 1;
    }
  }
  if (currentStage.id === 33 && currentStage.isMasteryCheck && !isShiftPracticeMastered) {
    shiftPracticeMasteryTotalAttempts += 1;
    if (character === expectedCharacter) {
      shiftPracticeMasteryCorrectChars += 1;
    }
  }

  typedText += character;
  renderTypingState();
  updateAccuracyDisplay();

  if (typedText === currentPrompt) {
    completeCurrentWord();
  }
}

function removeLastCharacter() {
  if (isTransitioning) {
    return;
  }

  typedText = typedText.slice(0, -1);
  renderTypingState();
}

function completeCurrentWord() {
  if (isTransitioning) {
    return;
  }

  isTransitioning = true;
  const elapsedSeconds = Math.max((Date.now() - promptStartTime) / 1000, 0.001);
  const currentCpm = Math.round((currentPrompt.length / elapsedSeconds) * 60);

  completedWords += 1;
  wordsCompletedInStage += 1;
  totalCpm += currentCpm;
  wordsCompletedDisplay.textContent = `Words completed: ${completedWords}`;
  lastCpmDisplay.textContent = `Last word: ${currentCpm} CPM`;
  averageCpmDisplay.textContent = `Average: ${Math.round(totalCpm / completedWords)} CPM`;

  const currentStage = LESSON_STAGES[currentStageIndex];
  let masteryCompletionMessage = "";
  let homeRowMasteryCompleted = false;
  let topRowMasteryCompleted = false;
  let bottomRowMasteryCompleted = false;
  if (currentStage.id === 8 && currentStage.isMasteryCheck && wordsCompletedInStage >= MASTERY_WORDS_TO_COMPLETE) {
    const masteryAccuracy = Math.round((masteryCorrectChars / masteryTotalAttempts) * 100);
    masteryCompletionMessage = `Home row complete! Accuracy: ${masteryAccuracy}%`;
    isHomeRowMastered = true;
    homeRowMasteryCompleted = true;
  }

  if (currentStage.id === 16 && currentStage.isMasteryCheck && wordsCompletedInStage >= MASTERY_WORDS_TO_COMPLETE) {
    if (!isTopRowMastered) {
      const masteryAccuracy = Math.round((topRowMasteryCorrectChars / topRowMasteryTotalAttempts) * 100);
      masteryCompletionMessage = `Top row complete! Accuracy: ${masteryAccuracy}%`;
      isTopRowMastered = true;
    }
    topRowMasteryCompleted = true;
  }

  if (currentStage.id === 24 && currentStage.isMasteryCheck && wordsCompletedInStage >= MASTERY_WORDS_TO_COMPLETE) {
    if (!isBottomRowMastered) {
      const masteryAccuracy = Math.round((bottomRowMasteryCorrectChars / bottomRowMasteryTotalAttempts) * 100);
      masteryCompletionMessage = `Bottom row complete! Accuracy: ${masteryAccuracy}%`;
      isBottomRowMastered = true;
    }
    bottomRowMasteryCompleted = true;
  }

  if (currentStage.id === 33 && currentStage.isMasteryCheck && !isShiftPracticeMastered && wordsCompletedInStage >= MASTERY_WORDS_TO_COMPLETE) {
    const masteryAccuracy = Math.round((shiftPracticeMasteryCorrectChars / shiftPracticeMasteryTotalAttempts) * 100);
    masteryCompletionMessage = `Shift practice complete! Accuracy: ${masteryAccuracy}%`;
    isShiftPracticeMastered = true;
  }

  const hasNextStage = currentStageIndex < LESSON_STAGES.length - 1;
  const stageAdvanced = homeRowMasteryCompleted || topRowMasteryCompleted || bottomRowMasteryCompleted || (
    !currentStage.isMasteryCheck && wordsCompletedInStage >= WORDS_PER_STAGE && hasNextStage
  );
  if (stageAdvanced) {
    currentStageIndex += 1;
    wordsCompletedInStage = 0;
    currentPrompt = pickRandomPrompt();
  }
  saveProgress();
  updateStageDisplay();
  completionMessage.textContent = masteryCompletionMessage || (stageAdvanced
    ? `Stage complete! Moving to Stage ${LESSON_STAGES[currentStageIndex].id}`
    : "Completed!");

  setTimeout(() => {
    typedText = "";
    promptStartTime = null;
    if (!stageAdvanced) {
      currentPrompt = pickRandomPrompt();
    }
    renderPrompt();
    renderTypingState();
    isTransitioning = false;
  }, stageAdvanced ? 1500 : 800);
}

function updateAccuracyDisplay() {
  const totalAttempts = correctChars + totalMistakes;
  const accuracy = totalAttempts === 0
    ? 100
    : Math.round((correctChars / totalAttempts) * 100);

  accuracyDisplay.textContent = `Accuracy: ${accuracy}%`;
}

function getQwertyLabel(code) {
  if (code.startsWith("Key")) {
    return code.slice(3);
  }

  if (code.startsWith("Digit")) {
    return code.slice(5);
  }

  const labels = {
    Comma: ",",
    Period: ".",
    Slash: "/",
    Semicolon: ";",
    Quote: "'",
    BracketLeft: "[",
    BracketRight: "]",
    Backslash: "\\",
    Minus: "-",
    Equal: "=",
    Backquote: "`"
  };

  return labels[code] || "";
}

function appendKeyLabel(keyElement, className, text) {
  if (text === null) {
    return null;
  }

  const label = document.createElement("span");
  label.className = className;
  label.textContent = text;
  keyElement.appendChild(label);
  return label;
}

function appendDecorativeKey(row, className, label, id) {
  const keyElement = document.createElement("div");
  keyElement.className = `key ${className}`;
  keyElement.textContent = label;
  keyElement.id = id;
  row.appendChild(keyElement);
}

function formatKeyCharacter(character) {
  const dependentSigns = new Set([
    "े", "ो", "ी", "ु", "ू", "ि", "ा", "ै", "ौ", "ृ", "ं", "ः", "ँ", "़", "्"
  ]);

  return character !== null && dependentSigns.has(character)
    ? `◌${character}`
    : character;
}

function renderKeyboard() {
  keyboard.innerHTML = "";

  KEYBOARD_ROWS.forEach((rowCodes) => {
    const row = document.createElement("div");
    row.className = "key-row";

    rowCodes.forEach((code) => {
      if (code === "KeyZ") {
        appendDecorativeKey(row, "key-shift", "Shift", "left-shift-key");
      }

      const characters = INSCRIPT_LAYOUT[code];
      const phonetics = PHONETIC_NAMES[code];
      const keyElement = document.createElement("div");
      keyElement.className = "key inscript-key";
      keyElement.dataset.code = code;

      appendKeyLabel(keyElement, "key-qwerty-label", getQwertyLabel(code));
      const unshiftedCharacter = formatKeyCharacter(characters.unshifted);
      const shiftedCharacter = formatKeyCharacter(characters.shifted);
      if (unshiftedCharacter !== null || shiftedCharacter !== null) {
        const characterLabel = appendKeyLabel(
          keyElement,
          "key-character",
          unshiftedCharacter || shiftedCharacter
        );
        characterLabel.dataset.characterUnshifted = unshiftedCharacter || "";
        characterLabel.dataset.characterShifted = shiftedCharacter || "";
      }

      if (SHOW_PHONETIC_LABELS && (phonetics.unshifted !== null || phonetics.shifted !== null)) {
        const phoneticLabel = appendKeyLabel(
          keyElement,
          "key-phonetic",
          phonetics.unshifted
        );

        if (phonetics.unshifted !== null) {
          phoneticLabel.dataset.phoneticUnshifted = phonetics.unshifted;
        }
        if (phonetics.shifted !== null) {
          phoneticLabel.dataset.phoneticShifted = phonetics.shifted;
        }
        phoneticLabel.hidden = phonetics.unshifted === null;
      }

      row.appendChild(keyElement);

      if (code === "Quote") {
        appendDecorativeKey(row, "key-enter", "Enter", "enter-key");
      } else if (code === "Slash") {
        appendDecorativeKey(row, "key-shift", "Shift", "right-shift-key");
      }
    });

    keyboard.appendChild(row);
  });

  const modifierRow = document.createElement("div");
  modifierRow.className = "key-row key-spacebar-row";
  modifierRow.setAttribute("aria-hidden", "true");

  ["Ctrl", "Win", "Alt", "spacebar", "Alt", "Win", "Menu", "Ctrl"].forEach((label) => {
    const keyElement = document.createElement("div");
    if (label === "spacebar") {
      keyElement.className = "key-spacebar";
    } else {
      keyElement.className = "key-modifier";
      keyElement.textContent = label;
    }
    modifierRow.appendChild(keyElement);
  });

  keyboard.appendChild(modifierRow);
}

function setKeyboardShiftState(isShiftActive) {
  document.querySelectorAll(".inscript-key").forEach((keyElement) => {
    keyElement.classList.toggle("shift-active", isShiftActive);

    const characterLabel = keyElement.querySelector(".key-character");
    const character = characterLabel && (isShiftActive
      ? characterLabel.dataset.characterShifted
      : characterLabel.dataset.characterUnshifted);
    if (characterLabel) {
      characterLabel.textContent = character;
      characterLabel.hidden = !character;
    }
    keyElement.classList.toggle("key-unmapped", !character);

    const phoneticLabel = keyElement.querySelector(".key-phonetic");
    if (phoneticLabel) {
      const phonetic = isShiftActive
        ? phoneticLabel.dataset.phoneticShifted
        : phoneticLabel.dataset.phoneticUnshifted;
      phoneticLabel.textContent = phonetic || "";
      phoneticLabel.hidden = !phonetic;
    }
  });
}

function handlePhysicalKeyboardInput(event) {
  if (event.ctrlKey || event.altKey || event.metaKey) {
    return;
  }

  if (event.key === "Backspace") {
    event.preventDefault();
    removeLastCharacter();
    return;
  }

  const keyMapping = INSCRIPT_LAYOUT[event.code];
  if (keyMapping) {
    event.preventDefault();
    const character = event.shiftKey ? keyMapping.shifted : keyMapping.unshifted;
    if (character !== null) {
      addCharacter(character);
    }
  }
}

function createBackspaceKey() {
  const backspaceKey = document.createElement("div");
  backspaceKey.className = "key backspace-key";
  backspaceKey.textContent = "Backspace";
  backspaceKey.setAttribute("role", "button");
  backspaceKey.setAttribute("aria-label", "Delete the last typed character");
  backspaceKey.addEventListener("click", removeLastCharacter);

  keyboard.querySelector(".key-row").appendChild(backspaceKey);
}

function addKeyListeners() {
  const letterKeys = document.querySelectorAll(".inscript-key");

  letterKeys.forEach((keyEl) => {
    keyEl.addEventListener("click", (event) => {
      const keyMapping = INSCRIPT_LAYOUT[keyEl.dataset.code];
      const character = event.shiftKey || keyEl.classList.contains("shift-active")
        ? keyMapping.shifted
        : keyMapping.unshifted;
      if (character !== null) {
        addCharacter(character);
      }
    });
  });
}

document.addEventListener("keydown", handlePhysicalKeyboardInput);
document.addEventListener("keydown", (event) => setKeyboardShiftState(event.shiftKey));
document.addEventListener("keyup", (event) => setKeyboardShiftState(event.shiftKey));
window.addEventListener("blur", () => setKeyboardShiftState(false));

renderPrompt();
renderKeyboard();
createBackspaceKey();
setKeyboardShiftState(false);
addKeyListeners();
renderTypingState();
