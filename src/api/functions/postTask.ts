
import type { createTask } from "../interfaces/task";
import { Axios } from "../axios";

export async function createTask(data:createTask){
    const formattedDate = typeof data.date === 'string' 
        ? data.date 
        : new Date(data.date).toISOString().split('T')[0];
    const api = await Axios.post(`/tasks/${data.user_id}`,{
        ...data,
        name:data.title,
        date:formattedDate
    })
    console.log(api.data)
}