// Todo App

//textbox



function addTodo(){
    const txtBox = document.querySelector('input');
    const msg = txtBox.value;   

    
    if(msg === ''){
        return;
    }

    const todocontainer = document.createElement('div');
    todocontainer.className = 'flex justify-between items-center';
    
    const todoTitle = document.createElement('h4');
    todoTitle.textContent = msg;

    const todoBtn = document.createElement('button');
    todoBtn.className = 'bg-green-600 rounded-lg py-3 px-4';
    todoBtn.textContent = 'Done'; 
    todoBtn.onclick = marksDone;

    todocontainer.appendChild(todoTitle);
    todocontainer.appendChild(todoBtn);

    const holl = document.querySelector('#text-content');

    holl.appendChild(todocontainer);
  
    txtBox.value = '';
}

function marksDone(event){
    const clikedBtn = event.target;
    clikedBtn.classList.add('hidden');

    const title = clikedBtn.previousElementSibling;

    title.classList.add('line-through');

    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'bg-red-600 rounded-lg py-3 px-4';
    deleteButton.textContent = 'Delete'; 
    deleteButton.addEventListener('click', function(){
        title.remove();
        clikedBtn.remove();
    })

    
    const remove = title.appendChild(deleteButton);
}