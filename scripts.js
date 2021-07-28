var time;
var currentTime;
setInterval(function() {
    tick();
}, 1000);
var started = false;
var skipTheClick = false;

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
    if (currentTime === 0) {
        end();
    } else {
        makeScreenGreen();
        currentTime--;
        if (started) {
            document.getElementById("number").innerHTML = currentTime;
        }
    }
    console.log(currentTime);
}

function end() {
    makeScreenRed();
    document.getElementById("number").innerHTML = "101";
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