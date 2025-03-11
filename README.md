# FOP Practical Sets

Quick start without downloading:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/SP-DIT/ST0523-FOP-practicals)

## Software Requirements

1. NodeJs - https://nodejs.org/en/download - Download latest LTS (Long Term Support)
2. VSCode - https://code.visualstudio.com/download
3. Git - https://git-scm.com/downloads - _Note: It's `git` not `GitHub Desktop`_
    - Set your username: `git config --global user.name "MY_NAME"`
    - Set your email address: `git config --global user.email "MY_NAME@example.com"`

## Setting up

1. Clone the repository
2. Follow the instructions below

## Table of Content

-   Set 1 - Introduction
-   Set 2 - Operators
-   Set 3 - Functions
-   Set 4 - Selections (If-else)
-   Set 5 - For-Loops
-   Set 6 - Arrays
-   Set 7 - While & Nested loops
-   Set 8 - Objects
-   Set 9 - Problem Solving

## Instructions

1. Change directory to the relevant set
    - e.g. `cd 3Functions`
2. Solve the problems by modifying the `code.js` in each question folder.
3. To run the program:
    - Run `node run.js q#` replacing # with the question number.
    - e.g. `node run.js q1` to run q1.
4. To add your own test cases:
    - Add additional function calls at the bottom of the `code.js`
    - Run `node ./q#/code.js` replace # with the question number.
    - e.g. `node ./q4/code.js`
5. Do not modify the `testcases.js` of each question.
6. Alternatively, you can run from the root:
    - `node run p# q#` - to run a specific question in a problem set (e.g. `node run p3 q3`)
    - `node run p#` - to run all question in a problem set (e.g. `node run p4`)

## Visualizing effort

1. **Pre-requisite:**
    1. Git must be installed
    2. The project must be cloned with .git folder
2. run `npm run watch` to start auto committing and pushing
3. run `npm run extract-git-history` to extract the history
4. Open `.vscode/visualizer/visualize-git-history.html` to view
