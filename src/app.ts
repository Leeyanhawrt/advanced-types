// type Combinable = number | string;
// type Numeric = boolean | number;
// type Universal = Numeric & Combinable;

// This is known as type guarding using typeof, even though Combinable accepts both number and string inputs typescript
// will error out if not accounting for different utilization of each type that is potentially valid

//TYPECAST TYPEOF
// const add = (n1: Combinable, n2: Combinable): Combinable => {
//   if (typeof n1 === "string" || typeof n2 === "string") {
//     return n1.toString() + n2.toString();
//   }
//   return n1 + n2;
// };

//TYPECAST KEY IN OBJECT
type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin;

const e1: ElevatedEmployee = {
  name: "Ellissa",
  startDate: new Date(),
  privilages: ["queen status"],
};

const printEmployeeInformation = (emp: UnknownEmployee) => {
  console.log(`Name: ${emp.name}`);
  // console.log(emp.privilages); Will error as employee COULD or COULD NOT have the priviliages property based off which type it is built off of
  // This is a type guard that checks if certain keys exist within the object param being passed in
  if ("privilages" in emp) {
    console.log("Privilages: " + emp.privilages);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
};

printEmployeeInformation(e1);

// TYPE GUARD INSTANCEOF
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving... a truck");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  // if ("loadCargo" in vehicle) { This is a valid alternative to instanceOf
  //   vehicle.loadCargo(5);
  // }
  // Instance of type guard that checks if instance object was created by a certain Class
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
};

useVehicle(v1);
useVehicle(v2);

// DISCRIMATED UNIONS
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving at speed: ${speed}`);
};

moveAnimal({ type: "bird", flyingSpeed: 5 });

// TYPECASTING
// const userInput = <HTMLInputElement>document.getElementById("user-input"); Method 1
const userInput = (<HTMLInputElement>(
  document.getElementById("user-input")!
)) as HTMLInputElement; // Method 2 Exclamation marks stats that the value will never yield NULL if unsure use if check

// Will get an error stating that value may not exist unless explicitly telling TypeScript that the element is an input element
if (userInput) {
  (userInput as HTMLInputElement).value = "Hello there!";
}

// Index Properties with undetermined number of keys { email: 'Not a valid email', username: 'Must start with a character'}
interface ErrorContainer {
  id: string; // Predetermined properties must be the same as index property
  [prop: string]: string; // Key must be string as well as value, [] indicates we do not know how many properties there will be
}

const errorBag: ErrorContainer = {
  id: "1", // ID must be included if added as a predetermined property within the interface
  email: "Not a valid email",
  username: "Must start with a capital character!",
};

// NULLISH COALESCING
// Similar to OR / AND checks, however only applies if value is NULL or UNDEFINED
const data = null;
const storedData = data ?? "DEFAULT"; // ?? Determines if value is null or undefined, if so storedData = DEFAULT
