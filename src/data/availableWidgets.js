// master list of possible widgets (grouped by tab/category)
const availableWidgets = {
  cspm: [
    {
      id: "cspm-1",
      name: "Cloud Accounts",
      text: "Connected / Not connected chart placeholder",
    },
    {
      id: "cspm-2",
      name: "Cloud Account Risk Assessment",
      text: "Risk assessment placeholder",
    },
    { id: "cspm-3", name: "CSPM - Quick Summary", text: "Quick summary text" },
  ],
  cwpp: [
    {
      id: "cwpp-1",
      name: "Top 5 Namespace Specific Alerts",
      text: "No Graph data available!",
    },
    {
      id: "cwpp-2",
      name: "Workload Alerts",
      text: "Workload alerts placeholder",
    },
  ],
  image: [
    {
      id: "img-1",
      name: "Image Risk Assessment",
      text: "Image risk summary...",
    },
    {
      id: "img-2",
      name: "Image Security Issues",
      text: "Security issues summary...",
    },
  ],
  ticket: [{ id: "t-1", name: "Open Tickets", text: "Open ticket summary..." }],
};

export default availableWidgets;
