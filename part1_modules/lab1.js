const _ = require('lodash');

const holidays = [
  { name: 'Christmas', date: '2025-12-25' },
  { name: 'Canada Day', date: '2025-07-01' },
  { name: 'New Year', date: '2026-01-01' },
  { name: 'Thanksgiving', date: '2025-10-13' },
];

const today = new Date();

holidays.forEach(holiday => {
  const date = new Date(holiday.date);
  const diffTime = date - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(`${holiday.name} is in ${diffDays} days.`);
});

const randomHoliday = _.sample(holidays);
console.log(`Random holiday: ${randomHoliday.name} on ${randomHoliday.date}`);

console.log(`Index of Christmas: ${_.findIndex(holidays, { name: 'Christmas' })}`);
console.log(`Index of Canada Day: ${_.findIndex(holidays, { name: 'Canada Day' })}`);
