import {EntryInterface} from "../interfaces/entryInterface";

type Request = {
    body: EntryInterface,
    params: { entryId: string}
}

export { Request }