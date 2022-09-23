class Solution:
    def smallestRange(self, nums: List[List[int]]) -> List[int]:
        # TC: O(n*log(k)), SC: O(k), n = max(len(array in nums)), k = len(nums)
        # (value, array index, num index)
        min_heap = [(nums[i][0], i, 0) for i in range(len(nums))]
        heapq.heapify(min_heap)
        curr_max = max(min_heap)[0]
        min_range = [min_heap[0][0], curr_max]

        while min_heap[0][2] < len(nums[min_heap[0][1]]) - 1:
            _, i, j = heapq.heappop(min_heap)
            next_num = nums[i][j + 1]
            curr_max = max(curr_max, next_num)
            heapq.heappush(min_heap, (next_num, i, j + 1))
            if curr_max - min_heap[0][0] < min_range[1] - min_range[0]:
                min_range = [min_heap[0][0], curr_max]
        
        return min_range