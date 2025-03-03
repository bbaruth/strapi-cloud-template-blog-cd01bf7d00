'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/reminders',
      handler: 'reminder.find',
    },
    {
      method: 'GET',
      path: '/reminders/:id',
      handler: 'reminder.findOne',
    },
    {
      method: 'POST',
      path: '/reminders',
      handler: 'reminder.create',
    },
    {
      method: 'PUT',
      path: '/reminders/:id',
      handler: 'reminder.update',
    },
    {
      method: 'DELETE',
      path: '/reminders/:id',
      handler: 'reminder.delete',
    },
  ],
};
