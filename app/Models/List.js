import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class List {
    constructor({id = generateId(), title,  first}){
        this.id = id
        this.title = title || ""
        this.first = first || ""
    }

    get Tasks() {
      let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
      let template = ''
      tasks.forEach(t => template += t.Template)
      return template
    }
    
    get Template(){
        return  /*html*/`
        <div class="col-md-4">
          <div class="card justify-content-center" id="user-list">
            <div class="bg-light text-center" id="user-card">
              <h2>${this.title}</h2> 
              <p>${this.first}</p>
            <div class="task-list p-2">
              <ul>
             
                    ${this.Tasks}
                 
              </ul>
            </div>
            <form onsubmit="app.tasksController.addTask('${this.id}')">
          <div class="mb-3 p-3">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Test..." id="task" required minlength="3" maxlength="15">
              <button class="btn btn-info" type="submit">add</button>
            </div>
          </div>
        </form>
        <button class="btn btn-info" onclick="app.listsController.removeList('${this.id}')">remove</button>
          </div>
        </div>
      </div>
        `
    }
}