const students = [
  { id: 1, name: "Ahmet",  point: 30 },
  { id: 2, name: "Mehmet", point: 80 },
  { id: 3, name: "Ayşe",   point: 40 },
  { id: 4, name: "Zeynep", point: 49 },
  { id: 5, name: "Emre",   point: 70 }
]


let studentFilters = students
  .filter(s => s.point < 50)
  .forEach(s => {
    s.point += 15
  })

console.log(students)


