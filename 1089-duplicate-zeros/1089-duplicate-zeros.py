class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
#       Input: arr = [1,0,2,3,0,4,5,0]
#       Output: [1,0,0,2,3,0,0,4]  
        i = 0
        while i < len(arr):
            if arr[i] != 0:
                    i += 1
            else:
                #arr.length + 3 : so we need to discard the last 3 elements in the array, after we insert 0
                arr.insert(i+1,0)
                i += 2
                arr.pop()



