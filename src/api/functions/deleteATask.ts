
import { Axios } from "../axios";
import type { task } from "../interfaces/task";

export async function deleteTask(taskId:number):Promise<task[]> {
    const request = await Axios.delete(`/tasks/${taskId}`,{})
    return request.data as task[]
}