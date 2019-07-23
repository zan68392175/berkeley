
var gulp = require('gulp');
//var concat = require('gulp-concat');
//var minify = require('gulp-minify-css');
//var uglify = require('gulp-uglify');

//var server = require('browser-sync').create();//执行函数返回服务对象
var load = require('gulp-load-plugins')();//其他gulp插件都集合在load对象上

// 压缩js文件
gulp.task('uglifyJS',function (){
    gulp.src('js/jquery-1.8.3.js')
    .pipe(load.uglify())//压缩
    .pipe(gulp.dest('./dist/'))
})
gulp.task('minifyCss',function (){
    gulp.src('css/*.css')
    .pipe(load.concat('index.min.css'))//合并
    .pipe(load.minifyCss())//压缩
    .pipe(gulp.dest('./dist/css/'))
})


