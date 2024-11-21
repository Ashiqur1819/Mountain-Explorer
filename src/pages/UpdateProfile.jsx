import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { updateUserProfile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const photo = formData.get("photo_url");

    updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
      navigate("/my_profile");
      setUser((prev) => ({ ...prev, displayName: name, photoURL: photo }));
    });
  };
  return (
    <div className="card w-full mx-auto max-w-md shrink-0 shadow-2xl mt-12 border bg-white">
      <h2 className="text-3xl font-bold text-center mt-6 text-teal-500">
        Update Your Profile
      </h2>
      <form onSubmit={handleUpdateProfile} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">Name:</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">Photo URL:</span>
          </label>
          <input
            type="text"
            name="photo_url"
            placeholder="Enter your photo url"
            className="input input-bordered"
          />
        </div>

        <div className="form-control mt-6">
          <button className="py-2 px-6 text-lg rounded-lg bg-purple-700  text-white cursor-pointer font-semibold hover:bg-purple-600 ">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
