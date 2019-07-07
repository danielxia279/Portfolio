var texts = [
    'an aspiring full-stack web developer',
    // 'a full-time student',
    // 'lord of the seven kingdoms',
    // 'protector of the realm',
    'a developer'
];
var cursorFlash = false;

function flashCursor(){
    var cursor;
    setInterval(function () {
        if(cursorFlash) cursor = "|";
        else cursor = " ";
        cursorFlash = !cursorFlash;
        $('.text-cursor').html(cursor);
    }, 700);
}

function typewriterType(text, i, callback, last) {
    if (i < text.length) {
        $(".typewriter").html(text.substring(0, i + 1));
        setTimeout(function () {
            typewriterType(text, i + 1, callback, last)
        }, Math.random() * 50 + 25);
    } else if(!last){
        setTimeout(function(){
            typewriterBack(text, i - 1, callback);
        }, 700);
        
    }
}

function typewriterBack(text, i, callback) {
    $(".typewriter").html(text.substring(0, i + 1));
    if (i > -1) {
        if (i == text.length - 2) {
            setTimeout(function () {
                typewriterBack(text, i - 1, callback)
            }, 700);
        } else {
            setTimeout(function () {
                typewriterBack(text, i - 1, callback)
            }, 20);
        }
    }
    else{
        setTimeout(callback, 400);
    }
}

function StartTextAnimation(i) {
    if (0 < texts[i].length) {
        typewriterType(texts[i], 0, function () {
            StartTextAnimation(i + 1);
        }, i == texts.length - 1);
    }
}

$(function () {
    flashCursor();
    StartTextAnimation(0);
});