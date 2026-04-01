// Select the image that was hidden
let picture = document.querySelector("#image");
let button = document.querySelector(".button");
// let hide = document.querySelector(".close");
// let hideDiv = document.querySelector("#close-button");
let closeButton = document.querySelector("#close-button");

// created a function that makes the image display
function displayImage(){
    // style the image that was hidden by css to display it when the button is clicked
    picture.style.display = "block";
    button.innerHTML = "Here is the image";
}
// add a click event listener to the button that will call the displayImage function when the button is clicked
button.addEventListener("click", displayImage);
// created a function that hides the close button when it is clicked
// function hideImg() {
//     picture.style.display = "none";
    button.innerHTML = "view";
// }
function closeImage() {
    picture.style.display = "none";
    button.innerHTML = "view";
}
closeButton.addEventListener("click", closeImage);

