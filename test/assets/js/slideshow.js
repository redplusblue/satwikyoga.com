/*
This Program creates a slideshow effect for the page by changing the image name using string operations.

Author: Samir Kabra
*/ 

const banner = document.getElementById("banner");
const cta = document.getElementById("cta");

/* ================================================================= */

// Enter time between slide switch, in seconds
const timeInS = 5;

// Enter the total number of pictures
const numImages = 7;

// Is automatic slideshow active? 
const active = false;

/* ================================================================= */

const indexImages = numImages - 1;

// Path of image goes at the end of imageElements
imageElements = 'url("images/light-bl.svg"), url("images/light-br.svg"), url("images/overlay.png"), url("slideshow/';
let toChange = '0.jpg")';

/**
 * The fileChanger function changes the name of the image file. 
 * @param toChange the name of the file to be changed 
 * @returns toChange the new filename
 */
function fileChanger(toChange, goBack) {
    fileAsArray = toChange.split("");
    
    if (parseInt(fileAsArray[0]) < indexImages) {
        if (goBack) {
            oldNum = parseInt(fileAsArray[0]);

            if(oldNum != 0){
                newNum = oldNum - 1;
            } else {
                newNum = indexImages;
            }

            fileAsArray.splice(0, 1 , newNum.toString());
        } else {
            oldNum = parseInt(fileAsArray[0]);
            newNum = oldNum + 1;
            fileAsArray.splice(0, 1 , newNum.toString());
        }
    } else {
        if(goBack) {
            fileAsArray.splice(0, 1, (indexImages-1).toString());   
        } else {
        fileAsArray.splice(0, 1, "0");
    }
    }
    toChange = fileAsArray.join("");
    return toChange;
}

function nextImage() {
    var goBack = false
    toChange = fileChanger(toChange, goBack);
    backgroundChanger(toChange);
}

function previousImage() {
    var goBack = true;
    toChange = fileChanger(toChange, goBack);
    backgroundChanger(toChange);
}

/**
 * The backgroundChanger function changes the background of respective elements in the page.
 * @param toChange the name of the file to be changed into
 */
function backgroundChanger(toChange) {
    banner.style.backgroundImage = imageElements + toChange;
    cta.style.backgroundImage  = imageElements + toChange;
}

timeInMS = timeInS * 1000;
/**
 * setInterval changes files and backgrounds in a set interval. 
 */
if(active) {
setInterval(function() {
    var goBack = false;
    toChange = fileChanger(toChange, goBack);
    backgroundChanger(toChange);    
}, timeInMS)
}

