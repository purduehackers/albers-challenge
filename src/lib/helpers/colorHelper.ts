import type { rgbColor } from "$lib/types/rgbColor";
import CryptoJS from "crypto-js";

export function getRandomColor(seed: string, roundingFactor: number) : string {
    var color = '';
    for (var i = 0; i < 3; i++) {
        let rand256 = Math.floor(generateRandomNumber(seed + i) * 256);
        let sub = Math.ceil(rand256).toString(16);
        color += sub.length == 1 ? '0' + sub : sub;
    }
    return '#' + color;
}

function generateRandomNumber(seed: string): number {
    // Calculate the SHA-256 hash
    const hash = CryptoJS.SHA256(seed).toString();
    // Convert the hash to a decimal value between 0 and 1
    const decimalValue = parseInt(hash.substring(0, 16), 16) / 2**64;
    return decimalValue;
  }

export function rgbToHex(rgb: rgbColor, roundingFactor: number): string {
    return "#" + componentToHex(rgb.r* roundingFactor) + componentToHex(rgb.g* roundingFactor) + componentToHex(rgb.b* roundingFactor);
}

export function hexToRgb(hex: string): rgbColor {
    if (hex.length === 4) {
        hex = hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!;
    let rgbResult: rgbColor = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    }
    return rgbResult;
}

function componentToHex(c: number): string {
    var hex = (c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}