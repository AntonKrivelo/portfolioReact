import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Project.module.css';


const Project = ({title, image, index}) => {

    return (
        
        <div>
             <NavLink to={`/projectItem/${index}`}>
                <li className={styles.project}>          
                    <img src={image} alt="Project img" className={styles.image} /> 
                    <h3 className={styles.title}>{title}</h3>    
                </li>
            </NavLink>
        </div>
    )
}


export default Project;