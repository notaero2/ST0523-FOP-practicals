/**
 * There are multiple delivery trucks that need to be assigned to different locations.
 * Each delivery truck is identified by the driver's name,
 * and each location is identified by either North, South, East or West
 * Each delivery truck can be assigned to multiple packets to be delivered to different locations.
 *
 * You are building a system that keep tracks of the delivery trucks and their assigned locations.
 * This system has the following commands:
 * 1. assign [DRIVER_NAME] [LOCATION] - This command assigns a packet for [LOCATION] to [DRIVER_NAME].
 * 2. queryDriver [DRIVER_NAME] - This command returns the total number of packets assigned to the driver.
 * 3. queryLocation [LOCATION] - This command returns the total number of packets assigned to the location.
 * 4. query [DRIVER_NAME] [LOCATION] - This command returns the total number of packets assigned to the driver for the location.
 *
 * If no packet has been assigned to a driver or location, the query command should return 0.
 *
 * @param {string[]} commands - An array of strings where each string is a command.
 * @returns {number[]} - An array of numbers where each number is the output of the query command.
 *
 * @example
 * deliveryAssignment([
 *  'assign Alice North',
 *  'assign Bob South',
 *  'assign Alice South',
 *  'queryDriver Alice',
 *  'queryLocation South',
 *  'query Alice South',
 *  'queryDriver Charlie',
 *  'assign Charlie South',
 *  'queryDriver Charlie',
 * ]); // [2, 2, 1, 0, 1]
 *
 * @explanation
 * For the first example:
 * - The first command assigns a packet for North to Alice.
 * - The second command assigns a packet for South to Bob.
 * - The third command assigns a packet for South to Alice.
 * - The fourth command returns the total number of packets assigned to Alice, which is 2.
 * - The fifth command returns the total number of packets assigned to South, which is 2.
 * - The sixth command returns the total number of packets assigned to Alice for South, which is 1.
 * - The seventh command returns 0 since Charlie has not been assigned any packets.
 * - The eighth command assigns a packet for South to Charlie.
 * - The ninth command returns the total number of packets assigned to Charlie, which is 1.
 *
 * @hint
 * You can use 3 different objects
 * 1. To keep track of how many order a driver has - e.g. drivers['Alice']
 * 2. To keep track of how many order a location has - e.g. locations['South']
 * 3. To keep track of how many order a (driver, location) pair has - e.g. combo['Alice']['South']
 */
function deliveryAssignment(commands) {
    let drivers = {}
    let locations = {'North': 0, 'South': 0, 'East': 0, 'West': 0}
    let combo = {}
    let query = []
    let command = 'doSomething'
    let driver = 'Nulla'
    let direction = 'Centre'

    let modifiedCommands = []
    for (let c = 0; c < commands.length; c++) {
        modifiedCommands.push(commands[c].split(' '))
        if (modifiedCommands[c][0] == 'assign' || modifiedCommands[c][0] == 'queryDriver' || modifiedCommands[c][0] == 'query') {
            drivers[modifiedCommands[c][1]] = 0
            combo[modifiedCommands[c][1]] = {'North': 0, 'South': 0, 'East': 0, 'West': 0}
        }
    }

    for (let m = 0; m < commands.length; m++) {
        command = modifiedCommands[m][0]
        if (command == 'assign') {
            driver = modifiedCommands[m][1]
            direction = modifiedCommands[m][2]
            drivers[driver] += 1
            locations[direction] += 1
            combo[driver][direction] += 1
        } else if (command == 'queryDriver') {
            driver = modifiedCommands[m][1]
            query.push(drivers[driver])
        } else if (command == 'queryLocation') {
            direction = modifiedCommands[m][1]
            query.push(locations[direction])
        } else if (command == 'query') {
            driver = modifiedCommands[m][1]
            direction = modifiedCommands[m][2]
            query.push(combo[driver][direction])
        }
    }
    return query
}

// Your own test cases
// e.g.;

console.log(deliveryAssignment(['assign Alice North', 'assign Bob South', 'query Alice North']));

// To test your code against the test cases: node run.js q4
// To test your code against custom input: node ./q4/code.js

module.exports = deliveryAssignment;
