const menu = document.querySelector('.menu');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const addTaskSection = document.getElementById('add-task');
const themeToggle = document.getElementById('theme-toggle');
const taskList = document.getElementById('task-list')
open.addEventListener('click',()=>{
    menu.classList.remove('-top-50');
    menu.classList.add("top-[56px]");
    open.classList.add('hidden');
    close.classList.remove('hidden'); 
})

close.addEventListener('click', ()=>{
    menu.classList.remove("top-[56px]");
    menu.classList.add("-top-50");
    open.classList.remove('hidden');
    close.classList.add('hidden');
})



function showAddTask(){
    addTaskSection.classList.remove('hidden');
}
function hideAddTask(){
    addTaskSection.classList.add('hidden')
}
function addTask(){
    addTaskSection.classList.add('hidden');
    const taskName = document.getElementById('taskName').value.trim();
    let cato = document.getElementById('taskCato').value.trim();
    document.getElementById('taskName').value = ''
    document.getElementById('taskCato').value = ''
    // console.log(taskName);
    // console.log(cato);
    
    if (taskName){
        if (!cato){
            cato = 'Nil'
        }
        newTask = 
        `<tr>
            <td class="border border-gray-400 py-1 leading-loose px-1 md:px-4 w-4/10"><input type="checkbox" name="" id="">${taskName}</td>
            <td class="border border-gray-400 py-1 leading-loose px-1 md:px-4 w-3/10">${cato}</td>
            <td class="border border-gray-400 py-1 leading-loose px-1 md:px-4 w-2/10">Pending</td>
        </tr>`
        taskList.insertAdjacentHTML('afterbegin', newTask);

    }
    saveTaskList()
    taskListupdate()
}
function taskListupdate(){
    const checkbox = document.querySelectorAll('table input[type="checkbox"]')
    checkbox.forEach(check => {
    check.addEventListener('change',checked);
})
}

function checked(event){
    const box = event.target
    if (box.checked){
        console.log(box);
        box.setAttribute('checked', '')
        
        let task = box.parentElement
        // let tcato = task.nextElementSibling
        task.classList.add('line-through')
        let progress = box.parentElement.nextElementSibling.nextElementSibling
        progress.textContent = "Completed"
    }
    if(!box.checked){
        box.removeAttribute('checked')
        let task = box.parentElement
        // let tcato = task.nextElementSibling
        let progress = box.parentElement.nextElementSibling.nextElementSibling
        task.classList.remove('line-through')
        progress.textContent = "Pending"
    }
    saveTaskList()
}
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    document.body.classList.remove('dark');
    themeToggle.innerHTML = '<img class="w-15" src="images/light-theme-logo.png" alt=""></img>';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isdark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isdark ? 'dark' : 'light');
    // themeToggle.classList.add('rotate-360');
    themeToggle.innerHTML = isdark ? '<img class="w-10" src="images/dark-theme-logo.png" alt="">' : '<img class="w-15" src="images/light-theme-logo.png" alt="">';
});


function saveTaskList() {
    const taskData = taskList.innerHTML;
    localStorage.setItem("taskData", taskData);
  }

  function loadTaskList() {
    const savedData = localStorage.getItem("taskData");
    
    if (savedData) {
      document.getElementById("task-list").innerHTML = savedData;
    }
    taskListupdate()
}

  window.addEventListener("DOMContentLoaded", () => {
    loadTaskList();
  });

taskListupdate()