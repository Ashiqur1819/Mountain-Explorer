import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Mainlayout = () => {
    return (
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <main className="max-w-7xl mx-auto px-3 md:px-6 lg:px-12">
          <Outlet></Outlet>
        </main>
      </div>
    );
};

export default Mainlayout;