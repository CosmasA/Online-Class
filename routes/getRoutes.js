import express from "express";

const getRoutes = express.Router();

// homepage
getRoutes.get("/", (req, res) => {
  res.render("index.ejs", { title: "Dashboard" });
});

// students
getRoutes.get("/students", (req, res) => {
  res.render("components/students.ejs", { title: "Students" });
});

getRoutes.get("/studentDetails", (req, res) => {
  res.render("details/studentDetails.ejs", { title: "Students-Details" });
});

// tutors
getRoutes.get("/tutors", (req, res) => {
  res.render("components/tutors.ejs", { title: "Tutors" });
});

getRoutes.get("/tutorDetails", (req, res) => {
  res.render("details/tutorDetails.ejs", { title: "Tutor-Details" });
});

// notes
getRoutes.get("/notes", (req, res) => {
  res.render("components/notes.ejs", { title: "Notes" });
});

getRoutes.get("/noteDetails", (req, res) => {
  res.render("details/noteDetails.ejs", { title: "Note-Details" });
});

// assignments
getRoutes.get("/assignments", (req, res) => {
  res.render("components/assignments.ejs", { title: "Assignments" });
});

getRoutes.get("/assignmentDetails", (req, res) => {
  res.render("details/assignmentDetails.ejs", { title: "Assignment-Details" });
});

getRoutes.get("/answers", (req, res) => {
  res.render("components/answers.ejs", { title: "Answers" });
});

// announcements
getRoutes.get("/announcement", (req, res) => {
  res.render("components/announcements.ejs", { title: "Announcements" });
});

// classes
getRoutes.get("/classes", (req, res) => {
  res.render("components/classes.ejs", { title: "Classes" });
});

getRoutes.get("/upcomingClassDetails", (req, res) => {
  res.render("details/upcomingClassDetails.ejs", {
    title: "Upcoming-Class-Details",
  });
});

getRoutes.get("/pastClassDetails", (req, res) => {
  res.render("details/pastClassDetails.ejs", {
    title: "Past-Class-Details",
  });
});

export default getRoutes;
