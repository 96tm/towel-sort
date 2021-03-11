module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let result = [];
    matrix.forEach((v, i) => {
        if (i % 2 === 0) {
            for (let j = 0; j < v.length; j++) result.push(v[j]);
        } else {
            for (let j = v.length - 1; j >= 0; j--) result.push(v[j]);
        }
    });
    return result;
};
