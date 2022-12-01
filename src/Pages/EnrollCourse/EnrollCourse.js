import React from "react";
import { useLoaderData } from "react-router-dom";

const EnrollCourse = () => {
  const enrolledCourse = useLoaderData();
  return (
    <div className="h-full lg:container mx-auto  mt-16 mb-10">
      <div className="text-center bg-lime-300 p-5">
        <h2 className="text-5xl	text-green-900">
          You Have Successfully Enroll To {enrolledCourse?.title}
        </h2>
      </div>
    </div>
  );
};

export default EnrollCourse;
