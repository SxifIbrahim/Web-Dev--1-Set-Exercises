document.getElementById("calculate").addEventListener("click", function() {

    // Get values from input fields
    var costPerLiter = parseFloat(document.getElementById("cost").value);
    var litersPurchased = parseFloat(document.getElementById("liters").value);
    
        // Calculate total cost
        var totalCost = costPerLiter * litersPurchased;
    
            // Display total cost
            document.getElementById("total-cost").textContent = "Total cost: $" + totalCost.toFixed(2);
});

// Adds Dark Mode
document.getElementById("dark-mode-toggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
});