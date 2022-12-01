import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2	lg:container lg:mx-auto lg:px-4 items-center	mt-4">
        <div className="">
          <h2 className="lg:text-8xl font-bold text-slate-700 md:text-5xl sm:text-5xl">
            Tech Hero
          </h2>
          <p className="mt-6 text-slate-700 lg:text-5xl	font-semibold	md:text-4xl	 sm:text-4xl	">
            No. 1 Online Tech Learning Platform
          </p>
          <Link to="/courses">
            <button className="btn btn-wide mt-6  btn-primary">
              Let's Explore
            </button>
          </Link>
        </div>
        <div>
          <img className="object-cover" src="banner.png" alt="" />
        </div>
      </div>
      <div className="why-choose mt-6 mb-6">
        <div className="why-choose-title text-center">
          <h2 className="underline-offset-2	text-5xl	font-bold	text-slate-700">
            Why Choose Us
          </h2>
        </div>
        <div className="lg:container lg:mx-auto lg:px-4 items-center	mt-6 lg:grid lg:grid-cols-3">
          <div className="card w-96 bg-base-100  border-violet-700	border-2	shadow-md	shadow-slate-600	">
            <figure className="px-10 pt-10">
              <img
                src="support.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl	font-bold	">24/7 One To One Support Session</h2>
            </div>
          </div>
          <div className="card w-96 bg-base-100  border-violet-700	border-2	shadow-md	shadow-slate-600	">
            <figure className="px-10 pt-10">
              <img
                src="job.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl	font-bold	">Job Hunting Group After Course</h2>
            </div>
          </div>
          <div className="card w-96 bg-base-100  border-violet-700	border-2	shadow-md	shadow-slate-600	">
            <figure className="px-10 pt-10">
              <img
                src="project.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl	font-bold	">Creative Project to grow Skill</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
