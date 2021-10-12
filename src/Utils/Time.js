export function createDate(dateData) {
    let date = new Date(dateData[0], dateData[1] - 1, dateData[2], dateData[3], dateData[4], dateData[5]);
    return date.toLocaleString('de-DE');
}