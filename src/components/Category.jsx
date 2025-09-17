import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import WidgetCard from "./WidgetCard";

export default function Category({ category }) {
  const { state, dispatch } = useContext(DashboardContext);

  const q = state.query.toLowerCase();

  const filteredWidgets = category.widgets.filter(
    (w) => w.name.toLowerCase().includes(q) || w.text.toLowerCase().includes(q)
  );

  return (
    <div className="mb-8">
      {/* Category header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{category.name}</h2>
        <button
          onClick={() =>
            dispatch({
              type: "OPEN_MODAL",
              payload: { tab: category.id, categoryId: category.id },
            })
          }
          className="text-blue-600 text-sm hover:underline hover:scale-105 
                     active:scale-95 transition-transform duration-150 cursor-pointer"
        >
          + Add Widget
        </button>
      </div>

      {/* Widgets */}
      {filteredWidgets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWidgets.map((w) => (
            <WidgetCard key={w.id} widget={w} categoryId={category.id} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400">No matching widgets</p>
      )}
    </div>
  );
}
