let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let uglify = require("gulp-uglify");
let sass = require("gulp-sass");
let babel =require("gulp-babel");

gulp.task("default",async ()=>{
    // 压缩html
    gulp.watch("./src/*.html",async ()=>{
        gulp.src("./src/*.html")
        // .pipe(htmlmin({
        //     collapseWhitespace:true
        // }))
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pingduoduo"));
    });    

    // 压缩js
    gulp.watch(["./src/js/*.js","!./src/js/jquery-3.2.1.min.js"],async ()=>{
        gulp.src("./src/js/*.js")
        // .pipe(babel({
        //     presets:['@babel/env']
        // }))
        // .pipe(uglify())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pingduoduo\\js"));
    });    

    //编译sass
    gulp.watch("./src/sass/*.scss",async ()=>{
        gulp.src("./src/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pingduoduo\\css"));
    });

    
    gulp.watch("./src/img/**/*",async ()=>{
        gulp.src("./src/img/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pingduoduo\\img"));
    });

    
    //把php文件夹里的所有代码原封不动的复制到服务器目录下
    gulp.watch("./src/php/**/*",async ()=>{
        gulp.src("./src/php/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pingduoduo\\php"));
    });

    // 短信验证码的php代码
    gulp.watch("./src/sms/**/*",async ()=>{
        gulp.src("./src/sms/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pingduoduo\\sms"));
    });

    // json文件
    gulp.watch("./src/json/**/*",async ()=>{
        gulp.src("./src/json/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\pingduoduo\\json"));
    });

});