const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    let todos = [];

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // tránh tải lại trang

      const text = input.value.trim();
      if (text === '') return;

      const newTodo = {
        id: Date.now(),
        text: text
      };

      todos.push(newTodo);
      input.value = '';

      renderTodos();
    });

    function renderTodos() {
      list.innerHTML = '';
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        list.appendChild(li);
      });
    }