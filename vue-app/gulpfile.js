/**
 * Created by banYing on 2017/6/12.
 */
var gulp = require('gulp'),
    less = require('gulp-less');

//createdCss���Զ����������ƣ�
gulp.task('createdCss', function () {
    gulp.src('src/assets/css/newIview.less') //��������Ե��ļ�
        .pipe(less()) //��������õ�ģ��
        .pipe(gulp.dest('src/assets/css/newIview.css')); //������src/css������index.css
});

gulp.task('default', ['createdCss']);