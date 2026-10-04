# Project Progress

This file tracks actual work completed in the Hospital Management Web Application. A task is marked complete only after its work exists in the project.

## Completed

- [x] Day 1 — Project planning, initial folder structure, README, `.gitignore`, and setup checks.
- [x] Day 2 — Public hospital homepage with responsive navigation, introduction, services, departments, contact section, and footer.
- [x] Day 3 — Admin login and dashboard UI previews, including basic browser-side interactions.

## Pending

- [ ] Day 4 — Create the patient management interface.
- [ ] Day 5 — Create doctor and appointment interfaces.
- [ ] Day 6 — Design the MySQL schema and sample data.
- [ ] Day 7 — Add Java model classes and explain the OOP concepts used.
- [ ] Day 8 — Connect the Java application to MySQL with JDBC.
- [ ] Days 9–10 — Implement patient, doctor, and appointment operations.
- [ ] Day 11 — Validate forms and fix bugs.
- [ ] Day 12 — Finish documentation and review the project.

## Day 1 setup notes

- Java and Git are installed.
- Apache Tomcat and the MySQL command-line client were not found in PATH during the setup check.
- Current branch: `main`.
- GitHub remote: `https://github.com/rishi95-arch/hospital-management-system.git`.
- The full application is not complete. The Day 2 static homepage opens directly in a browser; backend/server/database features remain pending.

## Day 2 notes

- Added `frontend/index.html`, `frontend/css/style.css`, and `frontend/js/main.js`.
- The page is a static public-facing homepage. Its department and contact information are clearly marked as sample/demo content.
- Checked HTML parsing, in-page navigation targets, local asset links, JavaScript syntax, and whitespace errors. Opened the page locally and inspected its narrow-screen layout.
- The homepage is static and has no database connection. Admin and dashboard screens are planned for Day 3, while authentication and database-backed behavior remain pending.

## Day 3 notes

- Added `frontend/login.html` and `frontend/dashboard.html`; the public homepage footer now links to the login preview.
- Added `frontend/css/forms.css`, `frontend/css/dashboard.css`, `frontend/js/login.js`, and `frontend/js/dashboard.js`.
- Login fields use basic browser validation. The password can be shown/hidden. Submitting valid-looking values only shows a note; it does not log in, send, or save credentials.
- The dashboard displays fictional sample totals and appointment rows. Patient, doctor, and appointment navigation is visibly marked “Soon”; no records are read from or written to MySQL.
- The dashboard date and mobile sidebar menu work in the UI preview. Authentication and database connectivity remain pending.

Roadmap items may be adjusted to match actual progress and course requirements. Do not mark pending work complete before it is implemented and checked.
