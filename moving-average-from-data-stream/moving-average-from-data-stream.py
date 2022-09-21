class MovingAverage:

    def __init__(self, size: int):
        self.array = []
        self.size = size
    def next(self, val: int) -> float:
        self.array.append(val)
        return sum(self.array[-self.size:])/min(len(self.array), self.size)


# Your MovingAverage object will be instantiated and called as such:
# obj = MovingAverage(size)
# param_1 = obj.next(val)