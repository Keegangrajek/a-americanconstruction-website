/*
Start of index.js

Project 0001 (Website a-americanconstruction.com) 

Made by Keegan Grajek

This file is under copyright by a-americanconstruction.com all rights reserved 2021

DELETE AFTER DONE WITH DOCUMENT FOR KEEGAN'S EYES ONLY
Rules of document:
Any changes of css made in javascript should follow the rules of the corresponding css file
Any changes of html made in javascript should follow the rules of the corresponding html file
*/


// DO NOT FORGET TO REPLACE THE <insert line # here>


// Document event listener function \\
// This function waits for the html to load as to avoid the error of calling an element that has not been created yet.
document.addEventListener("DOMContentLoaded", function(){
    // Footer loader \\
    // Creating a new instance of Date();
    var d = new Date();
    // Getting the year and month
    var currentYear = d.getFullYear();
    // Case and switch statement for converting from integer to mnemonic of month
    // This line sets the footer's inner HTML so it can interface with the script
    var x = document.getElementsByClassName("ftr-box-4");
    x[0].innerHTML = `<small>&copy; Copyright ${currentYear}, A-American Construction. All Rights Reserved</small>`;
    // Footer loader (end) \\

    // Code to smooth out the movement of boxes upon resizing the window
});

// This is the function that handles the search query button at the bottom of the website
function myFunctionDos() {
    console.log("LOL");
};
// Document event listener function (end) \\
