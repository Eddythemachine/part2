import React from "react";

function Course({ course }) {
  console.log(course);
  return (
    <div>
      {course.map((el) => {
        return (
          <p key={el.id}>
            {el.name} <span>{el.exercises}</span>
          </p>
        );
      })}
    </div>
  );
}

export default Course;
