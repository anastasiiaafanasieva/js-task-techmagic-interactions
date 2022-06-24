'use strict';

import { NotFoundError } from '../classes/classes.js'

const URL = 'https://mate.academy/students-api/users';


export async function request(url, options) {
  try {
    const result = await fetch(url, options);
    const json = await result.json();

    return json;
  } catch (error) {
    const err = error;

    return err;
  }
}

export function getAll(action) {
  request(URL)
    .then(users => action(users))
    .catch(error => handleError(new NotFoundError('Seems that URL is not correct')));
}

export function getSelectedItem(id, action) {
  request(`${URL}/${id}`)
    .then(users => action([users]))
    .catch(error => handleError(new NotFoundError('Cannot find selected item')));
}

export function postNewUser(user, action) {
  request(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user),
  }).then(getAll(action));
}

function handleError(error) {
  return window.alert(error.message);
}
