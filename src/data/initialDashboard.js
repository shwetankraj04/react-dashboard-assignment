// src/data/initialDashboard.js

// which widgets are initially added to which dashboard categories
const initialDashboard = {
  categories: [
    {
      id: "cspm",
      name: "CSPM Executive Dashboard",
      widgets: ["cspm-1", "cspm-2"],
    },
    // added workload alerts (cwpp-2) here so it appears initially
    { id: "cwpp", name: "CWPP Dashboard", widgets: ["cwpp-1", "cwpp-2"] },
    { id: "image", name: "Registry Scan", widgets: ["img-1", "img-2"] },
  ],
};

export default initialDashboard;
