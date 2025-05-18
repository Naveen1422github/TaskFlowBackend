import { Request, Response } from 'express';
import {Project} from '../models/project';

// import { Project } from '../models/project.model';

// GET /projects
const getProjects = async (req: Request, res: Response) => {
  const projects = await Project.find();
//   const projects = await Project.find().populate('teamMembers');

  res.json(projects);
};

// GET /projects/:id
const getProjectById = async (req: Request, res: Response) => {
    // const project = await Project.findById(req.params.id).populate('teamMembers');
    const project = await Project.findById(req.params.id)

    if (!project) {
        res.status(404).json({ message: 'Project not found' });
        return;
    }
    res.json(project);
    }



// POST /projects
const createProject = async (req: Request, res: Response) => {
  try {
    const project = new Project(req.body);
    const saved = await project.save();
    console.log('Project created:', saved);
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Invalid input', error: err });
  }
};

// // PUT /projects/:id

const updateProject = async (req: Request, res: Response) => {
    try {
        const updated = await Project.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: new Date() },
            { new: true, runValidators: true }
        );
        if (!updated){  res.status(404).json({ message: 'Project not found' });}
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: 'Invalid update', error: err });
    }
};


// // DELETE /projects/:id
 const deleteProject = async (req: Request, res: Response) => {
  const deleted = await Project.findByIdAndDelete(req.params.id);
  if (!deleted)  res.status(404).json({ message: 'Project not found' });
  res.status(204).send();
};

const projectController = {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
};

export default projectController;