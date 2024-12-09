import { Response } from 'express';
import { db } from '../config/firebase';
import {taskInterface} from "../interfaces/task.interface";
import {RequestTask} from "../interfaces/request.interfaces";
import {Collections} from "../enum/collection.enum";
import {RespopnseStatus, Status} from "../enum/response_status.enum";
import {RespopnseMessageTask} from "../enum/response_message.enum";

const addTask = async (req: RequestTask, res: Response) => {
    const { title, description, status } = req.body;

    if (!title || !description || !status) {
        return res.status(RespopnseStatus.BAD_REQUEST).json({
            status: Status.ERROR,
            message: RespopnseMessageTask.ERROR_MISSING_DATA,
        });
    }

    try{
        const task = db.collection(Collections.TASKS).doc();
        const taskObject = {
            id: task.id,
            title,
            description,
            status
        }
        task.set(taskObject);
        return res.status(RespopnseStatus.OK).json({
            status: Status.SUCCESS,
            message: RespopnseMessageTask.CREATED_TASK,
            data: taskObject
        })
    } catch(error: any) {
        return res.status(RespopnseStatus.INTERNAL_SERVER_ERROR).json({
            status: Status.ERROR,
            message: error.message,
        })
    }
}

const getAllTasks = async (req: RequestTask, res: Response) => {
    try{
        const allTasks : taskInterface[] = [];
        const querySnapshot = await  db.collection(Collections.TASKS).get();
        querySnapshot.forEach((doc:any) => allTasks.push(doc.data()));
        return res.status(RespopnseStatus.OK).json({
            status: Status.SUCCESS,
            message: RespopnseMessageTask.ALL_TASKS,
            data: allTasks
        })
    } catch (error:any) {
        return res.status(RespopnseStatus.INTERNAL_SERVER_ERROR).json({
            status: Status.ERROR,
            message: error.message,
        })
    }
}

const updateTask = async (req: RequestTask, res: Response) => {
    const {body:{ title, description, status}, params: {taskId}} = req

    if (!title || !description || !status) {
        return res.status(RespopnseStatus.BAD_REQUEST).json({
            status: Status.ERROR,
            message: RespopnseMessageTask.ERROR_MISSING_DATA,
        });
    }

    if (!taskId) {
        return res.status(RespopnseStatus.BAD_REQUEST).json({
            status: Status.ERROR,
            message: RespopnseMessageTask.ERROR_MISSING_TASK_ID,
        });
    }

    try{
        const task = db.collection(Collections.TASKS).doc(taskId);
        const currentData =    (await task.get()).data() || {};
        const taskObject= {
            title: title || currentData.title,
            description: description || currentData.description,
            status: status || currentData.status,
        }

        await  task.set(taskObject);

        return res.status(RespopnseStatus.OK).json({
            status: Status.SUCCESS,
            message: RespopnseMessageTask.UPDATED_TASK,
            data: taskObject
        })
    } catch (error: any){
        return res.status(RespopnseStatus.INTERNAL_SERVER_ERROR).json({
            status: Status.ERROR,
            message: error.message,
        })
    }
}

const deleteTask = async (req: RequestTask, res: Response) => {
    const { taskId } = req.params;

    if (!taskId) {
        return res.status(RespopnseStatus.BAD_REQUEST).json({
            status: Status.ERROR,
            message: RespopnseMessageTask.ERROR_MISSING_TASK_ID,
        });
    }

    try {
        const task = db.collection(Collections.TASKS).doc(taskId);
        await task.delete();
        return res.status(RespopnseStatus.OK).json({
            status: Status.SUCCESS,
            message: RespopnseMessageTask.DELETED_TASK
        })
    } catch (error: any){
        return res.status(RespopnseStatus.INTERNAL_SERVER_ERROR).json({
            status: Status.ERROR,
            message: error.message,
        })
    }
}

export { addTask, getAllTasks, updateTask, deleteTask };