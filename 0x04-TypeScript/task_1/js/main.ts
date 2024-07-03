// Define the Teacher interface
export interface Teacher {
  readonly firstName: string;  // First name, can't be changed after initialization
  readonly lastName: string;   // Last name, can't be changed after initialization
  fullTimeEmployee: boolean;   // Whether the teacher is full-time
  yearsOfExperience?: number;  // Optional: years of experience
  location: string;            // Location of the teacher
  [index:string]: any;         // Allow any additional properties
}

// Define the Directors interface, extending Teacher
export interface Directors extends Teacher {
  numberOfReports: number;     // Number of reports, specific to directors
}

// Define a function type for printing teacher names
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`; // Return first initial and last name
}

// Define a constructor interface for the StudentClass
export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

// Define the interface for the StudentClass
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
export class StudentClass implements IStudentClass {
  private _firstName!: string;  // Private field for first name
  private _lastName!: string;   // Private field for last name

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';  // Method to indicate student is working
  }

  displayName() {
    return this._firstName;  // Method to display student's first name
  }
}

// Function to create a new student instance
export function createStudent(
  ctor: IStudentClassConstructor, 
  firstName: string, 
  lastName: string
): IStudentClass {
  return new ctor(firstName, lastName);  // Create and return a new student instance
}
