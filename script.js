let data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers = data.filter(person => person.profession === "developer");
  console.log("Developers:", developers);
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");
  const newData = { name, age, profession };
  data.push(newData);
  console.log("Data added successfully:", newData);
}

// 3. Remove Admins
function removeAdmin() {
  data = data.filter(person => person.profession !== "admin");
  console.log("Admins removed:", data);
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [{ name: "dummy", age: 30, profession: "developer" }];
  const result = data.concat(dummyArray);
  console.log("Concatenated Array:", result);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;
  console.log("Average Age:", average);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some(person => person.age > 25);
  console.log("At least one person above 25:", isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map(person => person.profession))];
  console.log("Unique Professions:", professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("Sorted by Age:", data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const johnIndex = data.findIndex(person => person.name === "john");
  if (johnIndex !== -1) {
    data[johnIndex].profession = "manager";
    console.log("John's profession updated to 'manager'");
  } else {
    console.log("John not found in the data");
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const professionCount = data.reduce(
    (count, person) => {
      count[person.profession]++;
      return count;
    },
    { developer: 0, admin: 0 }
  );
  console.log("Profession Count:", professionCount);
}
