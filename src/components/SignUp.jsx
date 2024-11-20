import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const SignUp = () => {

    const { createNewUser, setUser, updateUserProfile, loginWithGoogle } =
      useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignUp = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const name = formData.get("name");
      const photo = formData.get("photo_url");
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

      createNewUser(email, password)
        .then((result) => {
          setUser(result.user);
          toast.success(`Sign-up successful!`);
          navigate("/");

          
              updateUserProfile({ displayName: name, photoURL: photo }).then(
                () => {
                  console.log("fdfdj")
                  navigate("/");
                }
              );
        })
        .catch(() =>
          toast.error(
            "Oops! We couldn't create your account. Please check your details and try again."
          )
        );
    }

        const handleLoginwithGoogle = () => {
          loginWithGoogle()
            .then((result) => {
              setUser(result.user);
              toast.success(
                `Google login successful!`
              );
              navigate("/");

            })
            .catch(() => {
              toast.error(
                " Google login failed. Please check your connection and try again."
              );
            });
        };


     return (
       <div className="card w-full mx-auto max-w-md shrink-0 shadow-2xl mt-12 border">
         <h2 className="text-3xl font-bold text-center mt-6 text-teal-500">
           Create a New Account
         </h2>
         <form onSubmit={handleSignUp} className="card-body px-8 py-0 mt-8">
           <div className="form-control">
             <label className="label">
               <span className="label-text text-base font-medium">Name:</span>
             </label>
             <input
               type="text"
               name="name"
               placeholder="Enter your name"
               className="input input-bordered"
               required
             />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text text-base font-medium">
                 Photo URL:
               </span>
             </label>
             <input
               type="text"
               name="photo_url"
               placeholder="Enter your photo url"
               className="input input-bordered"
               required
             />
           </div>
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
               <span className="label-text text-base font-medium">
                 Password:
               </span>
             </label>
             <input
               type="password"
               name="password"
               placeholder="Enter your password"
               className="input input-bordered"
               required
             />
           </div>
           <div className="form-control mt-6">
             <button className="py-2 px-6 text-lg rounded-lg bg-purple-700  text-white cursor-pointer font-semibold hover:bg-purple-600 ">
               Sign Up
             </button>
           </div>
         </form>
         <div className="px-8">
           <h4 className="text-center text-lg my-2 font-medium">Or</h4>
           <button
             onClick={handleLoginwithGoogle}
             className="py-2 px-6 w-full text-lg rounded-lg border border-purple-700  text-purple-700 cursor-pointer font-medium hover:bg-base-200"
           >
             <div className="flex items-center justify-center gap-3">
               <FaGoogle></FaGoogle>
               <span>Log In with Google</span>
             </div>
           </button>
         </div>
         <p className="text-center mt-3 mb-6">
           Already have an account?{" "}
           <Link to="/login" className="underline font-medium text-teal-500">
             Log In
           </Link>
         </p>
       </div>
     );
};

export default SignUp;