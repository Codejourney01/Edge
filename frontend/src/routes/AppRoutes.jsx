import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DashboardLayout from "../components/layout/Dashboardlayout";
import Dashboard from "@/modules/manager/pages/Dashboard";
import EmployeeDashboard from "@/modules/employee/pages/Dashboard";
import Home from "@/Page/Home";
import Login from "@/Page/Login";
import Register from "@/Page/Register";
import { Outlet, Route, Routes } from "react-router-dom";

function PublicLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public website */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard with shared navbar and sidebar */}
      <Route element={<DashboardLayout />}>
        <Route
          path="/managerdashboard"
          element={<Dashboard />}
        />
      </Route>



      <Route element={<DashboardLayout />}>
        <Route
          path="/employeedashboard"
          element={<EmployeeDashboard/>}
        />
      </Route>

      
    </Routes>
  );
}