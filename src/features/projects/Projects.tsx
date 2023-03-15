import React from 'react';
import Layout from '../../components/layout/Layout';
import InputBox from '../../components/inputBox/InputBox';
import './Projects.scss'
const Projects: React.FC = () => {

    return (
        <div>
            <Layout>
                <div className="projects-page">
                    <h3 id="project-heading">My Projects</h3>
                    <div className='input-field'>
                        <label><p>Add a new project: </p></label>
                        <InputBox />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Projects