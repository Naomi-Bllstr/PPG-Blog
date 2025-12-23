const heart=document.getElementById("heart");
const box=document.getElementById("box");
const confirm=document.getElementById("confirm");

heart.addEventListener("click", function() {
    box.style.display= "flex";
});

confirm.addEventListener("click", function() {
    box.style.display="none";
     
});

let btn=document.getElementById("topbtn");

function topFunction() {
    document.documentElement.scrollTop = 0;
}
