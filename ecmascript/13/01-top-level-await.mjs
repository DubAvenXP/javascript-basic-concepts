const url = "https://jsonplaceholder.typicode.com/todos/1";

const response = await fetch(url);
const data = await response.json();

export { data };
