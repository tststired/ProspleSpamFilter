// Function to hide elements
function openingBloat() {
    console.log("Executing openingBloat function...");
    const phrases = [/opening in \d+ week*/i, /opening in \d+ month*/i];
    document.querySelectorAll("li").forEach(li => {
        const content = li.innerText;
        if (phrases.some(regex => regex.test(content))) {
            console.log(`Hiding <li>: "${content.trim()}"`);
            li.style.display = "none"; // Hide the li element by setting display to none
        }
    });
}

function ttspam() {
    console.log("Executing ttspam function...");
    const imgs = document.querySelectorAll('img[alt="TikTok Australia & New Zealand"]');
    imgs.forEach(img => {
        const parentLi = img.closest('li');
        if (parentLi) {
            console.log(`Hiding <li>: "${parentLi.innerText.trim()}"`);
            parentLi.style.display = "none"; // Hide the li element by setting display to none
        }
    });
}

document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === '~') {
        console.log("Shift + ~ pressed! Executing functions...");
        openingBloat();
        ttspam();
    }
});
