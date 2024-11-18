import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <div className="lg:flex items-center gap-6">
        <li className=""><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/my_profile">My Profile</NavLink></li>
        <li><NavLink to="/update_profile">Update Profile</NavLink></li>
    </div>

    return (
      <div className="navbar px-3 md:px-6 lg:px-12 py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
          <a className="text-lg md:text-xl font-bold">Mountain Explorer</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px- gap-6 text-base ">{links}</ul>
        </div>
        <div className="navbar-end">
          <NavLink className="px-6 py-2 rounded-lg">My Profile</NavLink>
          <button>
            <Link
              to="/login"
              className="py-2 px-6 text-lg rounded-lg bg-teal-500 text-white cursor-pointer font-semibold hover:bg-teal-600"
            >
              Log In
            </Link>
          </button>
        </div>
      </div>
    );
};

export default Navbar;