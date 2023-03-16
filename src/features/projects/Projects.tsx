import React from 'react';
import Layout from '../../components/layout/Layout';
import InputBox from '../../components/inputBox/InputBox';
import './Projects.scss'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
const Projects: React.FC = () => {

    let projects = [
        {projectType: "data",
         projectName: "test-project",
         projectId: 1,
         lastModifiedTimeStamp: 1530230400},
         {projectType: "data",
         projectName: "test-project2",
         projectId: 2,
         lastModifiedTimeStamp: 1530930400},
    ]
    
    return (
        <div>
            <Layout>
                <div className="projects-page">
                    <h3 id="project-heading">My Projects</h3>
                    <div className='input-field'>
                        <label><p>Add a new project: </p></label>
                        <InputBox />
                    </div>
                    <ProjectCard projectType={"data"} projectName={"project-name"} projectId={0} lastModifiedTimeStamp={0}/>
                </div>
            </Layout>
        </div>
    )
}

export default Projects