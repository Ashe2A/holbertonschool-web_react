// 1. Let's build a Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: 'John'
// fullTimeEmployee: false
// lastName: 'Doe'
// location: 'London'

// 2. Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: 'John'
// fullTimeEmployee: true
// lastName: 'Doe'
// location: 'London'
// numberOfReports: 17

// 3. Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;
console.log(printTeacher('John', 'Doe'));
// J. Doe

// 4. Writing a class
interface StudentConstructor {
  firstName: string;
  lastName: string;
};

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
};

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
};

const studentLambda = new StudentClass({ firstName: 'John', lastName: 'Doe' });
console.log(studentLambda.workOnHomework());
// Currently working
console.log(studentLambda.displayName());
// John
