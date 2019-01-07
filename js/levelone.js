function levelOne () {
  var possibleScore = [12,11,10,9,8,7,6,5,4,3,2,1];
  var playersPosition = 0, playerGoal = 50, goalDiff = 0;
  for (var c = 0; playersPosition < playerGoal; ) {
      goalDiff = playerGoal - playersPosition;
      console.log("Your are " + goalDiff + " behind from your goal");
      var randomScore = Math.floor(Math.random() * possibleScore.length);
      var playerScore = possibleScore[randomScore];
      console.log("You have scored " + playerScore);
      if (goalDiff < playerScore) {
        console.log("You have scored more than needed so you need to strike agaian");
        continue;
      }
      playersPosition += playerScore;
      console.log("Your current position is " + playersPosition);
      if (playersPosition == 5) {
        playersPosition = 27;
        console.log("You have get a ladder and now you are in " + playersPosition);
      }
      if (playersPosition == 24) {
        playersPosition = 16;
        console.log("You have been beaten by a snake and therefore now you are in " + playersPosition);
      }
      if (playersPosition === playerGoal) {
        console.log("You won the game");
        break;
      }
  }

}
