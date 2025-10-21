const menu = document.querySelector('.menu');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const addTaskSection = document.getElementById('add-task');

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
    const taskList = document.getElementById('task-list')
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
        taskList.insertAdjacentHTML('afterend', newTask);

    }
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
    console.log(box);
    
    if (box.checked){
        let task = box.parentElement
        // let tcato = task.nextElementSibling
        task.classList.add('line-through')
        let progress = box.parentElement.nextElementSibling.nextElementSibling
        progress.textContent = "Completed"
    }
    if(!box.checked){
        let task = box.parentElement
        // let tcato = task.nextElementSibling
        let progress = box.parentElement.nextElementSibling.nextElementSibling
        task.classList.remove('line-through')
        progress.textContent = "Pending"
    }
}

taskListupdate()