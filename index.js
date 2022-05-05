var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var randomImage1 = "img/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);


var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
var randomImage2 = "img/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
 document.querySelector("h1").innerHTML = "👏Player1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
 document.querySelector("h1").innerHTML = "🎁Player2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
