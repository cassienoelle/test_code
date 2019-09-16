/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let $count = 0;
let $addNum = 1;
let $control = 8;
let counting;

$(document).ready(function () {

  metro();

});

function metro() {
  counting = setInterval(()=> {
      if ($count <= $control) {
        console.log($count);
        $count += $addNum;
      } else {
        $count = 0;
      }
    }, 1000);
  }

function stop() {
  clearInterval(counting);
}
