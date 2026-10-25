// All editable content lives here.

export const C = {
  name: "Usama Arshad",
  linkedin: "https://www.linkedin.com/in/usama-arshad-73451324b/",
  email: "usamawariah03@gmail.com",
  phone: "0424 338 401",
  phoneHref: "tel:+61424338401",
};

export const NAV = [
  ["about", "About"],
  ["skills", "Skills"],
  ["capabilities", "Capabilities"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

export const TOOLS = [
  "Primavera P6", "AutoCAD", "Civil 3D", "Revit", "GIS", "Microsoft Excel",
  "ITPs & inspections", "Quantity take-offs", "Programming & look-aheads",
  "Subcontractor coordination", "WHS & erosion controls",
];

export const SKILLS = [
  ["Planning & programming", ["Primavera P6 baselines", "Look-ahead plans", "Work breakdown structures", "Schedule variance & recovery", "Progress reporting"]],
  ["Site delivery", ["Roadworks & earthworks", "Sewerage & utility installs", "Kerb, gutter & footpath", "Drainage works", "Concrete & asphalt crews"]],
  ["Quality & compliance", ["ITPs & test records", "Site inspections", "Daily diaries", "WHS & toolbox talks", "Erosion & sediment control"]],
  ["Commercial", ["First-principles estimates", "Take-offs & measurement", "RFQs & quote comparison", "Progress claims", "Variation records"]],
  ["Software", ["Oracle Primavera P6", "AutoCAD", "Autodesk Civil 3D", "Autodesk Revit", "GIS", "MS Excel, Word, PowerPoint"]],
];

export const CAPS = [
  ["Site delivery & supervision", "Set-out to completion on council roads, pavements, kerb and gutter, footpaths and drainage."],
  ["Planning & programming", "Baseline programmes, look-aheads and recovery plans that keep subcontractors, plant and materials lined up."],
  ["Quality & inspections", "ITPs, test records and checks against council specifications, approved designs and traffic management plans."],
  ["Quantities & estimating", "Take-offs from drawings and site, and tender rates built from labour, plant, materials and subcontractor pricing."],
  ["Road & pavement design", "Postgraduate depth in pavement analysis and design, road engineering practice and tunnel monitoring."],
  ["Safety & environment", "Inductions, toolbox talks and erosion and sediment controls across active sites."],
];

export const PROJECTS = [
  {
    t: "Citi Housing Kharian", tag: "Residential infrastructure · Pakistan", v: "Approx. AUD 24.75M", label: "Pakistan",
    d: "Housing scheme infrastructure covering roadworks, earthworks, sewerage networks and utility installations. I started as Sub Engineer on site and was promoted to Planning Engineer, building the programme that coordinated grading, roads and utilities.",
    tags: ["Primavera P6", "Roadworks", "Earthworks", "Sewerage", "Utilities"],
    who: "Consultants: Mapalytics Pvt Ltd, City Services Consultant, The Urban Solutions Pvt Ltd",
  },
  {
    t: "Council civil works, Sydney", tag: "Citywide Civil Works · Current role", v: "Ongoing", label: "Sydney",
    d: "Road, pavement, kerb and gutter, footpath and drainage works across Sydney local government areas. I support delivery, inspections, documentation, programming and tender estimating.",
    tags: ["Pavements", "Drainage", "ITPs", "Estimating", "Council specs"],
    who: "Client and council inspections, records and reporting",
  },
  {
    t: "Postgraduate road & tunnel studies", tag: "University of Technology Sydney", v: "3 High Distinctions", label: "UTS",
    d: "High Distinctions in Road Engineering Practice, Pavement Analysis and Design, and Tunnel Investigation and Monitoring, as part of the Master of Engineering (Civil).",
    tags: ["Pavement design", "Road engineering", "Tunnel monitoring"],
    who: "WAM 75.47 · GPA 5.53 / 7",
  },
];

// s / e are month offsets from Jul 2022; lane picks the row of the chart.
export const ROLES = [
  { k: "sub", lane: 0, s: 1, e: 10, l: "Sub Engineer", o: "Citi Housing, Kharian", p: "Aug 2022 – May 2023", b: [
    "Coordinated daily construction of roadworks, earthworks, sewerage networks and utility installations.",
    "Inspected subcontractor work, verified quantities and wrote daily and weekly progress reports.",
    "Worked with survey teams, consultants and utility representatives to clear site issues."] },
  { k: "plan", lane: 0, s: 10, e: 19, l: "Planning Engineer", o: "Citi Housing, Kharian", p: "May 2023 – Feb 2024", b: [
    "Built and maintained baseline programmes, look-ahead plans and work breakdown structures in Primavera P6.",
    "Analysed schedule variances and critical activities, and coordinated recovery plans.",
    "Prepared weekly and monthly progress reports, productivity analyses and management presentations.",
    "Monitored subcontractor performance against approved programmes."] },
  { k: "uts", lane: 1, s: 24, e: 48, l: "Master of Engineering (Civil)", o: "University of Technology Sydney", p: "2024 – 2026 · conferred 22 July 2026", b: [
    "WAM 75.47, GPA 5.53 / 7, AQF Level 9, major in Civil Engineering.",
    "High Distinctions in Road Engineering Practice, Pavement Analysis and Design, and Tunnel Investigation and Monitoring."] },
  { k: "cadet", lane: 2, s: 42, e: 52, l: "Cadet Engineer", o: "Citywide Civil Works, Sydney", p: "Jan 2026 – Present", b: [
    "Support council road, pavement, kerb, footpath and drainage delivery from set-out to completion.",
    "Prepare ITPs, inspection records, daily diaries and progress reports.",
    "Help update programmes and coordinate supervisors, subcontractors and suppliers.",
    "Assist with first-principles estimates, RFQs, progress claims and invoice checks against deliveries."] },
];

export const LANES = ["Citi Housing, Kharian", "UTS, Sydney", "Citywide, Sydney"];
export const YEARS = [["2022", 0], ["2023", 6], ["2024", 18], ["2025", 30], ["2026", 42]];
