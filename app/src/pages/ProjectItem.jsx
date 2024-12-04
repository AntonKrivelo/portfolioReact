import React from "react";
import iconGit from '../img/icons/gitHub-black.svg';
import { useParams } from "react-router-dom";
import { projects } from "../Helpers/ProjectsList";

const ProjectItem = () => {
      
    const {id} = useParams()
    const project = projects[id]

    return (
        <div>
        <main className="section">
            <div className="container">
                <div className="project-details">
                     <h2 className="title-1">{project.title}</h2>
                    <img src={project.image} alt="imgBack" className="project-details__cover" />
                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>
                    {project.gitHubLink && <a href={project.gitHubLink} className="btn-outline">
                        <img src={iconGit} alt="gitIcon" />
                        GitHub Repositories
                    </a>}
                </div>
            </div>
        </main>
    
    </div>
    )
}


export default ProjectItem;