
function twoSum(nums, target) {
  let theOtherDict = {};
  let theResult = {};
  nums.forEach((value, index, array)=> {
      if (value in theOtherDict)
      {
        theResult[theOtherDict[value]] = index;
      } else {
        theOtherDict[target - value] = index;
      }
    });
  return theResult;
}

function execute() {
  let nums = [2, 7, 11, 15];
  let target = 9;
  console.log(twoSum(nums, target));
}

execute();
