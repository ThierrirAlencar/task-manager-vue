
import { Axios } from "../axios";
import type { task } from "../interfaces/task";

export async function getAll(userId:number):Promise<task[]> {
    const request = await Axios.get("/tasks/all/1",{

    })
    return request.data as task[]
}