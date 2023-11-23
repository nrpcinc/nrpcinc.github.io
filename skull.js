function initializeSkull() {
    window.skull = {};
    window.skull.begin = 153;
    window.skull.end = 184;
    window.skull.current = 153;
    document.onkeydown = checkKey;
}

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        changeDirection("up");
    }
    else if (e.keyCode == '40') {
        // down arrow
        changeDirection("down");
    }
    else if (e.keyCode == '37') {
        // left arrow
        changeDirection("down");
    }
    else if (e.keyCode == '39') {
        // right arrow
        changeDirection("up");
    }
}

function changeDirection(dir) {
    document.getElementById("skullNotification").innerHTML = "";
    if (dir == "up") {
        if (window.skull.current < window.skull.end) {
            window.skull.current++;
        }
        else {
            endOfPicsHit();
        }
    }
    else if (dir == "down") {
        if (window.skull.current > window.skull.begin) {
            window.skull.current--;
        }
        else {
            endOfPicsHit();
        }
    }
    document.getElementById("skullImage").src = "./images/" + window.skull.current + ".png";
    document.getElementById("imageplacement").innerHTML = window.skull.current;
    
}

function endOfPicsHit() {
    document.getElementById("skullNotification").innerHTML = "";
    insertPrimaryMessage("skullPopup","directional image end hit");
}