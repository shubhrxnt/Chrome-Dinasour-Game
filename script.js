var character = document.getElementById("character");

document.addEventListener("click", jump);
function jump() {
    if(character.classList == "animate") {
        return;
    }
    character.classList.add("animate");
    setTimeout(removeJump, 300);
};

function removeJump() {
    character.classList.remove("animate");
}

var block = document.getElementById("block");

function checkDead() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockleft<20 && blockleft>-20 && characterTop>=130) {
        alert("game over");
    }
}

setInterval(checkDead, 10);