<<<<<<< Updated upstream
import Navbar from "@/components/Navbar";
import Home from "@/Page/Home";
import Login from "@/Page/Login";
import Register from "@/Page/Register";
=======
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Home from "@/Page/Home";
import Login from "@/Page/Login";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <Route path="/register" element={<Register />} />
=======
>>>>>>> Stashed changes
    </Routes>
  );
}

export default AppRoutes;
