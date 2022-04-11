import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(data) {
    this.id = generateId()
    this.taskN = data.taskN
    this.listId = data.listId
  }

  get Template() {
    return /*html */`
        <li>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                ${this.taskN} <i class="mdi mdi-delete selectable on-hover" title="delete task" onclick="app.tasksController.deleteTask('${this.id}')"></i>
            </label>
        </div>
        </li>
    `
  }
}