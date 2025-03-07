/**
 * A common problem in mathematics is to determine which quadrant a given point lies in.
 * There are four quadrants, numbered from 1 to 4 as shown in the diagram below:
 *
 *            |
 *      2     |    1
 *  (-12, 5)  |  (12, 5)
 *            |
 * ----------------------
 *            |
 *      3     |    4
 *  (-12, -5) | (12, -5)
 *            |
 *
 * Given a coordinate, determine which quadrant it is in.
 */
function whichQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else if (x > 0 && y < 0) {
        return 4;
    }
}

module.exports = whichQuadrant;

// Your own test cases
// e.g.;

// console.log(whichQuadrant(12, 5)); // 1
