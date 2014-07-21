var expect = require("chai").expect,
  Person = require("../../src/people/person.js");

  var sana = new Person("sana", "123-456");

describe("Person", function(){
	describe("initialization", function(){
		it("should have a name", function(){
			expect(sana.name).to.exists();
		});

		it("should have a contact number", function(){
			expect(sana.contact).to.exists();
		});

		it("should be an instance of Person", function(){
			expect(sana instanceof Person).to.eql(true);
		});

	});
  
});