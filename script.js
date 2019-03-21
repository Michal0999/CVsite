let btn = document.getElementById("scrollDown");
let toLearn = document.getElementById("toLearn");

btn.addEventListener('click', function () {

 toLearn.scrollIntoView(false);
})