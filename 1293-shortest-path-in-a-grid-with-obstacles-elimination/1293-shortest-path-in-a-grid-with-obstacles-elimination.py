class Solution:
    def shortestPath(self, grid: List[List[int]], k: int) -> int:
        rows = len(grid)
        cols = len(grid[0])
        
        target = (rows - 1, cols - 1)
        
        if k >= (rows - 1 ) + (cols - 1):
            return rows + cols - 2
        
        queue = collections.deque([(0, (0, 0, k))])
        
        seen = set([(0 , 0, k)])
        
        directions = [(1,0), (-1,0), (0,-1), (0,1)]
        
        while queue:
            steps, (row, col, removals_left) = queue.popleft()
            
            if(row, col) == target:
                return steps
            
            for row_inc, col_inc in directions:
                new_row = row + row_inc
                new_col = col + col_inc
                
                if (0 <= new_row < rows) and (0 <= new_col < cols):
                    new_removals = removals_left - grid[new_row][new_col]
                    new_state = (new_row, new_col, new_removals) 
                    
                    if new_removals >= 0 and new_state not in seen:
                        seen.add(new_state)
                        queue.append((steps+1, new_state))
                        
                        
        return -1