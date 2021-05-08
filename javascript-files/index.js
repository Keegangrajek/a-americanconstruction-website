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
    var x = document.getElementsByClassName("ftr-box-4-centered");
    x[0].innerHTML = `&copy; Copyright ${currentYear}, A-American Construction. All Rights Reserved`;
    // Footer loader (end) \\

    // Code to smooth out the movement of boxes upon resizing the window
});
// Document event listener function (end) \\

var already_been_set_1 = false;
var already_been_set_2 = false;

// This is the header event listener function
// All of the variables used in this function have to stay in the function, otherwise
// they become undefined if they are in global scope. Have not found a solution.
window.addEventListener("scroll", function() {
    var elmnt = document.getElementById("id-hdr-wpr");
    instanceOfScrollbarCheck(elmnt.offsetHeight);
})

// This function checks the state of the scrollbar (actually setup for checking the body)
function instanceOfScrollbarCheck(height_of_initial) {
    var l = document.querySelector("#id-scrolling-navbar-wpr").classList;
    if (window.scrollY > height_of_initial) {
        if (l.contains("scrollbar-toggle-native-on") == true){
            l.remove("scrollbar-toggle-native-on");
            l.add("scrollbar-toggle-native-off");
            return;
        } if (l.contains("scrollbar-toggle-native-off")) {
            return;
        } else {
            console.log("Error: instanceOfScrollbarCheck(): else statement #1");
            return;
        }
    } else {
        if (l.contains("scrollbar-toggle-native-on") == true){
            return;
        } if (l.contains("scrollbar-toggle-native-off")) {
            l.remove("scrollbar-toggle-native-off");
            l.add("scrollbar-toggle-native-on");
            return;
        } else {
            console.log("Error: instanceOfScrollbarCheck(): else statement #2");
            return;
        }
    }
}



// This is the function that handles the search query button at the bottom of the website
var html_elm = document.getElementsByClassName("html-elm");
var hdr_mini_nav = document.getElementsByClassName("hdr-mini-nav");
var hdr_logo_img = document.getElementsByClassName("hdr-logo-img");
var hdr_logo_text_link_h1_1 = document.getElementsByClassName("hdr-logo-text-link-h1-1");
var hdr_logo_text_link_h1_2 = document.getElementsByClassName("hdr-logo-text-link-h1-2");
var mini_nav = document.getElementsByClassName("mini-nav");
var id_scrolling_navbar_wpr = document.getElementById("id-scrolling-navbar-wpr");

// Elements of scrolling navbar
var scrolling_navbar_wpr = document.getElementsByClassName("scrolling-navbar-wpr");
var scrolling_navbar_toggle = document.getElementsByClassName("scrolling-navbar-toggle");
var scrolling_navbar = document.getElementsByClassName("scrolling-navbar");

// test function
function myFunctionDos(){
    console.log("LOL");
};

// function to open the nav bar for mobile devices
function navigationOpen(){
    for (i = 0; i < 6; i++){
        mini_nav[i].style.display = "block";
    }
    hdr_mini_nav[0].style.height = "100%";
    html_elm[0].style.overflowY = "hidden";
};
// function to close the nav bar for mobile devices
function navigationClose(){
    for (i = 0; i < 6; i++){
        mini_nav[i].style.display = "none";
    }
    hdr_mini_nav[0].style.height = "0%";
    html_elm[0].style.overflowY = "auto";
};

// function to allow both elements to have hover effect
function hoverNavigationButtonOn(){
    hdr_logo_img[0].style.filter = "brightness(1.5)";
    hdr_logo_text_link_h1_1[0].style.textShadow = "0px 0px 2px #FFFFFF";
    hdr_logo_text_link_h1_2[0].style.textShadow = "0px 0px 2px #FFFFFF";
    hdr_logo_text_link_h1_1[0].style.color = "white";
    hdr_logo_text_link_h1_2[0].style.color = "white";
};

function hoverNavigationButtonOff(){
    hdr_logo_img[0].style.filter = "brightness(1)";
    hdr_logo_text_link_h1_1[0].style.textShadow = "none";
    hdr_logo_text_link_h1_2[0].style.textShadow = "none";
    hdr_logo_text_link_h1_1[0].style.color = "color: var(--color-light-grey)";
    hdr_logo_text_link_h1_2[0].style.color = "color: var(--color-light-grey)";

};

function hoverScrollingNavbarButtonOn(){
    document.getElementsByClassName("scrolling-navbar-logo")[0].style.filter = "brightness(1.5)";
    document.getElementsByClassName("scrolling-navbar-logo-text")[0].style.textShadow = "0px 0px 2px #FFFFFF";
    document.getElementsByClassName("scrolling-navbar-logo-text")[0].style.color = "white";
}

function hoverScrollingNavbarButtonOff(){
    document.getElementsByClassName("scrolling-navbar-logo")[0].style.filter = "brightness(1)";
    document.getElementsByClassName("scrolling-navbar-logo-text")[0].style.textShadow = "";
    sdocument.getElementsByClassName("scrolling-navbar-logo-text")[0].style.color = "color: var(--color-light-grey)";
}