interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Stéphane',
  lastName: 'Delarue',
  age: 19,
  location: 'Lille',
};
const student2: Student = {
  firstName: 'Alejandra',
  lastName: 'Rojo',
  age: 20,
  location: 'Mexico City',
};
const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');
studentsList.forEach((i) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = i.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = i.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);
