import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../context/AuthProvider";

const Signup = () => {
  const { googleSignIn, signUpWithEmailPass, updateUserProfile, facebookSignUp } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const provider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleAcceppt = (e) => {
    setAccepted(e.target.checked);
  };

  const handleSignUp = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value ;
    const photoURL = form.photoURL.value ;
    const email = form.email.value ;
    const password = form.password.value ;
    signUpWithEmailPass(email, password)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      setError('')
      form.reset();
      handleUserUpdate(name, photoURL);
      navigate('/')
    }).catch((error)=>{
      console.error(error);
      setError(error.message)
    })
    
  }

  const handleUserUpdate = (name, photoURL) =>{

    const profile = {
      displayName : name,
      photoURL : photoURL
    }

    updateUserProfile(profile)
    .then((result)=>{

    }).catch((error)=>{
      console.error(error)
    })
  }

  const handleGoogleSIgnUp = () => {
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFacebookSignUp = () =>{
    facebookSignUp(facebookProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <div
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create Your Account</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/login" className="btn btn-link">
                  Already Have an account ?
                </Link>
              </label>
            </div>
            <div className="text-center">
              <p className="text-red-700">{error}</p>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  onClick={handleAcceppt}
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">Accept Our Terms & Condition</span>
              </label>
            </div>
            <div className="form-control">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!accepted}
              >
                Register
              </button>
            </div>
          </form>

          <h2 className="text-center signup font-bold">Sign Up Social accounts</h2>
          <div className="container mx-auto px-4 flex justify-center	pb-5 mt-5">
           <Link onClick={handleGoogleSIgnUp} className="mr-12" disabled={!accepted}> <FaGoogle className="mr-4 text-3xl text-violet-800" /></Link>

            <Link onClick={handleFacebookSignUp}><FaFacebook className="mr-4 text-3xl text-violet-800	" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
