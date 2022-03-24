const volumes = [
  'kl',
  'hl',
  'dal',
  'l',
  'dl',
  'cl',
  'ml'
]

const throwError = (unity: string) => {
  throw new Error(`A unidade ${unity} não é uma unidade válida`);
}

export const volumeConvert = (value: number, baseUnity: string, convertUnity: string) => {
  if (!volumes.includes(baseUnity)) throwError(baseUnity);
  if (!volumes.includes(convertUnity)) throwError(convertUnity);

  const indexBaseUnity = volumes.indexOf(baseUnity);
  const indexConvertUnity = volumes.indexOf(convertUnity);
  const exponent = indexConvertUnity - indexBaseUnity;

  const convertedUnity = value * Math.pow(10, exponent)

  return `A conversão de ${value}${baseUnity} para ${convertUnity} resulta em ${convertedUnity}${convertUnity}`;
}