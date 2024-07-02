
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        details: document.getElementById("details").value,
        device: document.getElementById("device-type").value,
        brand: document.getElementById("brand").value,
        model: document.getElementById("model").value,
        prices: [], // Initialize an empty array for selected repair prices
      };
      
      // Get all checkboxes associated with repair prices
      const repairCheckboxes = document.querySelectorAll("#repair-prices input[type=checkbox]");
      
      // Loop through checkboxes and add selected repair options to prices array
      repairCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
          parms.prices.push(checkbox.value); // Add the value (repair option) to the prices array
        }
      });

  emailjs.send("service_pfanqep","template_8ashmvq",parms).then(alert("Email Sent"))
}
