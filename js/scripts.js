// constants for query selector
var changeCustomColorButton = document.querySelector(".custColor");
var paragraph = document.getElementById("myStudentId");
var inputText = document.getElementById("customNumber");
var background = document.querySelector("body");
var changeRandomColorButton = document.querySelector(".randColor");
var selectTag = document.getElementById("imageSelect");
var images = document.getElementById("images");
var arr = [
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg",
  "./img/img4.jpg",
  "./img/img5.jpg",
];
// function to change bg color from user input and add student id
function changeCustomColor() {
  paragraph.textContent = "200544640";
  if (inputText.value < 0 || inputText.value >= 100) {
    background.style.backgroundColor = "red";
  } else if (inputText.value >= 0 && inputText.value < 20) {
    background.style.backgroundColor = "green";
  } else if (inputText.value >= 20 && inputText.value < 40) {
    background.style.backgroundColor = "blue";
  } else if (inputText.value >= 40 && inputText.value < 60) {
    background.style.backgroundColor = "orange";
  } else if (inputText.value >= 60 && inputText.value < 80) {
    background.style.backgroundColor = "purple";
  } else if (inputText.value >= 80 && inputText.value < 100) {
    background.style.backgroundColor = "yellow";
  }
}

// function to change bg color from random no.
function changeRandomColor() {
  let randomNumber = Math.random() * 100;
  if (randomNumber < 0 || randomNumber >= 100) {
    background.style.backgroundColor = "red";
  } else if (randomNumber >= 0 && randomNumber < 20) {
    background.style.backgroundColor = "green";
  } else if (randomNumber >= 20 && randomNumber < 40) {
    background.style.backgroundColor = "blue";
  } else if (randomNumber >= 40 && randomNumber < 60) {
    background.style.backgroundColor = "orange";
  } else if (randomNumber >= 60 && randomNumber < 80) {
    background.style.backgroundColor = "purple";
  } else if (randomNumber >= 80 && randomNumber < 100) {
    background.style.backgroundColor = "yellow";
  }
}

// function to generate options for select list
function addList() {
  // Tip: you might have to check length condition so that the list does not keep growing when clicked

  for (let i = 0; i < arr.length; i++) {
    var newItem = document.createElement("option");
    newItem.text = "Image" + i;
    newItem.value = arr[i];
    selectTag.appendChild(newItem);
  }

  // Tip: use createElement and appendChild inside every for loop to add elements to select list from array
}

// function to change image
function changeImage() {
  var selectedItem = selectTag.value;
  console.log("Selected item: ", selectedItem);
  if (selectedItem == arr[0]) {
    images.setAttribute("src", arr[0]);
  } else if (selectedItem == arr[1]) {
    images.setAttribute("src", arr[1]);
  } else if (selectedItem == arr[2]) {
    images.setAttribute("src", arr[2]);
  } else if (selectedItem == arr[3]) {
    images.setAttribute("src", arr[3]);
  } else if (selectedItem == arr[4]) {
    images.setAttribute("src", arr[4]);
  }
}

// event listeners for on click event of buttons and select
changeCustomColorButton.addEventListener("click", changeCustomColor);
changeRandomColorButton.addEventListener("click", changeRandomColor);
selectTag.addEventListener("change", changeImage); // for changing image
document.addEventListener("DOMContentLoaded", addList); // to add options in select tag

// event listeners for on change event of select
