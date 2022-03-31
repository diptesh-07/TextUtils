// switches for enabling darkmode
const Checkbox = document.getElementById("Checkbox");
Checkbox.addEventListener("change", () => {
  //  change the theme of website
  document.body.classList.toggle("dark");
});

//function for modify text into uppercase

document.getElementById("UpperCase_btn1").onclick = function () {
  var upperString = document.getElementById("TextWriter").value.toUpperCase();
  document.getElementById("TextWriter").value = upperString;
};

//function for modify text into lowercase

document.getElementById("LowerCase_btn2").onclick = function () {
  var upperString = document.getElementById("TextWriter").value.toLowerCase();
  document.getElementById("TextWriter").value = upperString;
};

// function for word counter
function countWord() {

  // Get the input text value
  var words = document
    .getElementById("TextWriter").value;

  // Initialize the word counter
  var count = 0;

  // Split the words on each
  // space character
  var split = words.split(' ');

  // Loop through the words and
  // increase the counter when
  // each split word is not empty
  for (var i = 0; i < split.length; i++) {
    if (split[i] != "") {
      count += 1;
    }

  }
  // Display it as output
  document.getElementById("show")
    .innerHTML = count;
}

// function for character counter

document.getElementById('TextWriter').onkeyup = function () {
  document.getElementById('charcounter').innerHTML = (this.value.length);
};

//function for copying text from textarea

function copythetext() {
  /* Get the text field */
  var copyText = document.getElementById("TextWriter");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  // alert("Copied the text: " + copyText.value);
}

// function clearText(){
//   let Clrtext = document.getElementById("TextWriter");




// }