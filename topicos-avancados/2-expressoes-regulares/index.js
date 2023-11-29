function PhoneNumber(phoneNumberString) {
  //validação com expressoes regulares
  const fixedString = phoneNumberString.replace(/[\s a-z A-Z]/g, "");
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/);
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "");
}

console.log(new PhoneNumber("+55 (81) 9 98725-2554"));
console.log(new PhoneNumber("+1 (55) 9 as725-999-2554"));
