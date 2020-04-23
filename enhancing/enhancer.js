  
module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item }, item.enhancement < 20 && item.enhancement++;
}

function fail(item) {
  if(inRange(item.enhancement, 0, 15)) {item.durability -= 5;}
  if(inRange(item.enhancement, 16, 20)) {item.durability -=10;}
  if(inRange(item.enhancement, 17, 20)) {item.enhancement--;}
}

function repair(item) {
  return { ...item }, (item.durability = 100);
}

function get(item) {
  return { ...item };
}

function inRange(x, min, max) {
  //positive is true, negative is false
  return ((x-min)*(x-max) <= 0);
}