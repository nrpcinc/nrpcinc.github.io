function initializeSkull() {
    window.skull = {};
    window.skull.begin = 153;
    window.skull.end = 184;
    window.skull.current = 153;
    document.onkeydown = checkKey;
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    window.skull.xDown = null;
    window.skull.yDown = null;
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



function handleTouchStart(evt) {
    //window.skull.xDown = evt.originalEvent.touches[0].clientX;
    //window.skull.yDown = evt.originalEvent.touches[0].clientY;

    window.skull.xDown = evt.touches[0].clientX;
    window.skull.yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if (!window.skull.xDown || !window.skull.yDown) {
        return;
    }

    //var xUp = evt.originalEvent.touches[0].clientX;
   // var yUp = evt.originalEvent.touches[0].clientY;

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = window.skull.xDown - xUp;
    var yDiff = window.skull.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            /* left swipe */
            changeDirection("down");
        } else {
            /* right swipe */
            changeDirection("up");
        }
    } else {
        if (yDiff > 0) {
            /* up swipe */
            changeDirection("up");
        } else {
            /* down swipe */
            changeDirection("down");
        }
    }
    /* reset values */
    window.skull.xDown = null;
    window.skull.yDown = null;
};

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