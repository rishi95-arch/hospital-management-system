const appointmentForm = document.querySelector('#appointment-form');
const patientSelect = document.querySelector('#appointment-patient');
const doctorSelect = document.querySelector('#appointment-doctor');
const appointmentDate = document.querySelector('#appointment-date');
const appointmentSearch = document.querySelector('#appointment-search');
const appointmentTableBody = document.querySelector('#appointment-table-body');
const appointmentCount = document.querySelector('#appointment-count');
const appointmentEmptyState = document.querySelector('#appointment-empty-state');
const appointmentFeedback = document.querySelector('#appointment-feedback');

// These fictional options mirror the sample patient and doctor pages.
const samplePatients = ['Aarav Mehta', 'Sara Khan', 'Rohan Verma'];
const sampleDoctors = ['Dr. Nisha Rao', 'Dr. Priya Shah', 'Dr. Arjun Iyer', 'Dr. Kabir Das'];
function dateAfterDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return localDateString(date);
}

const appointments = [
  { patient: 'Aarav Mehta', doctor: 'Dr. Nisha Rao', date: dateAfterDays(0), time: '10:30', status: 'Scheduled' },
  { patient: 'Sara Khan', doctor: 'Dr. Priya Shah', date: dateAfterDays(1), time: '11:15', status: 'Scheduled' },
  { patient: 'Rohan Verma', doctor: 'Dr. Arjun Iyer', date: dateAfterDays(2), time: '14:30', status: 'Scheduled' },
];

function addOptions(select, choices) {
  choices.forEach((choice) => {
    const option = document.createElement('option');
    option.value = choice;
    option.textContent = choice;
    select.append(option);
  });
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
    .format(new Date(year, month - 1, day));
}

function formatTime(timeString) {
  const [hour, minute] = timeString.split(':').map(Number);
  return new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
    .format(new Date(2026, 0, 1, hour, minute));
}

function renderAppointments(searchText = '') {
  const query = searchText.trim().toLocaleLowerCase();
  const matches = appointments.filter((appointment) =>
    appointment.patient.toLocaleLowerCase().includes(query) || appointment.doctor.toLocaleLowerCase().includes(query),
  );
  appointmentTableBody.replaceChildren();

  matches.forEach((appointment) => {
    const row = document.createElement('tr');
    [appointment.patient, appointment.doctor, formatDate(appointment.date), formatTime(appointment.time)].forEach((value) => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.append(cell);
    });
    const statusCell = document.createElement('td');
    const status = document.createElement('span');
    status.className = 'schedule-status';
    status.textContent = appointment.status;
    statusCell.append(status);
    row.append(statusCell);
    appointmentTableBody.append(row);
  });

  appointmentCount.textContent = `${appointments.length} ${appointments.length === 1 ? 'appointment' : 'appointments'}`;
  appointmentEmptyState.textContent = matches.length ? 'Appointment entries are fictional demonstration content.' : 'No appointments match your search.';
}

function localDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

addOptions(patientSelect, samplePatients);
addOptions(doctorSelect, sampleDoctors);
appointmentDate.min = localDateString(new Date());

appointmentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!appointmentForm.reportValidity()) return;

  const appointment = {
    patient: patientSelect.value,
    doctor: doctorSelect.value,
    date: appointmentDate.value,
    time: document.querySelector('#appointment-time').value,
    status: 'Scheduled',
  };
  const timeConflict = appointments.some((existing) =>
    existing.doctor === appointment.doctor && existing.date === appointment.date && existing.time === appointment.time,
  );
  if (timeConflict) {
    appointmentFeedback.textContent = 'That doctor already has a sample appointment at this time. Choose another slot.';
    appointmentFeedback.classList.add('is-error');
    return;
  }

  appointments.unshift(appointment);
  appointmentForm.reset();
  appointmentSearch.value = '';
  appointmentFeedback.textContent = 'Appointment added to this page preview. It is not saved after you leave.';
  appointmentFeedback.classList.remove('is-error');
  renderAppointments();
});

appointmentSearch.addEventListener('input', () => renderAppointments(appointmentSearch.value));
renderAppointments();
