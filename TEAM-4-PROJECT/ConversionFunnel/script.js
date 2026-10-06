// Conversion Funnel JavaScript
// Function for Refresh Data button
function refreshData() {
    alert("Funnel data has been refreshed!");
}
// Get the conversion rate
function calculateConversion() {

    var visitors = 10000;

    var purchases = 1200;

    var rate = (purchases / visitors) * 100;

    document.getElementById("conversionRate").innerText =
        rate + "%";
}
// Run the function when the page loads
calculateConversion();