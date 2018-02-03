const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const gulpif = require('gulp-if');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');

// 清空文件
gulp.task('clean', function () {
  del.sync(['../dist/**'], { force: true });
});

// 编译less
gulp.task('compileCss', function () {
  gulp.src('../src/components/styles/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8'],
      cascade: false
    }))
    // .pipe(gulpif('!index.css', gulp.dest('../src/components/styles'))) // 组件样式
    .pipe(gulpif('index.css', rename('very-vue.css'))) // 未压缩的核心css文件夹
    .pipe(gulpif('very-vue.css', gulp.dest('../dist')))
    .pipe(gulpif('very-vue.css', rename('very-vue.min.css'))) // 重命名核心css文件夹
    .pipe(gulpif('very-vue.min.css', cssmin())) // 压缩核心css文件夹
    .pipe(gulpif('very-vue.min.css', gulp.dest('../dist')));
});

// 拷贝字体文件
gulp.task('fonts', function () {
  gulp.src('../src/styles/iconfont/fonts/*.*')
    .pipe(gulp.dest('../dist/fonts'));
});

gulp.task('default', ['clean', 'compileCss', 'fonts']);
