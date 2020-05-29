// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn[0].onclick = function () {
    modal[0].style.display = "block";
}

btn[1].onclick = function () {
    modal[1].style.display = "block";
}

btn[2].onclick = function () {
    modal[2].style.display = "block";
}
btn[3].onclick = function () {
    modal[3].style.display = "block";
}

btn[4].onclick = function () {
    modal[4].style.display = "block";
}

btn[5].onclick = function () {
    modal[5].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function () {
    modal[0].style.display = "none";
}

span[1].onclick = function () {
    modal[1].style.display = "none";
}

span[2].onclick = function () {
    modal[2].style.display = "none";
}

span[3].onclick = function () {
    modal[3].style.display = "none";
}
span[4].onclick = function () {
    modal[4].style.display = "none";
}

span[5].onclick = function () {
    modal[5].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
    }
    if (event.target == modal[1]) {
        modal[1].style.display = "none";
    }
    if (event.target == modal[2]) {
        modal[2].style.display = "none";
    }

    if (event.target == modal[3]) {
        modal[3].style.display = "none";
    }

    if (event.target == modal[4]) {
        modal[4].style.display = "none";
    }
    if (event.target == modal[5]) {
        modal[5].style.display = "none";
    }
  
}




