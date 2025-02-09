let isEnabled = true; // Default state: enabled

// Listen for the toggleState message from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggleState") {
    isEnabled = !isEnabled; 
    console.log(`State toggled: ${isEnabled ? "Enabled" : "Disabled"}`);
    chrome.runtime.sendMessage({ action: "updateState", state: isEnabled });
  }
});
