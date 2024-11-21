import { useContext, useRef } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const { email, forgetPassword } = useContext(AuthContext);
  const emailRef = useRef();
  const navigate = useNavigate();

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Please provide a valid email address!");
    } else {
      forgetPassword(email)
        .then(() => {
          navigate("/login");
          toast.success("Password reset link sent to your email!");
          window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
        })
        .catch(() => {
          toast.error(
            "Failed to send the password reset email. Please try again later."
          );
        });
    }
  };

  return (
    <div className="card w-full mx-auto max-w-md shrink-0 shadow-2xl mt-12">
      <form onSubmit={handleForgetPassword} action="" className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">Email:</span>
          </label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Enter your email"
            className="input input-bordered"
            defaultValue={email}
          />
          <button className="py-2 px-6 mt-3 text-lg rounded-lg bg-purple-700  text-white cursor-pointer font-semibold hover:bg-purple-600 ">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
