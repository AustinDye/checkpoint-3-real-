import { tasksService } from "../Services/TasksServices.js"
import { saveState } from "../Utils/LocalStorage.js"
import { Pop } from "../Utils/Pop.js"

export class TasksController {
  addTask(listId) {
    window.event.preventDefault()
    try {
      /**@type {HTMLFormElement} */
      // @ts-ignore
      const form = window.event.target

      const taskData = {
        listId,
        taskN: form.task.value
      }
      console.log(taskData)
      tasksService.addTask(taskData)
    } 

    catch (error) {
        console.error('[T-form error]', error)
        Pop.toast(error.message, 'error')
    }
    saveState()
 }

  async deleteTask(id) {
    if (await Pop.confirm()) {
        tasksService.deleteTask(id)
        Pop.toast('Outa here!')
        saveState()
      }
  }
}