// lib/ticketStore.js

const tickets = {};

export default {
  getTickets: (userId) => {
    return tickets[userId] || 0;
  },
  addTicket: (userId) => {
    if (!tickets[userId]) tickets[userId] = 0;
    tickets[userId] += 1;
    return tickets[userId];
  }
};
