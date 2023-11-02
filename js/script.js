console.log('Starting project');
document.title = 'Updated TODO List';
// document.body.innerHTML = '<h1>Bonjour</h1><p>Notre premier pas en DOM</p>';
console.log(document);

// Get the input field using the id
var inputField = document.getElementById('taskName');

// Get add button using the id
var addBtn = document.getElementById('addBtn');
console.log(addBtn);

// Get todo list element <ul>
var todoList = document.getElementsByClassName('todo-list');
// console.log(todoList);

// Add click event listner to add btn
addBtn.addEventListener('click', handleAddClick);

function handleAddClick(e) {
  // console.log(e);
  // console.log(e.target);
  // console.log(inputField.value);

  // Check if the user wrote task name in the field
  if (inputField.value === '') {
    alert('Please enter your task name');
  } else {
    // Create span element <span>
    var span = document.createElement('span');

    // Add task name in span
    span.innerText = inputField.value;

    // Create trash icon <i>
    var i = document.createElement('i');
    // Add fa-solid fa-trash classes to trash icon
    // i.className = 'fa-solid fa-trash';
    // i.classList.add('fa-solid', 'fa-trash');
    // i.classList.remove('fa-trash');
    i.setAttribute('class', 'fa-solid fa-trash');

    // Create list item <li>
    var li = document.createElement('li');

    // Append span and trash icon to list item
    li.append(span, i);
    console.log(li);

    // Append li element <li> to todoList element <ul>
    todoList[0].appendChild(li);
  }
}
