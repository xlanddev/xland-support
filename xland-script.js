// ================================
// Xland Script
// Version : 2.0 (Part 1)
// ================================

const scriptList = document.getElementById("scriptList");
const codeViewer = document.getElementById("codeViewer");

const signInBtn = document.getElementById("signInBtn");
const profileMenu = document.getElementById("profileMenu");

if (signInBtn) {

    const account = JSON.parse(localStorage.getItem("xlandAccount"));

    if (account) {

        signInBtn.textContent = "👤 " + account.username;

        signInBtn.onclick = () => {

            if (profileMenu.style.display === "block") {

                profileMenu.style.display = "none";

            } else {

                profileMenu.style.display = "block";

            }

        };

    } else {

        signInBtn.onclick = () => {

            window.location.href = "signin.html";

        };

    }

}

copyBtn.addEventListener("click", () => {

    if (!selectedScript) {

        alert("Please select a script first.");

        return;

    }

    navigator.clipboard.writeText(codeViewer.textContent);

    copyBtn.textContent = "✅ Copied!";

    setTimeout(() => {

        copyBtn.textContent = "Copy";

    }, 1500);

});

downloadBtn.addEventListener("click", () => {

    if(isEmpty(selectedScript.file)){

    alert("Invalid File");

    return;

}

window.location.href =
"download.html?file=" +
encodeURIComponent(selectedScript.file);

});


let selectedScript = null;

// ================================
// Load Scripts
// ================================

async function loadScripts() {

    try {

        const response = await fetch("scripts.json");

        if (!response.ok) {
            throw new Error("Cannot load scripts.json");
        }

        const scripts = await response.json();

        scriptList.innerHTML = "";

        scripts.forEach(script => {

            const li = document.createElement("li");

            li.textContent = "🐍 " + script.name;

            li.addEventListener("click", () => {

                openScript(script);

            });

            scriptList.appendChild(li);

        });

    }

    catch (error) {

        console.error(error);

        scriptList.innerHTML =
        "<li>Cannot load scripts.</li>";

    }

}

// ================================
// Open Script
// ================================

async function openScript(script) {

    selectedScript = script;

    try {

        const response = await fetch(script.file);

        if (!response.ok) {
            throw new Error("Cannot open script.");
        }

        const code = await response.text();

        codeViewer.textContent =
        limitText(code,500000);

    }

    catch (error) {

        console.error(error);

        codeViewer.textContent =
        "Cannot open script.";

    }

}

// ================================
// Start
// ================================

loadScripts();

const aboutBtn = document.getElementById("aboutBtn");

aboutBtn.addEventListener("click", () => {
    window.location.href = "about.html";
});

const changePasswordBtn = document.getElementById("changePasswordBtn");

changePasswordBtn.addEventListener("click", () => {

    window.location.href = "change-password.html";

});

const logoutBtn = document.getElementById("logoutBtn");

const logoutModal = document.getElementById("logoutModal");

const yesLogout = document.getElementById("yesLogout");

const noLogout = document.getElementById("noLogout");

logoutBtn.addEventListener("click",()=>{

    logoutModal.style.display="flex";

});

noLogout.addEventListener("click",()=>{

    logoutModal.style.display="none";

});

yesLogout.addEventListener("click",()=>{

    localStorage.removeItem("xlandAccount");

    window.location.href="xland-script.html";

});

