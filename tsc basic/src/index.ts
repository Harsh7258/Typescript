// TYPE
let age: number = 20;
// type --> number

// ARRAY
let numbers: number[] = [1, 2, 3]; // value cant be a string
let num: number[] = [];
num[1] = 2;
num[2] = 3; // cant be a string
// type --> array --> number[]

// TUPLES
// Tuple --> is a typed array with a pre-defined length and types for each index
let user: [number, string] = [1, 'Harsh'];
// tuples are only useful when there are two values 

// ENUM
//It is used to define the set of named constants, i.e., a collection of related values.

//pascal case
const enum Size {Small = 1, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize)

// FUNCTIONS
function calculatorTax(income: number, taxYear: number): number{
    if(taxYear < 2022){
        return income * 1.2;
    }
    return income *1.3;
}
calculatorTax(10_000, 2022);

// OBJECTS 
//the type of all non-primitive values (primitive values are undefined , null , booleans, numbers, bigints, strings). With this type, we can't access any properties of a value.

let employee : {
    readonly id: number,
    name: string
    retire: (date: Date) => void
} = {
    id: 1, name: 'harsh',
    retire: (date: Date) => {
        console.log(date);
    }
}

// TYPE ALIAS
// Type Aliases allow defining types with a custom name (an Alias).

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays

type AnyEmployee ={
    readonly id: number,
    name: string
    retire: (date: Date) => void
}
let employee1: AnyEmployee ={
    id: 2, name: 'mahima',
    retire: (date: Date) => {
        console.log(date);
    }
}

// UNION TYPES
function kgTolbs(weight: number | string): number {
    // narrowing 
    if (typeof weight === 'number')
    return weight * 2;
    else return parseInt(weight) * 2;
}
kgTolbs(10);
kgTolbs('7');

// NULLABLE TYPES
function greet(name: string | null | undefined){
    if(name)
    console.log(name.toUpperCase());
    else 
    console.log('hola!');
}
greet(null)