import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <div className="lg:flex items-center gap-6">
        <li className=""><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/update_profile">Update Profile</NavLink></li>
    </div>

    return (
      <div className="navbar px-3 md:px-6 lg:px-12 py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
            >
              {links}
            </ul>
          </div>
          <a className="text-2xl font-bold">Nature's Playground</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px- gap-6 text-base ">{links}</ul>
        </div>
        <div className="navbar-end gap-6">
          <NavLink className="px-6 py-2 rounded-lg" to="/my_profile">
            My Profile
          </NavLink>
          <Link className="py-2 px-6 rounded-lg bg-[#0fac9f] text-white cursor-pointer font-semibold hover:bg-[#0c8d82]">
            Login
          </Link>
        </div>
      </div>
    );
};

export default Navbar;