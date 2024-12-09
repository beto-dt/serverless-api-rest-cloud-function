import { Response } from 'express';
import * as admin from 'firebase-admin';
import {RequestUser} from "../interfaces/request.interfaces";
import {RespopnseStatus, Status} from "../enum/response_status.enum";
import {RespopnseMessageUser} from "../enum/response_message.enum";
import {userInterface, userResponseInterface} from "../interfaces/user.interface";


const createUser = async (req: RequestUser, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(RespopnseStatus.BAD_REQUEST).json({
            status: Status.ERROR,
            message: RespopnseMessageUser.ERROR_MISSING_DATA,
        });
    }

    try{
       const user = await admin.auth();
        const userObject : userInterface = {
            email,
            password
        }
        user.createUser(userObject);
        return res.status(RespopnseStatus.OK).json({
            status: Status.SUCCESS,
            message: RespopnseMessageUser.CREATED_USER,
            data: userObject
        })
    } catch(error: any) {
        return res.status(RespopnseStatus.INTERNAL_SERVER_ERROR).json({
            status: Status.ERROR,
            message: error.message,
        })
    }
}

const getUserByEmail = async (req: RequestUser, res: Response) => {
    const { email } = req.params;

    if (!email) {
        return res.status(RespopnseStatus.BAD_REQUEST).json({
            status: Status.ERROR,
            message: RespopnseMessageUser.ERROR_MISSING_DATA,
        });
    }

    try{
        const user = await admin.auth().getUserByEmail(email);

        const userObject : userResponseInterface = {
            uid : user.uid,
            email : user.email,
            emailVerified : user.emailVerified
        }

       return res.status(RespopnseStatus.OK).json({
            status: Status.SUCCESS,
            message: RespopnseMessageUser.USER_BY_EMAIL,
            data: userObject
        })
    } catch(error: any) {
        return res.status(RespopnseStatus.INTERNAL_SERVER_ERROR).json({
            status: Status.ERROR,
            message: error.message,
            data:undefined
        })
    }
}

export { createUser, getUserByEmail };