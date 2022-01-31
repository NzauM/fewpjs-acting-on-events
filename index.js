let dodger = document.getElementById("dodger");
dodger.style.background = "#FF69B4";

function moveDodgerLeft(){
    let leftMoves = dodger.style.left.replace("px","");
    // console.log("KKKKKK",dodger.style.left)
    console.log(leftMoves)
    let left = parseInt(leftMoves, 10);
    if (left > 0){
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight(){
    let rightMoves = dodger.style.left.replace("px","");
    // console.log("KKKKKK",dodger.style.left)
    let rightpx = parseInt(rightMoves, 10);
    // console.log(rightpx)
    if(rightpx >  0){
        dodger.style.left = `${rightpx + 1}px`
    } 
}

document.addEventListener("keydown", function(e){
    if(e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
});

document.addEventListener("keyup", function(e){
    if(e.key === "ArrowRight"){
        moveDodgerRight();
    }
})