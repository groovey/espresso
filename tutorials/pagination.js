// Implementation in ES6
function pagination(c, m) {
    var current = c,
        last = m,
        offset = 5,
        left = current - offset,
        right = current + offset + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
}


for (let i = 1, l = 50; i <= l; i++) {
    console.log(`Selected page ${i}:`, pagination(i, l));
}