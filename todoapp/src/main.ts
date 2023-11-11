// Each ToDo item
class TodoItem {
  public task: string
  public completed: boolean

  constructor(task: string) {
    this.task = task
    this.completed = false
  }
}

// ToDo
class Todo {
  private items: TodoItem[]

  constructor() {
    this.items = []
  }

  addItem(task: string) {
    const item = new TodoItem(task)
    this.items.push(item)
  }

  markItemComplete(index: number) {
    if (index > 0 && index <= this.items.length) {
      this.items[index - 1].completed = true
    }
  }

  removeItem(index: number) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1)
    }
  }

  getItems() {
    return this.items
  }
}

const todoList = new Todo()
todoList.addItem('Make laundry')
todoList.addItem('Workout')
todoList.addItem('Do homework')

console.log(todoList.getItems())
