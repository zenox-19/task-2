document.getElementById('new-task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const taskName = document.getElementById('task-name').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskLabel = document.getElementById('task-label').value;

    // Create new task element
    const task = document.createElement('div');
    task.classList.add('task');

    // Create task details element
    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');
    taskDetails.innerHTML = `
        <strong>${taskName}</strong>
        <p>Deadline: ${taskDeadline}</p>
        <p>Priority: ${taskPriority}</p>
        <p>Label: ${taskLabel}</p>
    `;

    // Create task actions element
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    // Create complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
        task.classList.toggle('complete');
    });

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        task.remove();
    });

    taskActions.appendChild(completeButton);
    taskActions.appendChild(deleteButton);

    task.appendChild(taskDetails);
    task.appendChild(taskActions);

    // Add task to task list
    document.getElementById('tasks').appendChild(task);

    // Reset form
    document.getElementById('new-task-form').reset();
});