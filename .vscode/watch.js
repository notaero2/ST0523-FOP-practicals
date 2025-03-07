const { exec } = require('child_process');

setInterval(function () {
    exec('git add . && git commit --allow-empty -m "Auto commit on save" && git push', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}, 60000);
