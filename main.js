'use strict';

// MAD LIBS ASSIGNMENT


// Event Listeners
document.getElementById('btn').addEventListener('click', madlib);


// Event Functions
function madlib() {
    let wordone = document.getElementById("word-one-Input").value;
    console.log(wordone);
    let wordtwo = document.getElementById("word-two-Input").value;
    console.log(wordtwo);
    let wordthree = document.getElementById("word-three-Input").value;
    console.log(wordthree);
    let wordfour = document.getElementById("word-four-Input").value;
    console.log(wordfour);
    let wordfive = document.getElementById("word-five-Input").value;
    console.log(wordfive);
    let wordsix = document.getElementById("word-six-Input").value;
    console.log(wordsix);
    let wordseven = document.getElementById("word-seven-Input").value;
    console.log(wordseven);
    let wordextra = document.getElementById("word-extra-Input").value;
    console.log(wordextra);
    let story = "Why must we play " + wordone + "? Maybe the " + wordtwo + " of this " + wordthree + " cannot " + wordextra + " the gift of " + wordfour + " responsibly, let alone artificial " + wordfive + ". We will forever remain an " + wordsix + " species, not ready to create " + wordseven +"";
    document.getElementById("para").innerHTML = story;
    
    //document.getElementById("ml1").innerHTML = w1;
}

const button = document.querySelector('button');

//button.onclick = function() {
//  let name = prompt('What is your name?');
//  alert('Hello ' + name + ', nice to see you!');
//}