const deviceTypeSelect = document.getElementById('device-type');
const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');
const repairPricesDiv = document.getElementById('repair-prices');
const selectAllCheckbox = document.getElementById('select-all');

// Sample repair data with prices (replace with your actual data)
const repairData = {
  phone: {
    Apple: {
      "Select Model":[],
      "iPhone X": ["Soft OLED Screen = $169", "Back Glass = $99", "Battery Replacement = $99", "Back Camera = $149"],
      "iPhone XS": ["AfterMarket (Soft OLED) Screen = $169", "Back Glass = $99", "Battery Replacement = $99", "Back Camera = $149"],
      "iPhone 15 Pro MAX": ["6429", "6432"] // Assuming these are model numbers, not descriptions
    },
    Samsung: {
      "Galaxy S22 Ultra": ["Screen Replacement = $249", "Battery Replacement = $129", "Charging Port Repair = $79"],
      "Galaxy Note 20 Ultra": ["Screen Replacement = $299", "Back Glass Replacement = $199", "Battery Replacement = $149"]
    }
  },
  tablet: {
    // Add data for tablets following the same structure
  }
};

// Function to populate brand select based on device type
function populateBrandSelect() {
  const selectedDeviceType = deviceTypeSelect.value;
  brandSelect.innerHTML = ""; // Clear previous options

  if (selectedDeviceType) {
    const brands = Object.keys(repairData[selectedDeviceType]);
    brands.forEach(brand => {
      const option = document.createElement('option');
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
  modelSelect.innerHTML = ""; // Clear previous options

  if (selectedDeviceType && selectedBrand) {
    const models = Object.keys(repairData[selectedDeviceType][selectedBrand]);
    models.forEach(model => {
      const option = document.createElement('option');
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
  repairPricesDiv.innerHTML = ""; // Clear previous prices

  if (selectedDeviceType && selectedBrand && selectedModel) {
    const repairOptions = repairData[selectedDeviceType][selectedBrand][selectedModel];
    repairOptions.forEach(option => {
      const label = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = option;
      label.textContent = option;
      label.appendChild(checkbox);
      repairPricesDiv.appendChild(label);
    });
  }
}

// Function to handle select all checkbox click
function handleSelectAll() {
  const checkboxes = repairPricesDiv.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked);
}

// Event listeners
deviceTypeSelect.addEventListener('change', () => {
  populateBrandSelect();
  populateModelSelect();
  populateRepairPrices();
  selectAllCheckbox.checked = false; // Reset select all on device change
});

brandSelect.addEventListener('change', populateModelSelect);
modelSelect.addEventListener('change', populateRepairPrices);
selectAllCheckbox.addEventListener('change', handleSelectAll);

// Initial population (if needed)
populateBrandSelect();

// Function to calculate total cost of selected repairs
function calculateTotalPrice() {
  const checkboxes = repairPricesDiv.querySelectorAll('input[type="checkbox"]:checked');
  let totalPrice = 0;
  checkboxes.forEach(checkbox => {
    totalPrice += extractPrice(checkbox.value);
  });
  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`; // Format price with 2 decimal places
  repairPricesDiv.appendChild(totalPriceElement); // Display total price below repair options
}


