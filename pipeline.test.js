const pipeline = require("./pipeline");
describe("My pipeline", () => {
  test("works", () => {
    expect(pipeline.pipeline()).toEqual("CI/CD Pipline Exercise");
  });
});
