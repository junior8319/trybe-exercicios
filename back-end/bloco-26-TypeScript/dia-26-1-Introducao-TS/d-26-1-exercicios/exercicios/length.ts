const units = [
  "km",
  "hm",
  "dam",
  "m",
  "dm",
  "cm",
  "mm"
]

const throwError = (unity: string) => {
  throw new Error(`A unidade ${unity} não é uma unidade válida`);
}

export const convert = (value: number, baseUnity: string, convertUnity: string) => {
  if(!units.includes(baseUnity)) throwError(baseUnity);
  if(!units.includes(convertUnity)) throwError(convertUnity);

  const indexBaseUnity = units.indexOf(baseUnity);
  const indexConvertUnity = units.indexOf(convertUnity);

  const exponent = indexConvertUnity - indexBaseUnity;

  const convertedUnity = value * Math.pow(10, exponent);

  return `A conversão de ${value}${baseUnity} para ${convertUnity} resulta em ${convertedUnity}${convertUnity}`;
}