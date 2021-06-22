// import './bootstrap-5.0.0-beta3-dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './CSS/index.css';

import '@popperjs/core'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './js/icon-font.js';

var myVideo = document.getElementById("video1"); 

function playPause() { 
    if (myVideo.paused) 
        myVideo.play();
    else 
        myVideo.pause(); 
}