


let video = document.getElementById ("video1");

function back(){

video.currentTime -= 3

}

function foward(){

    video.currentTime += 3
}

function decrease(){

video.playbackRate -= 0.2

}

function increase(){

    video.playbackRate += 0.2

}

function play(){

video.play();


}


function stop(){

video.pause;
video.currentTime = 0;


}



