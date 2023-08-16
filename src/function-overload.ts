type Numeric = boolean | number;
type Combinable = string | number;
type Universal = Numeric & Combinable;

// Returns type Combinable even though 2 numbers are passed in or strings
// This is an example of Function overload stating the param types for each instance and what the expected return value is
// Can't use arrow functions BOOOO :(
function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
function add(n1: string, n2: number): string;
function add(n1: number, n2: string): string;
function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

const result = add("Ellissa", "Leeyan");
result.split(" "); // Will not without function overload because typescript assuming the result will be type combinable and not string!
