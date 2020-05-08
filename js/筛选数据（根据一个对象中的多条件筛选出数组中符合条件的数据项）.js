/**
 * @method multiFilter
 * @param {Array} originalArr (被用来筛选的原始数组)
 * @param {Object} filtersObj ()
 * @return {Array}
 */
function multiFilter(originalArr, filtersObj) {
  const filterKeys = Object.keys(filtersObj);
  return originalArr.filter(item => {
    return filterKeys.every(key => {
      if (!filtersObj[key].length) return true;
      return !!~filtersObj[key].indexOf(item[key]);
    });
  });
}
const originalArr = [
  { name: "Anne", age: 23, gender: "female" },
  { name: "Leila", age: 16, gender: "female" },
  { name: "Jay", age: 19, gender: "male" },
  { name: "Mark", age: 40, gender: "male" }
];
const filtersObj = {
  name: ["Leila", "Jay"],
  age: [19, 23]
};
// resArr: {name: "Jay", age: 19, gender: "male"}
const resArr = multiFilter(originalArr, filtersObj);