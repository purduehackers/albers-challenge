export function getRandomColor() : string {
    var color = '';
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += sub.length == 1 ? '0' + sub : sub;
    }
    return '#' + color;
}

export function rgbToHex(rgb: {r:number, g: number, b: number}): string {
    console.log("rgb",rgb);
    return "#" + componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b);
}

function componentToHex(c: number): string {
    console.log("B");
    var hex = (c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}