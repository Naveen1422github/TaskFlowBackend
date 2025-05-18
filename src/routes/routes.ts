import { Router } from "express";
import projectRoutes from "./taskflowRoutes/projectRoutes";
// import {userRoutes} from "./taskflowRoutes/userRoutes";


const commonRoute = Router();

commonRoute.get('/', (req, res) => {
    const currenttime = new Date().toString();
    res.send(`This is taskflow backend, Current time is ${currenttime}`);
  })

// commonRoute.use('task-flows', userRoutes);
commonRoute.use('/projects', projectRoutes)

export default commonRoute;