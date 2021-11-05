const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const chokidar = require('chokidar');

const config = {
    watch: './packages',
    docs: './docs/components',
};

// const config = {
//     watch: './vscode',
//     docs: './docs/vscode',
// };

const watcher = chokidar.watch(config.watch);

watcher.on('change', file => {
    console.log(file);
    if (file.indexOf('README.md') > -1) {
        syncDocs(file);
    }
});

function syncDocs(sourcePath) {
    // const sourcePath = 'packages/za-button/README.md';
    // const docsPath = './docs/components';
    const docsPath = config.docs;
    const libName = sourcePath.split('/')[1];

    const destPath = path.join(docsPath, libName + '.md');
    fs.copyFileSync(sourcePath, destPath);
}

child_process.spawn('dumi', ['dev'], { stdio: 'inherit' });
