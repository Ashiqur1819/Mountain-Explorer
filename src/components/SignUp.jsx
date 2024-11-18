import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const SignUp = () => {

    const { createNewUser, loginWithGoogle } = useContext(AuthContext);

    const handleSignUp = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const name = formData.get("name");
      const photo_url = formData.get("photo_url");
      const email = formData.get("email");
      const password = formData.get("password");

      createNewUser(email, password)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
     
    }

    const handleLoginwithGoogle = () => {
      loginWithGoogle()
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }

     return (
       <div className="card w-full mx-auto max-w-md shrink-0 shadow-2xl mt-12 border">
         <h2 className="text-2xl font-bold text-center mt-6 text-purple-600">
           Create a New Account
         </h2>
         <form onSubmit={handleSignUp} className="card-body px-8 py-0">
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
             <button className="py-2 px-6 text-lg rounded-lg bg-teal-500  text-white cursor-pointer font-semibold hover:bg-teal-600 ">
               Sign Up
             </button>
           </div>
           <p className="text-center mt-1">
             Already have an account?{" "}
             <Link to="/login" className="underline text-purple-600">
               Log In
             </Link>
           </p>
         </form>
         <div className='mb-8 px-8'>
           <h4 className="text-center font-semibold text-lg my-1 text-purple-600">
             Or
           </h4>
           <button
             onClick={handleLoginwithGoogle}
             className="py-2 px-6 w-full text-lg rounded-lg border border-teal-500  text-teal-500 cursor-pointer font-semibold hover:bg-base-200"
           >
             Log In with Google
           </button>
         </div>
       </div>
     );
};

export default SignUp;