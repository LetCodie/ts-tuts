/*
function getTodo(todo: { title: string, body: string }):string {
  return `title: ${todo.title}, body: ${todo.body}`;
}

let todo = {
  title: 'Cambodia',
  body: 'Welcome to cambodia!'
}
console.log( getTodo(todo) );
*/

interface TodoInterface {
  title: string,
  body: string
}

function getTodo(todo: TodoInterface):string {
  return `title: ${todo.title}, body: ${todo.body}`;
}

let todo = {
  title: 'Yeah, ',
  body: 'World!'
}

console.log( getTodo(todo) );
