/**
 * You are given a a list of modules and their mapping from module to tutors. That is, a module can have multiple tutors.
 *
 * You are to reverse the mapping such that each tutor is mapped to the modules they teach.
 *
 * @param {Array} modules - An array of all the modules in the mapping.
 * @param {Object} moduleToTutors - An object where each key is a module and the value is an array of tutors.
 * @returns {Object} - An object where each key is a tutor and the value is an array of modules they teach.
 *
 * @example
 * reverseMapping(['ST0523', 'ST0501', 'ST2413'], { 'ST0523': ['Alice', 'Bob'], 'ST0501': ['Alice', 'John', 'Charlie'], 'ST2413': ['John', 'Charlie'] });
 *      // returns:  { 'Alice': ['ST0523', 'ST0501'], 'Bob': ['ST0523'], 'John': ['ST0501', 'ST2413'], 'Charlie': ['ST0501', 'ST2413'] }
 *
 */
function reverseMapping(modules, moduleToTutors) {
    let tutors = []
    let tutorObj = {}
    let repeated = false
    for (let m = 0; m < modules.length; m++) {
        for (let t = 0; t < moduleToTutors[modules[m]].length; t++) {
            repeated = false
            if (tutors.length > 0) {
                for (let u = 0; u < tutors.length; u++) {
                    if (moduleToTutors[modules[m]][t] == tutors[u]) {
                        repeated = true
                    }
                }
            }
            if (!repeated) {
                tutors.push(moduleToTutors[modules[m]][t])
            }
        }
    }
    for (let v = 0; v < tutors.length; v++) {
        tutorObj[tutors[v]] = []
        for (let n = 0; n < modules.length; n++) {
            for (let w = 0; w < moduleToTutors[modules[n]].length; w++) {
                if (moduleToTutors[modules[n]][w] == tutors[v]) {
                    tutorObj[tutors[v]].push(modules[n])
                }
            }
        }
    }
    return tutorObj
}

// Your own test cases
// e.g.;

console.log(
    reverseMapping(['ST0523', 'ST0501', 'ST2413'], {
        ST0523: ['Alice', 'Bob'],
        ST0501: ['Alice', 'John', 'Charlie'],
        ST2413: ['John', 'Charlie'],
    }),
);

// To test your code against the test cases: node run.js q3
// To test your code against custom input: node ./q3/code.js

module.exports = reverseMapping;
