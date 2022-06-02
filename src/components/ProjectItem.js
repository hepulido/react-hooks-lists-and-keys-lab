import React from "react";

function ProjectItem({ name, about, technologies }) {
  let index = 0
  const projects = technologies.map((element) => { 
    index++
   return <span key={index}>{element}</span>;
  })
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
       {projects}
      </div>
    </div>
  );
}

export default ProjectItem;
