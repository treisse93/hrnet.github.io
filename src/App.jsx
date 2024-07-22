import "./App.css";
import CreateEmployeePage from "./pages/createEmployeePage/createEmployeePage.jsx";
import ViewCurrentEmployeesPage from "./pages/viewCurrentEmployeesPage/viewCurrentEmployeesPage.jsx";
import { Navigate, Routes, Route } from "react-router-dom";
import Layout from "./pages/components/layout.jsx";
import ErrorPage from "./pages/errorPage/errorPage.jsx";

function App() {
  return (
    <Routes>
      {/* Route configuration starts here */}
      <Route path="/" element={<Layout />}>
        {/* Default index route, renders CreateEmployeePage */}
        <Route index element={<CreateEmployeePage />} />

        {/* Route for showing the employees, renders ViewCurrentEmployeesPage */}
        <Route
          path="/ViewCurrentEmployeesPage"
          element={<ViewCurrentEmployeesPage />}
        />

        {/* Route for displaying error page */}
        <Route path="/error404" element={<ErrorPage />} />

        {/* Catch-all route, redirects to the error page */}
        <Route path="*" element={<Navigate to="/error404" />} />
      </Route>
    </Routes>
  );
}

export default App;
