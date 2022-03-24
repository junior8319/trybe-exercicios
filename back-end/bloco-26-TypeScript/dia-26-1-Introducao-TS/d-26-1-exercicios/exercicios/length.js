"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = [
    "km",
    "hm",
    "dam",
    "m",
    "dm",
    "cm",
    "mm"
];
const throwError = (unity) => {
    throw new Error(`A unidade ${unity} não é uma unidade válida`);
};
const convert = (value, baseUnity, convertUnity) => {
    if (!units.includes(baseUnity))
        throwError(baseUnity);
    if (!units.includes(convertUnity))
        throwError(convertUnity);
    const indexBaseUnity = units.indexOf(baseUnity);
    const indexConvertUnity = units.indexOf(convertUnity);
    const exponent = indexConvertUnity - indexBaseUnity;
    const convertedUnity = value * Math.pow(10, exponent);
    return `A conversão de ${value}${baseUnity} para ${convertUnity} resulta em ${convertedUnity}${convertUnity}`;
};
exports.convert = convert;
