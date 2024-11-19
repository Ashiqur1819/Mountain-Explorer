import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AuthLayout = () => {
    return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-12">
          <Outlet></Outlet>
        </div>
        <div className="mt-24">
          <Footer></Footer>
        </div>
      </div>
    );
};

export default AuthLayout;