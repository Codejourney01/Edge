import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import DashboardLayout from '../components/layout/Dashboardlayout';
import Dashboard from '@/modules/manager/pages/Dashboard';
import ProjectDetails from '@/modules/manager/pages/ProjectDetails';
import EmployeeDashboard from '@/modules/employee/pages/Dashboard';
import Home from '@/Page/Home';
import Login from '@/Page/Login';
import Register from '@/Page/Register';
import { Outlet, Route, Routes } from 'react-router-dom';

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
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<DashboardLayout />}>
                <Route path="/managerdashboard" element={<Dashboard />} />
                <Route path="/managerdashboard/projects" element={<ProjectDetails />} />
                <Route path="/employeedashboard" element={<EmployeeDashboard />} />
            </Route>
        </Routes>
    );
}