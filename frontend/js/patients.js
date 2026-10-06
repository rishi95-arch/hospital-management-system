const patientForm = document.querySelector('#patient-form');
const patientTableBody = document.querySelector('#patient-table-body');
const patientSearch = document.querySelector('#patient-search');
const patientCount = document.querySelector('#patient-count');
const patientEmptyState = document.querySelector('#patient-empty-state');
const patientFeedback = document.querySelector('#patient-feedback');

// Fictional records for this page preview only; they are not saved to a server.
const patients = [
  { id: 1, name: 'Aarav Mehta', age: 34, gender: 'Male', phone: '98765 43210' },
  { id: 2, name: 'Sara Khan', age: 28, gender: 'Female', phone: '98123 45670' },
  { id: 3, name: 'Rohan Verma', age: 52, gender: 'Male', phone: '97654 32109' },
];
let nextPatientId = patients.length + 1;

function renderPatients(searchText = '') {
  const query = searchText.trim().toLocaleLowerCase();
  const matchingPatients = patients.filter((patient) =>
    patient.name.toLocaleLowerCase().includes(query) || patient.phone.toLocaleLowerCase().includes(query),
  );

  patientTableBody.replaceChildren();
  matchingPatients.forEach((patient) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const initials = patient.name.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toUpperCase();
    const avatar = document.createElement('span');
    avatar.className = 'patient-avatar avatar-mint';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.textContent = initials;
    const name = document.createElement('span');
    name.className = 'table-person';
    name.textContent = patient.name;
    nameCell.append(avatar, name);
    row.append(nameCell);

    [patient.age, patient.gender, patient.phone].forEach((value) => {
      const cell = document.createElement('td');
      cell.textContent = String(value);
      row.append(cell);
    });

    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.className = 'patient-delete';
    deleteButton.type = 'button';
    deleteButton.textContent = 'Remove';
    deleteButton.setAttribute('aria-label', `Remove ${patient.name} from this preview`);
    deleteButton.addEventListener('click', () => {
      const patientIndex = patients.findIndex((entry) => entry.id === patient.id);
      if (patientIndex !== -1) patients.splice(patientIndex, 1);
      patientFeedback.textContent = `${patient.name} removed from this page preview.`;
      patientFeedback.classList.remove('is-error');
      renderPatients(patientSearch.value);
    });
    actionCell.append(deleteButton);
    row.append(actionCell);
    patientTableBody.append(row);
  });

  patientCount.textContent = `${patients.length} ${patients.length === 1 ? 'record' : 'records'}`;
  patientEmptyState.textContent = matchingPatients.length ? 'Sample names and contact details are fictional.' : 'No matching patient records.';
}

if (patientForm) {
  patientForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!patientForm.reportValidity()) return;

    const formData = new FormData(patientForm);
    const name = String(formData.get('name')).trim();
    const phone = String(formData.get('phone')).trim();
    if (name.length < 2) {
      patientFeedback.textContent = 'Enter a name with at least two non-space characters.';
      patientFeedback.classList.add('is-error');
      document.querySelector('#patient-name').focus();
      return;
    }
    if (phone.replace(/\D/g, '').length < 7) {
      patientFeedback.textContent = 'Enter a phone number with at least seven digits.';
      patientFeedback.classList.add('is-error');
      document.querySelector('#patient-phone').focus();
      return;
    }

    const patient = {
      id: nextPatientId,
      name,
      age: Number(formData.get('age')),
      gender: String(formData.get('gender')),
      phone,
    };

    patients.unshift(patient);
    nextPatientId += 1;
    patientForm.reset();
    patientSearch.value = '';
    patientFeedback.textContent = `${patient.name} added to this page preview. The record is not saved after you leave.`;
    patientFeedback.classList.remove('is-error');
    renderPatients();
  });
}

if (patientSearch) {
  patientSearch.addEventListener('input', () => renderPatients(patientSearch.value));
}

renderPatients();
