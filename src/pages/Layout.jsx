import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div id="wrap">
      <div className="body-container">
        <Outlet />
      </div>

      <Navbar />
    </div>
  );
};

export default Layout;
