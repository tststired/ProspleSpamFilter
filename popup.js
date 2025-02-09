const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "toggleState" });
  const newState = toggleButton.textContent === "Enable" ? "Disable" : "Enable";
  toggleButton.textContent = newState;
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "updateState") {
    const isEnabled = message.state;
    toggleButton.textContent = isEnabled ? "Disable" : "Enable";  // Update button text based on state
    console.log("switched");
  }
});
