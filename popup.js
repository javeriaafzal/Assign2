// Initialize Variables
var closePopup = document.getElementById("popupclose");
var closePopup1 = document.getElementById("popupclose1");
var closePopup2 = document.getElementById("popupclose2");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var button = document.getElementById("button");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

// Close Popup Event
closePopup.onclick = function() {
  overlay.style.display = 'none';
  popup.style.display = 'none';
};
// Show Overlay and Popup
button.onclick = function() {
  overlay.style.display = 'block';
  popup.style.display = 'block';
}


// Close Popup Event
closePopup1.onclick = function() {
  overlay.style.display = 'none';
  popup1.style.display = 'none';
};
// Show Overlay and Popup
button1.onclick = function() {
  overlay.style.display = 'block';
  popup1.style.display = 'block';
}


// Close Popup Event
closePopup2.onclick = function() {
  overlay.style.display = 'none';
  popup2.style.display = 'none';
};
// Show Overlay and Popup
button2.onclick = function() {
  overlay.style.display = 'block';
  popup2.style.display = 'block';
}