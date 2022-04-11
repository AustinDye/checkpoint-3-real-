//TODO draw the lists private to the controller
import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsServices.js";
import { getListform } from "../Components/listForm.js";
import { Pop } from "../Utils/Pop.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";



//Private
function _drawLists(){

  let template = ''
  ProxyState.lists.forEach(i => template += i.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <div class="my-3">
    <div class="values d-flex flex-wrap my-3">
      ${template}
    </div>
  </div>
  `
  document.getElementById('listing-modal-form-slot').innerHTML = getListform()
  document.getElementById('add-listing-modal-label').innerText = 'Add List'
}

//Public
export class ListsController {
  constructor() {
    ProxyState.on('lists', _drawLists)
    ProxyState.on('tasks', _drawLists)
    
      loadState()
    _drawLists()
  }

  addList() {
    event.preventDefault()
    /**@type {HTMLFormElement} */
    // @ts-ignore
    const formElem = event.target
    const formData = {
    // @ts-ignore
      title: formElem.title.value,
      first: formElem.first.value,
      
    }
    saveState()
    listsService.addList(formData)

    formElem.reset()
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()
  }

  async removeList(id){
    if (await Pop.confirm()) {
      listsService.removeList(id)
      Pop.toast('Removed')
    }
    saveState()
  }

  drawLists(){
    _drawLists()
  }
}


