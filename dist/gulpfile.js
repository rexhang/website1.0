/**
 *
 * @authors rexhang (admin@rexhang.com) http://rexhang.com/blog
 * @date    2016-11-01 11:37:01
 * @version 1.0.0
 */

/**
 * delete node_modules => npm install rimraf -g -> use : rimraf node_modules
 */

/**
 * npm install cnpm -g –registry=https://registry.npm.taobao.org
 * cnpm init -y(创建package.json)
 * npm install gulp gulp-minify-css gulp-htmlmin gulp-imagemin gulp-notify gulp-uglify gulp-connect gulp-concat gulp-rename color del --save-dev
 */

//导入了gulp模块
var gulp = require('gulp'),
    // web服务器
    connect = require('gulp-connect'),
    //导入了gulp-minify-css模块
    minifycss = require('gulp-minify-css'),
    // 更多工具
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    inject = require('gulp-inject'),
    notify = require('gulp-notify'), //提示信息
    // 导入自定义颜色插件
    colors = require('colors');
    colors.setTheme({
        silly: 'rainbow',
        input: 'grey',
        verbose: 'cyan',
        prompt: 'red',
        info: 'green',
        data: 'blue',
        help: 'cyan',
        warn: 'yellow',
        debug: 'magenta',
        error: 'red'
    });

    /**
     * [description] inject js css
     * @author rexhang
     * @dateTime 2016-11-03T16:37:35+0800
     * @param    {[type]}                 ) {                 var target [description]
     * @return   {[type]}                   [description]
     * @use html : <!-- inject:css -->
     *             <!-- endinject -->
     *             <!-- inject:js -->
     *             <!-- endinject -->
     */
    gulp.task('inject_cssjs', function () {
      var target = gulp.src('./index.html');
      // It's not necessary to read the files (will speed up things), we're only after their paths:
      var sources = gulp.src(['./css/*index.css', './js/*index.js'], {read: false});
      return target.pipe(inject(sources))
        .pipe(gulp.dest('./html'))
        .pipe(notify({ message: 'index.html的css和js注入成功！' }))
        ;
    });


    /**
     * 定义一个压缩css脚本的任务
     * 任务名：css_min
     */
    gulp.task('css_min', function() {
        return gulp.src('css/*.css')
                   .pipe(minifycss())
                   .pipe(gulp.dest('dist/css'))
                   .on('end', function(){
                        console.log('根目录中的css目录中的所有*.css文件压缩完毕！'.cyan);
                    })
                   ;
    });

    /**
     * [description]    压缩js
     * @author
     * @dateTime 2016-11-01T10:44:53+0800
     * @param    {[type]}                 ) {               return gulp.src('src/*.js')        .pipe(concat('main.js'))            .pipe(gulp.dest('minified/js'))            .pipe(rename({suffix: '.min'}))           .pipe(uglify())            .pipe(gulp.dest('minified/js'));  } [description]
     * @return   {[type]}                   [description]
     */
    gulp.task('js_min', function() {
        return gulp.src('js/*.js')
            //.pipe(concat('main.js'))    //合并所有js到main.js
            //.pipe(gulp.dest('dist/js'))    //输出main.js到文件夹
            //.pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
            .pipe(uglify())    //压缩
            .pipe(gulp.dest('dist/js'))
            .on('end', function(){
                console.log('根目录中的js目录中的所有*.js文件压缩完毕！'.cyan);
                })
            ;
    });

    /**
     * [description]    html代码压缩
     * @author
     * @dateTime 2016-11-01T17:41:51+0800
     * @param    {Object}                 ) {               var options [description]
     * @return   {[type]}                   [description]
     */
    gulp.task('html_min', function () {
        var options = {
            removeComments: true,//清除HTML注释
            collapseWhitespace: true,//压缩HTML
            collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
            removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
            minifyJS: true,//压缩页面JS
            minifyCSS: true//压缩页面CSS
        };
        gulp.src('*.html')
            .pipe(htmlmin(options))
            .pipe(gulp.dest('dist/'))
            .on('end', function(){
                console.log('根目录中的所有html格式文件压缩完毕！'.cyan);
            })
            ;
    });


    // 压缩图片
    gulp.task('img_min', function () {
        return gulp.src('./img/*.{png,jpg,gif,ico}')
            .pipe(imagemin({
              optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
              progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
              interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
              multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
              }))
            .pipe(gulp.dest('dist/img'))
            .on('end', function(){
                console.log('根目录中的img目录中的所有文件压缩完毕！');
            })
            //.pipe(notify({ message: '根目录的img文件夹下所有的图片压缩完成！已存入dist/img文件夹内。' }))
            ;
    });

    /**
     * [description]    执行压缩前，先删除文件夹里的内容
     * @author
     * @dateTime 2016-11-01T10:52:17+0800
     * @param    {[type]}                 cb) {               del(['minified/css', 'minified/js'], cb)} [description]
     * @return   {[type]}                     [description]
     */
    gulp.task('clean', function(cb) {
        return del(['dist/css', 'dist/js', 'dist/*.html', 'dist/img'], cb);
    });

    /**
     *  web服务器
     */
    gulp.task('connect', function() {
      connect.server({
        // root: './', /*定义主目录*/
        livereload: true,
        port: 9999 /*打开的端口号*/
      });
    });

    gulp.task('html', function () {
      gulp.src('./*.html')
        .pipe(connect.reload());
    });

    gulp.task('watch', function () {
      gulp.watch(['./*.html'], ['html']);
      gulp.watch(['./js/*.js'], ['html']);
      gulp.watch(['./scss/*.scss'], ['html']);
  });

    gulp.task('serve', ['connect', 'watch']);



    /**
     * [description]    默认命令，在cmd中输入gulp后，执行的就是这个命令 这里我设定了默认执行css和js的压缩 在此之前先清空目录
     * @author
     * @dateTime 2016-11-01T11:01:14+0800
     * @param    {[type]}                 ) {               gulp.start('minifycss', 'minifyjs');} [description]
     * @return   {[type]}                   [description]
     */
    gulp.task('default', ['clean'], function() {
        //console.log('dist目录中的css和js文件夹清空完毕！'.red);
        gulp.start('css_min', 'js_min', 'html_min');
    });
