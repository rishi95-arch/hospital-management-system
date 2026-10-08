const doctorTableBody = document.querySelector('#doctor-table-body');
const doctorSearch = document.querySelector('#doctor-search');
const doctorCount = document.querySelector('#doctor-count');
const doctorEmptyState = document.querySelector('#doctor-empty-state');

// Fictional doctors for the directory preview; replace these with database records later.
const doctors = [
  { name: 'Dr. Nisha Rao', department: 'Cardiology', experience: '12 years', phone: '90000 00001', availability: 'Available' },
  { name: 'Dr. Priya Shah', department: 'Pediatrics', experience: '9 years', phone: '90000 00002', availability: 'Available' },
  { name: 'Dr. Arjun Iyer', department: 'Orthopedics', experience: '15 years', phone: '90000 00003', availability: 'Available' },
  { name: 'Dr. Kabir Das', department: 'Dermatology', experience: '7 years', phone: '90000 00004', availability: 'Available' },
];

function renderDoctors(searchText = '') {
  const query = searchText.trim().toLocaleLowerCase();
  const matches = doctors.filter((doctor) =>
    doctor.name.toLocaleLowerCase().includes(query) || doctor.department.toLocaleLowerCase().includes(query),
  );
  doctorTableBody.replaceChildren();

  matches.forEach((doctor) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const avatar = document.createElement('span');
    avatar.className = 'doctor-avatar';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.textContent = doctor.name.split(/\s+/).slice(1, 3).map((part) => part[0]).join('').toUpperCase();
    const name = document.createElement('span');
    name.textContent = doctor.name;
    nameCell.append(avatar, name);
    row.append(nameCell);

    const department = document.createElement('td');
    department.className = 'doctor-specialty';
    department.textContent = doctor.department;
    row.append(department);

    [doctor.experience, doctor.phone].forEach((value) => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.append(cell);
    });

    const availabilityCell = document.createElement('td');
    const availability = document.createElement('span');
    availability.className = 'doctor-availability';
    availability.textContent = doctor.availability;
    availabilityCell.append(availability);
    row.append(availabilityCell);
    doctorTableBody.append(row);
  });

  doctorCount.textContent = `${matches.length} ${matches.length === 1 ? 'doctor' : 'doctors'}`;
  doctorEmptyState.textContent = matches.length ? 'Doctor details are fictional demonstration content.' : 'No doctors match your search.';
}

doctorSearch.addEventListener('input', () => renderDoctors(doctorSearch.value));
renderDoctors();
