enum RespopnseMessageTask {
    CREATED_TASK = 'task added successfully',
    ALL_TASKS = 'tasks getting successfully',
    UPDATED_TASK = 'task updated successfully',
    DELETED_TASK = 'task deleted successfully',
    ERROR_MISSING_DATA = 'Necessary data is missing',
    ERROR_MISSING_TASK_ID = 'Necessary TaskID is missing'
}

enum RespopnseMessageUser {
    CREATED_USER = 'user added successfully',
    USER_BY_EMAIL = 'user get successfully',
    ERROR_MISSING_DATA = 'Necessary data is missing'
}

export {RespopnseMessageTask,RespopnseMessageUser }