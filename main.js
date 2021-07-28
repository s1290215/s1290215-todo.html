const addTaskTrigger = document.getElementsByClassName('js-addTask-trigger')[0];
const addTaskTarget = document.getElementsByClassName('js-addTask-target')[0];
    const addTaskValue = document.getElementsByClassName('js-addTask-value')[0];
    const removeTask = removeButton => {
      const targetTask = removeButton.closest('li');
      addTaskTarget.removeChild(targetTask);
    };
    const addTask = task => {
      const listItem = document.createElement('li');
      const removeButton = document.createElement('button');
      removeButton.innerText = 'タスクを削除する';
      removeButton.addEventListener('click', () => removeTask(removeButton));
      listItem.innerText = task;
      listItem.append(removeButton);
      addTaskTarget.appendChild(listItem);
    };
    addTaskTrigger.addEventListener('click', event => {
      const task = addTaskValue.value;
      addTask(task);
      addTaskValue.value = '';
    });
