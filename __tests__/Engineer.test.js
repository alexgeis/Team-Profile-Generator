const Engineer = require("../lib/Engineer");

describe("TEST FOR ENGINEER CLASS", () => {
  it("Should have a github property when we instantiated with the github parameter", () => {
    const name = "Molly";
    const id = 10;
    const email = "this@that.com";
    const github = "mollycodes";
    const emp = new Engineer(name, id, email, github);
    expect(emp.github).toEqual(github);
  });
  it("Should return the github property of the object when getGithub method is invoked", () => {
    const name = "Molly";
    const id = 10;
    const email = "this@that.com";
    const github = "mollycodes";
    const emp = new Engineer(name, id, email, github);
    expect(emp.getGithub()).toEqual(github);
  });
  it("Should return 'Engineer' when the getRole method is invoked", () => {
    const name = "Molly";
    const id = 10;
    const email = "this@that.com";
    const emp = new Engineer(name, id, email);
    expect(emp.getRole()).toEqual("Engineer");
  });
});
