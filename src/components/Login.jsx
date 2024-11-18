import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

  const { userLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password")

    userLogin(email, password)
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })

  }

    return (
      <div className="card w-full mx-auto max-w-md shrink-0 shadow-2xl mt-12 border">
        <h2 className="text-2xl font-bold text-center mt-6 text-purple-600">
          Log In Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium">Email:</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium">Password:</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-sm">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="py-2 px-6 text-lg rounded-lg bg-teal-500  text-white cursor-pointer font-semibold hover:bg-teal-600 ">
              Log In
            </button>
          </div>
          <p className="text-center mt-1">
            Haven't any account?{" "}
            <Link to="/signup" className="underline text-purple-600">Sign Up</Link>
          </p>
        </form>
      </div>
    );
};

export default Login;