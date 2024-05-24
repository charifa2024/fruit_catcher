var game=document.querySelector(".game");
var fruit=document.querySelector(".fruit");
var basket=document.querySelector(".basket");
var score=0;


var basketLeft=parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
var basketBottom=parseInt(window.getComputedStyle(basket).getPropertyValue("bottom"));

function moveBasketLeft(){
    if(basketLeft>0){
    basketLeft-=15;
    basket.style.left= basketLeft+'px';
    }
}

function moveBasketRight(){
    if(basketLeft<620){
    basketLeft+=15;
    basket.style.left = basketLeft+'px';}
}

function control(e){
    if(e.key=="ArrowLeft"){
        moveBasketLeft();
    }

    if(e.key=="ArrowRight"){
        moveBasketRight();
    }
}

function generatefruit(){
   
    var fruitbottom=470;
    var fruitleft=Math.floor(Math.random()*620);
    var fr=document.createElement('div');
    fr.setAttribute("class","fr");
    fruit.appendChild(fr);
    function falldownfruit(){
        if(fruitbottom<basketBottom+50 && fruitbottom>basketBottom && fruitleft>basketLeft-30 && fruitleft<basketLeft +80){
            fruit.removeChild(fr);
            clearInterval(fallinterval);
            score++;
        }
        if(fruitbottom<basketBottom){
            alert("GAME OVER !! </3 :( \n your score is :"+score);
            clearInterval(fallinterval);
            clearTimeout(fruittimeout);
            location.reload();
        }
        fruitbottom-=4;
        fr.style.bottom=fruitbottom+'px';
        fr.style.left=fruitleft+'px';

    }
    var fallinterval =setInterval(falldownfruit,20);
    var fruittimeout =setTimeout(generatefruit,3000)
    
}

generatefruit();
document.addEventListener("keydown",control);
