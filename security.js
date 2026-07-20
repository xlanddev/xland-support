// ===============================
// XLAND Security v3.1
// ===============================

"use strict";

// ===============================
// بررسی نوع داده
// ===============================

function isString(value){

    return typeof value === "string";

}

// ===============================
// حذف فاصله‌های اضافی
// ===============================

function normalizeSpaces(text){

    if(!isString(text)){

        return "";

    }

    return text.replace(/\s+/g," ").trim();

}

// ===============================
// جلوگیری از متن خیلی بزرگ
// ===============================

function limitText(text,max = 500){

    if(!isString(text)){

        return "";

    }

    if(text.length > max){

        return text.substring(0,max);

    }

    return text;

}

// ===============================
// پاکسازی ورودی کاربر
// ===============================

function sanitizeInput(text,max = 500){

    if(!isString(text)){

        return "";

    }

    text = normalizeSpaces(text);

    text = limitText(text,max);

    return text
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&#39;");

}

// ===============================
// بررسی خالی نبودن
// ===============================

function isEmpty(text){

    if(!isString(text)){

        return true;

    }

    return text.trim() === "";

}

// ===============================
// Email Validation
// ===============================

function validateEmail(email){

    if(!isString(email)){

        return false;

    }

    email = sanitizeInput(email,100);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}

// ===============================
// Username Validation
// ===============================

function validateUsername(username){

    if(!isString(username)){

        return false;

    }

    username = sanitizeInput(username,20);

    return /^[A-Za-z0-9_]{3,20}$/.test(username);

}

// ===============================
// Password Validation
// ===============================

function validatePassword(password){

    if(!isString(password)){

        return false;

    }

    if(password.length < 8){

        return false;

    }

    const hasLetter = /[A-Za-z]/.test(password);

    const hasNumber = /[0-9]/.test(password);

    return hasLetter && hasNumber;

}

// ===============================
// HTML Escape
// ===============================

function escapeHTML(text){

    if(!isString(text)){

        return "";

    }

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}

// ===============================
// JSON Validation
// ===============================

function isValidJSON(data){

    try{

        JSON.parse(data);

        return true;

    }

    catch{

        return false;

    }

}

// ===============================
// Login Attempt Limit
// ===============================

function checkLoginAttempts(){

    const attempts =
    Number(localStorage.getItem("loginAttempts")) || 0;

    const lockUntil =
    Number(localStorage.getItem("loginLockUntil")) || 0;

    if(Date.now() < lockUntil){

        return false;

    }

    return true;

}

function addLoginAttempt(){

    let attempts =
    Number(localStorage.getItem("loginAttempts")) || 0;

    attempts++;

    localStorage.setItem("loginAttempts", attempts);

    if(attempts >= 5){

        localStorage.setItem(

            "loginLockUntil",

            Date.now() + 30000

        );

        localStorage.setItem("loginAttempts",0);

    }

}

function resetLoginAttempts(){

    localStorage.removeItem("loginAttempts");

    localStorage.removeItem("loginLockUntil");

}

// ===============================
// Safe Link Validation
// ===============================

function isSafeLink(link){

    if(!isString(link)){

        return false;

    }

    if(link.includes("..")){

        return false;

    }

    return /^[a-zA-Z0-9_\-\/\.]+$/.test(link);

}

// ===============================
// File Size Validation
// ===============================

function validateFileSize(size,maxSize){

    if(typeof size !== "number"){

        return false;

    }

    return size <= maxSize;

}

// ===============================
// Security Loaded
// ===============================

console.group("🛡 XLAND Security v1.2");

console.log("✅ Input Sanitization");
console.log("✅ Email Validation");
console.log("✅ Username Validation");
console.log("✅ Password Validation");
console.log("✅ HTML Escape");
console.log("✅ JSON Validation");
console.log("✅ Text Length Limit");
console.log("✅ Type Validation");
console.log("✅ Space Normalization");
console.log("✅ Login Protection");
console.log("✅ Safe Link Validation");
console.log("✅ File Size Validation");

console.groupEnd();