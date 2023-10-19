    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value
    const inputField = document.getElementById("inputField");
    document.getElementById("myForm").addEventListener("submit", function(event)  {
    
      
    // Regular expression pattern for alphanumeric input
      const alphanumericPattern = /^[a-zA-Z0-9]+$/;
      const inputValue = inputField.value;
      // Check if the input value matches the pattern
      if (alphanumericPattern.test(inputValue)) {
        // Valid input: display confirmation and submit the form
        alert("Input is alphanumeric and the form would be submitted (not actually submitted due to the server setup).");
        // Invalid input: display error message
      } else {
        alert("Error: Input must be alphanumeric.");
      }
    });
