import * as Length from "./length";
import * as Mass from './mass';
import * as Volume from './capacity';
import * as InteractiveLength from './interactiveLength';

InteractiveLength.execute();

console.log(Length.convert(15, 'km', 'dm'));
console.log(Length.convert(15, 'dm', 'km'));
console.log(Length.convert(15, 'm', 'hm'));
console.log(Length.convert(15, 'm', 'mm'));
console.log(Length.convert(15, 'km', 'mm'));

console.log(Mass.massConvert(150, 'g', 'kg'));
console.log(Mass.massConvert(150, 'cg', 'kg'));
console.log(Mass.massConvert(150, 'kg', 'g'));

console.log(Volume.volumeConvert(200, 'ml', 'kl'));
console.log(Volume.volumeConvert(200, 'cl', 'hl'));
console.log(Volume.volumeConvert(200, 'dl', 'dal'));
console.log(Volume.volumeConvert(200, 'l', 'l'));
console.log(Volume.volumeConvert(200, 'dal', 'dl'));
console.log(Volume.volumeConvert(200, 'hl', 'cl'));
console.log(Volume.volumeConvert(200, 'kl', 'ml'));

console.log(Mass.massConvert(150, 'kg', 'fg'));