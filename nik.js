const allDoctors = [
  { json: { doctorid: 1, max: 10, pendency: 3, Priority: 1, merType: "typeA", Langauge: ["English"], insurance: ["vendor1"] } },
  { json: { doctorid: 2, max: 8, pendency: 2, Priority: 0, merType: "typeB", Langauge: ["Spanish"], insurance: ["vendor2"] } }
];

const cases = [
  { json: { caseid: 101, merType: "typeA", language: "English", vendor1: "vendor1" } },
  { json: { caseid: 102, merType: "typeB", language: "Spanish", vendor1: "vendor2" } }
];

const assignedCases = assignCasesToDoctors(allDoctors, cases);
console.log('Assigned Cases:', assignedCases);



// Define a function to check if a doctor matches a case
function isDoctorMatch(doctor, caseInfo) {
  return (
      doctor.json.mertype === caseInfo.json.merType &&
      doctor.json.Langauge.includes(caseInfo.json.language) &&
      doctor.json.insurance.includes(caseInfo.json.vendor1)
  );
}

// Define a function to assign a case to a doctor
function assignCaseToDoctor(doctors, caseInfo) {
  let assignedDoctor = null;

  // Check for priority doctors first
  for (let i = 0; i < doctors.length; i++) {
      const doctor = doctors[i];
      if (isDoctorMatch(doctor, caseInfo)) {
          assignedDoctor = doctor;
          break;
      }
  }

  // If no priority doctor matches, check for non-priority doctors
  if (!assignedDoctor) {
      for (let i = 0; i < doctors.length; i++) {
          const doctor = doctors[i];
          if (
              doctor.json.mertype === caseInfo.json.merType &&
              doctor.json.insurance.includes(caseInfo.json.vendor1) &&
              caseInfo.json.language === 'everylang'
          ) {
              assignedDoctor = doctor;
              break;
          }
      }
  }

  return assignedDoctor;
}

// Define a function to update the number of assigned cases to a doctor
function updateAssignedCases(doctorId, numberOfAssignedCasesToDoctor) {
  if (!numberOfAssignedCasesToDoctor[doctorId]) {
      numberOfAssignedCasesToDoctor[doctorId] = 0;
  }
  numberOfAssignedCasesToDoctor[doctorId]++;
}

// Define a function to check if a doctor can take more cases
function canDoctorTakeMoreCases(doctor, numberOfAssignedCasesToDoctor) {
  return doctor.json.max > numberOfAssignedCasesToDoctor[doctor.json.doctorid] + doctor.json.pendency;
}

// Main function to assign cases to doctors
function assignCasesToDoctors(allDoctors, cases) {
  const priorityDoctors = allDoctors.filter((doctor) => doctor.json.Priority === 1);
  const nonPriorityDoctors = allDoctors.filter((doctor) => doctor.json.Priority === 0);

  const assignedCases = [];
  const numberOfAssignedCasesToDoctor = {};

  for (let i = 0; i < cases.length; i++) {
      const caseInfo = cases[i];
      const assignedDoctor = assignCaseToDoctor(priorityDoctors, caseInfo);

      if (assignedDoctor) {
          // Update the number of assigned cases to this doctor
          updateAssignedCases(assignedDoctor.json.doctorid, numberOfAssignedCasesToDoctor);

          // Check if doctor can take more cases and push them back to the list if needed
          if (canDoctorTakeMoreCases(assignedDoctor, numberOfAssignedCasesToDoctor)) {
              priorityDoctors.push(assignedDoctor);
          }

          // Create the assigned case object
          const assignedCase = {
              ...caseInfo.json,
              ...assignedDoctor.json,
          };

          // Add to the assigned cases list
          assignedCases.push(assignedCase);
      }
  }

  return assignedCases;
}

// Example usage
