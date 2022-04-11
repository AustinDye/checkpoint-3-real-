import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
  addList(formData) {
    const newList = new List(formData)
    ProxyState.lists = [newList, ...ProxyState.lists]
  }
  removeList(id) {
    ProxyState.lists = ProxyState.lists.filter(i => i.id !== id)
  }
}

export const listsService = new ListsService()

