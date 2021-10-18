var time;
var currentTime;
setInterval(function() {
    tick();
}, 1000);
var started = false;
var skipTheClick = false;

var audioBeep = new Audio("sound-effects/beep.mp3");
var audioAlert = new Audio("sound-effects/alert.mp3");

function skipClick() {
    skipTheClick = true;
}

function clickBody() {
    if (skipTheClick) {
        skipTheClick = false;
        return;
    }
    if (started) {
        makeScreenLightGreen();
        document.getElementById("number").innerHTML = time;
        currentTime = time;
    } else {
        document.getElementById("form").style.display = "none";
        document.getElementById("number").innerHTML = "";
        started = true;
        setTime();
    }
}

function setTime() {
    time = document.getElementsByName("time")[0].value;
    currentTime = time;
}

function tick() {
    console.log(currentTime);

    if (currentTime < 0) {
        return;
    }

    if (currentTime === 0) {
        audioAlert.play();
        end();
    } else {
        makeScreenGreen();
        if (started) {
            document.getElementById("number").innerHTML = currentTime;
            if (currentTime < 6 && currentTime >= 0) {
                audioBeep.play();
            }
        }
    }

    currentTime--;
}

function end() {
    makeScreenRed();
    document.getElementById("number").innerHTML = "💥";
}

function makeScreenGreen() {
    document.getElementById("clickTarget").style.backgroundColor = "green";
}

function makeScreenRed() {
    document.getElementById("clickTarget").style.backgroundColor = "red";
}

function makeScreenLightGreen() {
    document.getElementById("clickTarget").style.backgroundColor = "greenyellow";
}