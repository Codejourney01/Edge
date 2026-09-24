import Navbar from "@/components/Navbar";
import Home from "@/Page/Home";
import Login from "@/Page/Login";
import Register from "@/Page/Register";
import { Outlet, Route, Routes } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
