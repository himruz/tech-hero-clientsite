import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';


const CourseItems = () => {
    
  const [courseMenu, setcourseMenu] = useState([]);
  useEffect(()=>{
      fetch('https://learning-platform-server-sigma.vercel.app/course-categories')
      .then(res=>res.json())
      .then(data=>setcourseMenu(data));
  },[])
    
    return (
        
            <ul className="menu bg-violet-700	 text-white		w-72	p-2 rounded-box shadow-lg	shadow-slate-400	">
                {courseMenu.map(course=><li key={course.id}>
            <Link to={`/category/${course.id}`} className="text-2xl font-bold py-5">{course.name}</Link>
          </li>)}
        </ul>
        
    );
};

export default CourseItems;