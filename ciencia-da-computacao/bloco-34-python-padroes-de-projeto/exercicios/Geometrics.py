from abc import ABC, abstractmethod

class GeometricObject(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError("Subclass must implement abstract method")

    @abstractmethod
    def perimeter(self):
        raise NotImplementedError("Subclass must implement abstract method")
