/// <reference path='./crud.d.ts' />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`New row of ID ${newRowID}:\n${row}`);

const updatedRow: RowElement = {
  ...row,
  age: 23,
};
console.log(`Updated row of ID ${newRowID}:\n${updatedRow}`);

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
console.log(`Deleted row of ID ${newRowID}:\n${updatedRow}`);
