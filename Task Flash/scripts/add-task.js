import {tasks, addTask} from "./tasks.js"


export function generateTasksHTML() {
  let HTML = ''
  tasks.forEach((task)=>{
    HTML += `
    <div class="task-box">
      <div class="container-image-info">
          <img class="task1-image" src="images/task1-image.webp">
          <div class="info-box">
            <p class="title">${task.title}</p>
            <p class="description">My kitchen sink has a leaky pipe that has been getting worse. This is the third time this pipe has leaked in the past 3 months</p>
            <p class="price">Price for the service: $20</p>
            <button class="accept-button">Accept Task</button>
          </div>
      </div>
    </div>
    `
  })

  return HTML
}

document.querySelector('.js-task-container').innerHTML = generateTasksHTML()



document.addEventListener('click', ()=>{
  addTask()
  document.querySelector('.js-task-container').innerHTML = generateTasksHTML()
})