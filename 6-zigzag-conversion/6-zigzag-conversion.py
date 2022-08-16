class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        #if it has only one row there is no zigzag so out put the input string
        if numRows == 1: return s
        
        #initialize a map that will keep track of each map
        row_map = {row:"" for row in range(1, numRows+1)}
        
        #Keeping track of the first row
        row = 1
        #keep track whether you are moving up or down in the row pattern
        up = True
        """
         initialize an empty dictionary and loop through the string
        {1: P}
        {2:AP}
        {3:C}
        Just concatinate them together
        Have a counter that keeps track of what the current row is, every letter we look at we increment the row at 1, it should increase or decrease whether we are moving up or down.
         """
        for letter in s:
            #we are at row 1, we break off the first letter and store it in row 1
            row_map[row] += letter
            if( row == 1) or ((row < numRows) and up):
                row += 1
                up = True
            else:
                row -= 1
                up = False
                
        converted = ""
        for row in range(1, numRows+1):
            converted += row_map[row]
        
        return converted
#          if numRows == 1: return s
#         res = ""
#         for r in range(numRows):
#             increment = 2 * (numRows - 1)
#             for i in range(r, len(s), increment):
#                 res += s[i]
#                 if(r > 0 and r < numRows - 1 and
#                    i + increment - 2 * r < len(s)):
#                     res += s[ i + increment - 2 * r]
#         return  res
                    #time complexity is the 