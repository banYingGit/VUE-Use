/**
 * Created by banYing on 2017/6/12.
 */
var gulp = require('gulp'),
    less = require('gulp-less'),
//ȷ�������Ѱ�װgulp-minify-css [npm install gulp-minify-css --save-dev]
    cssmin = require('gulp-minify-css'),
    cmd = require('gulp-cmd');

//createdCss���Զ����������ƣ�
gulp.task('createdCss', function () {
    gulp.src('src/assets/css/newIview.less') //��������Ե��ļ�
        .pipe(less()) //��������õ�ģ��
        .pipe(cssmin())
        .pipe(gulp.dest('src/assets/css')); //������src/css������index.css
});
gulp.task('serve:dist', ['default'], function () {
        browserSync({
            notify: false,
            logPrefix: 'WSK',
            // Allow scroll syncing across breakpoints
            scrollElementMapping: ['main', '.mdl-layout'],
            // Run as an https by uncommenting 'https: true'
            // Note: this uses an unsigned certificate which on first access
            //       will present a certificate warning in the browser.
            // https: true,
            server: 'dist',
            port: 3001

        })
    }
);
gulp.task('default', ['createdCss']);