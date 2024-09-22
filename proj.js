


function hamburger(){
    var x = document.getElementById("se");
    if (x.style.display === "none"){
        x.style.display ="block"
    }
    else{
        x.style.display = "none"
    }
}

var dropdown = document.getElementsByClassName("dropdown")[0];
var dropbtn = document.getElementsByClassName("dropbtn")[0];
var dropdownContent = document.getElementsByClassName("dropdown-content")[0];

// Toggle dropdown on click
dropbtn.onclick = function() {
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}
