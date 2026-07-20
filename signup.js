const createAccountBtn = document.getElementById("createAccountBtn");
const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
    window.location.href = "signin.html";
});

createAccountBtn.addEventListener("click", () => {

    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if(email=="" , username=="", password==""){
        alert("Please fill all fields.");
        return;
    }

    if(password !== confirm){
        alert("Passwords do not match.");
        return;
    }

    const account = {

        email:email,
        username:username,
        password:password

    };

    localStorage.setItem("xlandAccount",JSON.stringify(account));

    alert("Account Created Successfully!");

    window.location.href="xland-script.html";

});