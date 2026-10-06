// MediFind AI demo directory.
// Every hospital name, location pairing, rating, and bed figure below is fictional.
// This file contains no live hospital or bed-availability data and makes no API calls.

const hospitals = [
  { id: 1, name: "Aarohan Heart & Multispecialty Centre", city: "Chennai", state: "Tamil Nadu", region: "South India", totalBeds: 520, icuBeds: 64, availableBeds: 18, specialties: ["Cardiology", "Cardiac surgery", "Emergency care"], facilities: ["Cath lab", "ICU", "24-hour emergency"], rating: 4.7, icon: "✚", description: "Fictional sample listing with a focus on heart care and emergency services." },
  { id: 2, name: "Sanjeevani Orthopedic Institute", city: "Bengaluru", state: "Karnataka", region: "South India", totalBeds: 280, icuBeds: 28, availableBeds: 11, specialties: ["Orthopedics", "Joint replacement", "Rehabilitation"], facilities: ["Operating theatres", "Physiotherapy", "Imaging"], rating: 4.5, icon: "✚", description: "Fictional sample listing focused on bone, joint, and rehabilitation services." },
  { id: 3, name: "Nirmal Women & Children Hospital", city: "Hyderabad", state: "Telangana", region: "South India", totalBeds: 210, icuBeds: 22, availableBeds: 9, specialties: ["Maternity", "Pediatrics", "Neonatal care"], facilities: ["Maternity ward", "NICU", "Laboratory"], rating: 4.6, icon: "♡", description: "Fictional sample listing for maternity, pediatric, and newborn services." },
  { id: 4, name: "Aarogya Cancer Care Centre", city: "Mumbai", state: "Maharashtra", region: "West India", totalBeds: 460, icuBeds: 48, availableBeds: 15, specialties: ["Cancer care", "Oncology", "Radiation therapy"], facilities: ["Oncology unit", "Day care", "Imaging"], rating: 4.8, icon: "✚", description: "Fictional sample listing for oncology and cancer-care services." },
  { id: 5, name: "Pragati Neuro & Trauma Hospital", city: "New Delhi", state: "Delhi", region: "North India", totalBeds: 390, icuBeds: 58, availableBeds: 12, specialties: ["Neurology", "Neurosurgery", "Trauma care"], facilities: ["Neuro ICU", "Emergency", "CT imaging"], rating: 4.6, icon: "✚", description: "Fictional sample listing for neurology, neurosurgery, and trauma services." },
  { id: 6, name: "Jeevan Multispecialty Hospital", city: "Pune", state: "Maharashtra", region: "West India", totalBeds: 620, icuBeds: 72, availableBeds: 24, specialties: ["General medicine", "Cardiology", "Orthopedics", "Neurology"], facilities: ["ICU", "Emergency", "Diagnostics"], rating: 4.4, icon: "✚", description: "Fictional sample multispecialty listing with several departments." },
  { id: 7, name: "Udaan Family & Maternity Hospital", city: "Kolkata", state: "West Bengal", region: "East India", totalBeds: 175, icuBeds: 16, availableBeds: 7, specialties: ["Maternity", "Pediatrics", "General medicine"], facilities: ["Maternity ward", "Newborn care", "Pharmacy"], rating: 4.3, icon: "♡", description: "Fictional sample listing for family medicine, maternity, and pediatrics." },
  { id: 8, name: "Swasthya General & Emergency Hospital", city: "Jaipur", state: "Rajasthan", region: "North India", totalBeds: 330, icuBeds: 36, availableBeds: 14, specialties: ["General medicine", "Emergency care", "Orthopedics"], facilities: ["Emergency unit", "Laboratory", "Imaging"], rating: 4.2, icon: "✚", description: "Fictional sample listing for general and emergency services." },
  { id: 9, name: "Asha Advanced Care Hospital", city: "Ahmedabad", state: "Gujarat", region: "West India", totalBeds: 510, icuBeds: 61, availableBeds: 20, specialties: ["Cardiology", "Cancer care", "General medicine"], facilities: ["Cardiac unit", "Oncology unit", "ICU"], rating: 4.5, icon: "✚", description: "Fictional sample listing with cardiac and oncology departments." },
  { id: 10, name: "Himalaya Regional Medical Centre", city: "Dehradun", state: "Uttarakhand", region: "North India", totalBeds: 240, icuBeds: 24, availableBeds: 8, specialties: ["General medicine", "Neurology", "Orthopedics"], facilities: ["Imaging", "ICU", "Rehabilitation"], rating: 4.1, icon: "✚", description: "Fictional sample regional hospital listing." },
  { id: 11, name: "Eastern Care Multispecialty Hospital", city: "Guwahati", state: "Assam", region: "Northeast India", totalBeds: 305, icuBeds: 32, availableBeds: 10, specialties: ["General medicine", "Cardiology", "Maternity"], facilities: ["Emergency", "ICU", "Diagnostics"], rating: 4.3, icon: "✚", description: "Fictional sample listing representing a northeastern city." },
  { id: 12, name: "Coastal Health & Surgical Centre", city: "Bhubaneswar", state: "Odisha", region: "East India", totalBeds: 195, icuBeds: 18, availableBeds: 6, specialties: ["Orthopedics", "General medicine", "Emergency care"], facilities: ["Surgical unit", "Laboratory", "Emergency"], rating: 4.0, icon: "✚", description: "Fictional sample listing for general and surgical services." }
];

const treatmentInput = document.getElementById("treatmentInput");
const locationInput = document.getElementById("locationInput");
const bedFilter = document.getElementById("bedFilter");
const searchForm = document.getElementById("searchForm");
const hospitalGrid = document.getElementById("hospitalGrid");
const resultsTitle = document.getElementById("resultsTitle");
const resultsSubtitle = document.getElementById("resultsSubtitle");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const clearButton = document.getElementById("clearButton");
const dialog = document.getElementById("hospitalDialog");
const dialogContent = document.getElementById("dialogContent");
const dialogClose = document.getElementById("dialogClose");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function matchScore(hospital, treatment) {
  if (!treatment) return 0;
  const term = treatment.toLowerCase().trim();
  if (!term) return 0;
  const specialties = hospital.specialties.join(" ").toLowerCase();
  const fullText = `${hospital.name} ${hospital.description} ${hospital.facilities.join(" ")}`.toLowerCase();
  if (specialties.includes(term)) return 3;
  if (term.split(/\s+/).some(word => word.length > 2 && specialties.includes(word))) return 2;
  if (term.split(/\s+/).some(word => word.length > 2 && fullText.includes(word))) return 1;
  return 0;
}

function getFilteredHospitals() {
  const treatment = treatmentInput.value.trim();
  const location = locationInput.value.trim().toLowerCase();
  const minBeds = Number(bedFilter.value);

  return hospitals
    .map(hospital => ({ hospital, score: matchScore(hospital, treatment) }))
    .filter(({ hospital, score }) => {
      const matchesLocation = !location ||
        `${hospital.city} ${hospital.state} ${hospital.region}`.toLowerCase().includes(location);
      const matchesBeds = hospital.totalBeds >= minBeds;
      const matchesTreatment = !treatment || score > 0;
      return matchesLocation && matchesBeds && matchesTreatment;
    })
    .sort((a, b) => b.score - a.score || b.hospital.totalBeds - a.hospital.totalBeds)
    .map(item => ({ ...item.hospital, score: item.score }));
}

function renderHospitals(list) {
  hospitalGrid.innerHTML = "";
  hospitalGrid.hidden = list.length === 0;
  emptyState.hidden = list.length > 0;
  resultCount.textContent = `${list.length} sample hospital${list.length === 1 ? "" : "s"}`;

  const treatment = treatmentInput.value.trim();
  const location = locationInput.value.trim();
  resultsTitle.textContent = treatment ? `Demo matches for “${treatment}”` : "Example hospitals across India";
  resultsSubtitle.textContent = location
    ? `Fictional listings matching location text “${location}”.`
    : "Search the demo directory to compare fictional hospital profiles.";

  for (const hospital of list) {
    const card = document.createElement("article");
    card.className = "hospital-card";
    const scoreLabel = treatment && hospital.score >= 2 ? "SPECIALTY MATCH" : treatment ? "POSSIBLE MATCH" : "DEMO LISTING";
    const matchClass = treatment && hospital.score < 2 ? "match-badge neutral" : "match-badge";
    card.innerHTML = `
      <div class="card-top">
        <div class="hospital-symbol" aria-hidden="true">${escapeHTML(hospital.icon)}</div>
        <div class="hospital-main">
          <h3>${escapeHTML(hospital.name)}</h3>
          <div class="location-line">⌖ ${escapeHTML(hospital.city)}, ${escapeHTML(hospital.state)} · ${escapeHTML(hospital.region)}</div>
          <span class="${matchClass}">${scoreLabel}</span>
        </div>
      </div>
      <div class="specialties">${hospital.specialties.map(s => `<span class="specialty-tag">${escapeHTML(s)}</span>`).join("")}</div>
      <div class="bed-stats">
        <div class="bed-stat"><strong>${hospital.totalBeds}</strong><span>Total beds<br>(sample)</span></div>
        <div class="bed-stat"><strong>${hospital.icuBeds}</strong><span>ICU beds<br>(sample)</span></div>
        <div class="bed-stat available"><strong>${hospital.availableBeds}</strong><span>Available beds*<br>(sample)</span></div>
      </div>
      <div class="card-bottom">
        <span class="fake-rating"><span>★</span> ${hospital.rating.toFixed(1)} <small>(sample)</small></span>
        <button class="details-button" type="button" data-hospital-id="${hospital.id}">View details ↗</button>
      </div>`;
    hospitalGrid.append(card);
  }
}

function showDetails(id) {
  const hospital = hospitals.find(item => item.id === Number(id));
  if (!hospital) return;
  dialogContent.innerHTML = `
    <p class="eyebrow">FICTIONAL SAMPLE PROFILE</p>
    <h2 class="dialog-title">${escapeHTML(hospital.name)}</h2>
    <p class="dialog-copy">⌖ ${escapeHTML(hospital.city)}, ${escapeHTML(hospital.state)} · ${escapeHTML(hospital.region)}</p>
    <p class="dialog-copy">${escapeHTML(hospital.description)}</p>
    <div class="dialog-stats">
      <div><strong>${hospital.totalBeds}</strong><span>Total beds · sample</span></div>
      <div><strong>${hospital.icuBeds}</strong><span>ICU beds · sample</span></div>
      <div><strong>${hospital.availableBeds}</strong><span>Available · sample</span></div>
    </div>
    <h3>Listed specialties</h3>
    <p class="dialog-copy">${hospital.specialties.map(escapeHTML).join(" · ")}</p>
    <h3>Example facilities</h3>
    <p class="dialog-copy">${hospital.facilities.map(escapeHTML).join(" · ")}</p>
    <div class="dialog-warning"><strong>Not a real hospital or live availability.</strong> All details, ratings, and bed figures are fictional. Verify hospital services and current beds directly with a real provider before making care decisions.</div>`;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else alert(`${hospital.name}\nFictional sample listing only.`);
}

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  renderHospitals(getFilteredHospitals());
});
document.querySelectorAll("[data-treatment]").forEach(button => {
  button.addEventListener("click", () => {
    treatmentInput.value = button.dataset.treatment;
    renderHospitals(getFilteredHospitals());
  });
});
hospitalGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-hospital-id]");
  if (button) showDetails(button.dataset.hospitalId);
});
dialogClose.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
clearButton.addEventListener("click", () => {
  treatmentInput.value = "";
  locationInput.value = "";
  bedFilter.value = "0";
  renderHospitals(getFilteredHospitals());
});
renderHospitals(getFilteredHospitals());
