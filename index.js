console.log('begin')
gameResize();
mobile_controls()

window.addEventListener("load", function() {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.game').style.display = 'block';
    document.querySelector('.modal').style.opacity = '1';
    typewriter();
}, false);

window.addEventListener('keydown',function(e) {
    if (e.key == ' '){
        if (initializedGame == false) {
            loadGame();
            initializedGame = true;
            playSound(startGameSound, .050);
            document.querySelector('.toggle-onscreen-controls').style.display = 'block';
            document.querySelector('.level-indicator').style.display = 'block';
            document.querySelector('.credits').style.display = 'block';
        }

        if (innerModalOpen == true) {
            document.querySelectorAll('.inner-modal').forEach(function(innerModal){
                innerModal.style.display = 'none';
            })
            document.querySelector('.' + modalOpen).style.display = 'block';
            innerModalOpen = false;
        } else {
            //also triggered when initializedGame == false
            if (document.querySelector(".tree-message").style.display != "none") {
                document.querySelector(".tree-message-2").style.display = "block";
                document.querySelector(".tree-message-2").style.opacity = "1";
                document.querySelector(".tree-message").style.display = "none";
                document.querySelector(".tree-message").style.opacity = "0";
                let str = "<b style='font-size: 25px'>Hello, I'm Jeremiah!</b><br/><br/>A developer with a keen eye for design and usability and 3 years of industry experience, working with people locally and overseas.<br/><br/><b style='font-size: 25px'>Close this dialog box to begin</b><br/>";
                document.querySelector("#typedtext").style.display = "none";
                if(document.querySelector("#typedtext-complete").innerHTML == "") {
                    document.querySelector("#typedtext-complete").insertAdjacentHTML( 'beforeend', str );
                }
                if(document.querySelector("#typedtext2-complete").innerHTML == "") {
                    typewriter2();
                }
            } else {
                document.querySelectorAll('.modal').forEach(function(modal){
                    modal.style.display = 'none';
                    modalOpen = 'none';
                    let str2 = "To move around, use <b class='controls-tooltip'>W A S D</b><br/>or the arrow keys <b class='controls-tooltip'>◄ ▲ ▼ ►</b><br/>Press <b class='controls-tooltip'>[space]</b> or ✖ to close dialog boxes";
                    document.querySelector("#typedtext2").style.display = "none";
                    if(document.querySelector("#typedtext2-complete").innerHTML == "") {
                        document.querySelector("#typedtext2-complete").insertAdjacentHTML( 'beforeend', str2 );
                    }
                })
            }
        }
    }
})

document.querySelector('.mobile-controls-close').onclick = function() {
    closeTreeModalUsingOnscreenX()
}

document.querySelector('.mobile-controls-close').ontouchstart = function(e) {
    e.preventDefault();
}

document.querySelector('.mobile-controls-close').ontouchend = function() {
    closeTreeModalUsingOnscreenX()
}

document.querySelectorAll('.close').forEach(function(close){
    // console.log(close.classList);
    close.onclick = function() {

        if (initializedGame == false) {
            loadGame();
            initializedGame = true;
            playSound(startGameSound, .050);
            document.querySelector('.toggle-onscreen-controls').style.display = 'block';
            document.querySelector('.level-indicator').style.display = 'block';
            document.querySelector('.credits').style.display = 'block';
        }

        if (innerModalOpen == true) {
            document.querySelectorAll('.inner-modal').forEach(function(innerModal){
                innerModal.style.display = 'none';
            })
            document.querySelector('.' + modalOpen).style.display = 'block';
            innerModalOpen = false;
        } else {
            //also triggered when initializedGame == false
            if (close.classList.contains("close-tree-message")) {
                document.querySelector(".tree-message-2").style.display = "block";
                document.querySelector(".tree-message-2").style.opacity = "1";
                document.querySelector(".tree-message").style.display = "none";
                document.querySelector(".tree-message").style.opacity = "0";
                let str = "<b style='font-size: 25px'>Hello, I'm Jeremiah!</b><br/><br/>A developer with a keen eye for design and usability and 3 years of industry experience, working with people locally and overseas.<br/><br/><b style='font-size: 25px'>Close this dialog box to begin</b><br/>";
                document.querySelector("#typedtext").style.display = "none";
                if(document.querySelector("#typedtext-complete").innerHTML == "") {
                    document.querySelector("#typedtext-complete").insertAdjacentHTML( 'beforeend', str );
                }
                if(document.querySelector("#typedtext2-complete").innerHTML == "") {
                    typewriter2();
                }
            } else {
                if(document.querySelector(".tree-message").style.display == "none") {
                    document.querySelectorAll('.modal').forEach(function(modal){
                        modal.style.display = 'none';
                        modalOpen = 'none'; 
                        let str2 = "To move around, use <b class='controls-tooltip'>W A S D</b><br/>or the arrow keys <b class='controls-tooltip'>◄ ▲ ▼ ►</b><br/>Press <b class='controls-tooltip'>[space]</b> or ✖ to close dialog boxes";
                        document.querySelector("#typedtext2").style.display = "none";
                        if(document.querySelector("#typedtext2-complete").innerHTML == "") {
                            document.querySelector("#typedtext2-complete").insertAdjacentHTML( 'beforeend', str2 );
                        }
                    })   
                } else {
                    document.querySelector(".tree-message-2").style.display = "block";
                    document.querySelector(".tree-message-2").style.opacity = "1";
                    document.querySelector(".tree-message").style.display = "none";
                    document.querySelector(".tree-message").style.opacity = "0";
                    let str = "<b style='font-size: 25px'>Hello, I'm Jeremiah!</b><br/><br/>A developer with a keen eye for design and usability and 3 years of industry experience, working with people locally and overseas.<br/><br/><b style='font-size: 25px'>Close this dialog box to begin</b><br/>";
                    document.querySelector("#typedtext").style.display = "none";
                    if(document.querySelector("#typedtext-complete").innerHTML == "") {
                        document.querySelector("#typedtext-complete").insertAdjacentHTML( 'beforeend', str );
                    }
                    if(document.querySelector("#typedtext2-complete").innerHTML == "") {
                        typewriter2();
                    }
                }
            }
        }
    }
})

document.querySelector('.building-1-image').onclick = function() {
    if (initializedGame == true) {
        if (modalOpen == 'none') {
            modalOpen = 'education-experience';
            document.querySelector('.education-experience').style.display = 'block';
            document.querySelector('.education-experience').style.opacity = '1';
            playSound(hitSound, .050);
        }
    }
}

document.querySelector('.building-3-image').onclick = function() {
    if (initializedGame == true) {
        if (modalOpen == 'none') {
            modalOpen = 'selected-works';
            document.querySelector('.selected-works').style.display = 'block';
            document.querySelector('.selected-works').style.opacity = '1';
            // document.querySelectorAll('.video-thumbnail').forEach(function(thumbnail){
            //     thumbnail.load();
            //     thumbnail.play();
            // })
            playSound(hitSound, .050);
        }
    }
}

document.querySelector('.tree').onclick = function() {
    if (initializedGame == true) {
        if (modalOpen == 'none') {
            modalOpen = 'tree-message';
            document.querySelector('.tree-message').style.display = 'block';
            document.querySelector('.tree-message').style.opacity = '1';
            playSound(hitSound, .050);
        }
    }
}

document.querySelector('.building-2-image').onclick = function() {
    if (initializedGame == true) {
        if (modalOpen == 'none') {
            modalOpen = 'testimonials';
            document.querySelector('.testimonials').style.display = 'block';
            document.querySelector('.testimonials').style.opacity = '1';
            playSound(hitSound, .050);
        }
    }
}

document.querySelector('.signpost').onclick = function() {
    if (initializedGame == true) {
        if (modalOpen == 'none') {
            modalOpen = 'contact-details';
            document.querySelector('.contact-details').style.display = 'block';
            document.querySelector('.contact-details').style.opacity = '1';
            playSound(hitSound, .050);
        }
    }
}


window.addEventListener("keyup", mapKeyUp, false);

window.addEventListener("keydown", mapKeyDown, false);

window.addEventListener("resize", function() {
    gameResize();
}, false);

window.addEventListener("keydown", function(e) {
    if([' ', 'ArrowLeft','ArrowUp','ArrowRight','ArrowDown'].indexOf(e.key) > -1) {
        e.preventDefault();
    }
}, false);

var gameloop;
var toggleOnscreenControls = false;
var A;
var A2;

var angle = 0;
var x_velocity = 0;
var y_velocity = 0;
var x_translation = 0;
var y_translation = 0;
var map = {};
var speedCoefficient = 3;

var shelves = ['building-1-container','building-2-container','building-3-container','building-3-container-a', 'tree-container', 'signpost-container'];

var modalOpen = 'welcome';
var innerModalOpen = false;

var initializedGame = false;

function instantiateGame(level_number, crates_count, prev_x_velocity, prev_y_velocity, prev_x_translation, prev_y_translation, prev_angle) {
    angle = prev_angle;
    x_velocity = prev_x_velocity;
    y_velocity = prev_y_velocity;
    x_translation = prev_x_translation;
    y_translation = prev_y_translation;
    map = {};
    speedCoefficient = 2;
        
    cratesShelvedCount = 0;

    if (toggleOnscreenControls == true) {
        document.querySelector(".mobile-controls-all").style.display = 'block';
        document.querySelector(".toggle-onscreen-controls").style.color = '#c3c3c3';
    } else {
        document.querySelector(".mobile-controls-all").style.display = 'none';
        document.querySelector(".toggle-onscreen-controls").style.color = '#c3c3c3';
    }

    game();
}
function tableCreate() {
    var game = document.querySelector('.game');                      
                      
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var div = document.createElement('div');
            var img = document.createElement('img');
            div.setAttribute('id', 'r' + i + 'c' + j);
            div.style.display = 'inline-block';
            div.style.width = '10%';
            div.style.height = '10%';
            div.appendChild(document.createTextNode(''));
            div.appendChild(img);
            game.appendChild(div);
        }
    }
}


function game() {
    tableCreate();
    gameloop = window.setInterval(function(){
        go();
        actorToShelfCollision();
        actorToBoundaryCollision()
    },10);

}

function gameResize() {
    if (window.innerWidth > window.innerHeight) {
        document.querySelector('.game').style.scale = window.innerHeight/885;
    } else {
        document.querySelector('.game').style.scale = window.innerWidth/885;
    }
}

function go(){
    keycodes = ['arrowleft','arrowup','arrowright','arrowdown','a','d','s','w', ' ']

    for (var i = 0; i <= 8; i ++){
        if (keycodes[i] == 'arrowup' || keycodes[i] == 'w') {
            if (map[keycodes[i]] == true){
                angle = 0;
                y_translation -= y_velocity;
                document.querySelector('.actor').style.animation =  '.5s steps(4) walk-up infinite';
            }
        }
        
        if (keycodes[i] == 'arrowdown' || keycodes[i] == 's') {            
            if (map[keycodes[i]] == true){
                angle = 180;
                y_translation += y_velocity;
                document.querySelector('.actor').style.animation =  '.5s steps(4) walk-down infinite';
            }
        }
        
        if (keycodes[i] == 'arrowright' || keycodes[i] == 'd') {
            if (map[keycodes[i]] == true){
                angle = -90
                x_translation += x_velocity;
                document.querySelector('.actor').style.animation =  '.5s steps(4) walk-right infinite';
            }
        }
        
        if (keycodes[i] == 'arrowleft' || keycodes[i] == 'a') {
            if (map[keycodes[i]] == true){
                angle = 90
                x_translation -= x_velocity;
                document.querySelector('.actor').style.animation =  '.5s steps(4) walk-left infinite';
            }
        }
    }

    x_velocity = speedCoefficient;
    y_velocity = speedCoefficient;
    document.querySelector(".actor").style.transform = "translate3d(" + x_translation + "px, " + y_translation + "px, 0px)";

}

function actorToShelfCollision() {
        
    var actor = document.querySelector(".actor");
    var ac_top = document.querySelector(".actor").getBoundingClientRect().top;
    var ac_bottom = document.querySelector(".actor").getBoundingClientRect().bottom;

    var ac_left = document.querySelector(".actor").getBoundingClientRect().left;
    var ac_right = document.querySelector(".actor").getBoundingClientRect().right;

    for (var ctr = 0; ctr < shelves.length; ctr++) {

        var shelf = document.querySelector("." + shelves[ctr]);
        var shelf_top = shelf.getBoundingClientRect().top;
        var shelf_bottom = shelf.getBoundingClientRect().bottom;

        var shelf_left = shelf.getBoundingClientRect().left;
        var shelf_right = shelf.getBoundingClientRect().right;
        
        function actorToShelf(condition) {

            //right
            if ( ( (ac_left < shelf_right ) && (ac_right > shelf_right))
                &&
                ( ( (ac_top > shelf_top) && ( (ac_bottom) < (shelf_bottom) ) ) || ((ac_top > shelf_top) && ( (ac_top) < (shelf_bottom))) || ((ac_bottom < shelf_bottom) && ( (ac_bottom) > (shelf_top))) )
            ) {
                if (shelves[ctr] == 'signpost-container') {
                    if (modalOpen == 'none') {
                        modalOpen = 'contact-details';
                        document.querySelector('.contact-details').style.display = 'block';
                        document.querySelector('.contact-details').style.opacity = '1';
                        playSound(hitSound, .050);
                    }
                }
                
                if (shelves[ctr] == 'tree-container') {
                    if (modalOpen == 'none') {
                        modalOpen = 'tree-message';
                        document.querySelector('.tree-message').style.display = 'block';
                        document.querySelector('.tree-message').style.opacity = '1';
                        playSound(hitSound, .050);
                    }
                }

                if (shelves[ctr] == 'building-1-container') {
                    if (modalOpen == 'none') {
                        modalOpen = 'education-experience';
                        document.querySelector('.education-experience').style.display = 'block';
                        document.querySelector('.education-experience').style.opacity = '1';
                        playSound(hitSound, .050);
                    }
                }

                x_translation += 5;
            }
            

            //left
            if ( ( (ac_right > shelf_left ) && (ac_left < shelf_left))
                &&
                ( ( (ac_top > shelf_top) && ( (ac_bottom) < (shelf_bottom) ) ) || ((ac_top > shelf_top) && ( (ac_top) < (shelf_bottom))) || ((ac_bottom < shelf_bottom) && ( (ac_bottom) > (shelf_top))) )
            ) {
                if (shelves[ctr] == 'building-2-container') {
                    if (modalOpen == 'none') {
                        modalOpen = 'testimonials';
                        document.querySelector('.testimonials').style.display = 'block';
                        document.querySelector('.testimonials').style.opacity = '1';
                        playSound(hitSound, .050);
                    }
                }

                if (shelves[ctr] == 'building-3-container') {
                    if (modalOpen == 'none') {
                        modalOpen = 'selected-works';
                        document.querySelector('.selected-works').style.display = 'block';
                        document.querySelector('.selected-works').style.opacity = '1';
                        // document.querySelectorAll('.video-thumbnail').forEach(function(thumbnail){
                        //     thumbnail.load();
                        //     thumbnail.play();
                        // })
                        playSound(hitSound, .050);
                    }
                }

                if (shelves[ctr] == 'building-3-container-a') {
                    if (modalOpen == 'none') {
                        modalOpen = 'selected-works';
                        document.querySelector('.selected-works').style.display = 'block';
                        document.querySelector('.selected-works').style.opacity = '1';
                        // document.querySelectorAll('.video-thumbnail').forEach(function(thumbnail){
                        //     thumbnail.load();
                        //     thumbnail.play();
                        // })
                        playSound(hitSound, .050);
                    }
                }
                
                if (shelves[ctr] == 'tree-container') {
                    if (modalOpen == 'none') {
                        modalOpen = 'tree-message';
                        document.querySelector('.tree-message').style.display = 'block';
                        document.querySelector('.tree-message').style.opacity = '1';
                        playSound(hitSound, .050);
                    }
                }
                
                x_translation -= 5;
            }
            
            //top
            if ( ( (ac_bottom > shelf_top ) && (ac_top < shelf_top))
                &&
                ( ( (ac_left > shelf_left) && ( (ac_right) < (shelf_right) ) ) )
            ) {
                if (shelves[ctr] == 'building-2-container') {
                    if (modalOpen == 'none') {
                        modalOpen = 'testimonials';
                        document.querySelector('.testimonials').style.display = 'block';
                        document.querySelector('.testimonials').style.opacity = '1';
                        playSound(hitSound, .050);
                    }
                }
                
                if (shelves[ctr] == 'signpost-container') {
                    if (modalOpen == 'none') {
                        modalOpen = 'contact-details';
                        document.querySelector('.contact-details').style.display = 'block';
                        document.querySelector('.contact-details').style.opacity = '1';
                        playSound(hitSound, .050);
                    }
                }
                
                // if (shelves[ctr] == 'tree-container') {
                //     if (modalOpen == 'none') {
                //         modalOpen = 'tree-message';
                //         document.querySelector('.tree-message').style.display = 'block';
                //         document.querySelector('.tree-message').style.opacity = '1';
                //         playSound(hitSound, .050);
                //     }
                // }
                
                y_translation -= 5;
            }
    
            //bottom
            if ( ( (ac_top < shelf_bottom ) && (ac_bottom > shelf_bottom))
                &&
                ( ( (ac_left > shelf_left) && ( (ac_right) < (shelf_right) ) ) )
            ) {
                if (shelves[ctr] == 'building-3-container-a') {
                    if (modalOpen == 'none') {
                        modalOpen = 'selected-works';
                        document.querySelector('.selected-works').style.display = 'block';
                        document.querySelector('.selected-works').style.opacity = '1';
                        // document.querySelectorAll('.video-thumbnail').forEach(function(thumbnail){
                        //     thumbnail.load();
                        //     thumbnail.play();
                        // })
                        playSound(hitSound, .050);
                    }
                }
                if (shelves[ctr] == 'building-3-container') {
                    if (modalOpen == 'none') {
                        modalOpen = 'selected-works';
                        document.querySelector('.selected-works').style.display = 'block';
                        document.querySelector('.selected-works').style.opacity = '1';
                        // document.querySelectorAll('.video-thumbnail').forEach(function(thumbnail){
                        //     thumbnail.load();
                        //     thumbnail.play();
                        // })
                        playSound(hitSound, .050);
                    }
                }

                if (shelves[ctr] == 'building-1-container') {
                    if (modalOpen == 'none') {
                        modalOpen = 'education-experience';
                        document.querySelector('.education-experience').style.display = 'block';
                        document.querySelector('.education-experience').style.opacity = '1';
                        playSound(hitSound, .050);
                    }
                }
                
                if (shelves[ctr] == 'tree-container') {
                    if (modalOpen == 'none') {
                        modalOpen = 'tree-message';
                        document.querySelector('.tree-message').style.display = 'block';
                        document.querySelector('.tree-message').style.opacity = '1';
                        playSound(hitSound, .050);
                    }
                }

                y_translation += 5;
            }
            
        }
        
        actorToShelf()
    }
}

function actorToBoundaryCollision(){

    var actor = document.querySelector(".actor");
    var ac_top = document.querySelector(".actor").getBoundingClientRect().top;
    var ac_bottom = document.querySelector(".actor").getBoundingClientRect().bottom;

    var ac_left = document.querySelector(".actor").getBoundingClientRect().left;
    var ac_right = document.querySelector(".actor").getBoundingClientRect().right;

    var g_offsetWidth = document.querySelector(".game").offsetWidth;
    var g_offsetHeight = document.querySelector(".game").offsetHeight;
    var g_left = document.querySelector(".game").getBoundingClientRect().left;
    var g_right = document.querySelector(".game").getBoundingClientRect().right;
    var g_top = document.querySelector(".game").getBoundingClientRect().top;
    var g_bottom = document.querySelector(".game").getBoundingClientRect().bottom;

    if (g_left >= ac_left){
        x_translation += 5
    }

    if ( ( Math.abs( (ac_left) - (g_left)) <= 10 ) && ( Math.abs( (ac_bottom) - (g_bottom)) <= 10 ) ) {
        x_translation += 5
        y_translation += -5
    }

    if (g_right <= ac_right){
        x_translation += -5
    }


    if ( ( Math.abs( (ac_right) - (g_right)) <= 10 ) && ( Math.abs( (ac_bottom) - (g_bottom)) <= 10 ) ) {
        x_translation -= 5
        y_translation -= 5
    }

    if (g_top >= ac_top){
        y_translation += 5
    }

    if ( ( Math.abs( (ac_right) - (g_right)) <= 10 ) && ( Math.abs( (ac_top) - (g_top)) <= 10 ) ) {
        x_translation += 5
        y_translation += 5
    }

    if ( ( Math.abs( (ac_left) - (g_left)) <= 10 ) && ( Math.abs( (ac_top) - (g_top)) <= 10 ) ) {
        x_translation += 5
        y_translation += 5
    }

    if (g_bottom <= ac_bottom){
        y_translation += -5
    }  
}

function mapKeyDown(event) {
    map[event.key.toLowerCase()] = true;
}

function mapKeyUp(event) {
    if (initializedGame == true) {
        map[event.key.toLowerCase()] = false;
        document.querySelector('.actor').style.animation =  '';
    
        if (event.key.toLowerCase() == 'arrowup' || event.key.toLowerCase() == 'w') {
            document.querySelector('.actor').style.backgroundPosition =  '35.5% 97.5%';
        }
        
        if (event.key.toLowerCase() == 'arrowdown' || event.key.toLowerCase() == 's') {
            document.querySelector('.actor').style.backgroundPosition =  '35.5% 2%';
        }
        
        if (event.key.toLowerCase() == 'arrowright' || event.key.toLowerCase() == 'd') {
            document.querySelector('.actor').style.backgroundPosition =  '34% 66%';
        }
        
        if (event.key.toLowerCase() == 'arrowleft' || event.key.toLowerCase() == 'a') {
            document.querySelector('.actor').style.backgroundPosition =  '36.5% 34%';
        }
    }
}

var instructions_timeouts = []

function showMessage(message, duration) {
    document.querySelector(".message").style.display = "block";
    document.querySelector(".message").innerHTML = message;
    
    window.setTimeout(function() {
        document.querySelector(".message").style.display = "none";
    }, duration)
}

function hideMessage(delay) {
    window.setTimeout(function() {
        document.querySelector(".message").style.display = "none";
    }, delay)
}

function loadGame() {
    next_level_instance = instantiateGame(1, 4, 0, 0, 0, 0, 0);
}

function mobile_controls() {    
    document.querySelector(".mobile-controls-close").onmousedown = function (){
        document.querySelector(".mobile-controls-close").style.color = 'white';
    }

    document.querySelector(".mobile-controls-close").onmouseup = function (){
        document.querySelector(".mobile-controls-close").style.color = 'grey';
    }

    document.querySelector(".mobile-controls-forward").onmousedown = function (){
        map['arrowup'] = true;
        document.querySelector(".mobile-controls-forward").style.color = 'white';
    }

    document.querySelector(".mobile-controls-forward").onmouseup = function (){
        map['arrowup'] = false;
        document.querySelector('.actor').style.animation =  '';
        document.querySelector('.actor').style.backgroundPosition =  '35.5% 97.5%';
        document.querySelector(".mobile-controls-forward").style.color = 'grey';
    }

    document.querySelector(".mobile-controls-backward").onmousedown = function (){
        map['arrowdown'] = true;
        document.querySelector(".mobile-controls-backward").style.color = 'white';
    }

    document.querySelector(".mobile-controls-backward").onmouseup = function (){
        map['arrowdown'] = false;
        document.querySelector('.actor').style.animation =  '';
        document.querySelector('.actor').style.backgroundPosition =  '35.5% 2%';
        document.querySelector(".mobile-controls-backward").style.color = 'grey';
    }

    document.querySelector(".mobile-controls-left").onmousedown = function (){
        map['arrowleft'] = true;
        document.querySelector(".mobile-controls-left").style.color = 'white';
    }

    document.querySelector(".mobile-controls-left").onmouseup = function (){
        map['arrowleft'] = false;
        document.querySelector('.actor').style.animation =  '';
        document.querySelector('.actor').style.backgroundPosition =  '36.5% 34%';
        document.querySelector(".mobile-controls-left").style.color = 'grey';
    }

    document.querySelector(".mobile-controls-right").onmousedown = function (){
        map['arrowright'] = true;
        document.querySelector(".mobile-controls-right").style.color = 'white';
    }

    document.querySelector(".mobile-controls-right").onmouseup = function (){
        map['arrowright'] = false;
        document.querySelector('.actor').style.animation =  '';
        document.querySelector('.actor').style.backgroundPosition =  '34% 66%';
        document.querySelector(".mobile-controls-right").style.color = 'grey';
    }

    document.querySelector(".toggle-onscreen-controls").onclick = function (){
        if (toggleOnscreenControls == true){
            document.querySelector(".toggle-onscreen-controls").style.color = '#5d5d5d';
            document.querySelector(".mobile-controls-all").style.display = 'none';
            toggleOnscreenControls = false;
        } else {
            document.querySelector(".toggle-onscreen-controls").style.color = '#c3c3c3';
            document.querySelector(".toggle-onscreen-controls").style.animation = 'none';
            document.querySelector(".mobile-controls-all").style.display = 'block';
            toggleOnscreenControls = true;
        }
    }
    
    //touch events

    // document.querySelectorAll('div').forEach(function(div){
    //     div.ontouchend = function(e) {
    //         e.preventDefault();
    //     } 
    // })
    
    document.querySelectorAll('.close').forEach(function(close){
        close.ontouchstart = function(e) {
            e.preventDefault();
        }

        close.ontouchend = function() {
            if (initializedGame == false) {
                loadGame();
                initializedGame = true;
                playSound(startGameSound, .050);
                document.querySelector('.toggle-onscreen-controls').style.display = 'block';
                document.querySelector('.level-indicator').style.display = 'block';
                document.querySelector('.credits').style.display = 'block';
            }

            if (innerModalOpen == true) {
                document.querySelectorAll('.inner-modal').forEach(function(innerModal){
                    innerModal.style.display = 'none';
                })
                document.querySelector('.' + modalOpen).style.display = 'block';
                innerModalOpen = false;
            } else {
                //also triggered when initializedGame == false
                if (close.classList.contains("close-tree-message")) {
                    document.querySelector(".tree-message-2").style.display = "block";
                    document.querySelector(".tree-message-2").style.opacity = "1";
                    document.querySelector(".tree-message").style.display = "none";
                    document.querySelector(".tree-message").style.opacity = "0";
                    let str = "<b style='font-size: 25px'>Hello, I'm Jeremiah!</b><br/><br/>A developer with a keen eye for design and usability and 3 years of industry experience, working with people locally and overseas.<br/><br/><b style='font-size: 25px'>Close this dialog box to begin</b><br/>";
                    document.querySelector("#typedtext").style.display = "none";
                    if(document.querySelector("#typedtext-complete").innerHTML == "") {
                        document.querySelector("#typedtext-complete").insertAdjacentHTML( 'beforeend', str );
                    }
                    if(document.querySelector("#typedtext2-complete").innerHTML == "") {
                        typewriter2();
                    }
                } else {
                    if(document.querySelector(".tree-message").style.display == "none") {
                        document.querySelectorAll('.modal').forEach(function(modal){
                            modal.style.display = 'none';
                            modalOpen = 'none'; 
                            let str2 = "To move around, use <b class='controls-tooltip'>W A S D</b><br/>or the arrow keys <b class='controls-tooltip'>◄ ▲ ▼ ►</b><br/>Press <b class='controls-tooltip'>[space]</b> or ✖ to close dialog boxes";
                            document.querySelector("#typedtext2").style.display = "none";
                            if(document.querySelector("#typedtext2-complete").innerHTML == "") {
                                document.querySelector("#typedtext2-complete").insertAdjacentHTML( 'beforeend', str2 );
                            }
                        })   
                    } else {
                        document.querySelector(".tree-message-2").style.display = "block";
                        document.querySelector(".tree-message-2").style.opacity = "1";
                        document.querySelector(".tree-message").style.display = "none";
                        document.querySelector(".tree-message").style.opacity = "0";
                        let str = "<b style='font-size: 25px'>Hello, I'm Jeremiah!</b><br/><br/>A developer with a keen eye for design and usability and 3 years of industry experience, working with people locally and overseas.<br/><br/><b style='font-size: 25px'>Close this dialog box to begin</b><br/>";
                        document.querySelector("#typedtext").style.display = "none";
                        if(document.querySelector("#typedtext-complete").innerHTML == "") {
                            document.querySelector("#typedtext-complete").insertAdjacentHTML( 'beforeend', str );
                        }
                        if(document.querySelector("#typedtext2-complete").innerHTML == "") {
                            typewriter2();
                        }
                    }
                }
            }
        }
    })

    document.querySelector('.building-1-image').ontouchstart = function(e) {
        e.preventDefault();
    }

    document.querySelector('.building-1-image').ontouchend = function() {
        if (initializedGame == true) {
            if (modalOpen == 'none') {
                modalOpen = 'education-experience';
                document.querySelector('.education-experience').style.display = 'block';
                document.querySelector('.education-experience').style.opacity = '1';
                playSound(hitSound, .050);
            }
        }
    }

    document.querySelector('.building-3-image').ontouchstart = function(e) {
        e.preventDefault();
    }

    document.querySelector('.building-3-image').ontouchend = function() {
        if (initializedGame == true) {
            if (modalOpen == 'none') {
                modalOpen = 'selected-works';
                document.querySelector('.selected-works').style.display = 'block';
                document.querySelector('.selected-works').style.opacity = '1';
                // document.querySelectorAll('.video-thumbnail').forEach(function(thumbnail){
                //     thumbnail.load();
                //     thumbnail.play();
                // })
                playSound(hitSound, .050);
            }
        }
    }

    document.querySelector('.tree').ontouchstart = function(e) {
        e.preventDefault();
    }

    document.querySelector('.tree').ontouchend = function() {
        if (initializedGame == true) {
            if (modalOpen == 'none') {
                modalOpen = 'tree-message';
                document.querySelector('.tree-message').style.display = 'block';
                document.querySelector('.tree-message').style.opacity = '1';
                playSound(hitSound, .050);
            }
        }
    }

    document.querySelector('.building-2-image').ontouchstart = function(e) {
        e.preventDefault();
    }

    document.querySelector('.building-2-image').ontouchend = function() {
        if (initializedGame == true) {
            if (modalOpen == 'none') {
                modalOpen = 'testimonials';
                document.querySelector('.testimonials').style.display = 'block';
                document.querySelector('.testimonials').style.opacity = '1';
                playSound(hitSound, .050);
            }
        }
    }

    document.querySelector('.signpost').ontouchstart = function(e) {
        e.preventDefault();
    }

    document.querySelector('.signpost').ontouchend = function() {
        if (initializedGame == true) {
            if (modalOpen == 'none') {
                modalOpen = 'contact-details';
                document.querySelector('.contact-details').style.display = 'block';
                document.querySelector('.contact-details').style.opacity = '1';
                playSound(hitSound, .050);
            }
        }
    }

    // close.ontouchmove = function() {
    // }

    // document.querySelector('.mobile-controls-close').ontouchstart = function(e) {
    //     e.preventDefault();
    // }

    document.querySelector('.mobile-controls-close').ontouchend = function() {
        closeTreeModalUsingOnscreenX()
    }

    document.querySelector(".mobile-controls-close").ontouchstart = function (e){
        e.preventDefault();
        document.querySelector(".mobile-controls-close").style.color = 'white';
    }

    document.querySelector(".mobile-controls-close").ontouchend = function (){
        document.querySelector(".mobile-controls-close").style.color = 'grey';
        if (initializedGame == false) {
            loadGame();
            initializedGame = true;
            playSound(startGameSound, .050);
            document.querySelector('.toggle-onscreen-controls').style.display = 'block';
            document.querySelector('.level-indicator').style.display = 'block';
            document.querySelector('.credits').style.display = 'block';
        }

        if (innerModalOpen == true) {
            document.querySelectorAll('.inner-modal').forEach(function(innerModal){
                innerModal.style.display = 'none';
            })
            document.querySelector('.' + modalOpen).style.display = 'block';
            innerModalOpen = false;
        } else {
            //also triggered when initializedGame == false
            document.querySelectorAll('.modal').forEach(function(modal){
                modal.style.display = 'none';
                modalOpen = 'none';
            })
        }
    }
    
    document.querySelector(".mobile-controls-forward").ontouchstart = function (e){
        e.preventDefault();
        map['arrowup'] = true;
        document.querySelector(".mobile-controls-forward").style.color = 'white';
    }

    document.querySelector(".mobile-controls-forward").ontouchend = function (){
        map['arrowup'] = false;
        document.querySelector('.actor').style.animation =  '';
        document.querySelector('.actor').style.backgroundPosition =  '35.5% 97.5%';
        document.querySelector(".mobile-controls-forward").style.color = 'grey';
    }

    document.querySelector(".mobile-controls-backward").ontouchstart = function (e){
        e.preventDefault();
        map['arrowdown'] = true;
        document.querySelector(".mobile-controls-backward").style.color = 'white';
    }

    document.querySelector(".mobile-controls-backward").ontouchend = function (){
        map['arrowdown'] = false;
        document.querySelector('.actor').style.animation =  '';
        document.querySelector('.actor').style.backgroundPosition =  '35.5% 2%';
        document.querySelector(".mobile-controls-backward").style.color = 'grey';
    }

    document.querySelector(".mobile-controls-left").ontouchstart = function (e){
        e.preventDefault();
        map['arrowleft'] = true;
        document.querySelector(".mobile-controls-left").style.color = 'white';
    }

    document.querySelector(".mobile-controls-left").ontouchend = function (){
        map['arrowleft'] = false;
        document.querySelector('.actor').style.animation =  '';
        document.querySelector('.actor').style.backgroundPosition =  '36.5% 34%';
        document.querySelector(".mobile-controls-left").style.color = 'grey';
    }

    document.querySelector(".mobile-controls-right").ontouchstart = function (e){
        e.preventDefault();
        map['arrowright'] = true;
        document.querySelector(".mobile-controls-right").style.color = 'white';
    }

    document.querySelector(".mobile-controls-right").ontouchend = function (){
        map['arrowright'] = false;
        document.querySelector('.actor').style.animation =  '';
        document.querySelector('.actor').style.backgroundPosition =  '34% 66%';
        document.querySelector(".mobile-controls-right").style.color = 'grey';
    }

    // document.querySelector(".toggle-onscreen-controls").ontouchmove = function (){
    //     if (toggleOnscreenControls == true){
    //         document.querySelector(".toggle-onscreen-controls").style.color = '#5d5d5d';
    //         document.querySelector(".mobile-controls-all").style.display = 'none';
    //         toggleOnscreenControls = false;
    //     } else {
    //         document.querySelector(".toggle-onscreen-controls").style.color = '#c3c3c3';
    //         document.querySelector(".mobile-controls-all").style.display = 'block';
    //         toggleOnscreenControls = true;
    //     }
    // }

    document.querySelector(".toggle-onscreen-controls").ontouchstart = function (e){
        e.preventDefault();
    }

    document.querySelector(".toggle-onscreen-controls").ontouchend = function (){
        // e.preventDefault();
        if (toggleOnscreenControls == true){
            document.querySelector(".toggle-onscreen-controls").style.color = '#5d5d5d';
            document.querySelector(".mobile-controls-all").style.display = 'none';
            toggleOnscreenControls = false;
        } else {
            document.querySelector(".toggle-onscreen-controls").style.color = '#c3c3c3';
            document.querySelector(".mobile-controls-all").style.display = 'block';
            document.querySelector(".toggle-onscreen-controls").style.animation = 'none';
            toggleOnscreenControls = true;
        }
    }
}

levelCompleteSound = [0,undefined,4,undefined,7,undefined,12];
startGameSound = [0,4,7,12,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
startLevel1Sound = [0,4,7,undefined,undefined,undefined,undefined,undefined,undefined];
startLevel2Sound = [1,5,8,undefined,undefined,undefined,undefined,undefined,undefined];
startLevel3Sound = [2,6,9,undefined,undefined,undefined,undefined,undefined,undefined];
startLevel4Sound = [3,7,10,undefined,undefined,undefined,undefined,undefined,undefined];
startLevel5Sound = [4,8,11,undefined,undefined,undefined,undefined,undefined,undefined];
endLevel1Sound = [0,4,7,12,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
endLevel2Sound = [1,5,8,13,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
endLevel3Sound = [2,6,9,14,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
endLevel4Sound = [3,7,10,15,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
endLevel5Sound = [4,8,11,16,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
loadCrateSound = [4,7,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
shelfCrateSound = [7,12,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
dropCrateSound = [7,4,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
messageBeep = [0,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
hitSound = [-12,undefined,undefined,undefined,undefined]
deathSound = [-21,-25,-45]
gameCompleteSound = [-5,0,4,7,undefined,4,7]
lickSound = [2,4,5,7,4,undefined,0,2]


function playSound(sound, volume) {
    if (A != null) {
        A.close()
    }

    f = function(i){
        var notes = sound;
        var n=3.5e4;
        if (i > n) return null;
        var idx = ((notes.length*i)/n)|0;
        var note = notes[idx];
        if (note === undefined) return 0;
        var r = Math.pow(2,note/12)*0.8;
        var q = t((i*notes.length)%n,n);
        return ((i*r)&64)?q:-q
    }


    t=(i,n)=>(n-i)/n;
    A=new AudioContext()
    m=A.createBuffer(1,96e3,48e3)
    b=m.getChannelData(0)
    for(i=96e3;i--;)b[i]=f(i)
    s=A.createBufferSource()
    s.buffer=m
    
    var gainNode = A.createGain()
    gainNode.gain.value = volume
    gainNode.connect(A.destination)
    s.connect(gainNode)
    s.start()
}

function playSound2(sound, volume) {
    if (A2 != null) {
        A2.close()
    }

    f = function(i){
        var notes = sound;
        var n=3.5e4;
        if (i > n) return null;
        var idx = ((notes.length*i)/n)|0;
        var note = notes[idx];
        if (note === undefined) return 0;
        var r = Math.pow(2,note/12)*0.8;
        var q = t((i*notes.length)%n,n);
        return ((i*r)&64)?q:-q
    }


    t=(i,n)=>(n-i)/n;
    A2=new AudioContext()
    m=A2.createBuffer(1,96e3,48e3)
    b=m.getChannelData(0)
    for(i=96e3;i--;)b[i]=f(i)
    s=A2.createBufferSource()
    s.buffer=m
    
    var gainNode = A2.createGain()
    gainNode.gain.value = volume
    gainNode.connect(A2.destination)
    s.connect(gainNode)
    s.start()
}

function previewImage(url, header, description) {
    document.querySelectorAll('.modal').forEach(function(modal){
        // modal.style.animation = 'fadeOut .3s';
        modal.style.display = 'none';
    })

    document.querySelector('.video-preview').style.display = 'none';
    document.querySelector('.image-preview').style.display = 'block';
    
    document.querySelector('.image-preview').src = url;
    
    document.querySelector('.inner-modal-image-header').innerHTML = header;
    document.querySelector('.inner-modal-image-description').innerHTML = description;
    document.querySelector('.inner-modal-image').style.display = 'block';
    innerModalOpen = true;
}

function previewVideo(url, header, description) {
    document.querySelectorAll('.modal').forEach(function(modal){
        // modal.style.animation = 'fadeOut .3s';
        modal.style.display = 'none';
    })

    document.querySelector('.image-preview').style.display = 'none';
    document.querySelector('.video-preview').style.display = 'block';
    
    document.querySelector('.video-preview-source').src = url;
    document.querySelector('.video-preview').load();
    document.querySelector('.video-preview').play();
    
    document.querySelector('.inner-modal-image-header').innerHTML = header;
    document.querySelector('.inner-modal-image-description').innerHTML = description;
    document.querySelector('.inner-modal-image').style.display = 'block';
    innerModalOpen = true;
}

function showExperienceDetails(experience, header) {
    document.querySelectorAll('.modal').forEach(function(modal){
        // modal.style.animation = 'fadeOut .3s';
        modal.style.display = 'none';
    })
    document.querySelector('.inner-modal-text-header').innerHTML = header;
    document.querySelector('.inner-modal-text').style.display = 'block';
    document.querySelector('.inner-modal-text-contents').childNodes.forEach(
        function(node){
            if (node.localName == 'ul'){
                if (node.className == experience) {
                    node.style.display = 'block';
                } else {
                    node.style.display = 'none';
                }
            }
            // console.log(node.className)
        }
    )

    innerModalOpen = true;
}

// experiences = ['experience-creative-developer', 'experience-senior-creative-developer', 'internship-web-developer', 'education-college', 'education-eskwelabs']

//creative dev
document.querySelector('.handle-experience-creative-developer').onclick = function() {
    showExperienceDetails('experience-creative-developer', '<b>Creative Developer</b><br/><span class="grey-out">Wideout Workforces Inc. (Jun 2019 – Dec 2021)</span>')
}

document.querySelector('.handle-experience-creative-developer').ontouchstart = function(e) {
    e.preventDefault();
}

document.querySelector('.handle-experience-creative-developer').ontouchend = function() {
    showExperienceDetails('experience-creative-developer', '<b>Creative Developer</b><br/><span class="grey-out">Wideout Workforces Inc. (Jun 2019 – Dec 2021)</span>');
}

//senior creative dev
document.querySelector('.handle-experience-senior-creative-developer').onclick = function() {
    showExperienceDetails('experience-senior-creative-developer', 'Senior Creative Developer</b><br/><span class="grey-out">Wideout Workforces Inc. (Jan 2022 – Apr 2022)</span>')
}

document.querySelector('.handle-experience-senior-creative-developer').ontouchstart = function(e) {
    e.preventDefault();
}

document.querySelector('.handle-experience-senior-creative-developer').ontouchend = function() {
    showExperienceDetails('experience-senior-creative-developer', 'Senior Creative Developer</b><br/><span class="grey-out">Wideout Workforces Inc. (Jan 2022 – Apr 2022)</span>')
}

//junior dev
document.querySelector('.handle-experience-junior-developer').onclick = function() {
    showExperienceDetails('experience-junior-developer', 'Web Developer</b><br/><span class="grey-out">Freelance (Dec 2022 – Present)</span>')
}

document.querySelector('.handle-experience-junior-developer').ontouchstart = function(e) {
    e.preventDefault();
}

document.querySelector('.handle-experience-junior-developer').ontouchend = function() {
    showExperienceDetails('experience-junior-developer', 'Web Developer</b><br/><span class="grey-out">Freelance (Dec 2022 – Present)</span>')
}

//internship-web-developer
document.querySelector('.handle-internship-web-developer').onclick = function() {
    showExperienceDetails('internship-web-developer', '<b>Web Development Intern</b><br/><span class="grey-out">FFUF Manila Inc. (Apr 2018 – Jun 2018)</span>')
}

document.querySelector('.handle-internship-web-developer').ontouchstart = function(e) {
    e.preventDefault();
}

document.querySelector('.handle-internship-web-developer').ontouchend = function() {
    showExperienceDetails('internship-web-developer', '<b>Web Development Intern</b><br/><span class="grey-out">FFUF Manila Inc. (Apr 2018 – Jun 2018)</span>')
}

//education-college
document.querySelector('.handle-education-college').onclick = function() {
    showExperienceDetails('education-college', 'B.S. in Computer Science</b><br/><span class="grey-out">Mabini Colleges of Daet (Graduated April 2019)</span>')
}

document.querySelector('.handle-education-college').ontouchstart = function(e) {
    e.preventDefault();
}

document.querySelector('.handle-education-college').ontouchend = function() {
    showExperienceDetails('education-college', 'B.S. in Computer Science</b><br/><span class="grey-out">Mabini Colleges of Daet (Graduated April 2019)</span>')
}

//education-eskwelabs
document.querySelector('.handle-education-eskwelabs').onclick = function() {
    showExperienceDetails('education-eskwelabs','<b>Eskwelabs Data Science Fellow</b><br/><span class="grey-out">(May 2022 - Aug 2022)</span>')
}

document.querySelector('.handle-education-eskwelabs').ontouchstart = function(e) {
    e.preventDefault();
}

document.querySelector('.handle-education-eskwelabs').ontouchend = function() {
    showExperienceDetails('education-eskwelabs','<b>Eskwelabs Data Science Fellow</b><br/><span class="grey-out">(May 2022 - Aug 2022)</span>')
}

//handle-contact-linkedin
// document.querySelector('.handle-contact-linkedin').onclick = function() {
//     // showExperienceDetails('education-eskwelabs','<b>Data Science Fellow</b>,<br/>Eskwelabs (May 2022 - Aug 2022)')
//     window.open('https://www.linkedin.com/in/jeremiahfernandez97', '_blank').focus();
// }

// document.querySelector('.handle-contact-linkedin').ontouchstart = function(e) {
//     // e.preventDefault();
// }

// document.querySelector('.handle-contact-linkedin').ontouchend = function() {
//     // showExperienceDetails('education-eskwelabs','<b>Data Science Fellow</b>,<br/>Eskwelabs (May 2022 - Aug 2022)')
//     window.open('https://www.linkedin.com/in/jeremiahfernandez97', '_blank').focus();
// }

    var aText = new Array(
        "<b style='font-size: 25px'>Hello, I'm Jeremiah!</b>",
        " ",
        "A developer with a keen eye for design and usability and 3 years of industry experience, working with people locally and overseas.",
        " ",
        "<b style='font-size: 25px'>Close this dialog box to begin</b>"
    );

    var iSpeed = 40; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
  
    

    var aText2 = new Array(
        // " To move around, use <span class='controls-tooltip'>W</span> <span class='controls-tooltip'>A</span> <span class='controls-tooltip'>S</span> <span class='controls-tooltip'>D</span>",
        // " or the arrow keys <span class='controls-tooltip'>◄</span> <span class='controls-tooltip'>▲</span> <span class='controls-tooltip'>▼</span> <span class='controls-tooltip'>►</span>",
        // "Press <span class='controls-tooltip'>space</span> or <span class='controls-tooltip'>&#10006;</span> to close dialog boxes."
        "To move around, use <b class='controls-tooltip'>W A S D</b>",
        "or the arrow keys <b class='controls-tooltip'>◄ ▲ ▼ ►</b>",
        "Press <b class='controls-tooltip'>[space]</b> or ✖ to close dialog boxes"
    );

    var iSpeed2 = 40; // time delay of print out
    var iIndex2 = 0; // start printing array at this posision
    var iArrLength2 = aText2[0].length; // the length of the text array
    var iScrollAt2 = 20; // start scrolling up at this many lines
     
    var iTextPos2 = 0; // initialise text position
    var sContents2 = ''; // initialise contents variable
    var iRow2; // initialise current row
     
    function typewriter2()
    {
     sContents2 =  ' ';
     iRow2 = Math.max(0, iIndex2-iScrollAt2);
     var destination2 = document.getElementById("typedtext2");
     
     while ( iRow2 < iIndex2 ) {
      sContents2 += aText2[iRow2++] + '<br />';
     }
     destination2.innerHTML = sContents2 + aText2[iIndex2].substring(0, iTextPos2) + "_";
     if ( iTextPos2++ == iArrLength2 ) {
      iTextPos2 = 0;
      iIndex2++;
      if ( iIndex2 != aText2.length ) {
       iArrLength2 = aText2[iIndex2].length;
       setTimeout("typewriter2()", 500);
      }
     } else {
      setTimeout("typewriter2()", iSpeed);
     }
    }

    function closeTreeModalUsingOnscreenX() {

        if(document.querySelector(".tree-message").style.display == "none") {
            document.querySelectorAll('.modal').forEach(function(modal){
                modal.style.display = 'none';
                modalOpen = 'none'; 
                let str2 = "To move around, use <b class='controls-tooltip'>W A S D</b><br/>or the arrow keys <b class='controls-tooltip'>◄ ▲ ▼ ►</b><br/>Press <b class='controls-tooltip'>[space]</b> or ✖ to close dialog boxes";
                document.querySelector("#typedtext2").style.display = "none";
                if(document.querySelector("#typedtext2-complete").innerHTML == "") {
                    document.querySelector("#typedtext2-complete").insertAdjacentHTML( 'beforeend', str2 );
                }
            })   
        } else {
            document.querySelector(".tree-message-2").style.display = "block";
            document.querySelector(".tree-message-2").style.opacity = "1";
            document.querySelector(".tree-message").style.display = "none";
            document.querySelector(".tree-message").style.opacity = "0";
            let str = "<b style='font-size: 25px'>Hello, I'm Jeremiah!</b><br/><br/>A developer with a keen eye for design and usability and 3 years of industry experience, working with people locally and overseas.<br/><br/><b style='font-size: 25px'>Close this dialog box to begin</b><br/>";
            document.querySelector("#typedtext").style.display = "none";
            if(document.querySelector("#typedtext-complete").innerHTML == "") {
                document.querySelector("#typedtext-complete").insertAdjacentHTML( 'beforeend', str );
            }
            if(document.querySelector("#typedtext2-complete").innerHTML == "") {
                typewriter2();
            }
        }

        // if (document.querySelector(".tree-message").style.display != "none") {
        //     document.querySelector(".tree-message-2").style.display = "block";
        //     document.querySelector(".tree-message-2").style.opacity = "1";
        //     document.querySelector(".tree-message").style.display = "none";
        //     document.querySelector(".tree-message").style.opacity = "0";
        //     let str = "<b style='font-size: 25px'>Hello, I'm Jeremiah!</b><br/><br/>A developer with a keen eye for design and usability and 3 years of industry experience, working with people locally and overseas.<br/><br/><b style='font-size: 25px'>Close this dialog box to begin</b><br/>";
        //     document.querySelector("#typedtext").style.display = "none";
        //     if(document.querySelector("#typedtext-complete").innerHTML == "") {
        //         document.querySelector("#typedtext-complete").insertAdjacentHTML( 'beforeend', str );
        //     }
        //     if(document.querySelector("#typedtext2-complete").innerHTML == "") {
        //         typewriter2();
        //     }
        // } else {
        //     document.querySelectorAll('.modal').forEach(function(modal){
        //         modal.style.display = 'none';
        //         modalOpen = 'none';
        //         let str2 = "To move around, use <b class='controls-tooltip'>W A S D</b><br/>or the arrow keys <b class='controls-tooltip'>◄ ▲ ▼ ►</b><br/>Press <b class='controls-tooltip'>[space]</b> or ✖ to close dialog boxes";
        //         document.querySelector("#typedtext2").style.display = "none";
        //         if(document.querySelector("#typedtext2-complete").innerHTML == "") {
        //             document.querySelector("#typedtext2-complete").insertAdjacentHTML( 'beforeend', str2 );
        //         }
        //     })
        // }
    }