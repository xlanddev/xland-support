// ============================
// XLAND Banner Slider v3.1
// ============================

const banners = [
    {
        title: "🚀 XLAND Game",
        text: "Download the latest version of XLAND Game.",
        button: "Download",
        link: "xland.html"
    },
    {
        title: "🌍 XLAND api",
        text: "Build powerful applications using XLAND API.",
        button: "Learn More",
        link: "api.html"
    },
    {
        title: "📜 XLAND Script",
        text: "Create scripts quickly with XLAND Script.",
        button: "Open",
        link: "xland-script.html"
    },
    {
        title: "🎮 Endless Road Horror 3D",
        text: "Download the latest version of the horror game.",
        button: "Play",
        link: "endless.html"
    }
];

let currentBanner = 0;

const title = document.getElementById("banner-title");
const text = document.getElementById("banner-text");
const link = document.getElementById("banner-link");
const dots = document.querySelectorAll(".dot");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showBanner(index){

    title.textContent = banners[index].title;

    text.textContent = banners[index].text;

    link.textContent = banners[index].button;

    link.href = banners[index].link;

    function showBanner(index){

    title.textContent = banners[index].title;

    text.textContent = banners[index].text;

    link.textContent = banners[index].button;

    link.href = banners[index].link;
}

dots.forEach(dot => {

    dot.classList.remove("active");

});

dots[index].classList.add("active");

}

function nextBanner(){

    currentBanner++;

    if(currentBanner >= banners.length){

        currentBanner = 0;

    }

    showBanner(currentBanner);
}

function prevBanner(){

    currentBanner--;

    if(currentBanner < 0){

        currentBanner = banners.length - 1;

    }

    showBanner(currentBanner);
}

next.addEventListener("click", nextBanner);

prev.addEventListener("click", prevBanner);

showBanner(currentBanner);

// تغییر خودکار هر 5 ثانیه
setInterval(nextBanner,5000);