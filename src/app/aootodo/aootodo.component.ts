import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aootodo',
  templateUrl: './aootodo.component.html',
  styleUrls: ['./aootodo.component.css']
})
export class AootodoComponent implements OnInit {
  newTodoTitle: string = '';
  todos: Array<Todo> = [];

  constructor() { }

  ngOnInit() {
    this.todos = [{
      title: 'kupić chleb',
      complete: true
    }, {
      title: 'zrobić kanapkę',
      complete: false
    }, {
      title: 'wyłączyć pralkę',
      complete: false
    }];
  }

  addTodo() {
    if (!this.newTodoTitle) {
      return;
    }

    const newTodo: Todo = {
      title: this.newTodoTitle,
      complete: false
    };
    this.todos.push(newTodo);

    this.newTodoTitle = '';
  }

}

interface Todo {
  title: string;
  complete: boolean;
}
