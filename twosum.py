class Solution:
    def twoSum(self, nums, target):
        theOtherDict = {}
        for index, item in enumerate(nums):
            if item in theOtherDict:
                return [theOtherDict[item], index]
            else:
                theOtherDict[target - item] = index


def execute():
    nums = [2, 7, 11, 15]
    target = 9
    sol = Solution()
    print(sol.twoSum(nums=nums, target=target))


if __name__ == "__main__":
    execute()
