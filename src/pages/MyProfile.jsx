import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";


const MyProfile = () => {
    const {user} = useContext(AuthContext)
    return (
      <div className="max-w-2xl mx-auto  p-12 rounded-lg shadow-lg mt-12 bg-gray-100">
        <div className="flex items-center gap-6">
          <figure>
            <img src={user?.photoURL} className="rounded-full" alt="" />
          </figure>
          <h2 className="text-4xl font-bold">
            Welcome <br />
            <span className="text-purple-700">{user?.displayName}</span>
          </h2>
        </div>
        <form className="mt-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-medium text-teal-600">
                Name:
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder={user?.displayName}
              className="input focus:outline-offset-0 focus:outline-0 input-bordered placeholder:text-gray-700 font-medium"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-medium text-teal-600">
                Photo URL:
              </span>
            </label>
            <input
              type="text"
              name="photo_url"
              placeholder={user?.photoURL}
              className="input focus:outline-offset-0 focus:outline-0 input-bordered placeholder:text-gray-700 font-medium"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-medium text-teal-600">
                Email:
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder={user?.email}
              className="input focus:outline-offset-0 focus:outline-0 input-bordered placeholder:text-gray-700 font-medium"
              readOnly
            />
          </div>
          <div className="form-control mt-6">
            <button className="py-2 px-6 text-lg rounded-lg bg-purple-700 text-white cursor-pointer font-semibold hover:bg-purple-600 ">
              <Link to="/update_profile"> Update Your Profile</Link>
            </button>
          </div>
        </form>
      </div>
    );
};

export default MyProfile;