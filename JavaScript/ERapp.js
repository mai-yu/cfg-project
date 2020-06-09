document.getElementsByClassName("button1").onclick = button1;

function button1() {
var Clue1 = prompt("On the chopping bench in the kitchen there are two items which could be used as evidence. One item provides direct evidence and you will be able to continue to the next stage straight away - the others will require you to solve a puzzle first...which do you choose 1 or 2?");

if (Clue1==1) {
  var Invoice = alert("You chose option 1, an old invoice! Hover the mouse over the hanging durian fruit for further instructions");
}
else {
    alert("You chose option 2, an engraved chopping board! Well done - the engraving on the chopping board is a Chinese name - 张小平 (Zhang Xiaoping) - which is the name of the chef. This will be vital evidence! Remember the name...");
    alert('Hover over the red lanterns for another clue.')
}
}
    
document.getElementsByClassName("button2").onclick = button2;
function button2() {
  var Police = alert("You think you've found the three peices of information needed? Lets see...");
  var Answer1 = prompt("Where were the fortune cookies brought from?");
  if (Answer1.toLowerCase() =='lucky cat casino') {
    var Answer2 = prompt("What was the name of the chef?");
  }
    else {
      alert('Missed a clue? Click on the picture of the panda to work out where the fortune cookies came from.');
    }

  if (Answer2.toLowerCase() =='zhang xiaoping') {
    var Answer3 = prompt("What time was the delivery on Sunday?"); 
  }
    else {
    alert('Missed a clue? Click on the chopping board to work out the chefs name.');
  }

  if (Answer3.toLowerCase() =='4pm') {
      var FinalList = alert(`You collected all the clues and reported relevant information to the police! You discovered that the chef, ${Answer2}, was expecting a delivery of drugs from ${Answer1} on Sunday at ${Answer3}. The police have an operation planned to arrest those involved when the delivery takes place thanks to you!`);
    }
    else {
      alert("Hmmmm check the note from the casino again.");
    }
  }
     
    


  



