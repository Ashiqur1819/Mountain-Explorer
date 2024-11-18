import { FaFacebook, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
      <footer className="bg-neutral">
        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-12">
          <div className="footer text-neutral-content p-10">
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Guided Trekking Tours</a>
              <a className="link link-hover">Custom Trekking Packages</a>
              <a className="link link-hover">Camping Gear Rentals</a>
              <a className="link link-hover">Adventure Activities</a>
              <a className="link link-hover">Wildlife and Nature Tours</a>
              <a className="link link-hover">Corporate and Group Treks</a>
            </nav>
            <nav>
              <h6 className="footer-title">Quick Links</h6>
              <Link to="/" className="link link-hover">
                Home
              </Link>
              <Link to="/my_profile" className="link link-hover">
                My Profile
              </Link>
              <Link to="/update_profile" className="link link-hover">
                Update Profile
              </Link>
              <Link to="/login" className="link link-hover">
                Log In
              </Link>
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </div>
        </div>
        <nav>
          <div className="flex items-center gap-6 justify-center text-gray-300 py-3">
            <a
              className="text-2xl"
              href="https://www.facebook.com/Aashiq1819"
              target="_blank"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              className="text-2xl"
              href="https://www.instagram.com/aashiq_1918/"
            >
              <FaInstagramSquare></FaInstagramSquare>
            </a>
            <a className="text-2xl" href="https://github.com/Ashiqur1819">
              <FaGithub></FaGithub>
            </a>
          </div>
        </nav>
      </footer>
    );
};

export default Footer;