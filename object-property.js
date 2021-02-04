const students = [
    {Id:101, Name: "Sakib"},
    {Id:102, Name: "Rakib"},
    {Id:103, Name: "Akib"},
    {Id:104, Name: "Labib"},
    {Id:105, Name: "Rahib"},
]
// console.log(object);
const Name = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i].Name;
    Name.push(element);
    
}
console.log(Name);

// using map
const id = students.map(st => st.Id);
console.log(id);

const names = students.map(st => st.Name);
console.log(names);

// using filter
const bigger = students.filter(st => st.Id>103);
console.log(bigger);

// using find
const bigFind = students.find(st => st.Id < 104);
console.log(bigFind);