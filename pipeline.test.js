const pipeline = require("./pipeline");
describe("My pipeline", () => {
  test("works", () => {
    expect(pipeline.pipeline()).toEqual("Hello, CI/CD Pipline Exercise");
  });
});
