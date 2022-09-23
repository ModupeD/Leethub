"""
# Definition for an Interval.
class Interval:
    def __init__(self, start: int = None, end: int = None):
        self.start = start
        self.end = end
"""

class Solution:
    def employeeFreeTime(self, schedule: '[[Interval]]') -> '[Interval]':
        #error checking
        if not schedule:
            return []
        #break down intervals
        intervals = []
        for employee in schedule:
            for interval in employee:
                intervals.append([interval.start, interval.end])
                
        #sort intervals
        intervals.sort(key=lambda x:x[0])
        
        #loop through intervals to find free time
        result = []
        lastEnd = intervals[0][1]
        for i in range(1, len(intervals)):
            currStart = intervals[i][0]
            currEnd = intervals[i][1]
            if currStart > lastEnd:
                result.append(Interval(lastEnd, currStart))
            lastEnd = max(lastEnd,currEnd)
            
            
        return result