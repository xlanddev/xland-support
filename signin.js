const loginBtn = document.getElementById("loginBtn");

const createBtn = document.getElementById("createBtn");



if(loginBtn){

    loginBtn.addEventListener("click",()=>{

        alert("Login System Coming Soon...");

    });

}



if(createBtn){

    createBtn.addEventListener("click",()=>{

        window.location.href="signup.html";

    });

}