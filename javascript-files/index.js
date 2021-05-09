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
        if (l.contains("scrollbar-toggle-native-on") == true){ // scrolling navbar is active
            l.remove("scrollbar-toggle-native-on");
            l.add("scrollbar-toggle-native-off");
            disableOrEnableNavbarElements(true);
            return;
        } if (l.contains("scrollbar-toggle-native-off")) { // scrolling navbar is active
            disableOrEnableNavbarElements(true);
            return;
        } else {
            console.log("Error: instanceOfScrollbarCheck(): else statement #1");
            return;
        }
    } else {
        if (l.contains("scrollbar-toggle-native-on") == true){ // scrolling navbar is not active
            disableOrEnableNavbarElements(false);
            return;
        } if (l.contains("scrollbar-toggle-native-off")) { // scrolling navbar is not active
            l.remove("scrollbar-toggle-native-off");
            l.add("scrollbar-toggle-native-on");
            disableOrEnableNavbarElements(false);
            return;
        } else {
            console.log("Error: instanceOfScrollbarCheck(): else statement #2");
            return;
        }
    }
}


// I need to change this code to detect if the elements have the display-none class to them because this will be firing quite a lot

function disableOrEnableNavbarElements(scrolling_navbar_is_active){
    // debug mode for troubleshooting issues with this working
    var debug_mode = true;
    var scrolling_navbar_logo_text = document.getElementById("id-scrolling-navbar-logo-text");
    var scrolling_navbar_logo = document.getElementById("id-scrolling-navbar-logo");
    var scrolling_navbar_logo_container = document.getElementById("id-scrolling-navbar-logo-container");
    var array_scrolling_navbar_links = document.getElementsByClassName("scrolling-navbar-link");
    var scrolling_navbar_menu = document.getElementById("id-scrolling-navbar-menu");
    if (scrolling_navbar_is_active) {
        if (scrolling_navbar_menu.classList.contains("display-none") == true) {
            for (let p = 0; p < array_scrolling_navbar_links.length; p++) {
                array_scrolling_navbar_links[p].classList.remove("display-none");
            }
    
            scrolling_navbar_logo.classList.remove("display-none");
            scrolling_navbar_logo_text.classList.remove("display-none");
            scrolling_navbar_logo_container.classList.remove("display-none");
            scrolling_navbar_menu.classList.remove("display-none");
    
            if (debug_mode){
                console.log("scrolling_navbar_is_active");
            }
            return;
        } else {
            return;
        }
    }
    if (!scrolling_navbar_is_active) {
        if (scrolling_navbar_menu.classList.contains("display-none") == false) {
            for (let q = 0; q < array_scrolling_navbar_links.length; q++) {
                array_scrolling_navbar_links[q].classList.add("display-none");
            }
            
            scrolling_navbar_logo.classList.add("display-none");
            scrolling_navbar_logo_text.classList.add("display-none");
            scrolling_navbar_logo_container.classList.add("display-none");
            scrolling_navbar_menu.classList.add("display-none");
    
            if (debug_mode){
                console.log("!scrolling_navbar_is_active");
            }
    
            return;
        } else {
            return;
        }
    }
    console.log("error #1 in disableOrEnableNavbarElements()");
    return;
}


/*  Structure of the html for reference of function targeting  

    <a class="scrolling-navbar-logo-container" id="id-scrolling-navbar-logo-container" href="#" onmouseover="hoverScrollingNavbarButtonOn()" onmouseout="hoverScrollingNavbarButtonOff()">
        <img class="scrolling-navbar-logo" id="id-scrolling-navbar-logo" src="./img-files/logo.svg" alt="logo-image"></img>
        <h1 class="scrolling-navbar-logo-text" id="id-scrolling-navbar-logo-text">A-American Construction</h1>
    </a>
    <a class="scrolling-navbar-link" id="scrolling-navbar-link-home" href="#">HOME</a>
    <a class="scrolling-navbar-link" id="scrolling-navbar-link-about" href="#">ABOUT</a>
    <a class="scrolling-navbar-link" id="scrolling-navbar-link-contact" href="#">CONTACT</a>
    <a class="scrolling-navbar-link" id="scrolling-navbar-link-services" href="#">SERVICES</a>
    <a class="scrolling-navbar-link" id="scrolling-navbar-link-apply" href="#">APPLY</a>
    <a class="scrolling-navbar-menu material-icons" id="id-scrolling-navbar-menu" onclick="navigationOpen()">menu</a>
*/



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
    document.getElementsByClassName("scrolling-navbar-logo-text")[0].style.color = "color: var(--color-light-grey)";
}