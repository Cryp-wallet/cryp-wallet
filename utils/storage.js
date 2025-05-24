// ✅ Storage Helpers (for Chrome Extension)

export function saveToStorage(key, value) {
  if (chrome && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({ [key]: value }, () => {
      console.log(`Saved ${key} to storage.`);
    });
  } else {
    localStorage.setItem(key, value);
    console.log(`Saved ${key} to localStorage.`);
  }
}

export function getFromStorage(key, callback) {
  if (chrome && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get([key], (result) => {
      callback(result[key]);
    });
  } else {
    const value = localStorage.getItem(key);
    callback(value);
  }
}

export function matchSeedPhrase(inputPhrase, callback) {
  getFromStorage("seedPhrase", (storedPhrase) => {
    if (!storedPhrase) {
      callback(false);
    } else {
      callback(inputPhrase.trim() === storedPhrase.trim());
    }
  });
}