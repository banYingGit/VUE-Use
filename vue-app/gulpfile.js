/**
 * Created by banYing on 2017/6/12.
 */
var gulp = require('gulp'),
    less = require('gulp-less'),
   //ȷ�������Ѱ�װgulp-minify-css [npm install gulp-minify-css --save-dev]
    cssmin = require('gulp-minify-css');

//createdCss���Զ����������ƣ�
gulp.task('createdCss', function () {
    gulp.src('src/assets/css/newIview.less') //��������Ե��ļ�
        .pipe(less()) //��������õ�ģ��
        .pipe(cssmin())
        .pipe(gulp.dest('src/assets/css')); //������src/css������index.css
});

gulp.task('default', ['createdCss']);