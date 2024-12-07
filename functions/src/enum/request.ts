import {taskInterface} from "../interfaces/task.interface";

type Request= {
    body: taskInterface,
    params: { taskId: string}
}

export { Request };