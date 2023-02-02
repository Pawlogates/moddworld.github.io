'use strict';



const switcher = document.querySelector('.clickbtn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('state1');
    document.body.classList.toggle('state2');

    const className = document.body.className;
    if(className == "state1") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});

$(function(){
    $('#btn').on('click', function(){
    $('#text').toggleClass('on off');

    });
});


$(function(){
    $('#text').on('click', function(){
    $('#btn').toggleClass('off on');

    });
});