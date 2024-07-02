const deviceTypeSelect = document.getElementById("device-type");
const brandSelect = document.getElementById("brand");
const modelSelect = document.getElementById("model");
const repairPricesDiv = document.getElementById("repair-prices");

// Sample repair data with prices (replace with your actual data)
fetch("./assets/json/repairData.json")
  .then((response) => response.json())
  .then((data) => {
    // Now you have the parsed JSON data in the 'data' variable
    repairData = data;
    populateBrandSelect(); // Call initial population function
  })
  .catch((error) => {
    console.error("Error fetching repair data:", error);
  });

// Function to populate brand select based on device type
function populateBrandSelect() {
    const selectedDeviceType = deviceTypeSelect.value;
    brandSelect.innerHTML = '<option value="">Select Brand</option>'; // Set default option
    if (selectedDeviceType) {
      const brands = Object.keys(repairData[selectedDeviceType]);
      brands.forEach((brand) => {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
      });
      brandSelect.disabled = false;
    } else {
      brandSelect.disabled = true;
    }
  }
  
  // Function to populate model select based on device type and brand
  function populateModelSelect() {
    const selectedDeviceType = deviceTypeSelect.value;
    const selectedBrand = brandSelect.value;
    modelSelect.innerHTML = '<option value="">Select Model</option>'; // Set default option
    if (selectedDeviceType && selectedBrand) {
      const models = Object.keys(repairData[selectedDeviceType][selectedBrand]);
      models.forEach((model) => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
      });
      modelSelect.disabled = false;
    } else {
      modelSelect.disabled = true;
    }
  }
  
// Function to populate repair prices based on device type, brand, and model
function populateRepairPrices() {
  const selectedDeviceType = deviceTypeSelect.value;
  const selectedBrand = brandSelect.value;
  const selectedModel = modelSelect.value;
  repairPricesDiv.textContent = ""; // Clear previous prices
  if (selectedDeviceType && selectedBrand && selectedModel) {
    const repairOptions = repairData[selectedDeviceType][selectedBrand][selectedModel];
    repairPricesDiv.innerHTML = "<h3>Available Repair Services:</h3>"; // Add heading
    let list = document.createElement("ul"); // Create an unordered list
    repairOptions.forEach((option) => {
      const listItem = document.createElement("li");
      listItem.textContent = option; // Display repair option text

      // Add checkbox to each list item
      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.value = option; // Set checkbox value to repair option string
      listItem.appendChild(checkBox);
      listItem.appendChild(document.createTextNode(" ")); // Add space between text and checkbox

      list.appendChild(listItem);
    });
    repairPricesDiv.appendChild(list); // Add list to the repair prices div
  } else {
    repairPricesDiv.textContent = "Please select Device Type, Brand, and Model";
  }
}
// Function to extract price from repair option string (assuming price is after '</span>')
function extractPrice(optionString) {
  // Improved price extraction using regular expression
  const priceMatch = optionString.match(/$(d+(?:.d+)?)/);
  return priceMatch ? parseFloat(priceMatch[1]) : 0;
}


// Event listeners
deviceTypeSelect.addEventListener("change", () => {
  populateBrandSelect();
  populateModelSelect();
  populateRepairPrices();
});

brandSelect.addEventListener("change", populateModelSelect);
modelSelect.addEventListener("change", populateRepairPrices);

// **Initial population (optional)**
populateBrandSelect();


function sendMail() {
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    phone : document.getElementById("phone").value,
    details : document.getElementById("details").value,
    device : document.getElementById("device-type").value,
    brand : document.getElementById("brand").value,
    model : document.getElementById("model").value,
    prices : document.getElementById("repair-prices").value,
  }

  emailjs.send("service_wsxz7mk","template_8ashmvq",parms).then(alert("Email Sent"))



}


