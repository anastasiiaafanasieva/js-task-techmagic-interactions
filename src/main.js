'use strict';

import * as requestApi from './api/request.js';
import { User } from './classes/classes.js';

const usersList = document.querySelector('.users__container-tableheads');
const getAllButton = document.querySelector('.users__buttons-button-all');
const selectButton = document.querySelector('.users__buttons-select');
const addButton = document.querySelector('.users__buttons-button-add-user');

getAllButton.addEventListener('click', () => {
  const selectButton = document.querySelector('.users__buttons-select');
  selectButton.value = '';

  requestApi.getAll(createList);
});

selectButton.addEventListener('change', (event) => {
  requestApi.getSelectedItem(event.target.value, createList);
});

addButton.addEventListener('click', () => {
  let form = document.forms.addUser;
  const userName = form.elements.name.value;
  const email = form.elements.email.value;
  const phone = form.elements.phone.value;

  if (!userName || !email || !phone) {
    return window.alert('Please, enter all values');
  } else if (!email.match(/^\S+@\S+\.\S+$/)) {
    return window.alert('Please, enter correct email');
  } else {
    const newUser = new User(userName.trim(), email.trim(), phone.trim());
    form.reset();

    requestApi.postNewUser(newUser, createList);
    requestApi.getAll(createList);
  }
});

function createList(data) {
  clearList();

  data.map(user => {
    usersList.insertAdjacentHTML(('afterend'), `
      <tr class="users__container-table-data">
        <td class="cell">${user.name}</td>
        <td class="cell">${user.email || 'No data'}</td>
        <td class="cell">${user.phone || 'No data'}</td>
      </tr>
    `)
  })
}

function createSelectList(data) {
  data.map(user => {
    selectButton.insertAdjacentHTML(('beforeend'), `
      <option value=${user.id}>${user.name}</option>
    `)
  })
}

function clearList() {
  const usersTableData = document.querySelectorAll('.users__container-table-data');
  usersTableData.forEach(user => user.remove());
}

requestApi.getAll(createSelectList);
