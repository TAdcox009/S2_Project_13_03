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
var typeDirection = right;

// 5. Add a command to run the init() function when the page loads.
window.onload = init;

// 6. Create the init() function, which sets up the initial conditions of the puzzle. Add the following commands to the function:
function init() {
      allLetters = document.querySelectorAll("table#crossword span");
      currentLetter = allLetters;
      var acrossID = data - clue - a;
      var downID = data - clue - d;

}

// a. Set allLetters to reference the elements using the selector table#crossword span. 
// b.Set currentLetter to reference the first object in allLetters collection
// c.Declare the acrossiD variable, setting its value equal to the value of the data - clue - a attribute
// for currentLetter.Declare the downiD variable, setting its value equal to the value of the data - clue - d attribute
// for currentLetter.
// d. Set the value of acrossClue to reference the element with the id attribute “acrossID”. Set the value of downClue to reference the element with the id attribute “downID”.












/*====================================================*/

function getChar(keyNum) {
      return String.fromCharCode(keyNum);
}