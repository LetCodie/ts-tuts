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
function getTodo(todo) {
    return "title: " + todo.title + ", body: " + todo.body;
}
var todo = {
    title: 'Yeah, ',
    body: 'World!'
};
console.log(getTodo(todo));
