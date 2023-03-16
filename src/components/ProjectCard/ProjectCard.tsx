import React from "react";
import './ProjectCard.scss'

// the type for projectId is a placeholder and will be updated when a better ID system is established
// note to self: the ID cannot be the index (issues may arise when deleting items) and cannot be 
// a dynamicaly generated UUID as this will cause force mount/unmounts. A static UUID should be ok.
interface IProjectCard {
    projectType: "data" | "web-scraper",
    projectName: String,
    projectId: number,
    lastModifiedTimeStamp: number,
}

const ProjectCard: React.FC<IProjectCard> = ({
    projectType,
    projectName,
    projectId,
    lastModifiedTimeStamp,
}) => {
    return (
        <div className="project-card">
            <div id="project-card-info">
                <h2>{projectName}</h2>
                <p>Last modified: </p>
            </div>
        </div>
    )
}

export default ProjectCard;