import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import Category from "./Category";
import AddWidgetModal from "./AddWidgetModal";

export default function Dashboard() {
  const { state } = useContext(DashboardContext);

  return (
    <div className="space-y-10">
      {state.categories.map((cat) => (
        <Category key={cat.id} category={cat} />
      ))}

      {/* Right-side modal */}
      {state.modal.open && <AddWidgetModal />}
    </div>
  );
}
