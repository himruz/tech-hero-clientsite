import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import CourseItems from "../CourseItems/CourseItems";

const CategoryCourse = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="lg:container mx-auto lg:grid  lg:grid-cols-3  mt-16 mb-10">
      <div className="col-span-1">
        <CourseItems />
      </div>
      <div className="col-span-2">
        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCourse;
