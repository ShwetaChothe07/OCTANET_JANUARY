let totalTasks = 0;
let completedTasks = 0;

function addTask(category) {
    const inputElement = document.getElementById('newTaskInput');
    const taskText = inputElement.value.trim();
    const deadlineInput = document.getElementById('deadlineInput');
    const deadline = deadlineInput.value.trim();
    const priorityInput = document.getElementById('priorityInput');
    const priority = priorityInput.value;

    if (taskText !== '' && deadline !== '') {
        const taskList = document.getElementById(`${category}Tasks`);

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <span>Deadline: ${deadline}</span>
            <span>Priority: ${priority}</span>
            <button onclick="completeTask(this.parentElement, '${category}')">Complete</button>
        `;

        taskList.appendChild(taskItem);
        inputElement.value = '';
        deadlineInput.value = '';
        priorityInput.value = 'High'; // Set default priority

        totalTasks++;
        updateProgress();
    }
}

function completeTask(taskElement, category) {
    const completedTasksList = document.getElementById('completedTasks');
    taskElement.querySelector('button').remove(); // Remove "Complete" button
    completedTasksList.appendChild(taskElement);

    completedTasks++;
    updateProgress();
}

function updateProgress() {
    const progressBar = document.getElementById('progressBar');
    const progressStatus = document.getElementById('progressStatus');
    const taskCount = document.getElementById('taskCount');

    const completionPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    progressBar.style.width = `${completionPercentage}%`;
    progressStatus.textContent = `${completionPercentage.toFixed(2)}% Complete`;
    taskCount.textContent = `Completed tasks: ${completedTasks} / Total tasks: ${totalTasks}`;
}
