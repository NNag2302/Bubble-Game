var timer = 60;
var score = 0;
var htrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function hitNew() {
    htrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = htrn;
}

function makeBubble () {
    var clutter = "";


for (var i = 1; i <= 150; i++){
    var rn = Math.floor((Math.random() * 10 ));
    clutter += `<div class="bubble">${rn}</div>`;
}

let bub = document.querySelector("#pbtm");
bub.innerHTML = clutter;
}

function runTimer() {
    var tim = setInterval(function() {
    if ( timer > 0 ){
        timer--;
    document.querySelector("#tm").textContent = timer;
    }
    else {
        document.querySelector("#pbtm").innerHTML = `Game Over! <br> Your Score was ${score}`;
        clearInterval(tim);
    }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets) {
    clickednumber = (Number(dets.target.textContent));
    if ( clickednumber === htrn ){
        increaseScore();
        makeBubble();
        hitNew();
    } else {
        document.querySelector("#pbtm").innerHTML = `Game Over! <br> You choose wrong Tile <br> Your score was ${score}`;
        clearInterval(tim);
    }
})

runTimer();
makeBubble();
hitNew();