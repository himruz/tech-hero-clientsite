import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useContext } from "react";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useState } from "react";

const Login = () => {
  const { loginMethod, googleSignIn, facebookSignUp } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginMethod(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        console.log("hellow");
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogin = () => {
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFacebookLogin = () => {
    facebookSignUp(facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log In</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
                New to Site ?
                <Link to="/signup" className="btn btn-link">
                  Please Create a account
                </Link>
              </label>
            </div>
            <div className="text-center">
              <p className="text-red-700">{error}</p>
            </div>
            <div className="form-control">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>
          </form>

          <h2 className="text-center signup font-bold">
            Sign In Social accounts
          </h2>
          <div className="container mx-auto px-4 flex justify-center	pb-5 mt-5">
            <Link onClick={handleGoogleLogin} className="mr-12">
              {" "}
              <FaGoogle className="mr-4 text-3xl text-violet-800" />
            </Link>

            <Link onClick={handleFacebookLogin}>
              <FaFacebook className="mr-4 text-3xl text-violet-800	" />
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
