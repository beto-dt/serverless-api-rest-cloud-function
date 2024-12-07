import { Response } from 'express';
import { db } from '../config/firebase';
import { Request } from '../enum/request';
import {taskInterface} from "../interfaces/task.interface";

const addTask = async (req: Request, res: Response) => {
    const { title, description, creationDate, completed } = req.body;
    try{
        const task = db.collection('tasks').doc();
        const taskObject = {
            id: task.id,
            title,
            description,
            creationDate,
            completed
        }
        task.set(taskObject);
        res.status(200).send({
            status: 'success',
            message: 'task added successfully',
            data: taskObject
        })
    } catch(error: any) {
        res.status(500).json(error.message);
    }
}

const getAllTasks = async (req: Request, res: Response) => {
    try{
        const allTasks : taskInterface[] = [];
        const querySnapshot = await  db.collection('tasks').get();
        querySnapshot.forEach((doc:any) => allTasks.push(doc.data()));
        return res.status(200).json(allTasks);
    } catch (error:any) {
        return res.status(500).json(error.message);
    }
}

const updateTask = async (req: Request, res: Response) => {
    const {body:{ title, description, creationDate, completed}, params: {taskId}} = req
    try{
        const task = db.collection('tasks').doc(taskId);
        const currentData =    (await task.get()).data() || {};
        const taskObject= {
            title: title || currentData.title,
            description: description || currentData.description,
            creationDate: creationDate || currentData.creationDate,
            completed: completed || currentData.completed,
        }

        await  task.set(taskObject);

        return res.status(200).json({
            status: 'success',
            message: 'task updated successfully',
            data: taskObject
        })
    } catch (error: any){
        return res.status(500).json(error.message);
    }
}

const deleteTask = async (req: Request, res: Response) => {
    const { taskId } = req.params;
    try {
        const task = db.collection('tasks').doc(taskId);
        await task.delete();
        return res.status(200).json({
            status: 'success',
            message: 'task deleted successfully'
        })
    } catch (error: any){
        return res.status(500).json(error.message);
    }
}

export { addTask, getAllTasks, updateTask, deleteTask };