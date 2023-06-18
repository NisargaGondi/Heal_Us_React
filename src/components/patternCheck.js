// Define the function to check the string format
function checkStringFormat(form) {
    const pattern = /^1BM\d{2}[a-zA-Z]{2}\d{2}$/;
  
    if (pattern.test(str)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Get the form element
  const form = document.querySelector('form');
  
  // Add an event listener to the form's submit event
  form.addEventListener('login', function(event) {
    // Get the input element for the USN
    const userInput = document.querySelector('#loginUser');
    
    // Check if the input value matches the pattern
    if (!checkStringFormat(form.userInput.value)) {
      // If the input value doesn't match the pattern, prevent the form from submitting and display an error message
      event.preventDefault();
      alert("Please enter a valid USN in the format 1BMxxLLyy, where xx is a 2-digit number and LL and yy are 2-letter codes.");
    }
  });