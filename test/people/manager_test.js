var expect = require("chai").expect,
  Person = require("../../src/people/person.js"),
  Tenant = require("../../src/people/tenant.js"),
  Manager = require("../../src/people/manager.js");

var sana = new Manager("sana", "123-456");
var cody = new Manager("cody", "333-333");

describe("Manager", function(){
  describe("initialization", function(){
    it("should have a name", function(){
      expect(sana.name).to.equal("sana");
    });
    it("should have a contactnumber", function(){
      expect(sana.contact).to.equal("123-456");
    });
    it("should be an instanceof Manager", function() {
      expect(cody instanceof Manager).to.eql(true);
    });
  });
  describe("#addProperty", function(){
    it("should add to the list", function(){
      roper.properties = ["kaui", "Mali", "Bahamas"];
      roper.addProperty("Maimi");
      expect(roper.properties[3]).to.equal("Maimi");
    });
});
});