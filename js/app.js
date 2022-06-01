// cached element references
const task = document.getElementById('task')
const submitBtn = document.getElementById('submit-button')
const toDoList = document.getElementById('todo-list')

// add event listener
submitBtn.addEventListener('click', function(evt) {
  while (task.value !== '') {
    const li = document.createElement('li')
    li.textContent = task.value
    toDoList.appendChild(li)
    task.value = ''
  }
})

