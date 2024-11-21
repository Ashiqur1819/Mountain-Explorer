import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";


const Login = () => {

  const { userLogin, loginWithGoogle, setUser, email, setEmail } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (password.length < 6) {
      toast.warning("Password must be at least 6 characters long!");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.warning("Password must contain at least one uppercase letter!");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.warning("Password must contain at least one lowercase letter!");
      return;
    }

      userLogin(email, password)
        .then((result) => {
          setUser(result.user)
          toast.success(` Login successful! Welcome back!`, {
            position: "top-left",
          });
          navigate(location?.state ? location.state : "/")
        })
        .catch(() => {
         toast.error("Invalid login credentials. Please try again.", {
           position: "top-left",
         });
        });

  }

     const handleLoginwithGoogle = () => {
       loginWithGoogle()
         .then((result) => {
           setUser(result.user)
                   toast.success(`Google login successful!`, {
                     position: "top-left",
                   });
            navigate(location?.state ? location.state : "/");
         })
         .catch(() => {
           toast.error("Google login failed! Please try again.", {
             position: "top-left",
           });
         });
     };


    return (
      <div className="card w-full mx-auto max-w-md shrink-0 shadow-2xl mt-12 border">
        <h2 className="text-3xl font-bold text-center mt-6 text-teal-500">
          Log In Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body px-8 py-0 mt-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium">Email:</span>
            </label>
            <input
              type="email"
              name="email"
              
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-base font-medium">
                Password:
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <button type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[57px]"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
            <label className="label">
              <Link
                to="/forget_password"
                href="#"
                className="label-text-alt link link-hover text-sm"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="py-2 px-6 text-lg rounded-lg bg-purple-700  text-white cursor-pointer font-semibold hover:bg-purple-600 ">
              Log In
            </button>
          </div>
        </form>
        <div className="px-8">
          <h4 className="text-center text-lg my-2 font-medium">Or</h4>
          <button
            onClick={handleLoginwithGoogle}
            className="py-2 px-6 w-full text-lg rounded-lg border border-purple-600  text-purple-700 cursor-pointer font-medium hover:bg-base-200"
          >
            <div className="flex items-center justify-center gap-3">
              <FaGoogle></FaGoogle>
              <span>Log In with Google</span>
            </div>
          </button>
        </div>
        <p className="text-center mt-3 mb-6">
          Haven't any account?{" "}
          <Link to="/signup" className="underline font-medium text-teal-500">
            Sign Up
          </Link>
        </p>
      </div>
    );
};

export default Login;