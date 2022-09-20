import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesItems = technologies.map((technology) => (
    <span key = {technology}>{technology}</span>
  )
    
  ) 
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologiesItems}</div>
        {/* render a <span> for each technology in the technologies array */}
      
    </div>
  );
}


export default ProjectItem;
