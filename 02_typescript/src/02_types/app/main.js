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
let info = "Text";
info = true;
console.log(typeof info); // JS-Datentyp
// simple types: number, string, boolean
let birthYear = 1974;
let zip = '498509480'; // Keine Laufzeitprüfung
// objects
let myCar = {
    vin: '23405tgejh'
};
// union type
let department = 'A1';
department = 234;
// listen / array
let listOfItems = ['A', 'B'];
let listOfThings = [34, 'B'];
let listWithDiamonds = [4, 5, 6];
console.log(listOfItems);
console.log(listOfThings);
console.log(listWithDiamonds);
// Werte als Typen
let accessRole = null;
console.log(typeof accessRole);
// tuple
let record = [4, 'John Smith', 8309548];
let established = 3298;
const add = (a, b) => {
    return a + b;
};
export {};
//# sourceMappingURL=main.js.map