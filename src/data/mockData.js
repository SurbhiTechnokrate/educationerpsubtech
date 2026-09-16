// Complete Mock Data matching Dashboard UI Screenshot and BRD Specifications (Nursery to 10th Class)

export const ALL_CLASSES = [
  'Nursery',
  'LKG',
  'UKG',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10'
];

export const CLASS_CATEGORIES = [
  { id: 'all', label: 'All Classes (Nursery - 10th)' },
  { id: 'pre-primary', label: 'Pre-Primary (Nursery, LKG, UKG)', classes: ['Nursery', 'LKG', 'UKG'] },
  { id: 'primary', label: 'Primary (Class 1 - 5)', classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'] },
  { id: 'middle', label: 'Middle School (Class 6 - 8)', classes: ['Class 6', 'Class 7', 'Class 8'] },
  { id: 'secondary', label: 'Secondary (Class 9 - 10)', classes: ['Class 9', 'Class 10'] }
];

export const CLASS_SECTIONS = [
  'Nursery - A',
  'LKG - A',
  'UKG - A',
  'Class 1 - A',
  'Class 2 - A',
  'Class 3 - A',
  'Class 4 - A',
  'Class 5 - A',
  'Class 6 - A',
  'Class 7 - A',
  'Class 8 - A',
  'Class 8 - B',
  'Class 9 - A',
  'Class 9 - B',
  'Class 10 - A',
  'Class 10 - B'
];

export const teacherProfile = {
  id: "EMP-2024-042",
  name: "Surbhi Vaidya",
  title: "Senior Faculty & Academic Coordinator",
  role: "Class Teacher (Class 8 - A) & Academic Lead (Nursery to 10th)",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256",
  email: "surbhi.vaidya@schoolerp.edu",
  phone: "+91 98765 43210",
  institution: "Springdale Global Academy",
  campus: "Main Campus, New Delhi",
  department: "Academic Department (Nursery to Class 10)",
  joiningDate: "15 June 2021",
  assignedClass: "Class 8 - A",
  assignedSubjects: [
    "Early Childhood Numeracy (Nursery - UKG)",
    "Foundational Mathematics (Class 1 - 5)",
    "Secondary Mathematics (Class 6 - 8)",
    "Advanced Mathematics & Board Prep (Class 9 - 10)"
  ],
  geofenceRadius: "150 meters",
  campusCoordinates: { lat: 28.6139, lng: 77.2090 },
};

export const dashboardKPIs = {
  totalClasses: 16,
  totalStudents: 480,
  subjectsAssigned: 6,
  todaysClasses: 5,
  pendingAssignments: 8,
  pendingMarks: 3,
};

export const todayTimetableData = [
  {
    id: 1,
    time: "08:30 AM - 09:15 AM",
    class: "Nursery - A",
    subject: "Phonics & Rhyme Fun",
    topic: "Alphabet Sounds & Color Identification",
    room: "Activity Room 1",
    status: "Completed",
    borderColor: "border-pink-500",
    badgeColor: "bg-pink-50 text-pink-700 border-pink-200"
  },
  {
    id: 2,
    time: "09:30 AM - 10:15 AM",
    class: "Class 3 - A",
    subject: "Mathematics",
    topic: "Multiplication Tables & Word Problems",
    room: "Room 103",
    status: "Completed",
    borderColor: "border-cyan-500",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
  },
  {
    id: 3,
    time: "10:30 AM - 11:30 AM",
    class: "Class 8 - A",
    subject: "Mathematics",
    topic: "Algebraic Identities & Factorization",
    room: "Room 204",
    status: "Live Now",
    borderColor: "border-blue-500",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    id: 4,
    time: "11:45 AM - 12:45 PM",
    class: "Class 9 - A",
    subject: "Mathematics",
    topic: "Linear Equations in Two Variables",
    room: "Room 301",
    status: "Upcoming",
    borderColor: "border-emerald-500",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    id: 5,
    time: "02:00 PM - 03:00 PM",
    class: "Class 10 - A",
    subject: "Mathematics",
    topic: "Quadratic Equations & Board Prep",
    room: "Room 401",
    status: "Upcoming",
    borderColor: "border-purple-500",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
  }
];

export const upcomingExamsData = [
  {
    id: 1,
    subject: "Phonics & Rhymes Recitation",
    class: "Nursery - A",
    date: "16 Sep 2025",
    type: "Continuous Assessment",
    time: "09:00 AM - 10:00 AM",
    totalMarks: 25,
    room: "Pre-Primary Hall"
  },
  {
    id: 2,
    subject: "Early Numeracy & Shapes",
    class: "UKG - A",
    date: "17 Sep 2025",
    type: "Term 1 Assessment",
    time: "09:30 AM - 10:30 AM",
    totalMarks: 30,
    room: "Activity Room 2"
  },
  {
    id: 3,
    subject: "Mathematics & Mental Math",
    class: "Class 3 - A",
    date: "18 Sep 2025",
    type: "Unit Test - 2",
    time: "09:00 AM - 10:30 AM",
    totalMarks: 40,
    room: "Room 103"
  },
  {
    id: 4,
    subject: "Mathematics",
    class: "Class 5 - A",
    date: "19 Sep 2025",
    type: "Unit Test - 2",
    time: "09:00 AM - 10:30 AM",
    totalMarks: 50,
    room: "Room 105"
  },
  {
    id: 5,
    subject: "Mathematics",
    class: "Class 8 - A",
    date: "20 Sep 2025",
    type: "Unit Test - 2",
    time: "09:00 AM - 10:30 AM",
    totalMarks: 50,
    room: "Hall 2"
  },
  {
    id: 6,
    subject: "Mathematics",
    class: "Class 9 - A",
    date: "22 Sep 2025",
    type: "Unit Test - 2",
    time: "11:00 AM - 12:30 PM",
    totalMarks: 50,
    room: "Hall 3"
  },
  {
    id: 7,
    subject: "Mathematics (Standard & Basic)",
    class: "Class 10 - A",
    date: "24 Sep 2025",
    type: "Pre-Board Assessment",
    time: "09:00 AM - 12:00 PM",
    totalMarks: 80,
    room: "Main Auditorium"
  }
];

export const recentAnnouncementsData = [
  {
    id: 1,
    title: "Unit Test Schedule for Classes Nursery to 10th",
    description: "Assessment timetable published for Pre-Primary, Primary, Middle and Secondary divisions.",
    date: "15 Sep 2025",
    dotColor: "bg-teal-500",
    badge: "Exam Alert",
    priority: "Urgent"
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting (Nursery - 10th)",
    description: "PTM will be conducted this Saturday from 09:00 AM to 01:00 PM in respective classrooms.",
    date: "14 Sep 2025",
    dotColor: "bg-blue-500",
    badge: "PTM Notice",
    priority: "Important"
  },
  {
    id: 3,
    title: "Updated Term 1 Syllabus Guidelines",
    description: "Curriculum pacing blueprints for classes Nursery to 10th available in Syllabus section.",
    date: "12 Sep 2025",
    dotColor: "bg-amber-500",
    badge: "Academic",
    priority: "Normal"
  },
  {
    id: 4,
    title: "Inter-House Math & Science Olympiad",
    description: "Registrations open for students from Class 1 to Class 10.",
    date: "10 Sep 2025",
    dotColor: "bg-rose-500",
    badge: "Competition",
    priority: "Normal"
  }
];

export const syllabusProgressData = [
  {
    id: 1,
    subject: "Early Foundation & Phonics",
    progress: 85,
    color: "bg-pink-500",
    textColor: "text-pink-600",
    totalChapters: 8,
    completedChapters: 7,
    class: "Nursery & KG"
  },
  {
    id: 2,
    subject: "Primary Mathematics & EVS",
    progress: 75,
    color: "bg-amber-500",
    textColor: "text-amber-600",
    totalChapters: 12,
    completedChapters: 9,
    class: "Class 1 - 5"
  },
  {
    id: 3,
    subject: "Middle School Mathematics",
    progress: 80,
    color: "bg-emerald-500",
    textColor: "text-emerald-600",
    totalChapters: 10,
    completedChapters: 8,
    class: "Class 6 - 8"
  },
  {
    id: 4,
    subject: "Secondary Board Mathematics",
    progress: 70,
    color: "bg-blue-600",
    textColor: "text-blue-600",
    totalChapters: 15,
    completedChapters: 10,
    class: "Class 9 & 10"
  }
];

export const assignmentStatusData = {
  submittedPercentage: 86,
  submittedCount: 42,
  pendingPercentage: 14,
  pendingCount: 7,
  notSubmittedPercentage: 0,
  notSubmittedCount: 0,
  totalAssignments: 49,
};

// All Classes Roster from Nursery to 10th Class
export const myClassesData = [
  {
    id: "NUR-A",
    class: "Nursery",
    division: "A",
    stage: "Pre-Primary",
    subject: "Early Phonics & Rhymes",
    students: 24,
    schedule: "08:30 AM - 09:15 AM",
    isClassTeacher: false,
    room: "Activity Room 1",
    attendanceRate: "95.8%",
    avgGrade: "A+"
  },
  {
    id: "LKG-A",
    class: "LKG",
    division: "A",
    stage: "Pre-Primary",
    subject: "Alphabet & Motor Skills",
    students: 25,
    schedule: "09:15 AM - 10:00 AM",
    isClassTeacher: false,
    room: "Activity Room 2",
    attendanceRate: "94.0%",
    avgGrade: "A"
  },
  {
    id: "UKG-A",
    class: "UKG",
    division: "A",
    stage: "Pre-Primary",
    subject: "Early Numeracy & EVS",
    students: 26,
    schedule: "10:00 AM - 10:45 AM",
    isClassTeacher: false,
    room: "Activity Room 3",
    attendanceRate: "96.1%",
    avgGrade: "A+"
  },
  {
    id: "1A",
    class: "Class 1",
    division: "A",
    stage: "Primary",
    subject: "Mathematics & Numbers",
    students: 28,
    schedule: "11:00 AM - 11:45 AM",
    isClassTeacher: false,
    room: "Room 101",
    attendanceRate: "93.5%",
    avgGrade: "A"
  },
  {
    id: "2A",
    class: "Class 2",
    division: "A",
    stage: "Primary",
    subject: "Basic Arithmetic & Shapes",
    students: 30,
    schedule: "11:45 AM - 12:30 PM",
    isClassTeacher: false,
    room: "Room 102",
    attendanceRate: "95.0%",
    avgGrade: "A-"
  },
  {
    id: "3A",
    class: "Class 3",
    division: "A",
    stage: "Primary",
    subject: "Mathematics & Logic",
    students: 30,
    schedule: "09:30 AM - 10:15 AM",
    isClassTeacher: false,
    room: "Room 103",
    attendanceRate: "94.2%",
    avgGrade: "A"
  },
  {
    id: "4A",
    class: "Class 4",
    division: "A",
    stage: "Primary",
    subject: "Mathematics & Fractions",
    students: 32,
    schedule: "01:00 PM - 01:45 PM",
    isClassTeacher: false,
    room: "Room 104",
    attendanceRate: "92.8%",
    avgGrade: "B+"
  },
  {
    id: "5A",
    class: "Class 5",
    division: "A",
    stage: "Primary",
    subject: "Applied Mathematics",
    students: 32,
    schedule: "01:45 PM - 02:30 PM",
    isClassTeacher: false,
    room: "Room 105",
    attendanceRate: "96.0%",
    avgGrade: "A"
  },
  {
    id: "6A",
    class: "Class 6",
    division: "A",
    stage: "Middle",
    subject: "Mathematics & Integers",
    students: 34,
    schedule: "08:30 AM - 09:15 AM",
    isClassTeacher: false,
    room: "Room 201",
    attendanceRate: "93.8%",
    avgGrade: "B+"
  },
  {
    id: "7A",
    class: "Class 7",
    division: "A",
    stage: "Middle",
    subject: "Mathematics & Algebra",
    students: 32,
    schedule: "09:15 AM - 10:00 AM",
    isClassTeacher: false,
    room: "Room 202",
    attendanceRate: "95.1%",
    avgGrade: "A-"
  },
  {
    id: "8A",
    class: "Class 8",
    division: "A",
    stage: "Middle",
    subject: "Mathematics & Geometry",
    students: 32,
    schedule: "10:30 AM - 11:30 AM",
    isClassTeacher: true,
    room: "Room 204",
    attendanceRate: "94.5%",
    avgGrade: "A-"
  },
  {
    id: "8B",
    class: "Class 8",
    division: "B",
    stage: "Middle",
    subject: "Mathematics",
    students: 30,
    schedule: "11:30 AM - 12:30 PM",
    isClassTeacher: false,
    room: "Room 205",
    attendanceRate: "92.0%",
    avgGrade: "B+"
  },
  {
    id: "9A",
    class: "Class 9",
    division: "A",
    stage: "Secondary",
    subject: "Mathematics (NCERT / CBSE)",
    students: 35,
    schedule: "11:45 AM - 12:45 PM",
    isClassTeacher: false,
    room: "Room 301",
    attendanceRate: "96.2%",
    avgGrade: "A"
  },
  {
    id: "9B",
    class: "Class 9",
    division: "B",
    stage: "Secondary",
    subject: "Mathematics",
    students: 28,
    schedule: "02:00 PM - 03:00 PM",
    isClassTeacher: false,
    room: "Room 302",
    attendanceRate: "89.5%",
    avgGrade: "B"
  },
  {
    id: "10A",
    class: "Class 10",
    division: "A",
    stage: "Secondary",
    subject: "Advanced Mathematics (Board Prep)",
    students: 30,
    schedule: "02:00 PM - 03:00 PM",
    isClassTeacher: false,
    room: "Room 401",
    attendanceRate: "97.8%",
    avgGrade: "A+"
  },
  {
    id: "10B",
    class: "Class 10",
    division: "B",
    stage: "Secondary",
    subject: "Mathematics Remedial & Practice",
    students: 27,
    schedule: "03:15 PM - 04:00 PM",
    isClassTeacher: false,
    room: "Room 402",
    attendanceRate: "88.0%",
    avgGrade: "B-"
  }
];

export const recentActivityData = [
  {
    id: 1,
    title: "Attendance marked for Class 8 - A",
    time: "Today, 10:15 AM",
    icon: "FileCheck",
    color: "bg-teal-50 text-teal-600 border-teal-200"
  },
  {
    id: 2,
    title: "Nursery Phonics rhyme activity evaluated",
    time: "Today, 09:30 AM",
    icon: "Sparkles",
    color: "bg-pink-50 text-pink-600 border-pink-200"
  },
  {
    id: 3,
    title: "Class 10 Pre-Board marks entered",
    time: "Today, 09:00 AM",
    icon: "Award",
    color: "bg-purple-50 text-purple-600 border-purple-200"
  },
  {
    id: 4,
    title: "New assignment published for Class 5 - A",
    time: "Yesterday, 04:20 PM",
    icon: "FileText",
    color: "bg-blue-50 text-blue-600 border-blue-200"
  },
  {
    id: 5,
    title: "Curriculum plan updated for Class 3 Mathematics",
    time: "Yesterday, 02:10 PM",
    icon: "BookOpen",
    color: "bg-amber-50 text-amber-600 border-amber-200"
  }
];

// Rich Student Dataset Spanning Nursery to 10th Class
export const initialStudents = [
  // --- PRE-PRIMARY: NURSERY ---
  {
    id: "STU-NUR-01",
    rollNo: 1,
    name: "Advik Kapoor",
    class: "Nursery",
    division: "A",
    gender: "Male",
    dob: "12 Apr 2021",
    bloodGroup: "B+",
    photo: "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80&w=200",
    attendance: "96.0%",
    attendanceStatus: "Present",
    fatherName: "Gaurav Kapoor",
    motherName: "Ritu Kapoor",
    parentContact: "+91 98110 55441",
    parentEmail: "gaurav.kapoor@gmail.com",
    address: "Block C-4, Vasant Kunj, New Delhi",
    feeStatus: "Paid",
    overallGrade: "A+",
    mathScore: 95,
    scienceScore: 92,
    englishScore: 98,
    busRoute: "Route 01 (Stop #2 - Vasant Kunj)",
    hostel: "Day Scholar",
    behavior: "Very enthusiastic in rhyme recitation and building blocks."
  },
  {
    id: "STU-NUR-02",
    rollNo: 2,
    name: "Kiara Sen",
    class: "Nursery",
    division: "A",
    gender: "Female",
    dob: "25 Jul 2021",
    bloodGroup: "O+",
    photo: "https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?auto=format&fit=crop&q=80&w=200",
    attendance: "98.5%",
    attendanceStatus: "Present",
    fatherName: "Subhash Sen",
    motherName: "Debolina Sen",
    parentContact: "+91 98110 55442",
    parentEmail: "subhash.sen@gmail.com",
    address: "A-12, CR Park, New Delhi",
    feeStatus: "Paid",
    overallGrade: "A+",
    mathScore: 98,
    scienceScore: 96,
    englishScore: 95,
    busRoute: "Route 03 (Stop #1 - CR Park)",
    hostel: "Day Scholar",
    behavior: "Quick learner, loves coloring and finger painting."
  },

  // --- PRE-PRIMARY: LKG ---
  {
    id: "STU-LKG-01",
    rollNo: 1,
    name: "Vihaan Joshi",
    class: "LKG",
    division: "A",
    gender: "Male",
    dob: "14 Nov 2020",
    bloodGroup: "A+",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    attendance: "94.0%",
    attendanceStatus: "Present",
    fatherName: "Pradeep Joshi",
    motherName: "Geeta Joshi",
    parentContact: "+91 98110 55443",
    parentEmail: "pradeep.joshi@gmail.com",
    address: "Flat 202, Mayur Vihar, Delhi",
    feeStatus: "Paid",
    overallGrade: "A",
    mathScore: 92,
    scienceScore: 90,
    englishScore: 89,
    busRoute: "Route 04 (Stop #3 - Mayur Vihar)",
    hostel: "Day Scholar",
    behavior: "Active in classroom circle time and shapes recognition."
  },

  // --- PRE-PRIMARY: UKG ---
  {
    id: "STU-UKG-01",
    rollNo: 1,
    name: "Myra Singhania",
    class: "UKG",
    division: "A",
    gender: "Female",
    dob: "03 Feb 2020",
    bloodGroup: "AB+",
    photo: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=200",
    attendance: "96.5%",
    attendanceStatus: "Present",
    fatherName: "Alok Singhania",
    motherName: "Shalini Singhania",
    parentContact: "+91 98110 55444",
    parentEmail: "alok.singhania@gmail.com",
    address: "B-77, Greater Kailash 1, New Delhi",
    feeStatus: "Paid",
    overallGrade: "A+",
    mathScore: 96,
    scienceScore: 94,
    englishScore: 97,
    busRoute: "Route 02 (Stop #5 - GK 1)",
    hostel: "Day Scholar",
    behavior: "Reads simple 3-letter words fluently and counts up to 50."
  },

  // --- PRIMARY: CLASS 1 ---
  {
    id: "STU-1A-01",
    rollNo: 1,
    name: "Reyansh Gupta",
    class: "Class 1",
    division: "A",
    gender: "Male",
    dob: "19 Sep 2019",
    bloodGroup: "O+",
    photo: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200",
    attendance: "95.0%",
    attendanceStatus: "Present",
    fatherName: "Mohit Gupta",
    motherName: "Neha Gupta",
    parentContact: "+91 98110 55445",
    parentEmail: "mohit.gupta@gmail.com",
    address: "House 24, Saket, New Delhi",
    feeStatus: "Paid",
    overallGrade: "A",
    mathScore: 90,
    scienceScore: 88,
    englishScore: 91,
    busRoute: "Route 05 (Stop #2 - Saket)",
    hostel: "Day Scholar",
    behavior: "Good comprehension in single-digit addition and phonics."
  },

  // --- PRIMARY: CLASS 2 ---
  {
    id: "STU-2A-01",
    rollNo: 1,
    name: "Tara Nair",
    class: "Class 2",
    division: "A",
    gender: "Female",
    dob: "08 Jun 2018",
    bloodGroup: "A+",
    photo: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=200",
    attendance: "97.2%",
    attendanceStatus: "Present",
    fatherName: "Sanjay Nair",
    motherName: "Anu Nair",
    parentContact: "+91 98110 55446",
    parentEmail: "sanjay.nair@gmail.com",
    address: "Flat 101, Dwarka Sector 6, New Delhi",
    feeStatus: "Paid",
    overallGrade: "A+",
    mathScore: 94,
    scienceScore: 92,
    englishScore: 96,
    busRoute: "Route 07 (Stop #1 - Dwarka Sec 6)",
    hostel: "Day Scholar",
    behavior: "Excellent handwriting and basic subtraction speed."
  },

  // --- PRIMARY: CLASS 3 ---
  {
    id: "STU-3A-01",
    rollNo: 1,
    name: "Kabir Malhotra",
    class: "Class 3",
    division: "A",
    gender: "Male",
    dob: "11 Dec 2017",
    bloodGroup: "B+",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    attendance: "93.8%",
    attendanceStatus: "Present",
    fatherName: "Vikas Malhotra",
    motherName: "Sunita Malhotra",
    parentContact: "+91 98110 55447",
    parentEmail: "vikas.malhotra@gmail.com",
    address: "C-14, Punjabi Bagh, New Delhi",
    feeStatus: "Paid",
    overallGrade: "A",
    mathScore: 89,
    scienceScore: 91,
    englishScore: 86,
    busRoute: "Route 06 (Stop #4 - Punjabi Bagh)",
    hostel: "Day Scholar",
    behavior: "Active in mental math quizzes and environmental studies."
  },

  // --- PRIMARY: CLASS 4 ---
  {
    id: "STU-4A-01",
    rollNo: 1,
    name: "Anika Choudhury",
    class: "Class 4",
    division: "A",
    gender: "Female",
    dob: "23 Mar 2016",
    bloodGroup: "O-",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200",
    attendance: "96.4%",
    attendanceStatus: "Present",
    fatherName: "Debashis Choudhury",
    motherName: "Mousumi Choudhury",
    parentContact: "+91 98110 55448",
    parentEmail: "debashis.c@gmail.com",
    address: "Tower 2, Supertech Apts, Noida",
    feeStatus: "Paid",
    overallGrade: "A+",
    mathScore: 93,
    scienceScore: 95,
    englishScore: 94,
    busRoute: "Route 12 (Stop #2 - Noida Sec 50)",
    hostel: "Day Scholar",
    behavior: "Diligent with homework, good understanding of fractions."
  },

  // --- PRIMARY: CLASS 5 ---
  {
    id: "STU-5A-01",
    rollNo: 1,
    name: "Devansh Rastogi",
    class: "Class 5",
    division: "A",
    gender: "Male",
    dob: "17 Jan 2015",
    bloodGroup: "A+",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    attendance: "95.5%",
    attendanceStatus: "Present",
    fatherName: "Kamal Rastogi",
    motherName: "Preeti Rastogi",
    parentContact: "+91 98110 55449",
    parentEmail: "kamal.rastogi@gmail.com",
    address: "B-22, Janakpuri, New Delhi",
    feeStatus: "Paid",
    overallGrade: "A",
    mathScore: 91,
    scienceScore: 89,
    englishScore: 87,
    busRoute: "Route 08 (Stop #3 - Janakpuri)",
    hostel: "Day Scholar",
    behavior: "Great team player in science experiments and math puzzles."
  },

  // --- MIDDLE SCHOOL: CLASS 6 ---
  {
    id: "STU-6A-01",
    rollNo: 1,
    name: "Sanya Roy",
    class: "Class 6",
    division: "A",
    gender: "Female",
    dob: "05 May 2014",
    bloodGroup: "B+",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    attendance: "94.2%",
    attendanceStatus: "Present",
    fatherName: "Tapan Roy",
    motherName: "Sushmita Roy",
    parentContact: "+91 98110 55450",
    parentEmail: "tapan.roy@gmail.com",
    address: "Flat 404, Gulmohar Enclave, Delhi",
    feeStatus: "Paid",
    overallGrade: "A-",
    mathScore: 86,
    scienceScore: 90,
    englishScore: 92,
    busRoute: "Route 09 (Stop #1 - Gulmohar)",
    hostel: "Day Scholar",
    behavior: "Active participant in geometry labs and art club."
  },

  // --- MIDDLE SCHOOL: CLASS 7 ---
  {
    id: "STU-7A-01",
    rollNo: 1,
    name: "Aryan Dixit",
    class: "Class 7",
    division: "A",
    gender: "Male",
    dob: "29 Oct 2013",
    bloodGroup: "O+",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    attendance: "92.0%",
    attendanceStatus: "Present",
    fatherName: "Harish Dixit",
    motherName: "Meenakshi Dixit",
    parentContact: "+91 98110 55451",
    parentEmail: "harish.dixit@gmail.com",
    address: "D-89, Preet Vihar, Delhi",
    feeStatus: "Paid",
    overallGrade: "B+",
    mathScore: 84,
    scienceScore: 86,
    englishScore: 80,
    busRoute: "Route 10 (Stop #4 - Preet Vihar)",
    hostel: "Day Scholar",
    behavior: "Shows high interest in algebra and robotic club."
  },

  // --- MIDDLE SCHOOL: CLASS 8 - A (Detailed Roster) ---
  {
    id: "STU-8A-01",
    rollNo: 1,
    name: "Aarav Sharma",
    class: "Class 8",
    division: "A",
    gender: "Male",
    dob: "14 May 2012",
    bloodGroup: "O+",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
    attendance: "96.4%",
    attendanceStatus: "Present",
    fatherName: "Rajesh Sharma",
    motherName: "Pooja Sharma",
    parentContact: "+91 98234 11223",
    parentEmail: "rajesh.sharma@gmail.com",
    address: "B-402, Green Valley Apts, New Delhi",
    feeStatus: "Paid",
    overallGrade: "A+",
    mathScore: 94,
    scienceScore: 91,
    englishScore: 88,
    busRoute: "Route 12 (Stop #4 - Green Valley)",
    hostel: "Day Scholar",
    behavior: "Exemplary, very active in math quizzes."
  },
  {
    id: "STU-8A-02",
    rollNo: 2,
    name: "Ananya Iyer",
    class: "Class 8",
    division: "A",
    gender: "Female",
    dob: "22 Sep 2012",
    bloodGroup: "A+",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    attendance: "98.2%",
    attendanceStatus: "Present",
    fatherName: "Suresh Iyer",
    motherName: "Lakshmi Iyer",
    parentContact: "+91 98111 22334",
    parentEmail: "suresh.iyer@gmail.com",
    address: "Flat 12, Lotus Towers, New Delhi",
    feeStatus: "Paid",
    overallGrade: "A+",
    mathScore: 98,
    scienceScore: 96,
    englishScore: 94,
    busRoute: "Route 05 (Stop #2 - Lotus Towers)",
    hostel: "Day Scholar",
    behavior: "Class monitor, consistently helpful."
  },
  {
    id: "STU-8A-03",
    rollNo: 3,
    name: "Rohan Patil",
    class: "Class 8",
    division: "A",
    gender: "Male",
    dob: "08 Dec 2011",
    bloodGroup: "B+",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    attendance: "91.0%",
    attendanceStatus: "Present",
    fatherName: "Vikram Patil",
    motherName: "Sunita Patil",
    parentContact: "+91 98722 33445",
    parentEmail: "vikram.patil@gmail.com",
    address: "House 54, Sector 18, Noida",
    feeStatus: "Paid",
    overallGrade: "A",
    mathScore: 88,
    scienceScore: 85,
    englishScore: 82,
    busRoute: "Route 14 (Stop #6 - Sector 18)",
    hostel: "Day Scholar",
    behavior: "Good problem solving, submitted homework on time."
  },
  {
    id: "STU-8A-04",
    rollNo: 4,
    name: "Diya Deshmukh",
    class: "Class 8",
    division: "A",
    gender: "Female",
    dob: "19 Mar 2012",
    bloodGroup: "AB+",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    attendance: "74.2%",
    attendanceStatus: "Absent",
    fatherName: "Anil Deshmukh",
    motherName: "Kavita Deshmukh",
    parentContact: "+91 98999 55667",
    parentEmail: "anil.deshmukh@gmail.com",
    address: "Villa 3, Palm Residency, Gurugram",
    feeStatus: "Pending",
    overallGrade: "C+",
    mathScore: 62,
    scienceScore: 68,
    englishScore: 71,
    busRoute: "Route 08 (Stop #1 - Palm Residency)",
    hostel: "Day Scholar",
    behavior: "Needs attendance monitoring, parent notified."
  },
  {
    id: "STU-8A-05",
    rollNo: 5,
    name: "Ishaan Verma",
    class: "Class 8",
    division: "A",
    gender: "Male",
    dob: "30 Jul 2012",
    bloodGroup: "O-",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    attendance: "94.0%",
    attendanceStatus: "Present",
    fatherName: "Manoj Verma",
    motherName: "Sita Verma",
    parentContact: "+91 98333 44556",
    parentEmail: "manoj.verma@gmail.com",
    address: "C-12, Model Town, Delhi",
    feeStatus: "Paid",
    overallGrade: "B+",
    mathScore: 82,
    scienceScore: 79,
    englishScore: 85,
    busRoute: "Route 02 (Stop #3 - Model Town)",
    hostel: "Day Scholar",
    behavior: "Active in sports and math club."
  },
  {
    id: "STU-8A-06",
    rollNo: 6,
    name: "Meera Nair",
    class: "Class 8",
    division: "A",
    gender: "Female",
    dob: "11 Nov 2012",
    bloodGroup: "A-",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200",
    attendance: "89.5%",
    attendanceStatus: "Present",
    fatherName: "Karthik Nair",
    motherName: "Meenakshi Nair",
    parentContact: "+91 98444 55667",
    parentEmail: "karthik.nair@gmail.com",
    address: "Flat 401, Sapphire Heights, Delhi",
    feeStatus: "Paid",
    overallGrade: "B",
    mathScore: 78,
    scienceScore: 80,
    englishScore: 86,
    busRoute: "Route 05 (Stop #5 - Sapphire Heights)",
    hostel: "Day Scholar",
    behavior: "Good comprehension, participatory."
  },
  {
    id: "STU-8A-07",
    rollNo: 7,
    name: "Kabir Mehta",
    class: "Class 8",
    division: "A",
    gender: "Male",
    dob: "05 Jan 2012",
    bloodGroup: "B-",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
    attendance: "95.5%",
    attendanceStatus: "Present",
    fatherName: "Sameer Mehta",
    motherName: "Neha Mehta",
    parentContact: "+91 98555 66778",
    parentEmail: "sameer.mehta@gmail.com",
    address: "E-88, South Extension, New Delhi",
    feeStatus: "Paid",
    overallGrade: "A",
    mathScore: 91,
    scienceScore: 89,
    englishScore: 87,
    busRoute: "Route 09 (Stop #2 - South Ext)",
    hostel: "Day Scholar",
    behavior: "Strong in geometric proofs."
  },
  {
    id: "STU-8A-08",
    rollNo: 8,
    name: "Tanvi Kapoor",
    class: "Class 8",
    division: "A",
    gender: "Female",
    dob: "17 Feb 2012",
    bloodGroup: "O+",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    attendance: "92.8%",
    attendanceStatus: "Late",
    fatherName: "Rakesh Kapoor",
    motherName: "Shilpa Kapoor",
    parentContact: "+91 98666 77889",
    parentEmail: "rakesh.kapoor@gmail.com",
    address: "B-10, Vasant Kunj, New Delhi",
    feeStatus: "Paid",
    overallGrade: "A-",
    mathScore: 85,
    scienceScore: 88,
    englishScore: 92,
    busRoute: "Route 11 (Stop #4 - Vasant Kunj)",
    hostel: "Day Scholar",
    behavior: "Creative in assignments, punctual usually."
  },

  // --- SECONDARY: CLASS 9 - A ---
  {
    id: "STU-9A-01",
    rollNo: 1,
    name: "Aditya Khurana",
    class: "Class 9",
    division: "A",
    gender: "Male",
    dob: "12 Aug 2011",
    bloodGroup: "A+",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    attendance: "97.0%",
    attendanceStatus: "Present",
    fatherName: "Anand Khurana",
    motherName: "Poonam Khurana",
    parentContact: "+91 98110 55460",
    parentEmail: "anand.khurana@gmail.com",
    address: "House 18, Defence Colony, New Delhi",
    feeStatus: "Paid",
    overallGrade: "A+",
    mathScore: 96,
    scienceScore: 94,
    englishScore: 90,
    busRoute: "Route 04 (Stop #1 - Def Col)",
    hostel: "Day Scholar",
    behavior: "Exceptional in quadratic equations and coordinate geometry."
  },
  {
    id: "STU-9A-02",
    rollNo: 2,
    name: "Rhea Banerjee",
    class: "Class 9",
    division: "A",
    gender: "Female",
    dob: "19 Nov 2011",
    bloodGroup: "B+",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    attendance: "95.5%",
    attendanceStatus: "Present",
    fatherName: "Somnath Banerjee",
    motherName: "Rupa Banerjee",
    parentContact: "+91 98110 55461",
    parentEmail: "somnath.b@gmail.com",
    address: "Flat 303, Alaknanda Apts, Delhi",
    feeStatus: "Paid",
    overallGrade: "A",
    mathScore: 92,
    scienceScore: 91,
    englishScore: 95,
    busRoute: "Route 06 (Stop #2 - Alaknanda)",
    hostel: "Day Scholar",
    behavior: "Consistent top performer and debate team leader."
  },

  // --- SECONDARY: CLASS 10 - A ---
  {
    id: "STU-10A-01",
    rollNo: 1,
    name: "Pranav Aggarwal",
    class: "Class 10",
    division: "A",
    gender: "Male",
    dob: "04 Feb 2010",
    bloodGroup: "O+",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
    attendance: "98.6%",
    attendanceStatus: "Present",
    fatherName: "Dinesh Aggarwal",
    motherName: "Kavita Aggarwal",
    parentContact: "+91 98110 55470",
    parentEmail: "dinesh.aggarwal@gmail.com",
    address: "Block B, Civil Lines, Delhi",
    feeStatus: "Paid",
    overallGrade: "A+",
    mathScore: 99,
    scienceScore: 97,
    englishScore: 94,
    busRoute: "Route 01 (Stop #4 - Civil Lines)",
    hostel: "Day Scholar",
    behavior: "Class 10 topper candidate, outstanding trigonometry speed."
  },
  {
    id: "STU-10A-02",
    rollNo: 2,
    name: "Sanya Saxena",
    class: "Class 10",
    division: "A",
    gender: "Female",
    dob: "28 Jul 2010",
    bloodGroup: "A-",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    attendance: "96.8%",
    attendanceStatus: "Present",
    fatherName: "Naveen Saxena",
    motherName: "Archana Saxena",
    parentContact: "+91 98110 55471",
    parentEmail: "naveen.saxena@gmail.com",
    address: "Plot 45, Sector 15, Faridabad",
    feeStatus: "Paid",
    overallGrade: "A+",
    mathScore: 95,
    scienceScore: 93,
    englishScore: 96,
    busRoute: "Route 15 (Stop #3 - Faridabad)",
    hostel: "Day Scholar",
    behavior: "Head Girl, meticulous notebook presentation and mock tests."
  }
];

// Full weekly timetable covering Nursery to 10th Class
export const fullWeeklyTimetable = {
  Monday: [
    { period: "Period 1", time: "08:30 - 09:15 AM", class: "Nursery - A", subject: "Phonics & Rhymes", room: "Activity 1" },
    { period: "Period 2", time: "09:15 - 10:00 AM", class: "Class 3 - A", subject: "Mathematics", room: "Room 103" },
    { period: "Period 3", time: "10:00 - 11:00 AM", class: "Class 8 - A", subject: "Mathematics", room: "Room 204" },
    { period: "Period 4", time: "11:00 - 12:00 PM", class: "Class 8 - B", subject: "Mathematics", room: "Room 205" },
    { period: "Break", time: "12:00 - 12:45 PM", class: "Lunch Break", subject: "Break", room: "Cafeteria" },
    { period: "Period 5", time: "12:45 - 01:45 PM", class: "Class 9 - A", subject: "Mathematics", room: "Room 301" },
    { period: "Period 6", time: "02:00 - 03:00 PM", class: "Class 10 - A", subject: "Board Mathematics", room: "Room 401" },
    { period: "Period 7", time: "03:15 - 04:00 PM", class: "Class 5 - A", subject: "Math Lab Activity", room: "Math Lab 1" },
  ],
  Tuesday: [
    { period: "Period 1", time: "08:30 - 09:15 AM", class: "LKG - A", subject: "Motor Skills & Colors", room: "Activity 2" },
    { period: "Period 2", time: "09:15 - 10:00 AM", class: "Class 1 - A", subject: "Numbers & Counting", room: "Room 101" },
    { period: "Period 3", time: "10:00 - 11:00 AM", class: "Class 8 - A", subject: "Math Lab Session", room: "Math Lab 1" },
    { period: "Period 4", time: "11:00 - 12:00 PM", class: "Class 9 - A", subject: "Coordinate Geometry", room: "Room 301" },
    { period: "Break", time: "12:00 - 12:45 PM", class: "Lunch Break", subject: "Break", room: "Cafeteria" },
    { period: "Period 5", time: "12:45 - 01:45 PM", class: "Class 7 - A", subject: "Algebra Introduction", room: "Room 202" },
    { period: "Period 6", time: "02:00 - 03:00 PM", class: "Class 8 - A", subject: "Mental Math & Quiz", room: "Room 204" },
    { period: "Period 7", time: "03:15 - 04:00 PM", class: "Class 10 - A", subject: "Adv Mathematics", room: "Room 401" },
  ],
  Wednesday: [
    { period: "Period 1", time: "08:30 - 09:15 AM", class: "UKG - A", subject: "Early Numeracy", room: "Activity 3" },
    { period: "Period 2", time: "09:15 - 10:00 AM", class: "Class 2 - A", subject: "Basic Arithmetic", room: "Room 102" },
    { period: "Period 3", time: "10:00 - 11:00 AM", class: "Class 8 - A", subject: "Mathematics", room: "Room 204" },
    { period: "Period 4", time: "11:00 - 12:00 PM", class: "Staff Meeting", subject: "K-10 Curriculum Review", room: "Conference 1" },
    { period: "Break", time: "12:00 - 12:45 PM", class: "Lunch Break", subject: "Break", room: "Cafeteria" },
    { period: "Period 5", time: "12:45 - 01:45 PM", class: "Class 9 - B", subject: "Mathematics", room: "Room 302" },
    { period: "Period 6", time: "02:00 - 03:00 PM", class: "Class 6 - A", subject: "Integers & Number Line", room: "Room 201" },
    { period: "Period 7", time: "03:15 - 04:00 PM", class: "Class 10 - B", subject: "Remedial Board Math", room: "Room 402" },
  ],
  Thursday: [
    { period: "Period 1", time: "08:30 - 09:15 AM", class: "Nursery - A", subject: "Story & Music Time", room: "Activity 1" },
    { period: "Period 2", time: "09:15 - 10:00 AM", class: "Class 4 - A", subject: "Fractions & Decimals", room: "Room 104" },
    { period: "Period 3", time: "10:00 - 11:00 AM", class: "Class 9 - A", subject: "Mathematics", room: "Room 301" },
    { period: "Period 4", time: "11:00 - 12:00 PM", class: "Class 8 - B", subject: "Mathematics", room: "Room 205" },
    { period: "Break", time: "12:00 - 12:45 PM", class: "Lunch Break", subject: "Break", room: "Cafeteria" },
    { period: "Period 5", time: "12:45 - 01:45 PM", class: "Free Period", subject: "Exam Paper Setting", room: "Staff Room" },
    { period: "Period 6", time: "02:00 - 03:00 PM", class: "Class 8 - A", subject: "Vedic Math Workshop", room: "Room 204" },
    { period: "Period 7", time: "03:15 - 04:00 PM", class: "Class 10 - A", subject: "Trigonometric Proofs", room: "Room 401" },
  ],
  Friday: [
    { period: "Period 1", time: "08:30 - 09:15 AM", class: "Class 5 - A", subject: "Applied Mathematics", room: "Room 105" },
    { period: "Period 2", time: "09:15 - 10:00 AM", class: "Class 8 - A", subject: "Weekly Assessment", room: "Room 204" },
    { period: "Period 3", time: "10:00 - 11:00 AM", class: "Class 8 - B", subject: "Weekly Assessment", room: "Room 205" },
    { period: "Period 4", time: "11:00 - 12:00 PM", class: "Class 9 - A", subject: "Mathematics", room: "Room 301" },
    { period: "Break", time: "12:00 - 12:45 PM", class: "Lunch Break", subject: "Break", room: "Cafeteria" },
    { period: "Period 5", time: "12:45 - 01:45 PM", class: "Class 10 - A", subject: "Sample Paper Discussion", room: "Room 401" },
    { period: "Period 6", time: "02:00 - 03:00 PM", class: "Class Teacher Hour", subject: "Class 8 - A Mentoring", room: "Room 204" },
    { period: "Period 7", time: "03:15 - 04:00 PM", class: "UKG - A", subject: "Drawing & Creativity", room: "Activity 3" },
  ],
  Saturday: [
    { period: "Period 1", time: "08:30 - 09:30 AM", class: "Class 8 - A", subject: "Doubt Clearance Session", room: "Room 204" },
    { period: "Period 2", time: "09:30 - 10:30 AM", class: "Class 9 & 10", subject: "Olympiad & NTSE Training", room: "Auditorium" },
    { period: "Period 3", time: "10:45 - 11:45 AM", class: "Staff Meeting", subject: "All Grades Review", room: "Conference 1" },
    { period: "Period 4", time: "11:45 - 01:00 PM", class: "Parent-Teacher Call", subject: "Student Progress Review", room: "Online / Cabin" },
  ]
};

// Initial Assignments Across Nursery to 10th
export const initialAssignments = [
  {
    id: "ASN-NUR-01",
    title: "Alphabet Tracing & Primary Color Matching Worksheet",
    class: "Nursery - A",
    subject: "Early Phonics",
    assignedDate: "14 Sep 2025",
    dueDate: "18 Sep 2025",
    totalStudents: 24,
    submittedCount: 22,
    pendingCount: 2,
    status: "Active",
    maxMarks: 10,
    description: "Color the apples with red crayon and trace letters A, B, and C along the dotted lines."
  },
  {
    id: "ASN-3A-01",
    title: "Multiplication Arrays & 2-Digit Multiplication Practice",
    class: "Class 3 - A",
    subject: "Mathematics",
    assignedDate: "12 Sep 2025",
    dueDate: "17 Sep 2025",
    totalStudents: 30,
    submittedCount: 26,
    pendingCount: 4,
    status: "Active",
    maxMarks: 20,
    description: "Draw grid arrays for 4x6 and 7x8, and complete word problems on page 42 of NCERT Math workbook."
  },
  {
    id: "ASN-5A-01",
    title: "Equivalent Fractions & Decimals Application Worksheet",
    class: "Class 5 - A",
    subject: "Mathematics",
    assignedDate: "11 Sep 2025",
    dueDate: "16 Sep 2025",
    totalStudents: 32,
    submittedCount: 29,
    pendingCount: 3,
    status: "Active",
    maxMarks: 20,
    description: "Convert mixed fractions to improper fractions and solve real-life measurement questions."
  },
  {
    id: "ASN-101",
    title: "Algebraic Expressions & Identities - Worksheet 3",
    class: "Class 8 - A",
    subject: "Mathematics",
    assignedDate: "12 Sep 2025",
    dueDate: "16 Sep 2025",
    totalStudents: 32,
    submittedCount: 26,
    pendingCount: 6,
    status: "Active",
    maxMarks: 25,
    description: "Solve problems 1 to 20 covering expansion using algebraic identities (a+b)², (a-b)², and (a²-b²)."
  },
  {
    id: "ASN-103",
    title: "Triangles & Congruence Criteria - Proofs Exercise",
    class: "Class 9 - A",
    subject: "Mathematics",
    assignedDate: "08 Sep 2025",
    dueDate: "14 Sep 2025",
    totalStudents: 35,
    submittedCount: 33,
    pendingCount: 2,
    status: "Grading",
    maxMarks: 30,
    description: "Submit step-by-step geometric proofs for SAS, ASA, SSS and RHS theorems."
  },
  {
    id: "ASN-10A-01",
    title: "Quadratic Equations: Discriminant & Nature of Roots",
    class: "Class 10 - A",
    subject: "Mathematics",
    assignedDate: "10 Sep 2025",
    dueDate: "15 Sep 2025",
    totalStudents: 30,
    submittedCount: 28,
    pendingCount: 2,
    status: "Grading",
    maxMarks: 30,
    description: "CBSE Board previous 5 years questions on quadratic equations and speed-distance word problems."
  }
];

// Lesson Plans
export const initialLessonPlans = [
  {
    id: "LP-NUR-01",
    title: "Color Sorting & Fine Motor Tactile Exploration",
    class: "Nursery - A",
    subject: "Early Foundations",
    chapter: "Module 2: Colors and Shapes",
    duration: "30 mins",
    date: "16 Sep 2025",
    status: "Planned",
    objectives: [
      "Identify primary colors (Red, Blue, Yellow)",
      "Develop pinch grip using sensory clay",
      "Participate in color naming song"
    ],
    teachingAids: "Sensory Beads, Color Sorting Bowls, Rhyme Audio",
    homework: "Find 2 red items at home and share with parents"
  },
  {
    id: "LP-301",
    title: "Visualizing Multiplication through Array Models",
    class: "Class 3 - A",
    subject: "Mathematics",
    chapter: "Chapter 4: How Many Times?",
    duration: "40 mins",
    date: "16 Sep 2025",
    status: "Planned",
    objectives: [
      "Understand multiplication as repeated addition",
      "Construct grid arrays using counters",
      "Recite tables of 6 and 7 fluently"
    ],
    teachingAids: "Math Counter Pegs, Interactive Grid Board",
    homework: "NCERT Exercise 4.1 Questions 1 to 6"
  },
  {
    id: "LP-801",
    title: "Introduction to Algebraic Identities",
    class: "Class 8 - A",
    subject: "Mathematics",
    chapter: "Chapter 4: Algebraic Expressions",
    duration: "45 mins",
    date: "15 Sep 2025",
    status: "In Progress",
    objectives: [
      "Understand identity vs standard equation",
      "Derive (a + b)² = a² + 2ab + b² visually",
      "Apply identity to solve mental calculations (e.g. 103²)"
    ],
    teachingAids: "Smartboard Interactive Geometry, Algebra Tiles, NCERT Workbook",
    homework: "Complete Exercise 4.2 Questions 1-5"
  },
  {
    id: "LP-1001",
    title: "Trigonometric Ratios of Specific Angles (30°, 45°, 60°)",
    class: "Class 10 - A",
    subject: "Mathematics",
    chapter: "Chapter 8: Introduction to Trigonometry",
    duration: "50 mins",
    date: "15 Sep 2025",
    status: "In Progress",
    objectives: [
      "Derive exact values of sin, cos, tan for 30°, 45°, 60°",
      "Construct trigonometric table rapidly from memory",
      "Solve board standard height & distance preparation problems"
    ],
    teachingAids: "Right Triangle Protractor Kits, GeoGebra Trigonometry Suite",
    homework: "Exercise 8.2 all sub-parts"
  }
];

// Study Materials Across Nursery to 10th
export const initialStudyMaterials = [
  {
    id: "MAT-NUR-01",
    title: "Nursery Phonics & Alphabet Rhymes Visual Picture Cards",
    class: "Nursery",
    subject: "Early Phonics",
    type: "PDF Document",
    size: "3.2 MB",
    uploadedDate: "02 Sep 2025",
    downloads: 180,
    category: "Class Slides"
  },
  {
    id: "MAT-3A-01",
    title: "Class 3 Mental Math & Times Tables Pocket Practice Cards",
    class: "Class 3",
    subject: "Mathematics",
    type: "PDF Document",
    size: "1.8 MB",
    uploadedDate: "06 Sep 2025",
    downloads: 145,
    category: "Formula Sheets"
  },
  {
    id: "MAT-01",
    title: "Class 8 Mathematics - Formula Handbook & Quick Reference Sheet",
    class: "Class 8",
    subject: "Mathematics",
    type: "PDF Document",
    size: "2.4 MB",
    uploadedDate: "01 Sep 2025",
    downloads: 142,
    category: "Formula Sheets"
  },
  {
    id: "MAT-03",
    title: "Class 9 Geometry Practice Question Bank with Detailed Step-by-Step Solutions",
    class: "Class 9",
    subject: "Mathematics",
    type: "PDF Document",
    size: "4.8 MB",
    uploadedDate: "05 Sep 2025",
    downloads: 116,
    category: "Question Bank"
  },
  {
    id: "MAT-10A-01",
    title: "Class 10 CBSE Board 10-Year Chapterwise Solved Question Bank",
    class: "Class 10",
    subject: "Mathematics",
    type: "PDF Document",
    size: "8.5 MB",
    uploadedDate: "08 Sep 2025",
    downloads: 210,
    category: "Question Bank"
  }
];

// Leave Balances & History
export const teacherLeaveData = {
  balances: {
    casualLeave: { total: 12, used: 4, remaining: 8 },
    sickLeave: { total: 12, used: 2, remaining: 10 },
    earnedLeave: { total: 15, used: 3, remaining: 12 },
    restrictedHoliday: { total: 2, used: 1, remaining: 1 },
  },
  requests: [
    {
      id: "LV-2025-089",
      leaveType: "Casual Leave",
      fromDate: "25 Sep 2025",
      toDate: "26 Sep 2025",
      days: 2,
      reason: "Family wedding event in hometown",
      substituteTeacher: "Mr. Alok Verma (Math Dept)",
      status: "Approved",
      appliedOn: "05 Sep 2025",
      approver: "Dr. K. S. Sharma (Principal)"
    },
    {
      id: "LV-2025-072",
      leaveType: "Sick Leave",
      fromDate: "14 Aug 2025",
      toDate: "14 Aug 2025",
      days: 1,
      reason: "Severe migraine and medical checkup",
      substituteTeacher: "Ms. Rita Sen (Science Dept)",
      status: "Approved",
      appliedOn: "13 Aug 2025",
      approver: "Dr. K. S. Sharma (Principal)"
    }
  ]
};

// Exam Marks Entry Dataset Across Classes
export const initialExamMarks = {
  "EXAM-NUR-A": {
    examName: "Continuous Assessment 1 (Phonics & Rhymes)",
    class: "Nursery - A",
    maxMarks: 25,
    passingMarks: 10,
    date: "16 Sep 2025",
    status: "Draft",
    entries: [
      { studentId: "STU-NUR-01", rollNo: 1, name: "Advik Kapoor", marks: 24, grade: "A+", remarks: "Flawless rhyme recitation & clear pronunciation" },
      { studentId: "STU-NUR-02", rollNo: 2, name: "Kiara Sen", marks: 25, grade: "A+", remarks: "Excellent alphabet recognition and coloring" }
    ]
  },
  "EXAM-UT2-3A": {
    examName: "Unit Test - 2 (Mathematics)",
    class: "Class 3 - A",
    maxMarks: 40,
    passingMarks: 15,
    date: "18 Sep 2025",
    status: "Draft",
    entries: [
      { studentId: "STU-3A-01", rollNo: 1, name: "Kabir Malhotra", marks: 36, grade: "A", remarks: "Great arithmetic speed, neat work" }
    ]
  },
  "EXAM-UT2-8A": {
    examName: "Unit Test - 2 (Mathematics)",
    class: "Class 8 - A",
    maxMarks: 50,
    passingMarks: 18,
    date: "15 Sep 2025",
    status: "Draft",
    entries: [
      { studentId: "STU-8A-01", rollNo: 1, name: "Aarav Sharma", marks: 47, grade: "A+", remarks: "Outstanding accuracy in algebraic equations" },
      { studentId: "STU-8A-02", rollNo: 2, name: "Ananya Iyer", marks: 49, grade: "A+", remarks: "Flawless proof presentation" },
      { studentId: "STU-8A-03", rollNo: 3, name: "Rohan Patil", marks: 44, grade: "A", remarks: "Very good concept clarity" },
      { studentId: "STU-8A-04", rollNo: 4, name: "Diya Deshmukh", marks: 31, grade: "B", remarks: "Needs more practice in word problems" },
      { studentId: "STU-8A-05", rollNo: 5, name: "Ishaan Verma", marks: 41, grade: "A-", remarks: "Good effort, check calculation steps" },
      { studentId: "STU-8A-06", rollNo: 6, name: "Meera Nair", marks: 39, grade: "B+", remarks: "Consistent performance" },
      { studentId: "STU-8A-07", rollNo: 7, name: "Kabir Mehta", marks: 46, grade: "A", remarks: "Exceptional speed and reasoning" },
      { studentId: "STU-8A-08", rollNo: 8, name: "Tanvi Kapoor", marks: 43, grade: "A", remarks: "Well structured answers" },
    ]
  },
  "EXAM-PREBOARD-10A": {
    examName: "Pre-Board Mathematics Assessment",
    class: "Class 10 - A",
    maxMarks: 80,
    passingMarks: 27,
    date: "24 Sep 2025",
    status: "Draft",
    entries: [
      { studentId: "STU-10A-01", rollNo: 1, name: "Pranav Aggarwal", marks: 79, grade: "A+", remarks: "Mastery in trigonometry, polynomials, and surface areas" },
      { studentId: "STU-10A-02", rollNo: 2, name: "Sanya Saxena", marks: 76, grade: "A+", remarks: "Well organized step-by-step proofs and diagrams" }
    ]
  }
};

// Communication Messages
export const initialMessages = [
  {
    id: "MSG-01",
    sender: "Mr. Ramanathan (HOD Academics)",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    role: "Academic Head",
    time: "Yesterday, 02:10 PM",
    unread: false,
    subject: "Syllabus Compliance Review for Nursery to 10th",
    content: "Dear Surbhi, please ensure the question papers and blueprint moderation for Nursery to Class 10 assessments are compiled by Friday 4 PM.",
    replies: [
      { sender: "Surbhi Vaidya", time: "Yesterday, 02:45 PM", text: "Sure sir, all question banks across Pre-Primary, Primary, Middle and Secondary stages have been formatted." }
    ]
  },
  {
    id: "MSG-02",
    sender: "Rajesh Sharma (Parent of Aarav)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    role: "Parent - Class 8-A",
    time: "11 Sep 2025, 06:30 PM",
    unread: false,
    subject: "Mathematics Olympiad Guidance",
    content: "Respected Ma'am, Aarav is interested in participating in the upcoming National Science & Math Olympiad. Could you please recommend some practice materials?",
    replies: [
      { sender: "Surbhi Vaidya", time: "12 Sep 2025, 08:15 AM", text: "Dear Mr. Sharma, I have shared the Olympiad training module in the Study Materials section. He can also join the Saturday morning special practice class." }
    ]
  },
  {
    id: "MSG-03",
    sender: "Dr. K. S. Sharma (Principal)",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    role: "Principal",
    time: "10 Sep 2025, 11:00 AM",
    unread: true,
    subject: "Commendation: Outstanding Performance Across All Grade Wings",
    content: "Congratulations Surbhi and faculty team! The curriculum tracking and student assessment across Nursery to Class 10 has achieved 100% compliance in our district quality audit.",
    replies: []
  }
];
