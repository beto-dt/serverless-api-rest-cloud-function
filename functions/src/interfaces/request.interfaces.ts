import {taskInterface} from "./task.interface";
import {userInterface} from "./user.interface";

interface RequestTask {
    body: taskInterface,
    params: { taskId: string, query: string }
}

interface RequestUser {
    body: userInterface,
    params: { userId: string , email: string}
}

export { RequestTask, RequestUser };