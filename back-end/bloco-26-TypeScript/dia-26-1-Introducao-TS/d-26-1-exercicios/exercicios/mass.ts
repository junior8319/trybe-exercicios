const mass = [
  'kg',
  'hg',
  'dag',
  'g',
  'dg',
  'cg',
  'mg'
]

const throwError = (unity: string) => {
  throw new Error(`A unidade ${unity} não é uma unidade válida`);
}

export const massConvert = (value: number, baseUnity: string, convertUnity: string) => {
  if (!mass.includes(baseUnity)) throwError(baseUnity);
  if (!mass.includes(convertUnity)) throwError(convertUnity);

  const indexBaseUnity = mass.indexOf(baseUnity);
  const indexConvertUnity = mass.indexOf(convertUnity);
  const exponent = indexConvertUnity - indexBaseUnity;

  const convertedUnity = value * Math.pow(10, exponent)

  return `A conversão de ${value}${baseUnity} para ${convertUnity} resulta em ${convertedUnity}${convertUnity}`;
}