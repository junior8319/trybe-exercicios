class Television:
    def __init__(self, size):
        self.__volume = 50
        self.__channel = 1
        self.__is_on = False
        self.__size = size

    def get_volume(self):
        return self.__volume

    def up_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def down_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def get_channel(self):
        return self.__channel

    def set_channel(self, channel):
        if 1 < channel > 99:
            raise ValueError("Unavailable channel")

        self.__channel = channel

    def on_off(self):
        self.__is_on = not self.__is_on
