import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

class TasksService {

    addTask(taskData) {
        let task = new Task(taskData)
        ProxyState.tasks = [...ProxyState.tasks, task]
    }
    
    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== id)
    }

}

export const tasksService = new TasksService()