let drakeImages = [
    "assets/images/1.webp",
    "assets/images/2.webp",
    "assets/images/3.webp",
    "assets/images/4.webp",
    "assets/images/5.webp",
    "assets/images/6.webp",
    "assets/images/7.webp",
    "assets/images/8.webp",
    "assets/images/9.webp",
    "assets/images/10.webp",
    "assets/images/11.webp",
    "assets/images/12.webp",
    "assets/images/13.webp",
];

const DOMImages = document.getElementsByTagName("img");

for (let i = 0; i < DOMImages.length; i++) {
    const randomImage = Math.floor(Math.random() * drakeImages.length);
    DOMImages[i].src = chrome.runtime.getURL(drakeImages[randomImage]);
}

