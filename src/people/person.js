
// Person is the main method which is created with Person function()

function Person(name, contact){
  this.name = name;
  this.contact = contact;
}

// For testing purpose

// var Person = app.Person;
// var Sana = new Person("Sana", "123-4567");
// Sana.contact();
// Sana.name();


module.exports = Person;