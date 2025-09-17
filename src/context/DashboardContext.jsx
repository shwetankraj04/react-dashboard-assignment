import React, { createContext, useReducer, useEffect } from "react";
import availableWidgetsData from "../data/availableWidgets";
import initialDashboard from "../data/initialDashboard";

export const DashboardContext = createContext();

function findWidgetById(id) {
  const all = Object.values(availableWidgetsData).flat();
  return all.find((w) => w.id === id);
}

function buildInitialState() {
  const categories = initialDashboard.categories.map((cat) => {
    const widgets = (cat.widgets || [])
      .map((id) => findWidgetById(id))
      .filter(Boolean);

    return {
      id: cat.id,
      name: cat.name,
      widgets,
    };
  });

  return {
    categories,
    availableWidgets: availableWidgetsData,
    modal: {
      open: false,
      tab: "cspm",
      categoryId: null,
      selections: {},
    },
    query: "",
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        modal: {
          open: true,
          tab: action.payload.tab,
          categoryId: action.payload.categoryId,
          selections: {},
        },
      };

    case "CLOSE_MODAL":
      return { ...state, modal: { ...state.modal, open: false } };

    case "SET_MODAL_TAB":
      return { ...state, modal: { ...state.modal, tab: action.payload } };

    case "TOGGLE_MODAL_SELECTION":
      return {
        ...state,
        modal: {
          ...state.modal,
          selections: {
            ...state.modal.selections,
            [action.payload]: !state.modal.selections[action.payload],
          },
        },
      };

    case "CONFIRM_MODAL": {
      const { categoryId, selections } = state.modal;
      const widgetsToAdd = Object.keys(selections).filter(
        (id) => selections[id]
      );

      const newCategories = state.categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              widgets: [
                ...cat.widgets,
                ...widgetsToAdd.map((id) => findWidgetById(id)).filter(Boolean),
              ],
            }
          : cat
      );

      return {
        ...state,
        categories: newCategories,
        modal: { ...state.modal, open: false, selections: {} },
      };
    }

    case "REMOVE_WIDGET": {
      const { categoryId, widgetId } = action.payload;
      const newCategories = state.categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              widgets: cat.widgets.filter((w) => w.id !== widgetId),
            }
          : cat
      );
      return { ...state, categories: newCategories };
    }

    case "CREATE_WIDGET": {
      const { categoryId, name, text } = action.payload;
      const newId = `${categoryId}-${Date.now()}`;
      const newWidget = { id: newId, name, text };

      // update available widgets
      const availableWidgets = {
        ...state.availableWidgets,
        [categoryId]: [
          ...(state.availableWidgets[categoryId] || []),
          newWidget,
        ],
      };

      // add widget into that category immediately
      const categories = state.categories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, widgets: [...cat.widgets, newWidget] }
          : cat
      );

      return { ...state, categories, availableWidgets };
    }

    case "SET_QUERY":
      return { ...state, query: action.payload };

    case "RESET_DASHBOARD":
      return buildInitialState();

    default:
      return state;
  }
}

export function DashboardProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, () => {
    const saved = localStorage.getItem("dashboardState");
    return saved ? JSON.parse(saved) : buildInitialState();
  });

  useEffect(() => {
    localStorage.setItem("dashboardState", JSON.stringify(state));
  }, [state]);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
}
