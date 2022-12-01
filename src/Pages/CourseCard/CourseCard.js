import React from "react";
import { FaStar, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { title, price, duration, thumb } = course;
  return (
    <div className="card glass">
      <figure>
        <img src={thumb} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="course-meta flex justify-between ">
          <div className="flex text-amber-400	">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </div>
          <div className="flex items-center">
            <span>
              <FaRegClock className="text-red-400	" />
            </span>
            <p>{duration}</p>
          </div>
        </div>
        <div className="badge badge-lg badge-primary badge-outline">
          {price}
        </div>

        <div className="card-actions justify-center mt-6">
          <Link to={`/coursedetails/${course._id}`} className="btn btn-wide btn-primary">Course Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
