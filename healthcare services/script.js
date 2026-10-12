let patientRegistered = false;
let triageChecked = 0;

// LOGIN

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please enter email and password.");
    return;
  }

  showPage("dashboardPage");
}

// LOGOUT

function logout() {
  showPage("loginPage");
}

// PAGE NAVIGATION

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function (page) {
    page.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");
}

// PATIENT REGISTRATION

function registerPatient() {
  const name = document.getElementById("patientName").value;
  const age = document.getElementById("patientAge").value;
  const gender = document.getElementById("patientGender").value;
  const village = document.getElementById("patientVillage").value;
  const symptoms = document.getElementById("patientSymptoms").value;

  if (name === "" || age === "" || gender === "" || village === "") {
    alert("Please fill all required fields.");
    return;
  }

  patientRegistered = true;

  document.getElementById("patientCount").innerText = "1";

  document.getElementById("patientRecord").innerHTML = `

        <div class="record">

            <p><strong>Name:</strong> ${name}</p>

            <p><strong>Age:</strong> ${age}</p>

            <p><strong>Gender:</strong> ${gender}</p>

            <p><strong>Village:</strong> ${village}</p>

            <p><strong>Symptoms:</strong> ${symptoms}</p>

        </div>

    `;

  alert("Patient registered successfully!");

  showPage("recordsPage");
}

// TRIAGE

function checkTriage() {
  const symptoms = document
    .getElementById("triageSymptoms")
    .value.toLowerCase();

  if (symptoms === "") {
    alert("Please enter symptoms.");
    return;
  }

  let result = "";
  let level = "";

  if (
    symptoms.includes("chest pain") ||
    symptoms.includes("breathing difficulty") ||
    symptoms.includes("unconscious")
  ) {
    level = "HIGH";
    result = "Immediate medical attention may be required.";
  } else if (
    symptoms.includes("fever") ||
    symptoms.includes("vomiting") ||
    symptoms.includes("dizziness")
  ) {
    level = "MEDIUM";
    result = "Doctor consultation is recommended.";
  } else {
    level = "LOW";
    result = "Basic medical consultation is recommended.";
  }

  triageChecked++;

  document.getElementById("triageCount").innerText = triageChecked;

  document.getElementById("triageResult").innerHTML = `

        <div class="result">

            <h3>Triage Level: ${level}</h3>

            <p>${result}</p>

        </div>

    `;
}
