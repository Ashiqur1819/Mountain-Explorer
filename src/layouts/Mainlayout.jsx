import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <div className="bg-blue-50">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-7xl mx-auto px-3 md:px-6 lg:px-12">
        <Outlet></Outlet>
      </main>
      <footer className="mt-24">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Mainlayout;
