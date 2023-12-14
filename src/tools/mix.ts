import projectsData from "../../public/data/projects.json"
import userData from "../../public/data/user.json"

/**
 * Get project data by ID.
 * @param {number} id - The ID of the project.
 * @returns {object | null} The project data or null if not found.
 */
function getProjectDatas(id: number): object | null {

    const project = projectsData.projects.find((project) => project.id === id);
    return project || null;

}

function getAllProjectsDatas() {
    return projectsData.projects;
}

function getUserInfos() {
    return userData.user
}


export { getProjectDatas, getAllProjectsDatas, getUserInfos }