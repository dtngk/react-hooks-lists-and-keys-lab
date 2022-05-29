import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */
          projects.map(ele => {
           return <ProjectItem key={ele.id} {...ele}/>
          })
      }</div>
    </div>
  );
}

export default ProjectList;
