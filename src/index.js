import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHTML } from './js/componentes';

export const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript!!!');

todoList.todos.forEach(todo => crearTodoHTML(todo));