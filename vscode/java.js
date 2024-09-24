document.getElementById('button').addEventListener('click', function(){
    let task = document.getElementById('input').value; 
    
    if (task){
        const li = document.createElement('li');
        li.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function(){
            li.remove()
        });
        li.appendChild(removeButton);
        document.getElementById('list').appendChild(li);
        task.value = '';
    }
});