// Intersection Types, can also be done with interfaces

// type Admin = {
//   name: string;
//   privilages: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type SuperEmployee = Admin & Employee;

// const e1: SuperEmployee = {
//   name: "Ellissa",
//   privilages: ["queen status"],
//   startDate: new Date(),
// };

// console.log(e1);

// type Numeric = boolean | number;
// type Combinable = string | number;
// type Universal = Numeric & Combinable;

// const test: Universal = false This is invalid because type Universal has an intersection of Number ONLY
// const test: Universal = 5; // Works because Universal comprises of Numeric and Combinable which both include number for typing

// Intersection types using interfaces

interface Administrator {
  name: string;
  privilages: string[];
}

interface WorkerEmployee {
  name: string;
  startDate: Date;
}

interface AdminEmployee extends WorkerEmployee, Administrator {}

const e: AdminEmployee = {
  name: "Ellissa",
  privilages: ["queen status"],
  startDate: new Date(),
};

console.log(e);
