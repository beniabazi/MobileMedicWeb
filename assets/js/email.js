
function sendMail() {
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      details: document.getElementById("details").value,
      device: document.getElementById("device-type").value,
      brand: document.getElementById("brand").value,
      model: document.getElementById("model").value,
      prices: document.getElementById("repair-prices").value,
    };
  
    emailjs.send("service_pfanqep", "template_8ashmvq",parms).then(alert("Email Sent"));
  }
  