console.log("Hindi Typing Tutor loaded.");

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

const wordBank = [
  "घर",
  "आम",
  "पानी",
  "फूल",
  "बच्चा",
  "किताब",
  "स्कूल",
  "सूरज",
  "दोस्त",
  "परिवार",
  "सुबह",
  "खिड़की",
  "त्योहार",
  "कहानी",
  "स्वास्थ्य",
  "जिम्मेदारी"
];

const promptDisplay = document.getElementById("promptDisplay");
const userInputDisplay = document.getElementById("userInputDisplay");
const wordsCompletedDisplay = document.getElementById("wordsCompletedDisplay");
const keyboard = document.getElementById("keyboard");
const completionMessage = document.createElement("div");
completionMessage.id = "completionMessage";
userInputDisplay.insertAdjacentElement("afterend", completionMessage);

const statsDisplay = document.createElement("div");
const lastCpmDisplay = document.createElement("div");
const averageCpmDisplay = document.createElement("div");
const accuracyDisplay = document.createElement("div");
statsDisplay.id = "statsDisplay";
lastCpmDisplay.textContent = "Last word: 0 CPM";
averageCpmDisplay.textContent = "Average: 0 CPM";
accuracyDisplay.textContent = "Accuracy: 100%";
statsDisplay.append(lastCpmDisplay, averageCpmDisplay, accuracyDisplay);
wordsCompletedDisplay.insertAdjacentElement("afterend", statsDisplay);

let lastPrompt = "";
let currentPrompt = pickRandomPrompt();
let completedWords = 0;
let isTransitioning = false;
let promptStartTime = null;
let totalCpm = 0;
let correctChars = 0;
let totalMistakes = 0;

// Track what's been typed so far as a plain string (not reading it back
// from the DOM each time — the DOM is just a display, this is the source
// of truth).
let typedText = "";

function pickRandomPrompt() {
  let selectedPrompt;

  do {
    const randomIndex = Math.floor(Math.random() * wordBank.length);
    selectedPrompt = wordBank[randomIndex];
  } while (wordBank.length > 1 && selectedPrompt === lastPrompt);

  lastPrompt = selectedPrompt;
  return selectedPrompt;
}

function renderPrompt() {
  const isPromptReplacement = promptDisplay.querySelector("span") !== null;
  promptDisplay.innerHTML = "";

  Array.from(currentPrompt).forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.textContent = character;
    if (isPromptReplacement) {
      characterSpan.classList.add("prompt-entering");
    }
    promptDisplay.appendChild(characterSpan);
  });
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
  totalCpm += currentCpm;
  wordsCompletedDisplay.textContent = `Words completed: ${completedWords}`;
  lastCpmDisplay.textContent = `Last word: ${currentCpm} CPM`;
  averageCpmDisplay.textContent = `Average: ${Math.round(totalCpm / completedWords)} CPM`;
  completionMessage.textContent = "Completed!";

  setTimeout(() => {
    typedText = "";
    promptStartTime = null;
    currentPrompt = pickRandomPrompt();
    renderPrompt();
    renderTypingState();
    isTransitioning = false;
  }, 800);
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

      if (phonetics.unshifted !== null || phonetics.shifted !== null) {
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
    });

    keyboard.appendChild(row);
  });
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
