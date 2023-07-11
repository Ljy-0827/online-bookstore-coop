export function getImageUrl(name) {
    let str = `${name}`;
    let a = new URL(str, import.meta.url).href.replace('/utils','');
    return a;
}


export const ipAddress = '10.24.9.76:5000';