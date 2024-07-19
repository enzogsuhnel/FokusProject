const addTaskButton = document.querySelector('.app__button--add-task');
const formAddTask = document.querySelector('.app__form-add-task');

addTaskButton.addEventListener('click', () => {
    formAddTask.classList.toggle('hidden');
})
