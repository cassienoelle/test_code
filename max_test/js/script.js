/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let $count = 0;
let $addNum = 1;
let $control = 8;

$(document).ready(function () {

  metro();

});

function metro() {
  let counting = setInterval(()=> {
      console.log($count);
      $count += $addNum;
    }, 1000);
  }
  if ($count > 10) {
    clearInterval(counting);
  }
}
