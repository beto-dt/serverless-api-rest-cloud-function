import * as functions from 'firebase-functions';
import * as express from 'express';
import {addTask, deleteTask, getAllTasks, updateTask} from "./controllers/taskController";
import {createUser} from "./controllers/userController";

const app = express();

app.get('/', (req, res) => res.status(200).send('Her there!'));
app.post('/tasks',addTask);
app.post('/users',createUser);
app.get('/tasks',getAllTasks);
app.patch('/tasks/:taskId', updateTask);
app.delete('/tasks/:taskId',deleteTask);

exports.app = functions.https.onRequest(app);
