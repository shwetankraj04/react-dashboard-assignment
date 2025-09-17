import React, { useContext, useState } from "react";
import { DashboardContext } from "../context/DashboardContext";
import { FiX } from "react-icons/fi";

const tabs = [
  { id: "cspm", label: "CSPM" },
  { id: "cwpp", label: "CWPP" },
  { id: "image", label: "Image" },
  { id: "ticket", label: "Ticket" },
];

export default function AddWidgetModal() {
  const { state, dispatch } = useContext(DashboardContext);
  const { modal, availableWidgets } = state;

  const list = availableWidgets[modal.tab] || [];

  // form state for custom widget
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");

  const handleAddCustom = () => {
    if (!newName.trim() || !newText.trim()) return;
    dispatch({
      type: "CREATE_WIDGET",
      payload: {
        categoryId: modal.categoryId,
        name: newName,
        text: newText,
      },
    });
    setNewName("");
    setNewText("");
  };

  // check if widget is already in the category
  const isInCategory = (widgetId) =>
    state.categories
      .find((c) => c.id === modal.categoryId)
      ?.widgets.some((cw) => cw.id === widgetId);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* overlay */}
      <div
        className="flex-1 bg-black/30 cursor-pointer"
        onClick={() => dispatch({ type: "CLOSE_MODAL" })}
      />

      {/* right-side drawer */}
      <div className="w-[380px] bg-white shadow-xl h-full flex flex-col animate-slideIn">
        {/* header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Add Widget</h2>
          <button
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
            className="text-gray-500 hover:text-gray-700 hover:scale-110 
                       active:scale-95 transition-transform duration-150 cursor-pointer"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* tabs */}
        <div className="flex border-b">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => dispatch({ type: "SET_MODAL_TAB", payload: t.id })}
              className={`flex-1 py-2 text-sm font-medium transition-colors duration-150 cursor-pointer ${
                modal.tab === t.id
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* widget checkbox list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {list.map((w) => {
            const alreadyInCategory = isInCategory(w.id);
            return (
              <label
                key={w.id}
                className="flex items-center justify-between border rounded p-2 
                           hover:bg-gray-50 cursor-pointer transition-colors duration-150"
              >
                <div>
                  <div className="font-medium text-sm">{w.name}</div>
                  <div className="text-xs text-gray-500">{w.text}</div>
                </div>
                <input
                  type="checkbox"
                  checked={modal.selections[w.id] || alreadyInCategory || false}
                  disabled={alreadyInCategory}
                  onChange={() =>
                    dispatch({
                      type: "TOGGLE_MODAL_SELECTION",
                      payload: w.id,
                    })
                  }
                  className={`cursor-pointer ${
                    alreadyInCategory ? "cursor-not-allowed" : ""
                  }`}
                />
              </label>
            );
          })}

          {list.length === 0 && (
            <p className="text-sm text-gray-400">No widgets available</p>
          )}
        </div>

        {/* custom widget form */}
        <div className="p-4 border-t space-y-2">
          <input
            type="text"
            placeholder="Widget name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full border rounded px-2 py-1 text-sm"
          />
          <textarea
            placeholder="Widget text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="w-full border rounded px-2 py-1 text-sm"
            rows={2}
          />
          <button
            onClick={handleAddCustom}
            className="w-full bg-green-600 text-white py-1.5 rounded text-sm 
                       hover:bg-green-700 hover:shadow-md hover:scale-105 
                       active:scale-95 transition-all duration-150 cursor-pointer"
          >
            + Add Custom Widget
          </button>
        </div>

        {/* footer */}
        <div className="p-4 border-t flex justify-end gap-3">
          <button
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
            className="px-4 py-2 border rounded text-sm 
                       hover:bg-gray-100 hover:shadow-sm active:scale-95 
                       transition-all duration-150 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => dispatch({ type: "CONFIRM_MODAL" })}
            className="px-4 py-2 bg-blue-600 text-white rounded text-sm 
                       hover:bg-blue-700 hover:shadow-md hover:scale-105 
                       active:scale-95 transition-all duration-150 cursor-pointer"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
