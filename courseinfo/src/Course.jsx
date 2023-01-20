import React from "react";

function Course({ course }) {
 console.log(course);
 const courseSum = course
  .map((el) => {
   return el.exercises;
  })
  .reduce((el, cur) => {
   return el + cur;
  });
 return (
  <div>
   {course.map((el) => {
    return (
     <p key={el.id}>
      {el.name} <span>{el.exercises}</span>
     </p>
    );
   })}
   <p>total of {courseSum} exercises</p>
  </div>
 );
}

export default Course;
