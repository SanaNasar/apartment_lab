var person = require("./person");
var inherits = require("./inherits.js");

function Manager(name, contact) {

  // set name and contact
  this.name = name;
  this.contact = contact;
  
  this.properties = []; // Declaring an empty array for properties
}
// Manager() inherits the properties from the 'parent function' Person()
	inherits(Person, Manager);

Manager.prototype.addProperty = function(property) {
  
  // addding property from properties
  this.properties.push(property);
  //Pushing the property values of Manager() into an empty array.
};

Manager.prototype.removeProperty = function(property) {
	var removeProperty = this.properties.indexof(property);

	// remove properties
	// Manager.removeProperty

	var removed = this.properties.splice.removeProperty(1);
	return removed;
};

module.exports = Manager;