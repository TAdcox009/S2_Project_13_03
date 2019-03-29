"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
      Author: Todd Adcox Jr
      Date:   3-27-19   
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/


// 4. Return to the pc_cword.js file in your editor. Below the initial comment section, declare the fol- lowing global variables:
// a. allLetters, which will be used to reference all letters in the crossword puzzle 
// b. currentLetter, which will be used to reference the letter currently selected in the puzzle 
// c. wordLetters, which will be used to reference the letters used in the currently selected across and down clues 
// d. acrossclue, which will be used to reference the across clue currently selected in the puzzle e. downclue, which will be used to reference the down clue currently selected in the puzzle
// f. typeDirection, which stores the current typing direction (either to the right or down); set its initial value to “right” 
var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var typeDirection = "right";

// 5. Add a command to run the init() function when the page loads.
window.onload = init;

// 6. Create the init() function, which sets up the initial conditions of the puzzle. Add the following commands to the function:
// a. Set allLetters to reference the elements using the selector table#crossword span. 
// b.Set currentLetter to reference the first object in allLetters collection
// c.Declare the acrossiD variable, setting its value equal to the value of the data - clue - a attribute
// for currentLetter.Declare the downiD variable, setting its value equal to the value of the data - clue - d attribute
// for currentLetter.
// d. Set the value of acrossClue to reference the element with the id attribute “acrossID”. 
// Set the value of downClue to reference the element with the id attribute “downID”.

function init() {
      allLetters = document.querySelectorAll("table#crossword span");
      currentLetter = allLetters[0];
      var acrossID = currentLetter.dataset.clueA;
      var downID = currentLetter.dataset.clueD;
      acrossClue = document.getElementById(currentLetter.dataset.clueA);
      downClue = document.getElementById(currentLetter.dataset.clueD);
}

// 7. Next, create the formatPuzzle() function. This function will format the colors of the crossword table cells and the clues in the clues list based on the letter that is selected by user. The function has a single parameter named puzzleLetter. Add the following commands to the function: 
// a. Change the value of currentLetter to puzzleLetter.
// b. Remove the current colors in the puzzle by looping through all items in the allLetters object collection, changing the background-color style of each to an empty text string.
// c. After the for loop, remove the highlighting of the current clues by changing the color style of acrossClue and downClue to an empty text string.

function formatPuzzle(puzzleLetter) {
      currentLetter = puzzleLetter;
      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.backgroundcolor = "";
      }
      acrossClue.style.color = "";
      downClue.style.color = "";

      // d.	Determine whether there exists an across clue for the current letter by testing whether currentLetter.dataset.clueA is not equal to undefined. If true, then do the following: 
      // i.	Set acrossClue to reference the element with the ID value of currentLetter.dataset. clueA in order to reference the across clue for the current letter.
      // ii.	Change the color style of acrossClue to blue. 
      // iii. Set wordLetters to reference all elements selected by the CSS selector [data-clue-A =clue] where clue is the value of data-clue-a for currentLetter. 
      // iv.	Change the background-color style of every item in wordLetters to the light blue color
      // value rgb(231, 231, 255).

      if (currentLetter.dataset.clueA !== undefined) {
            acrossClue = document.getElementById(currentLetter.dataset.clueA);
            acrossClue.style.color = "blue";
            wordLetters = document.querySelectorAll("[data-clue-a =" + currentLetter.dataset.clueA + "]");

            for (var i = 0; i < wordLetters.length; i++) {
                  wordLetters[i].style.backgroundcolor = "rgb(231, 231, 255)";
            }
      }

      // e. Repeat Step d for the down clue indicated by the data-clue-d attribute, changing the color style of downClue to red and the background-color style of the items in wordLetters to the light red color value rgb(255, 231, 231).

      if (currentLetter.dataset.clueD !== undefined) {
            downClue = document.getElementById(currentLetter.dataset.clueD);
            downClue.style.color = "red";
            wordLetters = document.querySelectorAll("[data-clue-d =" + currentLetter.dataset.clueD + "]");
            for (var i = 0; i < wordLetters.length; i++) {
                  wordLetters[i].style.backgroundcolor = "rgb(255, 231, 231)";
            }
      }

      // f.	Indicate the typing direction for the current letter. If typeDirection = “right”, change the background color of currentLetter to the blue color value rgb(191, 191, 255); otherwise, change the background color to the red color value rgb(255, 191, 191).

      if (typeDirection = "right") {
            currentLetter[i].style.color = "rgb(191, 191, 255)";
      } else {
            currentLetter[i].style.color = "rgb(255, 191, 191)";
      }
}

/*====================================================*/

function getChar(keyNum) {
      return String.fromCharCode(keyNum);
}