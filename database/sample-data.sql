-- Fictional records for local development and demonstrations only.
-- Run schema.sql first. No admin account is seeded: create one through the
-- application after secure password hashing is implemented.

USE carepoint_hospital;

INSERT INTO patients (patient_id, full_name, date_of_birth, gender, phone, email, address)
VALUES
  (1, 'Aarav Sharma', '2002-04-15', 'Male', '9000000001', 'aarav.example@example.test', 'Demo address 1'),
  (2, 'Meera Patel', '1998-11-02', 'Female', '9000000002', 'meera.example@example.test', 'Demo address 2'),
  (3, 'Kabir Singh', '2000-07-21', 'Male', '9000000003', NULL, 'Demo address 3');

INSERT INTO doctors (doctor_id, full_name, department, qualification, phone, email, years_experience)
VALUES
  (1, 'Dr. Ananya Rao', 'Cardiology', 'MBBS, MD', '9100000001', 'ananya.example@example.test', 8),
  (2, 'Dr. Rohan Mehta', 'Pediatrics', 'MBBS, DCH', '9100000002', 'rohan.example@example.test', 6),
  (3, 'Dr. Sana Khan', 'Dermatology', 'MBBS, MD', '9100000003', 'sana.example@example.test', 5);

-- These fixed example dates may be in the past when you import this later.
-- Update the dates to future dates before using them to test new bookings.
INSERT INTO appointments
  (appointment_id, patient_id, doctor_id, appointment_date, appointment_time, reason, status)
VALUES
  (1, 1, 1, '2026-10-20', '10:00:00', 'Routine consultation', 'Scheduled'),
  (2, 2, 2, '2026-10-21', '11:30:00', 'General check-up', 'Scheduled'),
  (3, 3, 3, '2026-10-22', '14:00:00', 'Skin consultation', 'Scheduled');
