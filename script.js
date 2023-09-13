console.log("Working");

let input = document.getElementById("inputBox");

let buttons = document.querySelectorAll("button");

let string = "";

let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (cbutton) => {
    if (cbutton.target.innerHTML == "=") {
      try {
        // Use the 'eval' function with a 'try...catch' block to handle errors
        string = eval(string);
        input.value = string;
      } catch (error) {
        input.value = "Error";
      }
    }else if(cbutton.target.innerHTML == "AC"){
        // Clear the input when the "DEL" button is clicked
       string = "";
       input.value = "";
    }else if(cbutton.target.innerHTML == "DEL"){
        // For Deleting the last value 
        string = string.substring(0, string.length-1);
        input.value = string;
    } 
    else {
      string += cbutton.target.innerHTML;
      input.value = string;
    }
  });
});
