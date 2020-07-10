import { Todo, TodoList } from './assets/classes';
import { CrearTodoHtml } from './assets/js/Componentes';
import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach(CrearTodoHtml); // cuando se usa un solo argumento, se puede poner la funcion o el metodo directamente (todo => CrearTodoHtml(todo))

todoList.todos[0].imprimirTodo();

console.log( 'todos', todoList.todos );