// گرفتن کامنت ها از localStorage
let comments = JSON.parse(localStorage.getItem("comments")) || [];

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

// سرچ کامنت ها
document.getElementById("search").addEventListener("keyup", function(){

    let value = this.value.toLowerCase();

    let allComments = document.querySelectorAll(".comment");

    allComments.forEach(comment => {

        if(comment.innerText.toLowerCase().includes(value)){

            comment.style.display = "block";

        }else{

            comment.style.display = "none";

        }

    });

});

// اجرای اولیه
showComments();