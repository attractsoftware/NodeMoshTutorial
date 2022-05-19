var _ = require("underscore");
var result = _.contains([1, 2, 4, 5, 6, 8, 10], 5);
console.log(result);
var people = [
  { name: "ravi", place: "perumagalur", id: 1, mobile: "9944416123" },
  { name: "Aravinth", place: "Vadachitoor", id: 2, mobile: "97812525" },
  { name: "Chinnaiyan", place: "perumagalur", id: 3 },
];

var resPeople = _.pluck(people, "name");
var mobilePeople = _.pluck(people, "mobile");
console.log(resPeople);
console.log(mobilePeople);

var stooges = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 },
];

var resMaxAge = _.max(stooges, (stooge) => {
  return stooge.age;
});
console.log(resMaxAge);

var numbers = [10, 5, 100, 2, 1000];
var miniNumber = _.min(numbers);
console.log(miniNumber);

var resSort = _.sortBy([5, 4, 6, 3, 1, 2]);
console.log(resSort);
var stooges = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 },
  { name: "Ravi", age: 40 },
  { name: "Suresh", age: 50 },
];

var resSort = _.sortBy(stooges, "name");
console.log(resSort);

var resSortArr = _.groupBy(stooges, "age");
console.log(resSortArr);

var resMobile = _.reject(people, (p) => {
  return p.mobile;
});
console.log(resMobile);

var resMobile = _.filter(people, (p) => {
  return p.mobile;
});
console.log(resMobile);
