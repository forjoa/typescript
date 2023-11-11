"use strict";
// Each ToDo item
class TodoItem {
    constructor(task) {
        this.task = task;
        this.completed = false;
    }
}
// ToDo
class Todo {
    constructor() {
        this.items = [];
    }
    addItem(task) {
        const item = new TodoItem(task);
        this.items.push(item);
    }
    markItemComplete(index) {
        if (index >= 0 && index < this.items.length) {
            this.items[index].completed = true;
        }
    }
    removeItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
    }
    getItems() {
        return this.items;
    }
}
const todoList = new Todo();
todoList.addItem('Make laundry');
todoList.addItem('Workout');
todoList.addItem('Do homework');
todoList.markItemComplete(1);
console.log(todoList.getItems());
