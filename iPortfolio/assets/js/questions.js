function submitForm(event) {
    event.preventDefault();
  
    // Collect data
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
  
    const question1 = parseFloat(document.getElementById("question1").value);
    const question2 = parseFloat(document.getElementById("question2").value);
    const question3 = parseFloat(document.getElementById("question3").value);
    const question4 = parseFloat(document.getElementById("question4").value);
    const question5 = parseFloat(document.getElementById("question5").value);
  
    // Validate email and phone number
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    const phonePattern = /^[0-8]{9}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
  
    // Store data in an object
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      address,
      ratings: [question1, question2, question3, question4, question5]
    };
  
    console.log("Form Data:", formData);
  
    // Calculate average rating
    const average = formData.ratings.reduce((sum, val) => sum + val, 0) / 5;
  
    // Display results
    document.getElementById("formResults").innerHTML = `
      <p><strong>First Name:</strong> ${formData.firstName}</p>
      <p><strong>Last Name:</strong> ${formData.lastName}</p>
      <p><strong>Email Address:</strong> ${formData.email}</p>
      <p><strong>Phone Number:</strong> ${formData.phone}</p>
      <p><strong>Address:</strong> ${formData.address}</p>
      <p><strong>Ratings:</strong> ${formData.ratings.join(", ")}</p>
    `;
  
    // Color-coded average score
    let colorClass = "green";
    if (average <= 3.4) colorClass = "red";
    else if (average <= 7.1) colorClass = "orange";
  
    document.getElementById("average").innerHTML = `
      Average Score: <span class="${colorClass}">${average.toFixed(2)}</span>
    `;
  }
  