'use strict';

export class NotFoundError extends Error {
  constructor(message) {
    super();
    this.name = 'NotFoundError';
    this.message = message;
  }
}

export class User {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
