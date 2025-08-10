document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("carbonForm");
    const resultDiv = document.getElementById("result");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const carKm = parseFloat(document.getElementById("carKm").value) || 0;
            const electricity = parseFloat(document.getElementById("electricity").value) || 0;
            const meatMeals = parseFloat(document.getElementById("meatMeals").value) || 0;

            const totalCarbon = (carKm * 0.21) + (electricity * 0.475) + (meatMeals * 1.5);

            resultDiv.innerHTML = `
                <h3>Your Estimated Daily Carbon Footprint:</h3>
                <p><strong>${totalCarbon.toFixed(2)} kg CO₂</strong></p>
                <p>${totalCarbon < 5 ? "Great job! 🌍" : "Try reducing your impact! 💚"}</p>
            `;

            localStorage.setItem("lastCarbonResult", totalCarbon.toFixed(2));
        });

        const savedResult = localStorage.getItem("lastCarbonResult");
        if (savedResult) {
            resultDiv.innerHTML = `
                <h3>Your Last Calculation:</h3>
                <p><strong>${savedResult} kg CO₂</strong></p>
            `;
        }
    }
});
