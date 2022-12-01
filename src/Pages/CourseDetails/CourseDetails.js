import React from "react";

import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetaials = useLoaderData();
  console.log(courseDetaials);
  return (
    <div className="lg:container mx-auto mt-16 mb-10  lg:grid gap-3  lg:grid-cols-3">
      <div className="col-span-2 ">
        <div className="course-intro">
          <h2 className="text-3xl font-bold">{courseDetaials.title}</h2>
          <p className="mt-6">{courseDetaials.desc}</p>
        </div>
        <div className="course-instructor mt-10">
          <h2 className="text-3xl font-bold mb-5">Course Instructor : </h2>
          <div className="flex items-center w-9/12 p-4 shadow-lg rounded-md">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={courseDetaials?.instructor.img} alt="" />
              </div>
            </div>
            <div className="instructor-name ml-4">
              <h2 className="text-2xl	 font-bold">
                {courseDetaials?.instructor.name}
              </h2>
              <span>{courseDetaials?.instructor.designation}</span>
            </div>
          </div>
        </div>
        <div className="what-you-will-learn mt-10">
          <h2 className="text-3xl font-bold">What you will learn</h2>
          <div className="w-9/12 p-4 rounded-md mt-5 border-2">
            <ul>
              {courseDetaials?.learn.map((l) => (
                <li key={l.category_id} className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    checked
                    className="checkbox checkbox-primary mr-3"
                  />{" "}
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="col-span-1 h-3/4		 border-2 rounded-md">
        <img src={courseDetaials.thumb} alt="" />
        <h2 className="text-3xl font-bold p-3.5 mt-5">{courseDetaials?.price}</h2>
        <div className="flex justify-center	">
          <Link to={`/enrollcourse/${courseDetaials._id}`} className="btn  btn-primary mt-5 w-11/12">Enroll</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
