// گرفتن کامنت ها از localStorage

let comments = JSON.parse(localStorage.getItem("comments")) || [];

// ===========================
// 🌐 صفحات سایت برای سرچ کل سایت
// ===========================
const sitePages = [
{ name: "قوانین Xland", url: "xland rules.html", keywords: ["قوانین", "rules", "law"] },
{ name: "دانلود مپ", url: "xland-map.html", keywords: ["مپ", "map", "دانلود مپ"] },
{ name: "دانلود بازی Xland", url: "xland.html", keywords: ["xland", "بازی", "game"] },
{ name: "Endless Road Horror", url: "endless.html", keywords: ["endless", "horror", "ترس"] },
{ name: "درباره ما", url: "about.html", keywords: ["about", "درباره"] },
{ name: "آپدیت‌ها", url: "update.html", keywords: ["update", "آپدیت"] },
{ name: "News Xland", url: "news.html", keywords: ["news", "خبر", "news xland"] }
];

// نمایش کامنت ها
function showComments(){

let commentsDiv = document.getElementById("comments");

commentsDiv.innerHTML = "";

comments.forEach(comment => {

let div = document.createElement("div");

div.className = "comment";

div.innerText = comment;

commentsDiv.appendChild(div);

});

}

// اضافه کردن کامنت
function addComment(){

let input = document.getElementById("commentInput");

let text = input.value.trim();

if(text === ""){
return;
}

// ذخیره داخل آرایه
comments.push(text);

// ذخیره داخل localStorage
localStorage.setItem("comments", JSON.stringify(comments));

// خالی شدن textarea
input.value = "";

// نمایش دوباره
showComments();

}

// ===========================
// 🔍 سرچ کامنت + سرچ کل سایت
// ===========================
document.getElementById("search").addEventListener("keyup", function(){

let value = this.value.toLowerCase().trim();

let allComments = document.querySelectorAll(".comment");

// ---------------------------
// 🌐 سرچ صفحات سایت
// ---------------------------
let foundPage = sitePages.find(page =>
page.keywords.some(k =>
k.includes(value) || value.includes(k)
) || page.name.toLowerCase().includes(value)
);

if(foundPage && value.length > 0){

this.style.border = "2px solid lime";
this.style.boxShadow = "0 0 20px lime";
this.placeholder = "👉 " + foundPage.name;

this.onkeydown = function(e){
if(e.key === "Enter"){
window.location.href = foundPage.url;
}
};

} else {

this.style.border = "";
this.style.boxShadow = "";
this.placeholder = "جستجو در کامنت ها...";

this.onkeydown = null;
}

// ---------------------------
// 💬 سرچ کامنت‌ها
// ---------------------------
allComments.forEach(comment => {

if(comment.innerText.toLowerCase().includes(value)){
comment.style.display = "block";
} else {
comment.style.display = "none";
}

});

});

// اجرای اولیه
showComments();

// ===========================
// منوی موبایل
// ===========================
function toggleMenu(){

let nav = document.getElementById("navbar");

nav.classList.toggle("show");

}

// ===========================
// 🔔 Update Banner System
// ===========================

const SITE_VERSION = "3.1";

function closeBanner(){
document.getElementById("updateBanner").style.display = "none";

// ذخیره نسخه فعلی
localStorage.setItem("updateBannerClosed", SITE_VERSION);
}

window.addEventListener("load", function(){

let banner = document.getElementById("updateBanner");

let closedVersion = localStorage.getItem("updateBannerClosed");

// اگر برای همین نسخه بسته شده بود → نمایش نده
if(closedVersion === SITE_VERSION){
banner.style.display = "none";
} else {
banner.style.display = "flex";
}

});
