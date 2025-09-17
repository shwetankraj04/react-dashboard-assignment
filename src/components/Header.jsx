import React, { useContext, useState } from "react";
import { DashboardContext } from "../context/DashboardContext";
import { FiRefreshCcw, FiMoreVertical, FiBell } from "react-icons/fi";

export default function Header() {
  const { state, dispatch } = useContext(DashboardContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top navigation row */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500">
            Home <span className="mx-1">›</span>
            <span className="font-medium text-gray-700 ml-1">Dashboard V2</span>
          </div>

          {/* Search box */}
          <div className="flex-1 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search anything..."
              value={state.query}
              onChange={(e) =>
                dispatch({ type: "SET_QUERY", payload: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md 
                         focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* right placeholder + bell */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <div
              title="placeholder"
              className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-xs text-gray-400"
            >
              ...
            </div>

            <button
              className="p-2 rounded hover:bg-gray-100 hover:shadow-md 
                         hover:scale-105 active:scale-95 
                         transition-transform transition-colors duration-150 ease-out cursor-pointer"
              aria-label="Notifications"
            >
              <FiBell size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-lg sm:text-xl font-semibold">CNAPP Dashboard</h1>

          <div className="flex flex-wrap items-center gap-3 relative">
            <button
              onClick={() =>
                dispatch({
                  type: "OPEN_MODAL",
                  payload: { tab: "cspm", categoryId: "cspm" },
                })
              }
              className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm 
                         hover:bg-blue-700 hover:shadow-md hover:scale-105 
                         active:scale-95 transition-transform transition-colors 
                         duration-150 ease-out cursor-pointer"
            >
              Add Widget +
            </button>

            <button
              onClick={() => dispatch({ type: "REFRESH_DASHBOARD" })}
              className="p-2 rounded hover:bg-gray-100 hover:shadow-md 
                         hover:scale-105 active:scale-95 
                         transition-transform transition-colors duration-150 ease-out cursor-pointer"
              title="Refresh"
            >
              <FiRefreshCcw size={18} />
            </button>

            {/* 3-dots menu */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded hover:bg-gray-100 hover:shadow-md 
                           hover:scale-105 active:scale-95 
                           transition-transform transition-colors duration-150 ease-out cursor-pointer"
                title="More"
              >
                <FiMoreVertical size={18} />
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-10">
                  <button
                    onClick={() => {
                      dispatch({ type: "RESET_DASHBOARD" });
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm 
                               hover:bg-gray-100 active:scale-95 
                               transition-transform duration-150 cursor-pointer"
                  >
                    Reset Dashboard
                  </button>
                </div>
              )}
            </div>

            <select
              value={state.dateRange || "last-2-days"}
              onChange={(e) =>
                dispatch({ type: "SET_DATE_RANGE", payload: e.target.value })
              }
              className="border rounded-md px-2 py-1 text-sm cursor-pointer 
                         hover:shadow-sm transition-all duration-150"
            >
              <option value="last-2-days">Last 2 days</option>
              <option value="last-7-days">Last 7 days</option>
              <option value="last-30-days">Last 30 days</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
