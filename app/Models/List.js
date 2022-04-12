import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class List {
    constructor({id = generateId(), title,  first, color, total}){
        this.id = id
        this.title = title || ""
        this.first = first || ""
        this.color = color
        this.total = total
    }

    get Tasks() {
      let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
      let template = ''
      tasks.forEach(t => template += t.Template)
      return template
    }
    
    get Total() {
      let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
      return this.total + tasks.length
    }
    
    
    get Template(){
      
      
      return  /*html*/`
      <div class="col-md-3">
          <div class="card justify-content-center " id="user-list">
            <div class=" text-center" id="user-card">
            <div class="container ${this.color}">
              <h2>${this.title}</h2> 
              <p>${this.first}</p>
              <p>${this.Total}</p>
            </div>
            <div class="task-list">
              <ul>
                    ${this.Tasks}
              </ul>
            </div>
            <form onsubmit="app.tasksController.addTask('${this.id}')">
          <div class="mb-3">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Test..." id="task" required minlength="3" maxlength="50">
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