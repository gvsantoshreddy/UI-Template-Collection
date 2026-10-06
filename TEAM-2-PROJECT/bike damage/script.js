// ===============================
// ELEMENTS
// ===============================

const cameraButton = document.getElementById("cameraButton");
const galleryButton = document.getElementById("galleryButton");

const cameraInput = document.getElementById("cameraInput");
const galleryInput = document.getElementById("galleryInput");

const uploadArea = document.getElementById("uploadArea");
const previewSection = document.getElementById("previewSection");

const vehicleImage = document.getElementById("vehicleImage");

const analyzeButton = document.getElementById("analyzeButton");
const removeButton = document.getElementById("removeButton");

const loadingCard = document.getElementById("loadingCard");
const resultsSection = document.getElementById("resultsSection");


// ===============================
// CAMERA BUTTON
// ===============================

cameraButton.addEventListener("click", function () {
    cameraInput.click();
});


// ===============================
// GALLERY BUTTON
// ===============================

galleryButton.addEventListener("click", function () {
    galleryInput.click();
});


// ===============================
// CAMERA IMAGE
// ===============================

cameraInput.addEventListener("change", function () {

    if (cameraInput.files.length > 0) {
        handleImage(cameraInput.files[0]);
    }

});


// ===============================
// GALLERY IMAGE
// ===============================

galleryInput.addEventListener("change", function () {

    if (galleryInput.files.length > 0) {
        handleImage(galleryInput.files[0]);
    }

});


// ===============================
// HANDLE IMAGE
// ===============================

function handleImage(file) {

    if (!file.type.startsWith("image/")) {

        alert("Please select a valid image.");

        return;
    }

    const maxSize = 10 * 1024 * 1024;

    if (file.size > maxSize) {

        alert("Image size must be less than 10 MB.");

        return;
    }

    const imageURL = URL.createObjectURL(file);

    vehicleImage.src = imageURL;

    uploadArea.style.display = "none";

    previewSection.style.display = "block";

    resultsSection.style.display = "none";

    loadingCard.style.display = "none";
}


// ===============================
// REAL AI ANALYSIS
// ===============================

analyzeButton.addEventListener("click", async function () {

    if (!vehicleImage.src) {

        alert("Please upload a vehicle image first.");

        return;
    }

    // Get the actual selected file
    const file =
        cameraInput.files[0] ||
        galleryInput.files[0];

    if (!file) {

        alert("Please select the image again.");

        return;
    }

    // Disable button
    analyzeButton.disabled = true;

    analyzeButton.innerText = "Analyzing...";

    // Show loading
    loadingCard.style.display = "block";

    // Hide old results
    resultsSection.style.display = "none";


    try {

        // Create form data
        const formData = new FormData();

        formData.append("image", file);


        // Send image to our server
        const response = await fetch("/api/analyze", {

            method: "POST",

            body: formData

        });


        // Convert server response to JSON
        const data = await response.json();


        // Check for server error
        if (!response.ok) {

            throw new Error(
                data.error || "AI analysis failed."
            );

        }


        // Display AI result
        displayAIResults(data);


    } catch (error) {

        console.error("Analysis error:", error);

        alert(
            "Unable to analyze the image.\n\n" +
            error.message
        );

    } finally {

        // Hide loading
        loadingCard.style.display = "none";

        // Enable button
        analyzeButton.disabled = false;

        analyzeButton.innerText =
            "🔍 Analyze Again";
    }

});


// ===============================
// DISPLAY AI RESULTS
// ===============================

function displayAIResults(data) {

    resultsSection.style.display = "block";


    // ===========================
    // SEVERITY
    // ===========================

    document.getElementById("severity").innerText =
        data.severity || "Unknown";


    // ===========================
    // DAMAGE AREAS
    // ===========================

    const damageList =
        document.getElementById("damageList");

    damageList.innerHTML = "";


    if (
        Array.isArray(data.damage_areas) &&
        data.damage_areas.length > 0
    ) {

        data.damage_areas.forEach(function (damage) {

            const li = document.createElement("li");

            li.innerText = damage;

            damageList.appendChild(li);

        });

    } else {

        const li = document.createElement("li");

        li.innerText =
            "No visible damage identified.";

        damageList.appendChild(li);
    }


    // ===========================
    // EXPLANATION
    // ===========================

    document.getElementById("damageExplanation").innerText =
        data.explanation ||
        "No explanation available.";


    // ===========================
    // RECOMMENDED ACTION
    // ===========================

    document.getElementById("recommendedAction").innerText =
        data.recommended_action ||
        "No recommendation available.";


    // ===========================
    // REPAIR COST
    // ===========================

    document.getElementById("repairCost").innerText =
        data.repair_cost ||
        "Unable to estimate.";


    // Scroll to results
    resultsSection.scrollIntoView({
        behavior: "smooth"
    });

}


// ===============================
// REMOVE IMAGE
// ===============================

removeButton.addEventListener("click", function () {

    vehicleImage.src = "";

    cameraInput.value = "";

    galleryInput.value = "";

    previewSection.style.display = "none";

    uploadArea.style.display = "block";

    resultsSection.style.display = "none";

    loadingCard.style.display = "none";

    analyzeButton.disabled = false;

    analyzeButton.innerText =
        "🔍 Analyze Damage";
});


// ===============================
// DRAG & DROP
// ===============================

uploadArea.addEventListener("dragover", function (event) {

    event.preventDefault();

    uploadArea.style.borderColor = "#0ea5e9";

});


uploadArea.addEventListener("dragleave", function () {

    uploadArea.style.borderColor = "#cbd5e1";

});


uploadArea.addEventListener("drop", function (event) {

    event.preventDefault();

    uploadArea.style.borderColor = "#cbd5e1";


    const files = event.dataTransfer.files;


    if (files.length > 0) {

        handleImage(files[0]);

    }

});


// ===============================
// STARTUP MESSAGE
// ===============================

console.log(
    "Bike Damage AI - Real Gemini AI connected."
);