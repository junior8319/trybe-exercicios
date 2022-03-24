"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Length = __importStar(require("./length"));
const Mass = __importStar(require("./mass"));
const Volume = __importStar(require("./capacity"));
const InteractiveLength = __importStar(require("./interactiveLength"));
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
