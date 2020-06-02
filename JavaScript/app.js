document.getElementsByClassName("button1").onclick = button1;

function button1() {
var Clue1 = prompt("On the chopping bench in the kitchen there are two items which could be used as evidence. One item provides direct evidence and you will be able to continue to the next stage straight away - the others will require you to solve a puzzle first...which do you choose 1 or 2?");

if (Clue1==1) {
  var Invoice = prompt("You chose option 1, an old invoice!");
}
else {
    alert("You chose option 2, an engraved chopping board! Well done - the engraving on the chopping board is a Chinese name - 张小平 (Zhang Xiaoping) - which is the name of the chef. This will be vital evidence! Remember the name...");
}
}


if (Invoice >30) {
    alert("Big spender!");
  }
  else if (HowMuch <30) {
      alert("Better be careful!")
  }
    
var Clue2 = alert("You sucessfully found one clue, to get the next clue you need to solve the riddle");

var Answer1 = prompt("What would you like your first item to be?");

var Item2 = prompt("What would you like your second item to be?");

var Item3 = prompt("What would you like your third item to be?");

var ShoppingList = [Item1, Item2, Item3];
console.log(ShoppingList);

var FinalList = alert(`You collected all the clues and escaped the room. You sound out that... ${ShoppingList}.`);