import express from 'express';
import projectController from '../../controllers/projectController';

const router = express.Router();

// router.get('/', (req, res) => {
//     const currenttime = new Date().toString();
//     res.send(`This is project service :taskflow , Current time is ${currenttime}`);
//     }
// );

router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProjectById);
router.post('/', projectController.createProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

export default router;
