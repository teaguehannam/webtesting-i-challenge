const { succeed, fail, repair, get } = require("./enhancer");

//Init data
const item = {
  name: "",
  durability: 0,
  enhancement: 0,
};
const maxItem = {
  name: "",
  durability: 100,
  enhancement: 20,
};
const enhancementTestFourteen = {
  name: "",
  durability: 50,
  enhancement: 14,
};

const enhancementTestSixteen = {
  name: "",
  durability: 50,
  enhancement: 16,
};

//See if app runs
it("run test", function () {
  expect(true).toBe(true);
});

describe("enhancer.js", function () {

	//New item will have durability at 100
  describe("repair()", function () {

    it("should accept an item, return a new item 100 durability", function () {
      repair(item);
      expect(item.durability).toBe(100);
    });

  });

  describe("succeed()", function () {

    it("increment it's enhancement by one when picked up", function () {
      succeed(item);
      expect(item.enhancement).toBe(1);
    });

    it("shouldn't increment the item is level 20", function () {
      succeed(maxItem);
      expect(maxItem.enhancement).toBe(20);
    });

  });

  describe("fail()", function () {

    it("should subtract 10 from durability and 1 from enhancement if enhancement level > 17", function () {
      fail(maxItem);
      expect(maxItem.enhancement).toBe(19);
      expect(maxItem.durability).toBe(90);
    });

    it("should subtract 5 from durability if enhancement level is less than 15", function () {
      fail(enhancementTestFourteen);
      expect(enhancementTestFourteen.durability).toBe(45);
    });


    it("should subtract 10 from durability if enhancement level is > 15 and < 17, enhancement should be unchanged", function () {
      fail(enhancementTestSixteen);
      expect(enhancementTestSixteen.durability).toBe(40);
      expect(enhancementTestSixteen.enhancement).toBe(16);
    });
    
  });
});