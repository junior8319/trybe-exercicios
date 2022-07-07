from collections import Counter

class Statistic:
    @classmethod
    def average(cls, numbers):
        return sum(numbers) / len(numbers)
    
    @classmethod
    def median(cls, numbers):
        numbers.sort()
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index] + numbers[index - 1]) / 2
        
        return numbers[index]

    @classmethod
    def fashion(cls, numbers):
        return Counter(numbers).most_common()[0]
