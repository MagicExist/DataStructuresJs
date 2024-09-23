// Creating a new map
const userAge = new Map([
    ['Johhan',19],['Alejo',20],['Edison',14],['Brayan',24]
])

//Basic Operations
//Add
userAge.set(['Juan',30])
//Remove
userAge.delete('Juan')
//Get
console.log(userAge.get('Johhan'))
//Iterating over a map
userAge.forEach((v,k)=>{
    console.log(k," ",v)
})
// Creating a map with an object
const obj = {
    name:'Johhan',
    age:19
}
let newMap = new Map(Object.entries(obj))
console.log(newMap)
// Creating a map with an object list
const students = [
    { name: 'Alice', age: 25, grade: 'A' },
    { name: 'Bob', age: 30, grade: 'B' },
    { name: 'Charlie', age: 22, grade: 'C' }
];
let mapList = new Map(students.map(s => [s.name,s]));
mapList.forEach((v,k)=>{
    console.log(k,":",v)
})