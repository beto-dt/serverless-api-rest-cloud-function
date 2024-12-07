import { Response } from 'express';
import {RequestUser} from "../interfaces/request_user.interfaces";
import * as admin from 'firebase-admin';


const createUser = async (req: RequestUser, res: Response) => {
    const { email, password } = req.body;
    try{
       const user = await admin.auth();
        const userObject = {
            email,
            password
        }
        user.createUser(userObject);
        res.status(200).send({
            status: 'success',
            message: 'user added successfully',
            data: userObject
        })
    } catch(error: any) {
        res.status(500).json(error.message);
    }
}

const getUserByEmail = async (req: RequestUser, res: Response) => {
    const { email } = req.params;


    try{
        const user = await admin.auth().getUserByEmail(email);

        res.status(200).send({
            status: 'success',
            message: 'user getting successfully',
            data: {
                'uid' : user.uid,
                'email': user.email,
                'emailVerified' : user.emailVerified
            }
        })
    } catch(error: any) {
        res.status(500).json(error.message);
    }
}

export { createUser, getUserByEmail };