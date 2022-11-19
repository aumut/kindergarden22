const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const jscripts = [
  // 'src/js/plugins-1.8.js',
  //'src/js/RGraph.svg.common.core.js',
  //'src/js/RGraph.svg.line.js',
  'src/js/script.js',
  'src/js/dapps.js',
  'src/js/jquery.liMarquee.js',
  'src/js/newdesign_script.js'

];
task('opt_js1', function () {
  return src(jscripts)
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat('dapp_scripts.min.js', { newLine: ";" }))
    .pipe(babel({
      presets: ['@babel/env']
    })
    )
    .pipe(uglify())
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(dest('./dist'))
    .pipe(reload({ stream: true }))
});
