var randomNumber1=Math.random()
randomNumber1=Math.floor(randomNumber1*6)+1;

var randomDiceImage="dice"+randomNumber1+".png"

var randomDiceImagesSource="images/"+randomDiceImage;

var  image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImagesSource);


var randomNumber2=Math.random()
randomNumber2=Math.floor(randomNumber2*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png"
var randomDiceImagesSource2="images/"+randomDiceImage2;
var  image2=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomDiceImagesSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 win!"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="🚩 Player 2 win!";
}
else{
    document.querySelector("h1").textContent="Draw";
}