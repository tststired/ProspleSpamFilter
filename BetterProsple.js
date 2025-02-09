document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded! Running the content script...");

    function openingBloat() {
        console.log("Executing openingBloat function...");
        const phrases = [/opening in \d+ week*/i, /opening in \d+ month*/i];
        document.querySelectorAll("li").forEach(li => {
            const content = li.innerText;
            if (phrases.some(regex => regex.test(content))) {
                console.log(`Removing <li>: "${content.trim()}"`);
                li.remove();
            }
        });
    }

    function ttspam() {
        console.log("Executing ttspam function...");
        const imgs = document.querySelectorAll('img[alt="TikTok Australia & New Zealand"]');
        imgs.forEach(img => {
            const parentLi = img.closest('li');
            if (parentLi) {
                console.log(`Removing <li>: "${parentLi.innerText.trim()}"`);
                parentLi.remove();
            }
        });
        
        
    }

    openingBloat(); //temp
    ttspam(); //temp

    chrome.runtime.onMessage.addListener((message) => {
        if (message.action === "toggleState") {
            const isEnabled = message.state;
            console.log(`Received toggleState message: ${isEnabled ? "Enabled" : "Disabled"}`);

            if (!isEnabled) {
                console.log("Extension is disabled, no actions will be taken.");
                return;
            }


        }
    });
});
