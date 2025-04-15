import './style.css'

interface Todo {
  readonly id: string;
  title: string;
  isCompleted: boolean;
}

const todos: Todo[] = [];

const todosContainer = document.getElementById('todo-container') as HTMLDivElement;
const input = document.getElementById('todo-input') as HTMLInputElement;
const form = document.getElementById('todo-form') as HTMLFormElement;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    id: String(Math.floor(Math.random() * 100)),
    isCompleted: false,
    title: input.value
  }

  todos.push(todo)
  input.value = ""

  renderTodo(todos)
}

const renderTodo = (todos: Array<Todo>) => {
  todosContainer.innerText = ""

  todos.forEach(item => {
    // Create Todo
    const todo = document.createElement('div') as HTMLDivElement;
    todo.className = 'todo'

    // Create Checkbox
    const checkbox = document.createElement('input') as HTMLInputElement;
    checkbox.className = 'checked'
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = item.isCompleted
    checkbox.onchange = () => {
      item.isCompleted = checkbox.checked
      para.className = checkbox.checked ? 'completed' : ""
    }

    // Create Title
    const para = document.createElement('p') as HTMLParagraphElement;
    para.innerText = item.title

    // Crete Delete Button
    const deleteButton = document.createElement('button') as HTMLButtonElement;
    deleteButton.innerText = "X"
    deleteButton.className = "delete-btn"
    deleteButton.onclick = () => {
      handleDeleteTodo(item.id)
    }

    todo.append(checkbox, para, deleteButton)
    todosContainer.append(todo)
  })
}

const handleDeleteTodo = (id: string) => {
  const deleteIndex = todos.findIndex(item => item.id === id)
  todos.splice(deleteIndex, 1)

  renderTodo(todos)
}