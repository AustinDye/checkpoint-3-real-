import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import {List} from "./Models/List.js"
import { Task } from "./Models/Task.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/List').List[]} */
  lists = [
    new List({
      id:'12323',
      title: "Chores",
      first: "04/18/2022",
      color:'bg-dark',
      total: 1
    })
  ]
  /** @type {import('./Models/Task').Task[]} */
  tasks = [
    new Task({
      taskN:'garage',
      listId:'12323',
    })
  ]
 
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})