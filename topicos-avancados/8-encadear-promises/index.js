function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age) {
      resolve(age > 18);
    } else {
      reject(new Error("age is required"));
    }
  });
}

function getAge(birthday) {
  return new Promise((resolve, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      resolve(currentYear - birthYear);
    } else {
      reject(new Error("birthday is required"));
    }
  });
}

//
getAge("2009-09-02")
  .then((age) => {
    return checkAge(age); //ou checkAge(age), que vai retornar da mesma forma
  })
  .then((isOver18) => {
    if (isOver18) {
      console.log("maior de idade");
    } else {
      console.log("menor de idade");
    }
  })
  .catch((err) => {
    console.log(err.message);
  });
