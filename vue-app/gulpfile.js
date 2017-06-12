/**
 * Created by banYing on 2017/6/12.
 */
var gulp = require('gulp'),
    less = require('gulp-less');

//createdCss（自定义任务名称）
gulp.task('createdCss', function () {
    gulp.src('src/assets/css/newIview.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/assets/css/newIview.css')); //将会在src/css下生成index.css
});

gulp.task('default', ['createdCss']);