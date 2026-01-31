const personName = "Jack";

getPersonName = () => {
  return personName;
}

const result = getPersonName();
console.log(result);

const upperCaseResult = result.toLocaleUpperCase();
console.log(upperCaseResult);
