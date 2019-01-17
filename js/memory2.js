document.getElementById("rubrikP"). innerHTML = "MEMORY";

document.getElementById("rubrik").addEventListener("mouseover", function(){
  document.getElementById("rubrik").style.backgroundColor = "deeppink";
});


var timeleft = 10;
var downloadTimer = setInterval(function(){
 document.getElementById("time"). innerHTML = (timeleft);

 	timeleft--;

  if(timeleft <= -1){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "Time's up!";

    endGame();
  }
},1000);

function endGame() {

}
