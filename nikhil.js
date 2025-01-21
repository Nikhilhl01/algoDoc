const doctors2 = $('doc').all();
const cases = $('Filter8').all();
const numberOfAssignedCasesToDoctor = {};
const maxLimit = 10; // Max cases per doctor

const doctors = [];
for (let n = 0; n < doctors2.length; n++) {
    const doctor3 = doctors2[n];

    // Add doctor to doctors list if they meet the conditions (not exceeding max and priority is 0)
    if (doctor3.json.pendency < doctor3.json.max && doctor3.json.Priority === 0) {
        doctors.push(doctor3);
    }
}

// Creating a list of priority doctors
const prioritydoctors = [];
for (let k = 0; k < doctors2.length; k++) {
    const prioritydoctor = doctors2[k];

    // Add doctor to prioritydoctors list if they meet the conditions (not exceeding max and priority is 1)
    if (prioritydoctor.json.pendency < prioritydoctor.json.max && prioritydoctor.json.Priority === 1) {
        prioritydoctors.push(prioritydoctor);
    }
}

const assignedcases = [];

for (let i = 0; i < cases.length; i++) {
    const app = cases[i];
    let matchingDoctors = [];
    let doctorIdx = -1;
    let prioritydoctorIdx = -1;

    // Check if there's at least one doctor who speaks the required language
    let languageMatched = false;

    // First, check for doctors speaking the exact required language
    for (let j = 0; j < prioritydoctors.length; j++) {
        const doctor = prioritydoctors[j];

        // Check if doctor speaks the required language
        if (
            doctor.json.mertype === app.json.merType &&
            (doctor.json.Langauge.includes(app.json.language) || app.json.Langauge == "everylang" ) &&
            doctor.json.insurance.includes(app.json.vendor1)
        ) {
            languageMatched = true;
            prioritydoctorIdx = j;
            break;
        }
    }

    // If no doctor with the required language is found, skip the assignment of this case
    if (!languageMatched) {
        continue;
    }

    // If a doctor is found that matches the language, proceed with the assignment
    let assignedDoctor = {};

    if (prioritydoctorIdx != -1) {
        // Check if the doctor has less than 10 cases assigned
        const doctor = prioritydoctors[prioritydoctorIdx];
        const doctorId = doctor.json.doctorid;

        // Initialize doctor's case count if not already done
        if (!numberOfAssignedCasesToDoctor[doctorId]) {
            numberOfAssignedCasesToDoctor[doctorId] = 0;
        }

        // Check if doctor can take more cases (max limit of 10)
        if (numberOfAssignedCasesToDoctor[doctorId] < maxLimit) {
            // Assign the case to the doctor and increment the case count
            assignedDoctor = prioritydoctors.splice(prioritydoctorIdx, 1)[0];

            // Increment the number of assigned cases for this doctor
            numberOfAssignedCasesToDoctor[doctorId]++;

            // If the doctor can still take more cases, push them back to the list
            if (assignedDoctor.json.max > numberOfAssignedCasesToDoctor[doctorId] + assignedDoctor.json.pendency) {
                prioritydoctors.push(assignedDoctor);
            }

            // Create an object combining the case and the doctor's information
            const assignedcase = {
                ...app.json,
                ...assignedDoctor?.json,
            };

            // Add to assigned cases list
            assignedcases.push(assignedcase);
        }
    }
}
console.log(assignedcases);
return assignedcases;