# Hospital Management Web Application

A medium-level, browser-based BCA semester project for managing basic hospital records.

## Confirmed technology stack

- Frontend: HTML, CSS, JavaScript
- Backend: Java Servlets and JSP
- Database: MySQL through JDBC
- Local server: Apache Tomcat
- Version control: Git and GitHub

## Planned modules

- Public hospital home page
- Basic admin login and dashboard
- Patient records (add, view, edit, delete)
- Doctor records
- Appointments (patient, doctor, date, time, status)

The project is being built incrementally. Features will be documented as they are implemented; this initial setup does not yet contain a working application.

## Development roadmap

1. Day 1 — Project setup and planning
2. Day 2 — Hospital home page
3. Day 3 — Login and dashboard interface
4. Day 4 — Patient management interface
5. Day 5 — Doctor and appointment interfaces
6. Day 6 — MySQL schema and sample data
7. Day 7 — Java model classes and OOP
8. Day 8 — JDBC connection
9. Days 9–10 — Patient, doctor, and appointment operations
10. Day 11 — Validation and bug fixes
11. Day 12 — Documentation and final review

The roadmap can change to match actual progress and course requirements. No unfinished feature should be represented as complete.

## Project layout

```text
frontend/
  index.html           # To be created on Day 2
  css/                 # Stylesheets
  js/                  # Browser-side JavaScript
backend/
  src/main/java/       # Java source (Servlets, models, DAO)
database/              # SQL schema and sample data
README.md
.gitignore
```

## Tools

Use a JDK, Git, a code editor, Apache Tomcat, and MySQL. The local setup should be checked before installing anything. Java and Git are currently available; Tomcat and MySQL command-line tools were not found in PATH during the Day 1 check.

## Running the project

There is no runnable web application yet. After the initial frontend is added, it can be opened in a browser. Servlet/JSP functionality will require Tomcat and will be configured in a later stage.
