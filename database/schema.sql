-- CarePoint Hospital Management System
-- Day 6: initial MySQL schema (fictional demo data is in sample-data.sql).
-- Import with MySQL 8.0 or later. Do not store real patient information here.

CREATE DATABASE IF NOT EXISTS carepoint_hospital
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE carepoint_hospital;

CREATE TABLE IF NOT EXISTS admin_users (
  admin_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  username VARCHAR(60) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  display_name VARCHAR(100) NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (admin_id),
  UNIQUE KEY uq_admin_users_username (username)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS patients (
  patient_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(120) NOT NULL,
  date_of_birth DATE NULL,
  gender VARCHAR(30) NULL,
  phone VARCHAR(25) NOT NULL,
  email VARCHAR(120) NULL,
  address VARCHAR(255) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (patient_id),
  KEY idx_patients_name (full_name),
  KEY idx_patients_phone (phone)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS doctors (
  doctor_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(120) NOT NULL,
  department VARCHAR(100) NOT NULL,
  qualification VARCHAR(120) NULL,
  phone VARCHAR(25) NULL,
  email VARCHAR(120) NULL,
  years_experience TINYINT UNSIGNED NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (doctor_id),
  KEY idx_doctors_name (full_name),
  KEY idx_doctors_department (department)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS appointments (
  appointment_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  patient_id INT UNSIGNED NOT NULL,
  doctor_id INT UNSIGNED NOT NULL,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  reason VARCHAR(255) NULL,
  status ENUM('Scheduled', 'Completed', 'Cancelled') NOT NULL DEFAULT 'Scheduled',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (appointment_id),
  UNIQUE KEY uq_appointments_doctor_slot (doctor_id, appointment_date, appointment_time),
  KEY idx_appointments_patient_date (patient_id, appointment_date),
  CONSTRAINT fk_appointments_patient
    FOREIGN KEY (patient_id) REFERENCES patients (patient_id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT fk_appointments_doctor
    FOREIGN KEY (doctor_id) REFERENCES doctors (doctor_id)
    ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;
