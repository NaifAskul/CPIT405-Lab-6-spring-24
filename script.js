const likeBtn = document.getElementById("likeBtn");
const DislikeBtn = document.getElementById("DislikeBtn");


let likeCounter = 0;

let DislikeCounter = 0;

var pressed = false;

function handleLikebtn(){

    likeCounter++;

    likeBtn.innerText = "👍 "+likeCounter;
    disableLikeBtn();
    setCookie();
}

function handleDisLikebtn(){

    DislikeCounter++;

    DislikeBtn.innerText = "👎 "+DislikeCounter;
    disableDisLikeBtn();
    setCookie();
}

function disableBtns(){

    likeBtn.disabled = true;
    DislikeBtn.disabled = true;


}

function disableLikeBtn(){
    pressed = true;

    if(pressed == true && DislikeCounter>0){
        DislikeCounter--;

        DislikeBtn.innerText = "👎 "+DislikeCounter;

    }

    likeBtn.disabled = true;
    DislikeBtn.disabled = false;

    preesed = false;
}

function disableDisLikeBtn(){
    pressed = true;

    if(pressed == true && likeCounter>0){
        likeCounter--;

        likeBtn.innerText = "👍 "+likeCounter;

    }
    DislikeBtn.disabled = true;
    likeBtn.disabled = false;

    preesed = false;

}

function setCookie(){

    document.cookie="voted=true; SameSite=Strict; Max-Age=50;" 

}

window.onload = function(){

    if(document.cookie.indexOf("voted=true")> -1){
        disableBtns();
    }

}
