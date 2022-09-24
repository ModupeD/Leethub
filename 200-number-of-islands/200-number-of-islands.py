class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        #create a check
        if not grid:
            return 0
        #initialize your rows, columns , visit and islands
        rows, cols = len(grid), len(grid[0])
        visit = set()
        islands = 0
        #intitialize the bfs function usinng your r and c as parameters
        def bfs(r,c):
            #intialize the queue as q
            q = collections.deque()
            # add r,c to visit as objects to check if you visited before
            visit.add((r, c))
            #append r, c to the queue
            q.append((r, c))
            #while there are elements in the queue
            while q:
                #remove the element from the left of the queue and assign to row,col
                row, col = q.popleft()
                #directions are your coordinates 
                directions = [[1,0], [-1,0], [0,1], [0,-1]]
                #for the ROW AND COL IN DIRECTIONS
                for dr, dc in directions:
                    #r = row + row in directon 
                    #c = col + col in direction
                    r, c = row + dr, col + dc
                    #if r is in the range of rows and c is in the range of cols
                    if (r in range(rows)and
                       c in range(cols) and
                        #and grid[r][c] is 1
                        grid[r][c] == "1"and
                        #and r, c is not visited
                       (r, c) not in visit):
                        #append r,c in q
                        q.append((r, c))
                        #r and c is now visited
                        visit.add((r,c)) 
        #loop through the range of r in rows and c in columns
        for r in range(rows):
            for c in range(cols):
                #if the coordinate grid[r][c] is 1 and not visited
                if grid[r][c] == "1" and (r, c) not in visit:
                    # call the bfs function r and c on it
                    bfs(r, c)
                    # increment length of islands
                    islands += 1
        #return islands
        return islands
            
                        