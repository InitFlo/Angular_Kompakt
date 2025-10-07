// implizit typiseirt
const car = {
    color: 'red',
    vin: '0258983424'
};

car.engine = 'hybrid';
console.log(car);

let project = 'Plazthalter';
project = 34;

// explizite Typisierung

let info: any = "Text";
info = true;

console.log(typeof info); // JS-Datentyp

// simple types: number, string, boolean
let birthYear: number = 1974;
let zip: string = '498509480'; // Keine Laufzeitprüfung

// objects
let myCar: { vin: string } = {
    vin: '23405tgejh'
}

// union type
let department: string | number = 'A1';
department = 234;

// listen / array
let listOfItems: string[] = ['A', 'B'];
let listOfThings: (string | number)[] = [34, 'B'];
let listWithDiamonds: Array<number> = [4, 5, 6];

console.log(listOfItems);
console.log(listOfThings);
console.log(listWithDiamonds);

// Werte als Typen
let accessRole: 'Admin' | 'Guest' | null = null;
console.log(typeof accessRole);

// tuple
let record: [number, string, number] = [4, 'John Smith', 8309548];

// custom type
type year = number;
let established: year = 3298;

type computation = (x: number, y: number) => number;

const add: computation = (a, b): number => {
    return a + b
}



