export function getImageUrl(name) {
    let str = `../assets/${name}.png`;
    let a = new URL(str, import.meta.url).href
//console.log(str);
    return a;
}