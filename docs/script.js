const menu = document.querySelector('.menu');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const addTaskSection = document.getElementById('add-task');
console.log(addTaskSection);

open.addEventListener('click',()=>{
    menu.classList.remove('-top-50');
    menu.classList.add("top-[45px]");
    open.classList.add('hidden');
    close.classList.remove('hidden'); 
})

close.addEventListener('click', ()=>{
    menu.classList.remove("top-[45px]");
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
    console.log(taskName);
    console.log(cato);
    const taskList = document.getElementById('task-list')
    if (taskName){
        if (!cato){
            cato = 'Nil'
        }
        newTask = `<li class="flex justify-between">
                            <span>${taskName}</span>
                            <span>${cato}</span>
                            <span>pending</span>
                        </li>
                    `
        taskList.insertAdjacentHTML('afterend', newTask);

    }
    
}