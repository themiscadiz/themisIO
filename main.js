let changeText = true;
let showText;

// window.addEventListener('DOMContentLoaded', async () => {

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  myFunction2();
  changeText = !changeText;
  // console.log(changeText); 
}

function myFunction2() {

  if (changeText) {
    document.getElementById("btn").innerHTML = "⚌";
  }
  else {
    document.getElementById("btn").innerHTML = "☰";
  }
}



//////////////////////////
/////////////////////////

    // Close the dropdown if the user clicks outside of it
  // window.onclick = function(event) {

  //   if (!event.target.matches('.dropbtn')) {

  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }




