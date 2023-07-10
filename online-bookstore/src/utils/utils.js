export function getImageUrl(name) {
    let str = `${name}`;
    let a = new URL(str, import.meta.url).href
    return a;
}

export const ipAddress = '10.26.74.167:5000';