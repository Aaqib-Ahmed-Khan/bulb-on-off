var onBtn = document.getElementById("onBtn");
var offBtn = document.getElementById("offBtn");
var bulb = document.getElementById("bulb");

onBtn.addEventListener("click", function () {
    bulb.src = "pic_bulbon.gif";
});

offBtn.addEventListener("click", function () {
    bulb.src = "pic_bulboff.gif";
});