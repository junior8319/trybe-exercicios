"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.massConvert = void 0;
const mass = [
    'kg',
    'hg',
    'dag',
    'g',
    'dg',
    'cg',
    'mg'
];
const throwError = (unity) => {
    throw new Error(`A unidade ${unity} não é uma unidade válida`);
};
const massConvert = (value, baseUnity, convertUnity) => {
    if (!mass.includes(baseUnity))
        throwError(baseUnity);
    if (!mass.includes(convertUnity))
        throwError(convertUnity);
    const indexBaseUnity = mass.indexOf(baseUnity);
    const indexConvertUnity = mass.indexOf(convertUnity);
    const exponent = indexConvertUnity - indexBaseUnity;
    const convertedUnity = value * Math.pow(10, exponent);
    return `A conversão de ${value}${baseUnity} para ${convertUnity} resulta em ${convertedUnity}${convertUnity}`;
};
exports.massConvert = massConvert;
