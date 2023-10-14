const {src, dest, series} = require('gulp');
const minifyJS = require('gulp-minify');

const srcDir = './node_modules/plotly.js-dist/';
const destDir = '${webjar.target}/';

function task1() {
    return _copy(['*.md', 'LICENSE'])
}

function task2() {
    return _minifyJS('*.js', 'dist');
}

function task3() {
    return _minifyCSS('*.css', 'dist');
}

function _toSrc(_src) {
    return src(_src, {allowEmpty: false, cwd: srcDir});
}

function _toDest(_dest) {
    return dest(_dest || '.', {cwd: destDir});
}

function _copy(_src, _dest) {
    console.log('  Copying ' + _src);
    return _toSrc(_src).pipe(_toDest(_dest))
}

function _minifyJS(_src, _dest) {
    console.log('  Minifying ' + _src);
    return _toSrc(_src)
        .pipe(_toDest(_dest))
        .pipe(minifyJS(
            {
                noSource: true,
                ext: {
                    min: '.min.js'
                }
            }))
        .pipe(_toDest(_dest))
}

exports.default = series(task1, task2);
