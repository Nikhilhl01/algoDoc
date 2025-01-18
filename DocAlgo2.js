const doctors2 = [
  { json: { doctorid: 1, max: 10, pendency: 3, Priority: 1, merType: "typeA", Langauge: ["English"], insurance: ["vendor1"] } },
  { json: { doctorid: 2, max: 8, pendency: 2, Priority: 0, merType: "typeB", Langauge: ["Spanish"], insurance: ["vendor2"] } }
];

const cases = [
  { json: { caseid: 101, merType: "typeA", language: "English", vendor1: "vendor1" } },
  { json: { caseid: 102, merType: "typeB", language: "Spanish", vendor1: "vendor2" } }
];

const numberOfAssignedCasesToDoctor = {};
const maxLimit = 10;

const doctors = [];
for (let n = 0; n < doctors2.length; n++) {
    const doctor3 = doctors2[n];

    if (doctor3.json.pendency < doctor3.json.max && doctor3.json.Priority === 0) {
        doctors.push(doctor3);
    }
}

const prioritydoctors = [];

for (let k = 0; k < doctors2.length; k++) {
    const prioritydoctor = doctors2[k];

    if (prioritydoctor.json.pendency < prioritydoctor.json.max && prioritydoctor.json.Priority === 1) {
        prioritydoctors.push(prioritydoctor);
    }
}

const assignedcases = [];

for (let i = 0; i < cases.length; i++) {
    const app = cases[i];
    let prioritydoctorIdx = -1;
    let languageMatched = false;

    // Check for priority doctors first
    for (let j = 0; j < prioritydoctors.length; j++) {
        const doctor = prioritydoctors[j];
        console.log(i, j);
        console.log(doctor.json.mertype, '1');
        console.log(app.json.merType, '2');
        console.log(doctor.json.mertype === app.json.merType);
        console.log(doctor.json.Langauge.includes(app.json.language));
        console.log(doctor.json.insurance.includes(app.json.vendor1));

        if (
            doctor.json.mertype === app.json.merType &&
            doctor.json.Langauge.includes(app.json.language) &&
            doctor.json.insurance.includes(app.json.vendor1)
        ) {
            prioritydoctorIdx = j;
            break;
        }
    }

    if (prioritydoctorIdx === -1) {
        // If no priority doctor matches, check for non-priority doctors
        for (let j = 0; j < prioritydoctors.length; j++) {
            const doctor = prioritydoctors[j];

            if (
                doctor.json.mertype === app.json.merType &&
                doctor.json.insurance.includes(app.json.vendor1) &&
                app.json.language === 'everylang'
            ) {
                prioritydoctorIdx = j;
                break;
            }
        }
    }

    let assignedDoctor = {};

    if (prioritydoctorIdx !== -1) {
        // Assign the case to the doctor
        assignedDoctor = prioritydoctors.splice(prioritydoctorIdx, 1)[0];

        // Update the number of assigned cases to this doctor
        if (!numberOfAssignedCasesToDoctor[assignedDoctor.json.doctorid]) {
            numberOfAssignedCasesToDoctor[assignedDoctor.json.doctorid] = 0;
        }
        numberOfAssignedCasesToDoctor[assignedDoctor.json.doctorid]++;

        // Log the current number of assigned cases to each doctor
        console.log('Current assigned cases:', numberOfAssignedCasesToDoctor);

        // Check if doctor can take more cases and push them back to the list if needed
        if (assignedDoctor.json.max > numberOfAssignedCasesToDoctor[assignedDoctor.json.doctorid] + assignedDoctor.json.pendency) {
            prioritydoctors.push(assignedDoctor);
        }

        // Create the assigned case object
        const assignedcase = {
            ...app.json,
            ...assignedDoctor.json,
        };

        // Add to the assigned cases list
        assignedcases.push(assignedcase);
        continue;
    }
}

console.log('Assigned Cases:', assignedcases);
console.log('Number of Assigned Cases to Doctors:', numberOfAssignedCasesToDoctor);
return assignedcases;
