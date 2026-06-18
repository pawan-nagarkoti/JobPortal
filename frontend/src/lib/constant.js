export const countries = [
  { code: "in", name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { code: "us", name: "United States", flag: "https://flagcdn.com/w40/us.png" },
  {
    code: "gb",
    name: "United Kingdom",
    flag: "https://flagcdn.com/w40/gb.png",
  },
  { code: "ca", name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
  { code: "au", name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
  { code: "de", name: "Germany", flag: "https://flagcdn.com/w40/de.png" },
  { code: "fr", name: "France", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "jp", name: "Japan", flag: "https://flagcdn.com/w40/jp.png" },
  { code: "cn", name: "China", flag: "https://flagcdn.com/w40/cn.png" },
  { code: "br", name: "Brazil", flag: "https://flagcdn.com/w40/br.png" },
  { code: "za", name: "South Africa", flag: "https://flagcdn.com/w40/za.png" },
  { code: "mx", name: "Mexico", flag: "https://flagcdn.com/w40/mx.png" },
  { code: "ru", name: "Russia", flag: "https://flagcdn.com/w40/ru.png" },
  { code: "it", name: "Italy", flag: "https://flagcdn.com/w40/it.png" },
  { code: "es", name: "Spain", flag: "https://flagcdn.com/w40/es.png" },
  {
    code: "ae",
    name: "United Arab Emirates",
    flag: "https://flagcdn.com/w40/ae.png",
  },
  { code: "sg", name: "Singapore", flag: "https://flagcdn.com/w40/sg.png" },
  { code: "kr", name: "South Korea", flag: "https://flagcdn.com/w40/kr.png" },
  { code: "sa", name: "Saudi Arabia", flag: "https://flagcdn.com/w40/sa.png" },
  { code: "ng", name: "Nigeria", flag: "https://flagcdn.com/w40/ng.png" },
];

export const jobsObj = [
  {
    title: "Senior UX Designer",
    company: "Google Inc.",
    type: "Full-Time",
    salary: "$20k-25k",
    location: "San Francisco, CA",
    posted: "2 days ago",
    icon: "fab fa-google",
  },
  {
    title: "Frontend Developer",
    company: "Microsoft",
    type: "Full-Time",
    salary: "$30k-35k",
    location: "Seattle, WA",
    posted: "1 day ago",
    icon: "fab fa-microsoft",
  },
  {
    title: "Product Manager",
    company: "Amazon",
    type: "Full-Time",
    salary: "$40k-50k",
    location: "New York, NY",
    posted: "3 days ago",
    icon: "fab fa-amazon",
  },
  {
    title: "Data Scientist",
    company: "Facebook",
    type: "Full-Time",
    salary: "$35k-40k",
    location: "Austin, TX",
    posted: "1 week ago",
    icon: "fab fa-facebook",
  },
  {
    title: "Marketing Manager",
    company: "Apple Inc.",
    type: "Part-Time",
    salary: "$25k-30k",
    location: "Los Angeles, CA",
    posted: "5 days ago",
    icon: "fab fa-apple",
  },
  {
    title: "Backend Developer",
    company: "Tesla",
    type: "Full-Time",
    salary: "$35k-45k",
    location: "Palo Alto, CA",
    posted: "4 days ago",
    icon: "fas fa-bolt",
  },
];

export const apiUrl = import.meta.env.VITE_API_BASE_URL;
export const editorToken = import.meta.env.VITE_EDITOR_KEY;

export const organizationTypes = [
  { id: 1, name: "Software Development" },
  { id: 2, name: "IT Consulting" },
  { id: 3, name: "Managed Services Provider (MSP)" },
  { id: 4, name: "Cloud Services" },
  { id: 5, name: "Cybersecurity Services" },
  { id: 6, name: "Data Analytics and AI" },
  { id: 7, name: "IT Infrastructure" },
  { id: 8, name: "E-commerce" },
  { id: 9, name: "Telecommunications" },
  { id: 10, name: "Software as a Service (SaaS)" },
];

export const industryTypes = [
  { id: 1, name: "Agriculture" },
  { id: 2, name: "Manufacturing" },
  { id: 3, name: "Construction" },
  { id: 4, name: "Transportation" },
  { id: 5, name: "Information Technology" },
  { id: 6, name: "Healthcare" },
  { id: 7, name: "Finance" },
  { id: 8, name: "Retail" },
  { id: 9, name: "Education" },
  { id: 10, name: "Hospitality" },
];

export const teamSizeList = [
  { id: 1, name: "1-3 members" },
  { id: 2, name: "4-6 members" },
  { id: 3, name: "7-9 members" },
  { id: 4, name: "10-15 members" },
  { id: 5, name: "16-20 members" },
  { id: 6, name: "21-50 members" },
  { id: 7, name: "51-100 members" },
  { id: 8, name: "100+ members" },
];

export const JOB_ROLES_LIST = [
  {
    id: "1",
    key: "FULL_STACK_DEVELOPER",
    name: "Full Stack Developer",
    category: "DEVELOPMENT",
  },
  {
    id: "2",
    key: "FRONTEND_DEVELOPER",
    name: "Frontend Developer",
    category: "DEVELOPMENT",
  },
  {
    id: "3",
    key: "BACKEND_DEVELOPER",
    name: "Backend Developer",
    category: "DEVELOPMENT",
  },
  {
    id: "4",
    key: "REACT_DEVELOPER",
    name: "React Developer",
    category: "DEVELOPMENT",
  },
  {
    id: "5",
    key: "NODE_JS_DEVELOPER",
    name: "Node.js Developer",
    category: "DEVELOPMENT",
  },
  {
    id: "6",
    key: "MERN_STACK_DEVELOPER",
    name: "MERN Stack Developer",
    category: "DEVELOPMENT",
  },
  {
    id: "7",
    key: "JAVASCRIPT_DEVELOPER",
    name: "JavaScript Developer",
    category: "DEVELOPMENT",
  },
  {
    id: "8",
    key: "SOFTWARE_ENGINEER",
    name: "Software Engineer",
    category: "DEVELOPMENT",
  },
  {
    id: "9",
    key: "PROJECT_MANAGER",
    name: "Project Manager",
    category: "MANAGEMENT",
  },
  {
    id: "10",
    key: "PRODUCT_MANAGER",
    name: "Product Manager",
    category: "MANAGEMENT",
  },
  {
    id: "11",
    key: "UI_UX_DESIGNER",
    name: "UI/UX Designer",
    category: "DESIGN",
  },
  {
    id: "12",
    key: "QA_ENGINEER",
    name: "QA Engineer",
    category: "QA_TESTING",
  },
  {
    id: "13",
    key: "DEVOPS_ENGINEER",
    name: "DevOps Engineer",
    category: "SUPPORT",
  },
  {
    id: "14",
    key: "DATA_ANALYST",
    name: "Data Analyst",
    category: "DATA_ANALYTICS",
  },
  { id: "15", key: "INTERN", name: "Intern", category: "OTHER" },
  { id: "16", key: "FRESHER", name: "Fresher", category: "OTHER" },
];

export const salaryPeriod = [
  {
    id: "1",
    key: "hourly",
    name: "Hourly",
    label: "₹/hour",
  },
  {
    id: "2",
    key: "monthly",
    name: "Monthly",
    label: "₹/month",
  },
  {
    id: "3",
    key: "yearly",
    name: "Yearly",
    label: "₹/year (LPA)",
  },
];

export const EDUCATION_LEVELS = [
  {
    id: "1",
    key: "none",
    name: "No Formal Education",
  },
  {
    id: "2",
    key: "high_school",
    name: "High School",
  },
  {
    id: "3",
    key: "undergraduate",
    name: "Undergraduate/Bachelor's",
  },
  {
    id: "4",
    key: "masters",
    name: "Master's Degree",
  },
  {
    id: "5",
    key: "phd",
    name: "PhD/Doctorate",
  },
];

export const EXPERIENCE_LEVELS = [
  {
    id: "1",
    key: "fresher",
    name: "Fresher (0 years)",
  },
  {
    id: "2",
    key: "0-1",
    name: "0-1 Year",
  },
  {
    id: "3",
    key: "1-2",
    name: "1-2 Years",
  },
  {
    id: "4",
    key: "2-3",
    name: "2-3 Years",
  },
  {
    id: "5",
    key: "3-5",
    name: "3-5 Years",
  },
  {
    id: "6",
    key: "5-8",
    name: "5-8 Years",
  },
  {
    id: "7",
    key: "8+",
    name: "8+ Years",
  },
];

export const JOB_TYPES = [
  {
    id: "1",
    key: "remote",
    name: "remote",
  },
  {
    id: "2",
    key: "hybrid",
    name: "hybrid",
  },
  {
    id: "3",
    key: "on-site",
    name: "on-site",
  },
];

export const JOB_LEVELS = [
  {
    id: "1",
    key: "INTERNSHIP",
    name: "Internship",
  },
  {
    id: "2",
    key: "ENTRY_LEVEL",
    name: "Entry Level",
  },
  {
    id: "3",
    key: "JUNIOR",
    name: "Junior",
  },
  {
    id: "4",
    key: "MID_LEVEL",
    name: "Mid Level",
  },
  {
    id: "5",
    key: "SENIOR_LEVEL",
    name: "Senior Level",
  },
  {
    id: "6",
    key: "LEAD",
    name: "Lead",
  },
  {
    id: "7",
    key: "MANAGER",
    name: "Manager",
  },
  {
    id: "8",
    key: "DIRECTOR",
    name: "Director",
  },
  {
    id: "9",
    key: "EXECUTIVE",
    name: "Executive",
  },
];

export const COUNTRIES = [
  { id: "1", key: "IN", name: "India" },
  { id: "2", key: "US", name: "United States" },
  { id: "3", key: "GB", name: "United Kingdom" },
  { id: "4", key: "CA", name: "Canada" },
  { id: "5", key: "AU", name: "Australia" },
  { id: "6", key: "DE", name: "Germany" },
  { id: "7", key: "FR", name: "France" },
  { id: "8", key: "SG", name: "Singapore" },
  { id: "9", key: "AE", name: "United Arab Emirates" },
  { id: "10", key: "NL", name: "Netherlands" },
  { id: "11", key: "JP", name: "Japan" },
  { id: "12", key: "CN", name: "China" },
  { id: "13", key: "IT", name: "Italy" },
  { id: "14", key: "ES", name: "Spain" },
  { id: "15", key: "BR", name: "Brazil" },
];

export const INDIA_CITIES = [
  { id: "1", key: "bangalore", name: "Bangalore" },
  { id: "2", key: "hyderabad", name: "Hyderabad" },
  { id: "3", key: "mumbai", name: "Mumbai" },
  { id: "4", key: "pune", name: "Pune" },
  { id: "5", key: "chennai", name: "Chennai" },
  { id: "6", key: "delhi", name: "Delhi" },
  { id: "7", key: "noida", name: "Noida" },
  { id: "8", key: "gurgaon", name: "Gurgaon" },
  { id: "9", key: "ahmedabad", name: "Ahmedabad" },
  { id: "10", key: "kolkata", name: "Kolkata" },
  { id: "11", key: "coimbatore", name: "Coimbatore" },
  { id: "12", key: "kochi", name: "Kochi" },
  { id: "13", key: "chandigarh", name: "Chandigarh" },
  { id: "14", key: "jaipur", name: "Jaipur" },
  { id: "15", key: "indore", name: "Indore" },
  { id: "16", key: "lucknow", name: "Lucknow" },
  { id: "17", key: "kanpur", name: "Kanpur" },
  { id: "18", key: "nagpur", name: "Nagpur" },
  { id: "19", key: "vadodara", name: "Vadodara" },
  { id: "20", key: "visakhapatnam", name: "Visakhapatnam" },
  { id: "21", key: "bhopal", name: "Bhopal" },
  { id: "22", key: "bhuvneshwar", name: "Bhuvneshwar" },
  { id: "23", key: "surat", name: "Surat" },
  { id: "24", key: "ramnagar", name: "Rāmnagar" },
];

export const JOB_BENEFITS = [
  { id: "1", key: "HEALTH_INSURANCE", name: "Health Insurance" },
  { id: "2", key: "DENTAL_INSURANCE", name: "Dental Insurance" },
  { id: "3", key: "LIFE_INSURANCE", name: "Life Insurance" },
  { id: "4", key: "RETIREMENT_PLAN", name: "Retirement Plan (PF)" },
  { id: "5", key: "PAID_LEAVE", name: "Paid Time Off" },
  { id: "6", key: "WORK_FROM_HOME", name: "Work From Home" },
  { id: "7", key: "FLEXIBLE_HOURS", name: "Flexible Hours" },
  { id: "8", key: "GYM_MEMBERSHIP", name: "Gym Membership" },
  { id: "9", key: "FOOD_CANTEEN", name: "Free Meals/Canteen" },
  {
    id: "10",
    key: "TRANSPORTATION",
    name: "Transportation Allowance",
  },
  { id: "11", key: "CHILDCARE", name: "Childcare Support" },
  { id: "12", key: "TRAINING", name: "Professional Training" },
  { id: "13", key: "STOCK_OPTIONS", name: "Stock Options/ESOP" },
  { id: "14", key: "BONUS", name: "Performance Bonus" },
  { id: "15", key: "TEAM_OUTINGS", name: "Team Outings" },
  { id: "16", key: "LAPTOP_PROVIDED", name: "Laptop Provided" },
  {
    id: "17",
    key: "PHONE_REIMBURSEMENT",
    name: "Phone Reimbursement",
  },
  {
    id: "18",
    key: "INTERNET_REIMBURSEMENT",
    name: "Internet Reimbursement",
  },
];

export const WORK_TYPE = [
  { id: "full-time", label: "full-time", value: "full-time" },
  { id: "part-time", label: "part-time", value: "part-time" },
  { id: "contract", label: "contract", value: "contract" },
  { id: "temporary", label: "temporary", value: "temporary" },
  { id: "freelance", label: "freelance", value: "freelance" },
];
