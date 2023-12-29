const {src, dest, series} = require('gulp');

const srcDir1 = './node_modules/plotly.js-dist/';
const srcDir2 = './node_modules/plotly.js-dist-min/';
const destDir = '${webjar.target}/';

function task1() {
    return _copy(srcDir1, ['*.md', 'LICENSE'])
}

function task2() {
    return _copy(srcDir1, '*.js', 'dist');
}

function task3() {
    return _copy(srcDir2, '*.js', 'dist');
}

function _toSrc(_srcDir, _src) {
    return src(_src, {allowEmpty: false, cwd: _srcDir});
}

function _toDest(_dest) {
    return dest(_dest || '.', {cwd: destDir});
}

function _copy(_srcDir, _src, _dest) {
    console.log('  Copying ' + _src);
    return _toSrc(_srcDir, _src).pipe(_toDest(_dest))
}


exports.default = series(task1, task2, task3);
