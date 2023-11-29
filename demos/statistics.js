function avg(array) {
    return array.reduce((prev, curr) => (prev + curr), 0) / array.length;
}

function stDev(array) {
    const mean = avg(array) // Calculamos la media.
    const diffArray = array.map(el => (el-mean)*(el-mean));
    return Math.sqrt(avg(diffArray));
}

module.exports = {
    avg,
    stDev
};