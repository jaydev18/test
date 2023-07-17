const students = [
    {name: "Alice", age: 20},
    {name: "Bob", age: 21},
    {name: "Charlie", age: 20},
    {name: "David", age: 21}
]

function groupBy(students, propertyName) {
    return students.reduce((result, obj) => {
      const propertyValue = obj[propertyName];
      if (!result[propertyValue]) {
        result[propertyValue] = [];
      }
      result[propertyValue].push(obj);
      return result;
    }, {});
  }
console.log(groupBy(students, "age"))