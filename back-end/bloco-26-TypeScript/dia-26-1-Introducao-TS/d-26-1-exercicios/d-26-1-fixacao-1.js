"use strict";
var directionsGamePad;
(function (directionsGamePad) {
    directionsGamePad["UP"] = "UP";
    directionsGamePad["DOWN"] = "DOWN";
    directionsGamePad["LEFT"] = "LEFT";
    directionsGamePad["RIGHT"] = "RIGHT";
})(directionsGamePad || (directionsGamePad = {}));
var weekDays;
(function (weekDays) {
    weekDays[weekDays["SUNDAY"] = 1] = "SUNDAY";
    weekDays[weekDays["MONDAY"] = 2] = "MONDAY";
    weekDays[weekDays["TUESDAY"] = 3] = "TUESDAY";
    weekDays[weekDays["WEDNESDAY"] = 4] = "WEDNESDAY";
    weekDays[weekDays["THURSDAY"] = 5] = "THURSDAY";
    weekDays[weekDays["FRIDAY"] = 6] = "FRIDAY";
    weekDays[weekDays["SATURDAY"] = 7] = "SATURDAY";
})(weekDays || (weekDays = {}));
var rainbowColors;
(function (rainbowColors) {
    rainbowColors["RED"] = "Vermelho";
    rainbowColors["ORANGE"] = "Laranja";
    rainbowColors["YELLOW"] = "Amarelo";
    rainbowColors["GREEN"] = "Verde";
    rainbowColors["BLUE"] = "Azul";
    rainbowColors["INDIGO"] = "Anil";
    rainbowColors["VIOLET"] = "Violeta";
})(rainbowColors || (rainbowColors = {}));
var actions;
(function (actions) {
    actions[actions["SAVE"] = 0] = "SAVE";
    actions[actions["PRINT"] = 1] = "PRINT";
    actions[actions["OPEN"] = 2] = "OPEN";
    actions[actions["VIEW"] = 3] = "VIEW";
    actions[actions["CLOSE"] = 4] = "CLOSE";
})(actions || (actions = {}));
var cardinalPoints;
(function (cardinalPoints) {
    cardinalPoints["NORTH"] = "N";
    cardinalPoints["SOUTH"] = "S";
    cardinalPoints["EAST"] = "E";
    cardinalPoints["WESR"] = "W";
})(cardinalPoints || (cardinalPoints = {}));
