const emissionFactors = {
    email: 4,
    streaming: 55,
    cloud: 2,
    video: 150
};

function calculate() {
    const activity = document.getElementById("activity").value;
    const quantity = parseFloat(document.getElementById("quantity").value);

    if (!quantity || quantity <= 0) {
        alert("Please enter a valid number.");
        return;
    }

    const total = emissionFactors[activity] * quantity;

    let riskLevel = "";
    let riskClass = "";

    if (total < 500) {
        riskLevel = "LOW IMPACT";
        riskClass = "low";
    } else if (total < 2000) {
        riskLevel = "MODERATE IMPACT";
        riskClass = "medium";
    } else {
        riskLevel = "HIGH IMPACT";
        riskClass = "high";
    }

    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");

    resultDiv.innerHTML = `
    <h2>${total} g CO₂</h2>
    <div class="alert ${riskClass}">${riskLevel}</div>
    <p>This digital activity produces approximately <strong>${total} grams</strong> of carbon dioxide emissions.</p>
  `;
}