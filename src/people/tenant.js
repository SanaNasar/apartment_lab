var person = require("./person.js");

function Tenant(name, contact) {
  
  this.name = name;
  this.contact = contact;
  this.references = [];
}

inherits(Person, Tenant);


Tenant.prototype.addReference = function(reference){
  // add reference to references
  this.references.push(reference);
};

module.exports = Tenant;
