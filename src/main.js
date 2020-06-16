// HMR
if (module.hot) {
  module.hot.accept()
}

// Sweet Alert 2
import Swal from 'sweetalert2'

// Varibles ===============================================================

// Add Task
let input = document.querySelector(`.add-task input`)
let addBtn = document.querySelector(`.add-task img`)

// States
let tasksCount = document.querySelector(`.tasks-count span `)
let completedTasks = document.querySelector(`.completed-tasks span`)

// Tasks Content
let tasksContent = document.querySelector(`.tasks-content`)
let noTask = document.querySelector(`.tasks-content .no-task`)
let taskBox = document.querySelector(`.tasks-content .task-box`)
let doneTaskBtn = document.querySelector(`.task-box .done-task`)
let doneTaskSound = document.querySelector(`.task-box #done-task`)
let removeTaskBtn = document.querySelector(`.task-box .remove-task`)
let removeTaskSound = document.querySelector(`.task-box #remove-task`)

// Methods =================================================================

// Add Task =========================

// Focus on load
window.onload = function () {
  input.focus()
}

addBtn.onclick = () => {
  if (input.value === ``) {
    Swal.fire({
      icon: 'warning',
      text: 'You have to add task!',
    })
  } else {
    input.value = ``
    input.focus()
    noTask.remove()

    let todoDiv = document.createElement(`div`)
    todoDiv.className = `task-box`

    let text = document.createTextNode(input.value)
    todoDiv.innerText = input.value

    let imgDone = document.createElement(`img`)
    imgDone.className = `done-task`

    let imgRemove = document.createElement(`img`)
    imgRemove.className = `remove-task`

    tasksContent.appendChild(todoDiv)
  }
}

// Done Task ========================
doneTaskBtn.onclick = () => {
  // Add completed class
  taskBox.classList.toggle(`comleted`)

  // play sound
  doneTaskSound.play()

  // Change comleted tasks number
  completedTasks.innerHTML = Number(completedTasks.innerHTML) + 1
}

// remove Task ======================
removeTaskBtn.onclick = () => {
  // play Sound
  removeTaskSound.play()

  // Remove from dom
  setTimeout(() => {
    tasksContent.remove()
  }, 100)
}
