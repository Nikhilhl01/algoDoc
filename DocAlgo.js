// const doctors2 = [
//   { json: { doctorid: 1, max: 10, pendency: 3, Priority: 1, merType: "typeA", Langauge: ["English"], insurance: ["vendor1"] } },
//   { json: { doctorid: 2, max: 8, pendency: 2, Priority: 0, merType: "typeB", Langauge: ["Spanish"], insurance: ["vendor2"] } }
// ];

const doctors2 = [
    { json: { doctorid: 1, max: 10, pendency: 3, Priority: 1, merType: "tmer", language: ["Kannada", "Hindi", "English"], insurance: ["tata"] } },
    { json: { doctorid: 2, max: 12, pendency: 5, Priority: 0, merType: "vmer", language: ["English", "Tamil"], insurance: ["tata ure"] } },
    { json: { doctorid: 3, max: 8, pendency: 2, Priority: 1, merType: "tmer", language: ["Hindi", "Punjabi"], insurance: ["hdfc"] } },
    { json: { doctorid: 4, max: 15, pendency: 4, Priority: 0, merType: "vmer", language: ["Tamil", "Telugu", "English"], insurance: ["canara"] } },
    { json: { doctorid: 5, max: 9, pendency: 3, Priority: 1, merType: "tmer", language: ["Telugu", "Malayalam"], insurance: ["bajaj"] } },
    { json: { doctorid: 6, max: 11, pendency: 6, Priority: 0, merType: "vmer", language: ["Malayalam", "Hindi", "English"], insurance: ["max"] } },
    { json: { doctorid: 7, max: 10, pendency: 2, Priority: 1, merType: "tmer", language: ["Assamese", "Punjabi"], insurance: ["kotak"] } },
    { json: { doctorid: 8, max: 14, pendency: 3, Priority: 0, merType: "vmer", language: ["Punjabi", "Telugu"], insurance: ["tata"] } },
    { json: { doctorid: 9, max: 13, pendency: 4, Priority: 1, merType: "tmer", language: ["Marathi", "Kannada"], insurance: ["tata ure"] } },
    { json: { doctorid: 10, max: 16, pendency: 2, Priority: 0, merType: "vmer", language: ["Kannada", "English"], insurance: ["hdfc"] } },
    { json: { doctorid: 11, max: 18, pendency: 5, Priority: 1, merType: "tmer", language: ["English", "Tamil", "Telugu"], insurance: ["canara"] } },
    { json: { doctorid: 12, max: 12, pendency: 3, Priority: 0, merType: "vmer", language: ["Hindi", "Punjabi"], insurance: ["bajaj"] } },
    { json: { doctorid: 13, max: 14, pendency: 4, Priority: 1, merType: "tmer", language: ["Tamil", "Assamese", "Marathi"], insurance: ["max"] } },
    { json: { doctorid: 14, max: 17, pendency: 2, Priority: 0, merType: "vmer", language: ["Telugu", "Punjabi"], insurance: ["kotak"] } },
    { json: { doctorid: 15, max: 9, pendency: 1, Priority: 1, merType: "tmer", language: ["Assamese", "Punjabi", "Hindi"], insurance: ["tata"] } },
    { json: { doctorid: 16, max: 8, pendency: 3, Priority: 0, merType: "vmer", language: ["Punjabi", "Marathi"], insurance: ["tata ure"] } },
    { json: { doctorid: 17, max: 10, pendency: 2, Priority: 1, merType: "tmer", language: ["Marathi", "Kannada", "English"], insurance: ["hdfc"] } },
    { json: { doctorid: 18, max: 12, pendency: 4, Priority: 0, merType: "vmer", language: ["Kannada", "Telugu"], insurance: ["canara"] } },
    { json: { doctorid: 19, max: 11, pendency: 3, Priority: 1, merType: "tmer", language: ["English", "Tamil"], insurance: ["bajaj"] } },
    { json: { doctorid: 20, max: 9, pendency: 5, Priority: 0, merType: "vmer", language: ["Hindi", "Telugu", "Punjabi"], insurance: ["max"] } },
    { json: { doctorid: 21, max: 10, pendency: 2, Priority: 1, merType: "tmer", language: ["Tamil", "Assamese"], insurance: ["kotak"] } },
    { json: { doctorid: 22, max: 16, pendency: 4, Priority: 0, merType: "vmer", language: ["Telugu", "Marathi", "Kannada"], insurance: ["tata"] } },
    { json: { doctorid: 23, max: 14, pendency: 3, Priority: 1, merType: "tmer", language: ["Assamese", "Punjabi"], insurance: ["tata ure"] } },
    { json: { doctorid: 24, max: 17, pendency: 6, Priority: 0, merType: "vmer", language: ["Punjabi", "Telugu", "Hindi"], insurance: ["hdfc"] } },
    { json: { doctorid: 25, max: 18, pendency: 2, Priority: 1, merType: "tmer", language: ["Marathi", "Kannada", "Telugu"], insurance: ["canara"] } },
    { json: { doctorid: 26, max: 11, pendency: 4, Priority: 0, merType: "vmer", language: ["Kannada", "English", "Tamil"], insurance: ["bajaj"] } },
    { json: { doctorid: 27, max: 15, pendency: 3, Priority: 1, merType: "tmer", language: ["English", "Marathi"], insurance: ["max"] } },
    { json: { doctorid: 28, max: 14, pendency: 5, Priority: 0, merType: "vmer", language: ["Hindi", "Punjabi"], insurance: ["kotak"] } },
    { json: { doctorid: 29, max: 10, pendency: 2, Priority: 1, merType: "tmer", language: ["Tamil", "Assamese", "Marathi"], insurance: ["tata"] } },
    { json: { doctorid: 30, max: 13, pendency: 3, Priority: 0, merType: "vmer", language: ["Telugu", "Kannada", "English"], insurance: ["tata ure"] } }
  ];
  
// const cases = [
//   { json: { caseid: 101, merType: "typeA", language: "English", vendor1: "vendor1" } },
//   { json: { caseid: 102, merType: "typeB", language: "Spanish", vendor1: "vendor2" } }
// ];
const cases = [
    { json: { caseid: 101, merType: "tmer", language: "Kannada", vendor1: "tata" } },
    { json: { caseid: 102, merType: "vmer", language: "English", vendor1: "tata ure" } },
    { json: { caseid: 103, merType: "tmer", language: "Hindi", vendor1: "hdfc" } },
    { json: { caseid: 104, merType: "vmer", language: "Tamil", vendor1: "canara" } },
    { json: { caseid: 105, merType: "tmer", language: "Telugu", vendor1: "bajaj" } },
    { json: { caseid: 106, merType: "vmer", language: "Malayalam", vendor1: "max" } },
    { json: { caseid: 107, merType: "tmer", language: "Assamese", vendor1: "kotak" } },
    { json: { caseid: 108, merType: "vmer", language: "Punjabi", vendor1: "tata" } },
    { json: { caseid: 109, merType: "tmer", language: "Marathi", vendor1: "tata ure" } },
    { json: { caseid: 110, merType: "vmer", language: "Kannada", vendor1: "hdfc" } },
    { json: { caseid: 111, merType: "tmer", language: "English", vendor1: "canara" } },
    { json: { caseid: 112, merType: "vmer", language: "Hindi", vendor1: "bajaj" } },
    { json: { caseid: 113, merType: "tmer", language: "Tamil", vendor1: "max" } },
    { json: { caseid: 114, merType: "vmer", language: "Telugu", vendor1: "kotak" } },
    { json: { caseid: 115, merType: "tmer", language: "Assamese", vendor1: "tata" } },
    { json: { caseid: 116, merType: "vmer", language: "Punjabi", vendor1: "tata ure" } },
    { json: { caseid: 117, merType: "tmer", language: "Marathi", vendor1: "hdfc" } },
    { json: { caseid: 118, merType: "vmer", language: "Kannada", vendor1: "canara" } },
    { json: { caseid: 119, merType: "tmer", language: "English", vendor1: "bajaj" } },
    { json: { caseid: 120, merType: "vmer", language: "Hindi", vendor1: "max" } },
    { json: { caseid: 121, merType: "tmer", language: "Tamil", vendor1: "kotak" } },
    { json: { caseid: 122, merType: "vmer", language: "Telugu", vendor1: "tata" } },
    { json: { caseid: 123, merType: "tmer", language: "Assamese", vendor1: "tata ure" } },
    { json: { caseid: 124, merType: "vmer", language: "Punjabi", vendor1: "hdfc" } },
    { json: { caseid: 125, merType: "tmer", language: "Marathi", vendor1: "canara" } },
    { json: { caseid: 126, merType: "vmer", language: "Kannada", vendor1: "bajaj" } },
    { json: { caseid: 127, merType: "tmer", language: "English", vendor1: "max" } },
    { json: { caseid: 128, merType: "vmer", language: "Hindi", vendor1: "kotak" } },
    { json: { caseid: 129, merType: "tmer", language: "Tamil", vendor1: "tata" } },
    { json: { caseid: 130, merType: "vmer", language: "Telugu", vendor1: "tata ure" } },
    { json: { caseid: 131, merType: "tmer", language: "Assamese", vendor1: "hdfc" } },
    { json: { caseid: 132, merType: "vmer", language: "Punjabi", vendor1: "canara" } },
    { json: { caseid: 133, merType: "tmer", language: "Marathi", vendor1: "bajaj" } },
    { json: { caseid: 134, merType: "vmer", language: "Kannada", vendor1: "max" } },
    { json: { caseid: 135, merType: "tmer", language: "English", vendor1: "kotak" } },
    { json: { caseid: 136, merType: "vmer", language: "Hindi", vendor1: "tata" } },
    { json: { caseid: 137, merType: "tmer", language: "Tamil", vendor1: "tata ure" } },
    { json: { caseid: 138, merType: "vmer", language: "Telugu", vendor1: "hdfc" } },
    { json: { caseid: 139, merType: "tmer", language: "Assamese", vendor1: "canara" } },
    { json: { caseid: 140, merType: "vmer", language: "Punjabi", vendor1: "bajaj" } },
    { json: { caseid: 141, merType: "tmer", language: "Marathi", vendor1: "max" } },
    { json: { caseid: 142, merType: "vmer", language: "Kannada", vendor1: "kotak" } },
    { json: { caseid: 143, merType: "tmer", language: "English", vendor1: "tata" } },
    { json: { caseid: 144, merType: "vmer", language: "Hindi", vendor1: "tata ure" } },
    { json: { caseid: 145, merType: "tmer", language: "Tamil", vendor1: "hdfc" } },
    { json: { caseid: 146, merType: "vmer", language: "Telugu", vendor1: "canara" } },
    { json: { caseid: 147, merType: "tmer", language: "Assamese", vendor1: "bajaj" } },
    { json: { caseid: 148, merType: "vmer", language: "Punjabi", vendor1: "max" } },
    { json: { caseid: 149, merType: "tmer", language: "Marathi", vendor1: "kotak" } },
    { json: { caseid: 150, merType: "vmer", language: "Kannada", vendor1: "tata" } }
  ];

const numberOfAssignedCasesToDoctor = {};
const maxLimit = 10; // Max cases per doctor

// Filter non-priority doctors
const doctors = [];
for (let n = 0; n < doctors2.length; n++) {
    const doctor3 = doctors2[n];

    // Add doctor to doctors list if they meet the conditions (not exceeding max and priority is 0)
    if (doctor3.json.pendency < doctor3.json.max && doctor3.json.Priority === 0) {
        doctors.push(doctor3);
    }
}

// Filter priority doctors
const prioritydoctors = [];
for (let k = 0; k < doctors2.length; k++) {
    const prioritydoctor = doctors2[k];

    // Add doctor to prioritydoctors list if they meet the conditions (not exceeding max and priority is 1)
    if (prioritydoctor.json.pendency < prioritydoctor.json.max && prioritydoctor.json.Priority === 1) {
        prioritydoctors.push(prioritydoctor);
    }
}

const assignedcases = [];
const unassignedCases = []; // Keep track of unassigned cases

for (let i = 0; i < cases.length; i++) {
    const app = cases[i];
    let prioritydoctorIdx = -1;
    let languageMatched = false;

    // Try to find a priority doctor matching the case
    for (let j = 0; j < prioritydoctors.length; j++) {
        const doctor = prioritydoctors[j];

        if (
            doctor.json.mertype === app.json.merType &&
            doctor.json.Langauge.includes(app.json.language) &&
            doctor.json.insurance.includes(app.json.vendor1)
        ) {
            languageMatched = true;
            prioritydoctorIdx = j;
            break;
        }
    }

    // If no priority doctor matches, try non-priority doctors
    if (!languageMatched) {
        for (let j = 0; j < doctors.length; j++) {
            const doctor = doctors[j];

            if (
                doctor.json.mertype === app.json.merType &&
                doctor.json.Langauge.includes(app.json.language) &&
                doctor.json.insurance.includes(app.json.vendor1)
            ) {
                languageMatched = true;
                prioritydoctorIdx = j;
                break;
            }
        }
    }

    // If no matching doctor is found, add the case to unassignedCases and continue
    if (!languageMatched) {
        unassignedCases.push(app.json);
        continue;
    }

    // Assign the case to the matched doctor
    let assignedDoctor = {};

    if (prioritydoctorIdx !== -1) {
        // Determine if it's a priority or non-priority doctor
        const doctor = prioritydoctorIdx < prioritydoctors.length 
            ? prioritydoctors.splice(prioritydoctorIdx, 1)[0] 
            : doctors.splice(prioritydoctorIdx - prioritydoctors.length, 1)[0];

        const doctorId = doctor.json.doctorid;

        // Initialize doctor's case count if not already done
        if (!numberOfAssignedCasesToDoctor[doctorId]) {
            numberOfAssignedCasesToDoctor[doctorId] = 0;
        }

        // Check if doctor can take more cases
        if (numberOfAssignedCasesToDoctor[doctorId] < maxLimit) {
            // Increment the number of assigned cases for this doctor
            numberOfAssignedCasesToDoctor[doctorId]++;

            // If the doctor can still take more cases, push them back to the list
            if (doctor.json.max > numberOfAssignedCasesToDoctor[doctorId] + doctor.json.pendency) {
                if (doctor.json.Priority === 1) {
                    prioritydoctors.push(doctor);
                } else {
                    doctors.push(doctor);
                }
            }

            // Create an object combining the case and the doctor's information
            const assignedcase = {
                ...app.json,
                ...doctor.json,
            };

            // Add to assigned cases list
            assignedcases.push(assignedcase);
        }
    }
}

// Log results
console.log("Assigned Cases:", assignedcases);
console.log("Unassigned Cases:", unassignedCases);

return { assignedcases, unassignedCases };
