import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import { FiX } from "react-icons/fi";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  ResponsiveContainer,
} from "recharts";

export default function WidgetCard({ widget, categoryId }) {
  const { dispatch } = useContext(DashboardContext);

  // sample dummy data
  const pieData = [
    { name: "Connected", value: 70 },
    { name: "Not Connected", value: 30 },
  ];
  const barData = [
    { name: "Critical", value: 4 },
    { name: "High", value: 8 },
    { name: "Medium", value: 12 },
  ];
  const lineData = [
    { day: "Mon", alerts: 4 },
    { day: "Tue", alerts: 6 },
    { day: "Wed", alerts: 3 },
    { day: "Thu", alerts: 8 },
  ];
  const scatterData = [
    { x: 5, y: 7, z: 20 },
    { x: 15, y: 12, z: 40 },
    { x: 25, y: 18, z: 60 },
    { x: 30, y: 25, z: 80 },
  ];
  const issuesData = [
    { name: "Critical", value: 10 },
    { name: "High", value: 20 },
    { name: "Medium", value: 15 },
    { name: "Low", value: 8 },
  ];
  const namespaceData = [
    { name: "Namespace A", alerts: 12 },
    { name: "Namespace B", alerts: 8 },
    { name: "Namespace C", alerts: 15 },
    { name: "Namespace D", alerts: 6 },
    { name: "Namespace E", alerts: 10 },
  ];

  const COLORS = ["#4CAF50", "#F44336", "#3B82F6", "#F59E0B"];

  const renderChart = () => {
    switch (widget.id) {
      case "cspm-1": // Cloud Accounts → Pie
        return (
          <div className="flex items-center gap-4">
            <ResponsiveContainer width="50%" height={180}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  label
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="text-sm flex-1">
              <p>
                Connected: <span className="font-semibold">70</span>
              </p>
              <p>
                Not Connected: <span className="font-semibold">30</span>
              </p>
            </div>
          </div>
        );

      case "cspm-2": // Risk Assessment → Bar
        return (
          <div className="flex items-center gap-4">
            <ResponsiveContainer width="60%" height={180}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-sm flex-1">
              {barData.map((d) => (
                <p key={d.name}>
                  {d.name}: <span className="font-semibold">{d.value}</span>
                </p>
              ))}
            </div>
          </div>
        );

      case "cwpp-1": // Namespace Alerts → Bar
        return (
          <div className="flex items-center gap-4">
            <ResponsiveContainer width="60%" height={180}>
              <BarChart data={namespaceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="alerts" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-sm flex-1">
              {namespaceData.map((d) => (
                <p key={d.name}>
                  {d.name}: <span className="font-semibold">{d.alerts}</span>
                </p>
              ))}
            </div>
          </div>
        );

      case "cwpp-2": // Workload Alerts → Line
        return (
          <div className="flex items-center gap-4">
            <ResponsiveContainer width="60%" height={180}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="alerts" stroke="#EF4444" />
              </LineChart>
            </ResponsiveContainer>
            <div className="text-sm flex-1">
              {lineData.map((d) => (
                <p key={d.day}>
                  {d.day}: <span className="font-semibold">{d.alerts}</span>
                </p>
              ))}
            </div>
          </div>
        );

      case "img-1": // Image Risk Assessment → Scatter
        return (
          <div className="flex items-center gap-4">
            <ResponsiveContainer width="60%" height={180}>
              <ScatterChart>
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="Risk" />
                <YAxis type="number" dataKey="y" name="Count" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter name="Images" data={scatterData} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
            <div className="text-sm flex-1">
              <p>Low: 1</p>
              <p>Medium: 1</p>
              <p>High: 1</p>
              <p>Critical: 1</p>
            </div>
          </div>
        );

      case "img-2": // Security Issues → Bar
        return (
          <div className="flex items-center gap-4">
            <ResponsiveContainer width="60%" height={180}>
              <BarChart data={issuesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#F59E0B" />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-sm flex-1">
              {issuesData.map((d) => (
                <p key={d.name}>
                  {d.name}: <span className="font-semibold">{d.value}</span>
                </p>
              ))}
            </div>
          </div>
        );

      default:
        return <p className="text-sm text-gray-600">{widget.text}</p>;
    }
  };

  return (
    <div
      className="relative bg-white border rounded-lg p-4 shadow-sm 
                 hover:shadow-md hover:-translate-y-1 
                 transition-transform transition-shadow duration-200"
    >
      {/* remove button */}
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_WIDGET",
            payload: { categoryId, widgetId: widget.id },
          })
        }
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 
                   hover:scale-110 active:scale-95 
                   transition-transform duration-150 cursor-pointer"
      >
        <FiX size={16} />
      </button>

      <h3 className="font-medium mb-2">{widget.name}</h3>
      {renderChart()}
    </div>
  );
}
