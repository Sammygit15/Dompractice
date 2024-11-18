
document.getElementById('change-color').addEventListener('click', () => {
  document.body.style.backgroundColor = 'orange';
});

document.getElementById('add-element').addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = 'This is a new dynamic element!';
  document.getElementById('content').appendChild(newElement);
});

document.getElementById('toggle-visibility').addEventListener('click', () => {
  const content = document.getElementById('content');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('create-list').addEventListener('click', () => {
  const list = document.createElement('ul');
  for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${i}`;
    list.appendChild(listItem);
  }
  document.body.appendChild(list);
});

document.getElementById('change-font-size').addEventListener('click', () => {
  const content = document.getElementById('content');
  content.style.fontSize = '50px';
});

