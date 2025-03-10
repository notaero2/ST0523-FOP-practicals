const fs = require('fs');
const path = require('path');

// Check for folder argument
const folderName = process.argv[2];
if (!folderName) {
    console.error('Please provide a folder name, e.g., node run.js q1');
    process.exit(1);
}

// Construct the folder path
const folderPath = path.join(__dirname, folderName);

// Check if the folder exists
if (!fs.existsSync(folderPath)) {
    console.error(`Folder "${folderName}" does not exist.`);
    process.exit(1);
}

// Import code.js and testcases.js
const codePath = path.join(folderPath, 'code.js');
const testCasesPath = path.join(folderPath, 'testcases.js');

// Check if both code and testcases files exist
if (!fs.existsSync(codePath) || !fs.existsSync(testCasesPath)) {
    console.error(`Missing code.js or testcases.js in the folder "${folderName}".`);
    process.exit(1);
}

function silentRequire(codePath) {
    const originalLog = console.log;
    console.log = () => {};
    const runCode = require(codePath); // Assuming code.js exports a `runCode` function
    console.log = originalLog;
    return runCode;
}

const runCode = silentRequire(codePath);

const { testcases, options = {} } = require(testCasesPath); // Destructure testcases and options

// Function to compare values based on options
function compareResults(result, expected) {
    if (options.type === 'floating point') {
        const precision = options.precision || 6;
        return Math.abs(result - expected) < Math.pow(10, -precision);
    } else if (options.type === 'array') {
        return JSON.stringify(result) === JSON.stringify(expected);
    }
    return result === expected;
}

// Function to run the test cases
function runTestCases() {
    testcases.forEach((testCase, testIndex) => {
        const { inputs, expected: expecteds } = testCase;
        inputs.forEach((input, index) => {
            const expected = expecteds[index];
            try {
                const result = runCode(...input);
                if (compareResults(result, expected)) {
                    console.log(`Test case ${testIndex + 1}.${index + 1}: Passed`);
                } else {
                    console.log(
                        `Test case ${testIndex + 1}.${index + 1}: Failed (Expected: ${expected}, Got: ${result})`,
                    );
                }
            } catch (error) {
                console.log(`Test case ${testIndex + 1}.${index + 1}: Error - ${error.message}`);
            }
        });
    });
}

// Run the test cases
runTestCases();
