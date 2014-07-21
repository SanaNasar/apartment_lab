var expect = require("chai").expect,
  Person = require("../../src/people/person.js"),
  Tenant = require("../../src/people/tenant.js");
 
var sana = new Tenant("sana", "123-456");
var lucy = new Person("lucy", "444-4499");
var milo = new Person("milo", "111-2222");
var tia = new Person("tia", "312-321");

describe("Tenant", function(){
  describe("initialization", function(){
    it("should have a name", function(){
      expect(sana.name).to.equal("sana");
    });
    it("should have a contact number", function(){
      expect(sana.contact).to.equal("123-456");
    });
    it("should be an instanceof Tenant", function(){
      expect(sana instanceof Tenant).to.eql(true);
    });
  });
  describe("#addReference", function(){
    it("references array should exist", function(){
      expect(sana.references).to.exist();
    });
    it("should add new references", function(){
      jenny.references = ["lucy", "milo"];
      jenny.addReference("tia");
      expect(jenny.references[2]).to.eql("tia");
    });
  });

});