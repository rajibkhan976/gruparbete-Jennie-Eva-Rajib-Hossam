//Hossam
var arr = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj12];
var ques = ['qus1', 'qus2', 'qus3', 'qus4', 'qus5', 'qus6'];
var answ = ['ans1', 'ans2', 'ans3', 'ans4', 'ans5', 'ans6'];
var resu = ['res1', 'res2', 'res3', 'res4', 'res5', 'res6'];

var INDEX = 0;
var life = 10;

function shuffle(array) {
  let counter = array.length;
  //While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
var x = shuffle(arr);

for (i = 0; i < ques.length; i++) {
  console.log(x[i].que);
  document.getElementById(ques[i]).innerHTML = x[i].que;
  console.log("answ[i]" + answ[i]);

  let divans = document.getElementById(answ[i]);

  let answers = divans.getElementsByClassName('a');
  //alert(answers.length);

  answers[0].innerHTML = x[i].ans1;
  answers[1].innerHTML = x[i].ans2;
  answers[2].innerHTML = x[i].ans3;
}

document.getElementById("Checkbtn").addEventListener("click", myFunction);


function myFunction() {
  var selected1 = document.forms.myForm1.answer.value;
  var selected2 = document.forms.myForm2.answer.value;
  var selected3 = document.forms.myForm3.answer.value;
  var selected4 = document.forms.myForm4.answer.value;
  var selected5 = document.forms.myForm5.answer.value;
  var selected6 = document.forms.myForm6.answer.value;
  //console.log(selected1);
  var selected = [selected1, selected2, selected3, selected4, selected5, selected6, selected1];

  for (var i = 0; i < 6; i++) {
    if (x[i].index == selected[i]) {
      INDEX++;
      document.getElementById(resu[i]).innerHTML = "true";
      document.getElementById(resu[i]).style.background = "green";
    } else {
      document.getElementById(resu[i]).innerHTML = "false";
      document.getElementById(resu[i]).style.background = "red";
    }
  }

  if (INDEX >= 3) {
    document.getElementById("demo").innerHTML = "You passed this level.";
  } else {
    life--;
    document.getElementById("demo").innerHTML = "You lost the game and you have :<br>" + life + " life.";
  }
  document.getElementById("Checkbtn").disabled = true;
}
