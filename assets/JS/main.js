$(document).ready(function() {
  // all custom jQuery will go here
  console.log("I hear you");

  // anime({
  //   targets: 'a.nav-link',
  //   translateX: [
  //     { value: 50, duration: 2000, delay: 300 },
  //     //{ value: 0, duration: 350 }
  //   ]
  // })
  
  $('#avatar').hide().fadeIn(5000);
  

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
})

