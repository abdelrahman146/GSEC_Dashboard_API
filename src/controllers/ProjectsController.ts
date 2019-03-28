// /src/controllers/ProjectsController.ts

import Project from '../interfaces/Project';
import projectsLoader from '../loaders/ProjectsLoader';
import { Request, Response } from 'express';

class ProjectsController {

    // load all projects
    public async loadProjects( req: Request, res: Response) {
        try {
            await projectsLoader.loadProjects();
            res.send("projects has been loaded");
            console.log("projects has reloaded");
        }catch(err) {
            res.send(`an error occured: ${err}`);
            console.log("projects has reloaded");

        }
    }


    //retrieve all projects
    public async getAllProjects( req: Request, res: Response) {
        try {
            let projects: Project[] = await projectsLoader.getAllProjects();
            res.json(projects);
            console.log("projects sent");
        }catch(err) {
            res.send(`an error occured: ${err}`);
            console.log(`an error occured: ${err}`);
        }
    }


    // //retrieve all projects
    // public async getProject( req: Request, res: Response) {
    //     try {
    //         let projectId: string = req.params.id;
    //         let project: Project = await projectsLoader.getProjectById(projectId);
    //         res.json(project);
    //         console.log("projects sent");
    //     }catch(err) {
    //         res.send(`an error occured: ${err}`);
    //         console.log(`an error occured: ${err}`);
    //     }
    // }

}

export default ProjectsController;