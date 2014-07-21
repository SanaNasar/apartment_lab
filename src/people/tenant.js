var person = require("./person.js"),
	inherits = require("../inherits.js");

function Tenant(name, contact) {
  
  this.name = name;
  this.contact = contact;
  this.references = [];
}

inherits(person, Tenant);


Tenant.prototype.addReference = function(reference){
  // add reference to references
  this.references.push(reference);
};

module.exports = Tenant;
