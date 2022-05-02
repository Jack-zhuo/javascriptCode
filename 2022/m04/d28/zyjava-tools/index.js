function dateFormat(dateStr) {
    const dt = new Date(dateStr);
    const y = dt.getFullYear();
    const m = padZero(dt.getMonth() + 1);
    const d = padZero(dt.getDate());

    const HH = padZero(dt.getHours());
    const MM = padZero(dt.getMinutes());
    const SS = padZero(dt.getSeconds());

    return `${y}-${m}-${d} ${HH}:${MM}:${SS}`;
}

function padZero(n) {
    return n < 10 ? '0' + n : n;
}

module.exports = {
    dateFormat
}