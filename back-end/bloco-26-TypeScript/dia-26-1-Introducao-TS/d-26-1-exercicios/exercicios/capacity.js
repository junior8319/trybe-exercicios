"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.volumeConvert = void 0;
const volumes = [
    'kl',
    'hl',
    'dal',
    'l',
    'dl',
    'cl',
    'ml'
];
const throwError = (unity) => {
    throw new Error(`A unidade ${unity} não é uma unidade válida`);
};
const volumeConvert = (value, baseUnity, convertUnity) => {
    if (!volumes.includes(baseUnity))
        throwError(baseUnity);
    if (!volumes.includes(convertUnity))
        throwError(convertUnity);
    const indexBaseUnity = volumes.indexOf(baseUnity);
    const indexConvertUnity = volumes.indexOf(convertUnity);
    const exponent = indexConvertUnity - indexBaseUnity;
    const convertedUnity = value * Math.pow(10, exponent);
    return `A conversão de ${value}${baseUnity} para ${convertUnity} resulta em ${convertedUnity}${convertUnity}`;
};
exports.volumeConvert = volumeConvert;
