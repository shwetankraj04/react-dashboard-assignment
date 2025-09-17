# 📊 React Dashboard – Frontend Trainee Assignment
**🌐 Live Demo: https://dashboard-shwetank.netlify.app/**

## 📌 Project Overview

This project is a **dynamic dashboard application** built as part of a frontend trainee assignment.

It demonstrates my ability to:

- Build a React application from scratch.
- Use **Context API + useReducer** for store management.
- Dynamically render UI using **JSON configuration**.
- Implement features like add/remove widgets, global search, and persistence.
- Integrate **charts with sample data** for a realistic dashboard look.
- Ensure **responsive UI** and smooth user interactions.

The design is inspired by the screenshots provided in the assignment document.

---

## 🛠️ Tech Stack

- **React** (functional components + hooks)
- **Context API + useReducer** (state management)
- **Tailwind CSS** (styling & responsive design)
- **Recharts** (charts & visualizations)
- **LocalStorage** (state persistence across reloads)
- **React Icons** (for UI icons)

---

## ✨ Features Implemented

1. **JSON-driven Dashboard**

   - Dashboard categories and widgets are built from `initialDashboard.js` and `availableWidgets.js`.

2. **Add / Remove Widgets**

   - `+ Add Widget` button opens a modal to add new widgets.
   - Each widget has a ❌ icon to remove it from a category.

3. **Custom Widgets**

   - Users can create a new widget by providing a **name + description**.
   - New widgets appear instantly in the dashboard and are persisted.

4. **Category & Modal Sync**

   - Widgets already present in a category appear **checked & disabled** in the modal.

5. **Search Functionality**

   - Global search filters widgets by name or text across all categories.

6. **Charts & Data Display**

   - CSPM Dashboard → Pie chart, Bar chart.
   - CWPP Dashboard → Namespace Alerts (Bar), Workload Alerts (Line).
   - Registry Scan → Risk Assessment (Scatter), Security Issues (Bar).
   - Each chart is accompanied by a small summary of sample data.

7. **Persistence**

   - Dashboard state is saved in **LocalStorage**, so user changes survive reloads.

8. **Reset & Refresh**

   - Refresh button resets dashboard to its original state (from JSON).
   - "Reset Dashboard" option available in the 3-dots menu.

9. **Responsive UI**

   - Navbar adjusts for mobile/tablet/desktop.
   - Charts resize automatically using `ResponsiveContainer`.
   - Smooth hover, active, and click animations for a polished feel.

---

## 📂 Project Structure (Important Files)

```
src/
 ├── components/
 │    ├── Header.jsx
 │    ├── Dashboard.jsx
 │    ├── Category.jsx
 │    ├── WidgetCard.jsx
 │    └── AddWidgetModal.jsx
 ├── context/
 │    └── DashboardContext.jsx
 ├── data/
 │    ├── initialDashboard.js
 │    └── availableWidgets.js
 ├── App.jsx
 └── main.jsx
```

---

## 🚀 Running the Project Locally

### 1. Clone Repository

```bash
git clone https://github.com/shwetankraj04/react-dashboard-assignment
cd react-dashboard-assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

- App runs at: **[http://localhost:5173/](http://localhost:5173/)**

### 4. Build for Production (optional)

```bash
npm run build
```

> ⚠️ Only required if you want to deploy the app on Netlify/Vercel/etc.

---

## 🧩 Implementation Plan (How I approached it)

1. **Step 1: Setup Project**

   - Initialized React with Vite.
   - Installed Tailwind, Recharts, and React Icons.

2. **Step 2: Data-Driven Structure**

   - Created `initialDashboard.js` (default category setup).
   - Created `availableWidgets.js` (all possible widgets).

3. **Step 3: Context + Reducer**

   - Used `DashboardContext` to manage global state.
   - Implemented actions like `ADD_WIDGET`, `REMOVE_WIDGET`, `CREATE_WIDGET`, `RESET_DASHBOARD`.

4. **Step 4: Core Functionality**

   - Dynamically rendered categories and widgets.
   - Added modal for widget management.
   - Enabled search functionality.

5. **Step 5: Charts Integration**

   - Added Recharts visualizations with dummy/sample data.

6. **Step 6: Persistence**

   - Synced state with LocalStorage.

7. **Step 7: UI Polish & Responsiveness**

   - Added hover/click animations.
   - Made navbar and grid responsive.

---

## ✅ Assignment Requirements Checklist

- [x] JSON-based dynamic dashboard
- [x] Add / Remove widgets
- [x] Custom widget creation (name + text)
- [x] Cross ❌ remove & modal uncheck
- [x] Global search
- [x] Placeholder text in widgets
- [x] Responsive UI & charts
- [x] LocalStorage persistence

---

## 👤 Author

**Shwetank Raj**
📧 [yo.shwetankraj@gmail.com](mailto:yo.shwetankraj@gmail.com)

---
