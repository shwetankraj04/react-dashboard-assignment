import React from "react";
import { DashboardProvider } from "./context/DashboardContext";

// components to implement next
// Header - breadcrumb + search + controls
// Dashboard - categories + cards grid
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <DashboardProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto p-6">
          <Dashboard />
        </main>
      </div>
    </DashboardProvider>
  );
}
