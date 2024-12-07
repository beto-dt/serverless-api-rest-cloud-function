import {userInterface} from "./user.interface";

interface RequestUser {
    body: userInterface,
    params: { userId: string}
}

export { RequestUser };