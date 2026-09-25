const studentName = "Rhiza Mae Dacutanan";
const studentId = "2024-302-1";
const universityName = "NorthWest Samar State University";
const maxSemesterCredits = 18;
const passingGrade = 75;
const baseDegree = "BS Information Technology";
const defaultCampus = "Main Campus";
const academicYear = "2025-2026";
const systemVersion = "v3.1.0";
const accessRole = "Student";


let currentSemester = "1st Semester";
let gpa = 1.45;
let totalCreditsEarned = 84;
let enrollmentStatus = "Enrolled";
let activeSubject = "Mobile Programming 1";
let totalStudyHours = 18;
let libraryBooksChecked = 3;
let labAccessGranted = true;
let currentTuitionBalance = 0;
let preferredTheme = "Light Mode";


const profilePrimary = {
  id: studentId,
  fullName: studentName,
  contact: { email: "rhizamae.dacutanan@email.com", phone: "0946-190-9128" },
  scholarship: { name: "Academic Excellence", status: "Active" }
};

const profileSecondary = { id: "2026-89413", fullName: "Joven Coranes" };

const semester1Courses = [
  { code: "IT101", title: "Intro to Computing", grade: 92, credits: 3 },
  { code: "IT102", title: "Computer Programming 1", grade: 88, credits: 3 }
];

const semester2Courses = [
  { code: "IT201", title: "Data Structures & Algorithms", grade: 95, credits: 3 },
  { code: "IT202", title: "Web Development 2", grade: 91, credits: 3 }
];

const coreSkillsGroup1 = ["JavaScript", "HTML5", "CSS3"];
const coreSkillsGroup2 = ["Node.js", "React", "SQL"];

const baseSettings = { notifications: true, autoSave: true };
const userPreferences = { autoSave: true, theme: "dark" };


const allEnrolledCourses = [...semester1Courses, ...semester2Courses];
const fullSkillSet = [...coreSkillsGroup1, ...coreSkillsGroup2, "Git"];


const combinedSettings = { ...baseSettings, ...userPreferences };
const completeStudentProfile = { ...profilePrimary, yearLevel: "3rd Year", status: enrollmentStatus };


const [firstCourse, secondCourse] = allEnrolledCourses;
const [topSkill, secondarySkill] = fullSkillSet;
const [courseCodeA, courseCodeB] = ["IT201", "IT202", "IT203"];


const { title: featuredCourseTitle, grade: featuredCourseGrade } = firstCourse;
const { email: studentEmail } = profilePrimary.contact;
const { name: scholarshipName } = profilePrimary.scholarship;


const formatGrade = (score) => `${score}% (${score >= passingGrade ? "PASS" : "FAIL"})`;

const checkScholarshipActive = (student) => student?.scholarship?.status === "Active";

const buildCourseSummary = (course) => `[${course.code}] ${course.title} - Grade: ${course.grade}`;

const calculateTotalCredits = (courses) => courses.reduce((acc, c) => acc + c.credits, 0);

const generateWelcomeMessage = (name, degree) => `Welcome, ${name}! Enrolled program: ${degree}.`;


const courseTitlesList = allEnrolledCourses.map((course) => course.title);
const courseGradeReport = allEnrolledCourses.map((course) => `${course.code}: ${formatGrade(course.grade)}`);


const highHonorCourses = allEnrolledCourses.filter((course) => course.grade >= 90);
const heavyCreditCourses = allEnrolledCourses.filter((course) => course.credits >= 3);


const primaryScholarshipStatus = profilePrimary?.scholarship?.status;
const secondaryScholarshipStatus = profileSecondary?.scholarship?.status;


const log1 = `System Initialized: ${universityName} Academic Portal (${systemVersion})`;
const log2 = `Active Student Profile: ${studentName} | ID: ${studentId}`;
const log3 = `Program: ${baseDegree} (${defaultCampus}) - Academic Year ${academicYear}`;
const log4 = `${generateWelcomeMessage(studentName, baseDegree)}`;
const log5 = `Total Enrolled Courses: ${allEnrolledCourses.length} tracks registered for ${currentSemester}.`;
const log6 = `Featured Course Focus: "${featuredCourseTitle}" with a current grade of ${featuredCourseGrade}.`;
const log7 = `High Honor Subjects Count: ${highHonorCourses.length} courses with 90%+ marks.`;
const log8 = `Primary Student Email: ${studentEmail} (Scholarship: ${scholarshipName})`;
const log9 = `Scholarship Status Check -> Primary: ${primaryScholarshipStatus} | Secondary: ${secondaryScholarshipStatus || "None"}`;
const log10 = `Dashboard State: ${accessRole} ${studentName} has ${totalCreditsEarned} total credits earned with GPA ${gpa}.`;


console.log(log1);
console.log(log2);
console.log(log3);
console.log(log4);
console.log(log5);
console.log(log6);
console.log(log7);
console.log(log8);
console.log(log9);
console.log(log10);
