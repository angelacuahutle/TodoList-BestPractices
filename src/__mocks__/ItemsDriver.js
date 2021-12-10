export function addEventListenerToInput() {
  const input = document.querySelector('#input');
  input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const itemElement = new List(input.value, false, listArr.length + 1);
      createItem(itemElement, listArr);
      addItemTodo(itemElement);
      storeTodosLocally();
      input.value = '';
      addEventsToEditIcons(listArr.length);
      addEventsToCheckboxes(listArr.length - 1);
    }
  });
}